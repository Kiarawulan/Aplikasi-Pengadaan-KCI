<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseRequisition extends Model
{
    use HasFactory;

    protected $table = 'purchase_requisition';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'pengadaan_id',
        'no_pr',
        'judul',
        'departemen',
        'sub_unit',
        'jenis_permohonan',
        'nominal',
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
