<?php
$ch = curl_init('http://localhost:8000/api/verifikasi');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    'pengadaanId' => 'PD-003',
    'pengadaanNama' => 'Test',
    'departemen' => 'Umum',
    'nominal' => 'Rp 0',
    'tipe' => 'npp',
    'submitBy' => 'Test User'
]));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Accept: application/json'
]);
$result = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);
echo "HTTP $httpCode\n$result\n";
