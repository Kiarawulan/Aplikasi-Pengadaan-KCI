<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TemplateDokumen extends Model
{
    use HasFactory;

    protected $table = 'template_dokumen';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'nama',
        'kategori',
        'tipe',
        'ukuran',
        'deskripsi',
        'uploaded_by',
        'uploaded_at',
    ];
}
