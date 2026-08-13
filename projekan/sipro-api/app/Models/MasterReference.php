<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MasterReference extends Model
{
    protected $fillable = ['category', 'reference_id', 'data'];
    protected $casts = ['data' => 'array'];
}
