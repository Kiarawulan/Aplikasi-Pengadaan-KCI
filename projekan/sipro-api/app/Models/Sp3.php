<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sp3 extends Model
{
    use HasFactory;

    protected $table = 'sp3';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'pengadaan_id',
        'no_sp3',
        'judul',
        'departemen',
        'rkap',
        'tax',
        'realisasi',
        'vendor',
        'pr_no',
        'rab_no',
        'kak_no',
        'mi_no',
        'tipe_pemilihan',
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
