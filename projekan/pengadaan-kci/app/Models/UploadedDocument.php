<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UploadedDocument extends Model
{
    protected $fillable = ['pengadaan_id', 'stage', 'original_name', 'path', 'mime_type', 'size', 'uploaded_by'];
}
