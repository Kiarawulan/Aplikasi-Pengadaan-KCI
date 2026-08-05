<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProcessHistory extends Model
{
    protected $fillable = [
        'pengadaan_id', 'verifikasi_id', 'step_id', 'actor_id', 'actor_name',
        'action', 'from_status', 'to_status', 'note', 'metadata',
    ];

    protected $casts = [
        'metadata' => 'array',
    ];
}
