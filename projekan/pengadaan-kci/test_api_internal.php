<?php
require 'vendor/autoload.php';
$app = require_once 'bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

$request = Illuminate\Http\Request::create('/api/verifikasi', 'POST', [
    'pengadaanId' => 'PD-003',
    'pengadaanNama' => 'Test',
    'departemen' => 'Umum',
    'nominal' => 'Rp 0',
    'tipe' => 'npp',
    'submitBy' => 'Test User'
]);
$controller = new App\Http\Controllers\VerifikasiController();
$response = $controller->store($request);
echo "Status: " . $response->getStatusCode() . "\n";
echo $response->getContent() . "\n";
