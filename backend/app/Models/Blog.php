<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $table = 'blogs';
    protected $fillable = [
        'title',
        'content',
        'image',
        'user_id'
    ];

    public function user () {
        return $this->belongsTo('App\Models\User');
    }

    public function comments ()
    {
        return $this->hasMany('App\Models\Comment');
    }
}
