<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pbj extends Model
{
    use HasFactory;

    protected $table = 'pbj';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'pengadaan_id',
        'no_pbj',
        'nama_paket',
        'departemen',
        'nilai',
        'metode',
        'vendor',
        'tgl_awal',
        'tgl_akhir',
        'keterangan',
        'status',
        'submitted_by',
        'form_data',
    ];

    protected $casts = [
        'form_data' => 'array',
    ];

    public function pengadaan()
    {
        return $this->belongsTo(Pengadaan::class, 'pengadaan_id', 'id');
    }
}
