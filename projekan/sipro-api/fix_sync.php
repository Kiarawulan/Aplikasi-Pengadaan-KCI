<?php
require 'vendor/autoload.php';
$app = require_once 'bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

$verifs = App\Models\Verifikasi::where('tipe', 'rup')->get();
foreach ($verifs as $v) {
    $r = App\Models\Rup::find($v->pengadaan_id);
    if ($r) {
        $r->status = $v->status;
        $r->save();
        echo "Updated {$r->id} to {$v->status}\n";
    }
}
echo "Done.\n";
