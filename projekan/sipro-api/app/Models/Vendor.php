<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{
    use HasFactory;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'nama',
        'npwp',
        'alamat',
        'kontak_person',
        'telepon',
        'email',
        'kategori',
        'status',
        'created_at_date',
    ];
}
