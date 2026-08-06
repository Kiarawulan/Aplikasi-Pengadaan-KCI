<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    public $incrementing = false;
    protected $keyType = 'string';
    protected $fillable = ['id', 'pengadaan_id', 'payment_type', 'status', 'requested_by', 'processed_by', 'admin_note', 'form_data'];
    protected $casts = ['form_data' => 'array'];

    public function pengadaan()
    {
        return $this->belongsTo(Pengadaan::class, 'pengadaan_id', 'id');
    }
}
