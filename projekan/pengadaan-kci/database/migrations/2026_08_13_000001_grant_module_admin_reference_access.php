<?php

use App\Models\RolePermission;
use App\Models\Role;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    public function up(): void
    {
        $roles = [
            ['id' => 'role-admin-anggaran', 'name' => 'Admin Anggaran'],
            ['id' => 'role-admin-logistik', 'name' => 'Admin Logistik'],
            ['id' => 'role-admin-penguji', 'name' => 'Admin Penguji'],
            ['id' => 'role-admin-keuangan', 'name' => 'Admin Keuangan'],
        ];

        foreach ($roles as $definition) {
            $role = Role::query()
                ->where('id', $definition['id'])
                ->orWhere('name', $definition['name'])
                ->first();

            if (! $role) {
                continue;
            }

            foreach (['masterData', 'templateDokumen'] as $module) {
                RolePermission::updateOrCreate(
                    ['role_id' => $role->id, 'module' => $module],
                    ['access_level' => 'editor'],
                );
            }
            RolePermission::updateOrCreate(
                ['role_id' => $role->id, 'module' => 'dashboard'],
                ['access_level' => 'viewer'],
            );
        }
    }

    public function down(): void
    {
        RolePermission::whereIn('role_id', ['role-admin-anggaran', 'role-admin-logistik', 'role-admin-penguji', 'role-admin-keuangan'])
            ->whereIn('module', ['masterData', 'templateDokumen'])
            ->update(['access_level' => 'no-access']);
    }
};
