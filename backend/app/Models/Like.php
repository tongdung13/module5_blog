<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    use HasFactory;

    protected $table = 'likes';
    protected $fillable = [
        'user_id',
        'blog_id',
        'like'
    ];

    public function users(){
        $this->belongsTo('App\Models\Like');
    }

    public function blogs(){
        $this->belongsTo('App\Models\like');
    }
}
