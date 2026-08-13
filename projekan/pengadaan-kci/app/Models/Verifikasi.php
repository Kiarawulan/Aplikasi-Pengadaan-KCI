<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Verifikasi extends Model
{
    use HasFactory;

    protected $table = 'verifikasi';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'pengadaan_id',
        'pengadaan_nama',
        'departemen',
        'nominal',
        'tipe',
        'submit_by',
        'submit_at',
        'status',
        'catatan_admin',
        'verified_by',
        'verified_at',
        'revision_snapshot',
    ];

    protected $casts = [
        'submit_at' => 'datetime',
        'verified_at' => 'datetime',
        'revision_snapshot' => 'array',
    ];

    public function pengadaan()
    {
        return $this->belongsTo(Pengadaan::class, 'pengadaan_id', 'id');
    }
}
