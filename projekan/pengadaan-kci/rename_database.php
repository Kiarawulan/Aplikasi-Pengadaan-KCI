<?php

$pdo = new PDO('mysql:host=127.0.0.1;port=3306;charset=utf8mb4', 'root', '', [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
]);

$source = 'sipro';
$target = 'pengadaan_kci';
$databases = $pdo->query('SHOW DATABASES')->fetchAll(PDO::FETCH_COLUMN);

if (!in_array($source, $databases, true)) {
    fwrite(STDERR, "Database sumber '{$source}' tidak ditemukan.\n");
    exit(1);
}

$pdo->exec("CREATE DATABASE IF NOT EXISTS `{$target}` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
$targetTables = $pdo->query("SHOW TABLES FROM `{$target}`")->fetchAll(PDO::FETCH_COLUMN);
if ($targetTables !== []) {
    fwrite(STDERR, "Database target '{$target}' sudah berisi tabel; migrasi dibatalkan.\n");
    exit(1);
}

$tables = $pdo->query("SHOW TABLES FROM `{$source}`")->fetchAll(PDO::FETCH_COLUMN);
$pdo->exec('SET FOREIGN_KEY_CHECKS=0');
try {
    foreach ($tables as $table) {
        $escaped = str_replace('`', '``', $table);
        $pdo->exec("RENAME TABLE `{$source}`.`{$escaped}` TO `{$target}`.`{$escaped}`");
    }
} finally {
    $pdo->exec('SET FOREIGN_KEY_CHECKS=1');
}

$pdo->exec("DROP DATABASE `{$source}`");
echo "Database '{$source}' berhasil diganti menjadi '{$target}' (" . count($tables) . " tabel).\n";
