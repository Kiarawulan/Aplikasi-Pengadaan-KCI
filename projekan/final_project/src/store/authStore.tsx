import React, { createContext, useContext, useState, useEffect } from "react";
import type { AppUser, AppRole, AuthContextType, RolePermissions, AccessLevel } from "../types";
import { api } from "../services/api";

// Default roles for the existing UI fallback.
export const DEFAULT_ROLES: AppRole[] = [
  {
    id: "role-admin",
    name: "Admin",
    description: "Akses penuh ke seluruh fitur sistem",
    isSystem: true,
    roleType: "admin",
    color: "#e6251c",
    createdAt: "2024-01-01",
    permissions: {
      pengajuanDana: "editor", pengadaan: "editor", pengujian: "editor",
      pembayaran: "editor", templateDokumen: "editor", masterData: "editor",
      userManagement: "editor", roleManagement: "editor", dashboard: "editor",
    },
  },
  {
    id: "role-it",
    name: "IT",
    description: "Akses terbatas untuk departemen IT",
    isSystem: false,
    roleType: "user",
    color: "#7c3aed",
    createdAt: "2024-01-01",
    permissions: {
      pengajuanDana: "editor", pengadaan: "editor", pengujian: "viewer",
      pembayaran: "viewer", templateDokumen: "viewer", masterData: "no-access",
      userManagement: "no-access", roleManagement: "no-access", dashboard: "viewer",
    },
  },
];

export const DEFAULT_USERS: AppUser[] = [
  { id: "user-admin", email: "admin@sipro.com", name: "Super Admin", password: "admin123", roleId: "role-admin", departemen: "Management", isActive: true, isAdmin: true, createdAt: "2024-01-01" },
  { id: "user-it", email: "it@sipro.com", name: "User IT", password: "it123", roleId: "role-it", departemen: "CTIT", isActive: true, isAdmin: false, createdAt: "2024-01-12" },
];

const LS_USERS = "sipro_users";
const LS_ROLES = "sipro_roles";
const LS_CURRENT = "sipro_current_user";
const LS_TOKEN = "sipro_token";

const EMPTY_PERMISSIONS: RolePermissions = {
  pengajuanDana: "no-access", pengadaan: "no-access", pengujian: "no-access",
  pembayaran: "no-access", templateDokumen: "no-access", masterData: "no-access",
  userManagement: "no-access", roleManagement: "no-access", dashboard: "no-access",
};

function normalizePermissions(permissions: Partial<RolePermissions> | undefined): RolePermissions {
  return { ...EMPTY_PERMISSIONS, ...(permissions || {}) };
}

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

  const currentRole: AppRole | null = apiRole;

  const isAdmin = currentUser?.accountType === "admin" || currentUser?.isAdmin === true || currentRole?.roleType === "admin";

  const login = async (email: string, password: string) => {
    try {
      // 1. Try Laravel API Login
      const res = await api.post('/auth/login', { email, password });
      const { token, user: apiUserData } = res.data;

      localStorage.setItem(LS_TOKEN, token);

      const appUser: AppUser = {
        id: apiUserData.id,
        username: apiUserData.username,
        email: apiUserData.email,
        name: apiUserData.name,
        password: '',
        roleId: apiUserData.role_id,
        departemen: apiUserData.departemen,
        isActive: apiUserData.is_active,
        isAdmin: apiUserData.is_admin,
        accountType: apiUserData.account_type,
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
          roleType: apiUserData.is_admin ? 'admin' : 'user',
          color: apiUserData.role_color || '#64748b',
          createdAt: '',
          permissions: normalizePermissions(apiUserData.permissions),
        });
      }

      localStorage.setItem(LS_CURRENT, JSON.stringify(appUser));
      setCurrentUser(appUser);
      return { success: true };
    } catch (err: any) {
      if (err?.response) {
        return { success: false, error: err?.response?.data?.message || err?.response?.data?.errors?.email?.[0] || "Email atau password salah." };
      }

      return { success: false, error: "Server autentikasi tidak dapat dihubungi. Coba lagi setelah API aktif." };
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
          username: apiUserData.username,
          email: apiUserData.email,
          name: apiUserData.name,
          password: '',
          roleId: apiUserData.role_id,
          departemen: apiUserData.departemen,
          isActive: apiUserData.is_active,
          isAdmin: apiUserData.is_admin,
          accountType: apiUserData.account_type,
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
            roleType: apiUserData.is_admin ? 'admin' : 'user',
            color: apiUserData.role_color || '#64748b',
            createdAt: '',
            permissions: normalizePermissions(apiUserData.permissions),
          });
        }
        setCurrentUser(appUser);
      } catch {
        // The database may have been reset while the browser still holds an old token.
        // Remove the stale session so the user is returned to the login screen.
        localStorage.removeItem(LS_TOKEN);
        localStorage.removeItem(LS_CURRENT);
        setApiRole(null);
        setCurrentUser(null);
      }
    };

    if (currentUser) {
      fetchUser();
    }
  }, []);

  useEffect(() => {
    const clearExpiredSession = () => {
      setApiRole(null);
      setCurrentUser(null);
    };
    window.addEventListener('sipro-auth-expired', clearExpiredSession);
    return () => window.removeEventListener('sipro-auth-expired', clearExpiredSession);
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
