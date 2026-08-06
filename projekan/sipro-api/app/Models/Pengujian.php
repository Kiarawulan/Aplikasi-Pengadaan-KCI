<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pengujian extends Model
{
    use HasFactory;

    protected $table = 'pengujian';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'pengadaan_id',
        'nama',
        'pemohon',
        'departemen',
        'tanggal',
        'status',
        'catatan',
        'requested_by',
        'scheduled_at',
        'scheduled_by',
        'bahp_path',
        'details',
    ];

    protected $casts = ['scheduled_at' => 'datetime', 'details' => 'array'];

    public function pengadaan()
    {
        return $this->belongsTo(Pengadaan::class, 'pengadaan_id', 'id');
    }
}
