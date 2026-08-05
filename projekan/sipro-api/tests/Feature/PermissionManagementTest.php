<?php

namespace Tests\Feature;

use App\Models\Role;
use App\Models\RolePermission;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class PermissionManagementTest extends TestCase
{
    use RefreshDatabase;

    public function test_dashboard_only_role_cannot_open_other_modules(): void
    {
        $role = $this->role('ROLE-DASH', ['dashboard' => 'viewer']);
        $user = $this->user('USR-DASH', $role);

        $this->actingAs($user, 'sanctum')->getJson('/api/dashboard')->assertOk();
        $this->actingAs($user, 'sanctum')->getJson('/api/pengadaan')->assertForbidden();
        $this->actingAs($user, 'sanctum')->getJson('/api/users')->assertForbidden();
    }

    public function test_procurement_viewer_is_blocked_from_actions_and_editor_is_allowed(): void
    {
        $viewer = $this->user('USR-VIEW', $this->role('ROLE-VIEW', ['pengadaan' => 'viewer']));
        $this->actingAs($viewer, 'sanctum')->postJson('/api/pengadaan', [])->assertForbidden();

        $editor = $this->user('USR-EDIT', $this->role('ROLE-EDIT', ['pengadaan' => 'editor']));
        $response = $this->actingAs($editor, 'sanctum')->postJson('/api/pengadaan', [
            'nama' => 'Pengadaan Pengujian Permission',
            'flow' => 'pr',
            'nominal' => '1000000',
        ]);
        $response->assertCreated();
    }

    public function test_verification_is_scoped_to_the_permission_module(): void
    {
        $tester = $this->user('USR-TEST', $this->role('ROLE-TEST', ['pengujian' => 'viewer']));

        $this->actingAs($tester, 'sanctum')->getJson('/api/verifikasi?tipe=pengujian')->assertOk();
        $this->actingAs($tester, 'sanctum')->getJson('/api/verifikasi?tipe=npp')->assertForbidden();
    }

    public function test_role_permission_change_is_the_source_of_truth_and_revokes_old_tokens(): void
    {
        $manager = $this->user('USR-MANAGER', $this->role('ROLE-MANAGER', ['roleManagement' => 'editor'], 'admin'));
        $targetRole = $this->role('ROLE-TARGET', ['dashboard' => 'viewer']);
        $member = $this->user('USR-MEMBER', $targetRole);
        $member->createToken('old-session');

        $this->actingAs($manager, 'sanctum')->putJson("/api/roles/{$targetRole->id}", [
            'permissions' => ['pengadaan' => 'viewer'],
        ])->assertOk();

        $this->assertDatabaseHas('role_permissions', ['role_id' => $targetRole->id, 'module' => 'pengadaan', 'access_level' => 'viewer']);
        $this->assertDatabaseMissing('role_permissions', ['role_id' => $targetRole->id, 'module' => 'dashboard']);
        $this->assertDatabaseCount('personal_access_tokens', 0);
    }

    public function test_user_crud_stores_hashed_credentials_and_an_audit_log(): void
    {
        $manager = $this->user('USR-USER-MANAGER', $this->role('ROLE-USER-MANAGER', ['userManagement' => 'editor'], 'admin'));
        $memberRole = $this->role('ROLE-MEMBER', ['dashboard' => 'viewer']);

        $response = $this->actingAs($manager, 'sanctum')->postJson('/api/users', [
            'name' => 'Member Baru',
            'username' => 'memberbaru',
            'email' => 'memberbaru@example.test',
            'password' => 'rahasia123',
            'roleId' => $memberRole->id,
            'departemen' => 'Testing',
        ])->assertCreated();

        $createdId = $response->json('user.id');
        $created = User::findOrFail($createdId);
        $this->assertSame('memberbaru', $created->username);
        $this->assertTrue(Hash::check('rahasia123', $created->password));
        $this->assertDatabaseHas('audit_logs', ['actor_id' => $manager->id, 'action' => 'user.created', 'target_id' => $createdId]);

        $this->actingAs($manager, 'sanctum')->postJson('/api/users', [
            'name' => 'Duplikat',
            'username' => 'memberbaru',
            'email' => 'lain@example.test',
            'password' => 'rahasia123',
            'roleId' => $memberRole->id,
            'departemen' => 'Testing',
        ])->assertUnprocessable();
    }

    private function role(string $id, array $permissions, string $type = 'user'): Role
    {
        $role = Role::create([
            'id' => $id,
            'name' => $id,
            'role_type' => $type,
            'color' => '#252271',
            'is_system' => false,
        ]);
        foreach ($permissions as $module => $level) {
            RolePermission::create(['role_id' => $role->id, 'module' => $module, 'access_level' => $level]);
        }
        return $role;
    }

    private function user(string $id, Role $role): User
    {
        return User::create([
            'id' => $id,
            'name' => $id,
            'username' => strtolower($id),
            'email' => strtolower($id) . '@example.test',
            'password' => Hash::make('password123'),
            'role_id' => $role->id,
            'departemen' => 'Testing',
            'is_active' => true,
            'is_admin' => $role->role_type === 'admin',
        ]);
    }
}
