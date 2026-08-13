<?php

namespace Tests\Feature;

use App\Models\Role;
use App\Models\RolePermission;
use App\Models\User;
use App\Models\PengadaanCompletedStep;
use App\Models\Npp;
use App\Models\Pengadaan;
use App\Models\Rup;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class PermissionManagementTest extends TestCase
{
    use RefreshDatabase;

    public function test_dashboard_only_role_cannot_open_other_modules(): void
    {
        $role = $this->role('ROLE-DASH', ['dashboard' => 'viewer'], 'admin');
        $user = $this->user('USR-DASH', $role);

        $this->actingAs($user, 'sanctum')->getJson('/api/dashboard')->assertOk();
        $this->actingAs($user, 'sanctum')->getJson('/api/pengadaan')->assertForbidden();
        $this->actingAs($user, 'sanctum')->getJson('/api/users')->assertForbidden();
    }

    public function test_procurement_viewer_is_blocked_from_actions_and_editor_is_allowed(): void
    {
        $viewer = $this->user('USR-VIEW', $this->role('ROLE-VIEW', ['pengadaan' => 'viewer'], 'admin'));
        $this->actingAs($viewer, 'sanctum')->postJson('/api/pengadaan', [])->assertForbidden();

        $editor = $this->user('USR-EDIT', $this->role('ROLE-EDIT', ['pengadaan' => 'editor'], 'admin'));
        $response = $this->actingAs($editor, 'sanctum')->postJson('/api/pengadaan', [
            'nama' => 'Pengadaan Pengujian Permission',
            'flow' => 'pr',
            'nominal' => '1000000',
        ]);
        $response->assertCreated();
    }

    public function test_verification_is_scoped_to_the_permission_module(): void
    {
        $tester = $this->user('USR-TEST', $this->role('ROLE-TEST', ['pengujian' => 'viewer'], 'admin'));

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

    public function test_general_user_can_view_and_create_all_user_workflows(): void
    {
        $user = $this->user('USR-GENERAL', $this->role('ROLE-GENERAL', []));

        $this->actingAs($user, 'sanctum')->getJson('/api/dashboard')->assertOk();
        $this->actingAs($user, 'sanctum')->getJson('/api/rup')->assertOk();
        $this->actingAs($user, 'sanctum')->getJson('/api/pengujian')->assertOk();
        $this->actingAs($user, 'sanctum')->getJson('/api/payments')->assertOk();
        $this->actingAs($user, 'sanctum')->postJson('/api/pengadaan', [
            'nama' => 'Form Bebas User',
            'flow' => 'pr',
            'nominal' => '1000000',
        ])->assertCreated();
        $this->actingAs($user, 'sanctum')->getJson('/api/users')->assertForbidden();
    }

    public function test_general_user_can_create_and_delete_own_pd_with_progress_records(): void
    {
        $user = $this->user('USR-PD', $this->role('ROLE-PD', []), 'CUG - LOGISTIC');

        $created = $this->actingAs($user, 'sanctum')->postJson('/api/pengadaan', [
            'nama' => 'PD yang dapat dihapus',
            'departemen' => 'CUG - LOGISTIC',
            'flow' => 'pd',
            'nominal' => '2500000',
            'form_data' => ['jenisPermohonan' => 'Barang'],
        ])->assertCreated();

        $id = $created->json('id');
        $this->assertSame('pd', $created->json('flowType'));
        $this->assertSame('CUG - LOGISTIC', $created->json('departemen'));
        PengadaanCompletedStep::create([
            'pengadaan_id' => $id,
            'step_id' => 'pengajuan-dana',
            'completed_at' => now(),
        ]);

        $this->actingAs($user, 'sanctum')->deleteJson("/api/pengadaan/{$id}")->assertOk();
        $this->assertDatabaseMissing('pengadaan', ['id' => $id]);
        $this->assertDatabaseMissing('pengadaan_completed_steps', ['pengadaan_id' => $id]);
    }

    public function test_users_share_read_access_only_with_members_of_the_same_division(): void
    {
        $role = $this->role('ROLE-DIVISION', []);
        $kayla = $this->user('USR-KAYLA', $role, 'IT');
        $manda = $this->user('USR-MANDA', $role, 'IT');
        $kiara = $this->user('USR-KIARA', $role, 'Anggaran');

        $mandaRecord = $this->actingAs($manda, 'sanctum')->postJson('/api/pengadaan', [
            'nama' => 'Pengadaan Manda', 'departemen' => 'Anggaran', 'flow' => 'pd',
        ])->assertCreated();
        $kiaraRecord = $this->actingAs($kiara, 'sanctum')->postJson('/api/pengadaan', [
            'nama' => 'Pengadaan Kiara', 'flow' => 'pd',
        ])->assertCreated();

        $mandaId = $mandaRecord->json('id');
        $kiaraId = $kiaraRecord->json('id');
        $this->assertSame('IT', $mandaRecord->json('departemen'));

        $kaylaList = $this->actingAs($kayla, 'sanctum')->getJson('/api/pengadaan')->assertOk();
        $this->assertTrue(collect($kaylaList->json())->contains('id', $mandaId));
        $this->assertFalse(collect($kaylaList->json())->contains('id', $kiaraId));
        $this->actingAs($kayla, 'sanctum')->getJson("/api/pengadaan/{$mandaId}")->assertOk();
        $this->actingAs($kayla, 'sanctum')->getJson("/api/pengadaan/{$kiaraId}")->assertForbidden();

        // Berbagi Divisi hanya memberikan akses baca, bukan mengubah atau menghapus milik rekan.
        $this->actingAs($kayla, 'sanctum')->putJson("/api/pengadaan/{$mandaId}", ['nama' => 'Diubah Kayla'])->assertForbidden();
        $this->actingAs($kayla, 'sanctum')->deleteJson("/api/pengadaan/{$mandaId}")->assertForbidden();
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

    public function test_revision_can_keep_title_when_other_data_changes(): void
    {
        $user = $this->user('USR-REVISION', $this->role('ROLE-REVISION', []));
        $created = $this->actingAs($user, 'sanctum')->postJson('/api/pengadaan', [
            'nama' => 'Judul Tetap', 'flow' => 'pd', 'nominal' => '1000', 'form_data' => ['detailPermohonan' => 'Data awal'],
        ])->assertCreated();

        $this->actingAs($user, 'sanctum')->putJson('/api/pengadaan/' . $created->json('id'), [
            'nama' => 'Judul Tetap', 'nominal' => '2500', 'form_data' => ['detailPermohonan' => 'Data revisi'],
        ])->assertOk()->assertJsonPath('nominal', '2500');
    }

    public function test_user_revision_replaces_old_data_in_admin_verification_queue(): void
    {
        $user = $this->user('USR-REVISION-SYNC', $this->role('ROLE-REVISION-SYNC', []), 'Testing');
        $admin = $this->user(
            'USR-REVISION-ADMIN',
            $this->role('ROLE-REVISION-ADMIN', ['pengajuanDana' => 'editor'], 'admin'),
            'Testing'
        );

        $created = $this->actingAs($user, 'sanctum')->postJson('/api/pengadaan', [
            'nama' => 'Dokumen Sebelum Revisi',
            'flow' => 'pd',
            'nominal' => '1000',
            'form_data' => ['buat-pd' => ['judulPermohonan' => 'Data Lama', 'nominalPermohonan' => '1000']],
        ])->assertCreated();
        $pengadaanId = $created->json('id');

        $submitted = $this->actingAs($user, 'sanctum')->postJson("/api/pengadaan/{$pengadaanId}/submit-step", [
            'stepId' => 'pengajuan-dana',
            'tipe' => 'park-dokumen',
            'form_data' => ['buat-pd' => ['judulPermohonan' => 'Data Lama', 'nominalPermohonan' => '1000']],
        ])->assertOk();

        $verificationId = $submitted->json('verifikasi.id');
        $this->actingAs($admin, 'sanctum')->postJson("/api/verifikasi/{$verificationId}/revisi", [
            'catatan' => 'Perbarui judul dan nominal.',
        ])->assertOk();

        $this->actingAs($user, 'sanctum')->putJson("/api/pengadaan/{$pengadaanId}", [
            'nama' => 'Dokumen Sesudah Revisi',
            'nominal' => '2500',
            'form_data' => ['buat-pd' => ['judulPermohonan' => 'Data Baru', 'nominalPermohonan' => '2500']],
        ])->assertOk()->assertJsonPath('status', 'pending');

        $queue = $this->actingAs($admin, 'sanctum')
            ->getJson('/api/verifikasi?tipe=park-dokumen')
            ->assertOk()
            ->assertJsonCount(1);

        $queue->assertJsonPath('0.status', 'pending');
        $queue->assertJsonPath('0.pengadaan_nama', 'Dokumen Sesudah Revisi');
        $queue->assertJsonPath('0.nominal', '2500');
        $queue->assertJsonPath('0.effective_form_data.buat-pd.judulPermohonan', 'Data Baru');
        $queue->assertJsonPath('0.document_form_data.buat-pd.judulPermohonan', 'Data Baru');
        $this->assertDatabaseHas('process_histories', [
            'pengadaan_id' => $pengadaanId,
            'verifikasi_id' => $verificationId,
            'action' => 'revisi',
        ]);
    }

    public function test_admin_anggaran_can_see_park_document_submission_and_attachments(): void
    {
        Storage::fake('public');
        $user = $this->user('USR-PD-ANGGARAN', $this->role('ROLE-PD-ANGGARAN', []), 'Operasional');
        $adminRole = Role::findOrFail('role-admin-anggaran');
        RolePermission::updateOrCreate(
            ['role_id' => $adminRole->id, 'module' => 'pengajuanDana'],
            ['access_level' => 'editor'],
        );
        $admin = $this->user(
            'USR-ADMIN-ANGGARAN',
            $adminRole,
            'Anggaran'
        );

        $created = $this->actingAs($user, 'sanctum')->postJson('/api/pengadaan', [
            'nama' => 'Park Dokumen untuk Admin Anggaran',
            'flow' => 'pd',
            'nominal' => '7500000',
            'form_data' => ['buat-pd' => ['judulPermohonan' => 'Park Dokumen untuk Admin Anggaran']],
        ])->assertCreated();
        $pengadaanId = $created->json('id');

        $uploaded = $this->actingAs($user, 'sanctum')->post("/api/pengadaan/{$pengadaanId}/documents", [
            'stage' => 'pd-kak',
            'file' => UploadedFile::fake()->create('kak-park-dokumen.pdf', 50, 'application/pdf'),
        ])->assertCreated();

        $this->actingAs($user, 'sanctum')->postJson("/api/pengadaan/{$pengadaanId}/submit-step", [
            'stepId' => 'pengajuan-dana',
            'form_data' => ['buat-pd' => ['judulPermohonan' => 'Park Dokumen untuk Admin Anggaran']],
        ])->assertOk();

        $queue = $this->actingAs($admin, 'sanctum')
            ->getJson('/api/verifikasi?tipe=park-dokumen,park-document')
            ->assertOk()
            ->assertJsonCount(1);
        $queue->assertJsonPath('0.pengadaan_id', $pengadaanId);
        $queue->assertJsonPath('0.tipe', 'park-dokumen');

        $this->actingAs($admin, 'sanctum')
            ->getJson("/api/pengadaan/{$pengadaanId}/documents")
            ->assertOk()
            ->assertJsonPath('data.0.original_name', 'kak-park-dokumen.pdf');
        $this->actingAs($admin, 'sanctum')
            ->get('/api/documents/' . $uploaded->json('data.id') . '/download')
            ->assertOk();
    }

    public function test_master_reference_delete_is_persisted_in_database(): void
    {
        $manager = $this->user('USR-MASTER', $this->role('ROLE-MASTER', ['masterData' => 'editor'], 'admin'));
        $this->actingAs($manager, 'sanctum')->postJson('/api/master-references/lokasi/bootstrap', [
            'items' => [['id' => 'LOK-001', 'nama' => 'Lokasi Lama']],
        ])->assertOk();
        $this->actingAs($manager, 'sanctum')->deleteJson('/api/master-references/lokasi/LOK-001')->assertOk();
        $this->assertDatabaseMissing('master_references', ['category' => 'lokasi', 'reference_id' => 'LOK-001']);
        $remaining = $this->actingAs($manager, 'sanctum')->getJson('/api/master-references/lokasi')->assertOk();
        $this->assertFalse(collect($remaining->json())->contains('id', 'LOK-001'));
    }

    public function test_admin_releases_npp_number_and_syncs_procurement_form(): void
    {
        $admin = $this->user('USR-NPP-ADMIN', $this->role('ROLE-NPP-ADMIN', ['pengadaan' => 'editor'], 'admin'));
        Pengadaan::create(['id' => 'PG-NPP-001', 'nama' => 'Pengadaan NPP', 'departemen' => 'Testing', 'tanggal' => '2026-08-12', 'created_by' => $admin->id, 'form_data' => ['buat-npp' => ['judulPermohonan' => 'Pengadaan NPP']]]);

        $this->actingAs($admin, 'sanctum')->postJson('/api/pengadaan/PG-NPP-001/release-npp-number', ['no_npp' => 'NPP/KCI/001/2026'])
            ->assertOk()->assertJsonPath('document.no_npp', 'NPP/KCI/001/2026');

        $this->assertDatabaseHas('npp', ['pengadaan_id' => 'PG-NPP-001', 'no_npp' => 'NPP/KCI/001/2026']);
        $this->assertSame('NPP/KCI/001/2026', Pengadaan::findOrFail('PG-NPP-001')->form_data['buat-npp']['noNpp']);
    }

    public function test_sp3_realisation_is_derived_from_npp_checkbox(): void
    {
        $admin = $this->user('USR-SP3-ADMIN', $this->role('ROLE-SP3-ADMIN', ['pengadaan' => 'editor'], 'admin'));
        Pengadaan::create(['id' => 'PG-SP3-001', 'nama' => 'Pengadaan SP3', 'departemen' => 'Testing', 'tanggal' => '2026-08-12', 'created_by' => $admin->id]);
        Npp::create(['id' => 'NPP-002', 'pengadaan_id' => 'PG-SP3-001', 'judul' => 'Pengadaan SP3', 'realisasi' => 'true', 'status' => 'approved']);

        $this->actingAs($admin, 'sanctum')->postJson('/api/step-documents/sp3', ['pengadaan_id' => 'PG-SP3-001', 'judul' => 'SP3 Pengadaan'])
            ->assertCreated()->assertJsonPath('realisasi', 'Ya');
    }

    public function test_rup_signed_upload_is_listed_and_persisted(): void
    {
        Storage::fake('public');
        $admin = $this->user('USR-RUP-ADMIN', $this->role('ROLE-RUP-ADMIN', ['pengadaan' => 'editor'], 'admin'));
        Rup::create(['id' => 'RUP-TEST-001', 'nama' => 'RUP Signed Test', 'jenis' => 'Barang', 'metode' => 'Tender', 'nilai' => 'Rp 1.000.000', 'status' => 'approved', 'progress' => '14/14', 'departemen' => 'Testing', 'created_by' => $admin->id]);

        $upload = $this->actingAs($admin, 'sanctum')->post('/api/rup/RUP-TEST-001/documents', ['file' => UploadedFile::fake()->create('rup-signed.pdf', 50, 'application/pdf')]);
        $upload->assertCreated()->assertJsonPath('data.stage', 'rup-signed');
        $this->actingAs($admin, 'sanctum')->getJson('/api/rup-documents')->assertOk()->assertJsonCount(1, 'data');
        $this->assertDatabaseHas('uploaded_documents', ['pengadaan_id' => 'RUP-TEST-001', 'stage' => 'rup-signed', 'original_name' => 'rup-signed.pdf']);
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

    private function user(string $id, Role $role, string $departemen = 'Testing'): User
    {
        return User::create([
            'id' => $id,
            'name' => $id,
            'username' => strtolower($id),
            'email' => strtolower($id) . '@example.test',
            'password' => Hash::make('password123'),
            'role_id' => $role->id,
            'departemen' => $departemen,
            'is_active' => true,
            'is_admin' => $role->role_type === 'admin',
        ]);
    }
}
