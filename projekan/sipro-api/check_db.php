<?php
require __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use App\Models\Role;
use App\Models\User;

echo "--- ROLES IN DB ---\n";
foreach (Role::all() as $r) {
    echo "ID: {$r->id} | Name: {$r->name}\n";
}

echo "\n--- USERS IN DB ---\n";
foreach (User::all() as $u) {
    echo "ID: {$u->id} | Email: {$u->email} | Role: {$u->role_id}\n";
}
