<?php
require 'vendor/autoload.php';
$app = require_once 'bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

echo "Pengadaan:\n";
echo json_encode(App\Models\Pengadaan::all()) . "\n";
echo "Verifikasi NPP:\n";
echo json_encode(App\Models\Verifikasi::where('tipe', 'npp')->get()) . "\n";
