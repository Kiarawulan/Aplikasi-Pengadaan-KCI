import React, { createContext, useContext, useState, useEffect } from "react";
import type { AppUser, AppRole, AuthContextType, RolePermissions, AccessLevel } from "../types";
import { api } from "../services/api";

// Default roles for UI fallback
export const DEFAULT_ROLES: AppRole[] = [
  {
    id: "role-admin",
    name: "Admin",
    description: "Akses penuh ke seluruh fitur sistem",
    isSystem: true,
    color: "#e6251c",
    createdAt: "2024-01-01",
    permissions: {
      pengajuanDana: "editor", pengadaan: "editor", pengujian: "editor",
      pembayaran: "editor", templateDokumen: "editor", masterData: "editor",
      userManagement: "editor", dashboard: "editor",
    },
  },
  {
    id: "role-logistik",
    name: "Logistik",
    description: "Akses ke pengadaan dan kontrak",
    isSystem: true,
    color: "#252271",
    createdAt: "2024-01-01",
    permissions: {
      pengajuanDana: "viewer", pengadaan: "editor", pengujian: "viewer",
      pembayaran: "viewer", templateDokumen: "viewer", masterData: "viewer",
      userManagement: "no-access", dashboard: "viewer",
    },
  },
  {
    id: "role-pbj",
    name: "PBJ",
    description: "Akses ke proses pengadaan barang dan jasa",
    isSystem: true,
    color: "#16a34a",
    createdAt: "2024-01-01",
    permissions: {
      pengajuanDana: "viewer", pengadaan: "editor", pengujian: "viewer",
      pembayaran: "no-access", templateDokumen: "viewer", masterData: "viewer",
      userManagement: "no-access", dashboard: "viewer",
    },
  },
  {
    id: "role-finance",
    name: "Finance",
    description: "Akses ke pembayaran dan pengajuan dana",
    isSystem: true,
    color: "#d97706",
    createdAt: "2024-01-01",
    permissions: {
      pengajuanDana: "editor", pengadaan: "viewer", pengujian: "viewer",
      pembayaran: "editor", templateDokumen: "viewer", masterData: "viewer",
      userManagement: "no-access", dashboard: "viewer",
    },
  },
  {
    id: "role-it",
    name: "IT",
    description: "Akses terbatas untuk departemen IT",
    isSystem: false,
    color: "#7c3aed",
    createdAt: "2024-01-01",
    permissions: {
      pengajuanDana: "editor", pengadaan: "editor", pengujian: "editor",
      pembayaran: "viewer", templateDokumen: "viewer", masterData: "no-access",
      userManagement: "no-access", dashboard: "viewer",
    },
  },
];

export const DEFAULT_USERS: AppUser[] = [
  { id: "user-admin", email: "admin@sipro.com", name: "Super Admin", password: "admin123", roleId: "role-admin", departemen: "Management", isActive: true, isAdmin: true, createdAt: "2024-01-01" },
  { id: "user-logistik", email: "logistik@sipro.com", name: "Budi Santoso", password: "logistik123", roleId: "role-logistik", departemen: "Logistik", isActive: true, isAdmin: false, createdAt: "2024-01-10" },
  { id: "user-it", email: "it@sipro.com", name: "Andi Wijaya", password: "it123", roleId: "role-it", departemen: "CTIT", isActive: true, isAdmin: false, createdAt: "2024-01-12" },
  { id: "user-finance", email: "finance@sipro.com", name: "Sari Dewi", password: "finance123", roleId: "role-finance", departemen: "Finance", isActive: true, isAdmin: false, createdAt: "2024-01-15" },
  { id: "user-pbj", email: "pbj@sipro.com", name: "Reza Pratama", password: "pbj123", roleId: "role-pbj", departemen: "PBJ", isActive: true, isAdmin: false, createdAt: "2024-02-01" },
];

const LS_USERS = "sipro_users";
const LS_ROLES = "sipro_roles";
const LS_CURRENT = "sipro_current_user";
const LS_TOKEN = "sipro_token";

export function getUsers(): AppUser[] {
  try { return JSON.parse(localStorage.getItem(LS_USERS) || JSON.stringify(DEFAULT_USERS)); }
  catch { return DEFAULT_USERS; }
}

export function getRoles(): AppRole[] {
  try { return JSON.parse(localStorage.getItem(LS_ROLES) || JSON.stringify(DEFAULT_ROLES)); }
  catch { return DEFAULT_ROLES; }
}

export function saveUsers(users: AppUser[]) {
  localStorage.setItem(LS_USERS, JSON.stringify(users));
}

export function saveRoles(roles: AppRole[]) {
  localStorage.setItem(LS_ROLES, JSON.stringify(roles));
}

export function getUserById(id: string): AppUser | undefined {
  return getUsers().find(u => u.id === id);
}

export function getRoleById(id: string): AppRole | undefined {
  return getRoles().find(r => r.id === id);
}

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  currentRole: null,
  isAdmin: false,
  login: async () => ({ success: false }),
  logout: () => {},
  hasPermission: () => false,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<AppUser | null>(() => {
    try {
      const saved = localStorage.getItem(LS_CURRENT);
      if (saved) return JSON.parse(saved);
    } catch {}
    return null;
  });

  const [apiRole, setApiRole] = useState<AppRole | null>(null);

  const currentRole: AppRole | null = apiRole ?? (currentUser
    ? (getRoleById(currentUser.roleId) ?? null)
    : null);

  const isAdmin = currentUser?.isAdmin || (currentRole?.roleType === "admin") || currentUser?.roleId === "role-admin";

  const login = async (email: string, password: string) => {
    try {
      // 1. Try Laravel API Login
      const res = await api.post('/auth/login', { email, password });
      const { token, user: apiUserData } = res.data;

      localStorage.setItem(LS_TOKEN, token);

      const appUser: AppUser = {
        id: apiUserData.id,
        email: apiUserData.email,
        name: apiUserData.name,
        password: '',
        roleId: apiUserData.role_id,
        departemen: apiUserData.departemen,
        isActive: apiUserData.is_active,
        isAdmin: apiUserData.is_admin,
        mustResetPassword: apiUserData.must_reset_password,
        lastLogin: apiUserData.last_login_at,
        createdAt: new Date().toISOString(),
      };

      if (apiUserData.permissions) {
        setApiRole({
          id: apiUserData.role_id,
          name: apiUserData.role_name || 'User',
          description: '',
          isSystem: false,
          color: apiUserData.role_color || '#64748b',
          createdAt: '',
          permissions: apiUserData.permissions,
        });
      }

      localStorage.setItem(LS_CURRENT, JSON.stringify(appUser));
      setCurrentUser(appUser);
      return { success: true };
    } catch (err: any) {
      console.warn("Laravel API login unavailable or failed, falling back to local auth:", err?.response?.data || err?.message);

      // 2. Fallback to Local Auth if API offline
      const users = getUsers();
      const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
      if (!user) return { success: false, error: err?.response?.data?.message || err?.response?.data?.errors?.email?.[0] || "Email atau password salah." };
      if (!user.isActive) return { success: false, error: "Akun ini telah dinonaktifkan." };

      const updatedUser = { ...user, lastLogin: new Date().toISOString() };
      localStorage.setItem(LS_CURRENT, JSON.stringify(updatedUser));
      setCurrentUser(updatedUser);
      return { success: true };
    }
  };

  const logout = async () => {
    try {
      await api.post('/auth/logout');
    } catch {}
    localStorage.removeItem(LS_TOKEN);
    localStorage.removeItem(LS_CURRENT);
    setCurrentUser(null);
    setApiRole(null);
  };

  const hasPermission = (module: keyof RolePermissions, level: AccessLevel): boolean => {
    if (isAdmin) return true;
    if (!currentRole) return false;
    const perm = currentRole.permissions[module];
    if (level === "viewer") return perm === "viewer" || perm === "editor";
    if (level === "editor") return perm === "editor";
    return true;
  };

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem(LS_TOKEN);
      if (!token) return;
      try {
        const res = await api.get('/auth/me');
        const apiUserData = res.data;
        
        const appUser: AppUser = {
          id: apiUserData.id,
          email: apiUserData.email,
          name: apiUserData.name,
          password: '',
          roleId: apiUserData.role_id,
          departemen: apiUserData.departemen,
          isActive: apiUserData.is_active,
          isAdmin: apiUserData.is_admin,
          mustResetPassword: apiUserData.must_reset_password,
          lastLogin: apiUserData.last_login_at,
          createdAt: new Date().toISOString(),
        };

        if (apiUserData.permissions) {
          setApiRole({
            id: apiUserData.role_id,
            name: apiUserData.role_name || 'User',
            description: '',
            isSystem: false,
            color: apiUserData.role_color || '#64748b',
            createdAt: '',
            permissions: apiUserData.permissions,
          });
        }
        setCurrentUser(appUser);
      } catch (err) {
        // ignore if failed
      }
    };

    if (currentUser) {
      fetchUser();
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(LS_CURRENT, JSON.stringify(currentUser));
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, currentRole, isAdmin, login, logout, hasPermission }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
