<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'blog_id',
        'comment',
        'name'
    ];

    public function blog ()
    {
        return $this->belongsTo('App\Models\Blog');
    }

    public function user ()
    {
        return $this->belongsTo('App\Models\User');
    }
}
