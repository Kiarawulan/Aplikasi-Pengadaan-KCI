<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{
    use HasFactory;

    protected $table = 'contract';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'pengadaan_id',
        'no_kontrak',
        'paket',
        'nilai',
        'departemen',
        'pbj',
        'vendor',
        'performance_bond',
        'start_date',
        'end_date',
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
