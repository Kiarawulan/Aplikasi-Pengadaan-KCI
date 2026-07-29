<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

$p = \App\Models\Pengadaan::find('PR-010');
if ($p) {
    $p->status = 'approved';
    $p->save();
    \App\Models\Verifikasi::where('pengadaan_id', 'PR-010')->update(['status' => 'approved']);
    echo "Fixed PR-010\n";
} else {
    echo "Not found\n";
}
