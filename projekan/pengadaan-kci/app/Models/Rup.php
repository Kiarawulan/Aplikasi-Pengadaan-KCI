<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rup extends Model
{
    use HasFactory;
    
    protected $guarded = [];
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'nama',
        'jenis',
        'metode',
        'nilai',
        'status',
        'progress',
        'departemen',
        'created_by',
        'details',
        'catatan_admin',
    ];

    protected $casts = [
        'details' => 'array',
    ];
}
