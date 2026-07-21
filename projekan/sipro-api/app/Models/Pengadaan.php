<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pengadaan extends Model
{
    use HasFactory;

    protected $table = 'pengadaan';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'nama',
        'departemen',
        'nominal',
        'tanggal',
        'status',
        'current_step',
        'created_by',
        'form_data',
    ];

    protected $casts = [
        'tanggal' => 'date',
        'form_data' => 'array',
    ];

    public function completedSteps()
    {
        return $this->hasMany(PengadaanCompletedStep::class, 'pengadaan_id', 'id');
    }

    public function verifikasiRecords()
    {
        return $this->hasMany(Verifikasi::class, 'pengadaan_id', 'id');
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by', 'id');
    }
}
