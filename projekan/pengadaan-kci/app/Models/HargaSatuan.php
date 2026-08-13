<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HargaSatuan extends Model
{
    use HasFactory;

    protected $table = 'harga_satuan';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'nama_barang',
        'satuan',
        'harga',
        'kategori',
        'tahun',
    ];
}
