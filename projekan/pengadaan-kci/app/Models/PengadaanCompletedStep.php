<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PengadaanCompletedStep extends Model
{
    use HasFactory;

    protected $fillable = [
        'pengadaan_id',
        'step_id',
        'completed_at',
    ];

    public function pengadaan()
    {
        return $this->belongsTo(Pengadaan::class, 'pengadaan_id', 'id');
    }
}
