<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Npp extends Model
{
    use HasFactory;

    protected $table = 'npp';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'pengadaan_id',
        'no_npp',
        'judul',
        'vendor',
        'nilai_pr',
        'coa',
        'jenis_barang',
        'kurs',
        'metode',
        'realisasi',
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
