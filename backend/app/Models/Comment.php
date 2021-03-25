<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $table = 'comments';

    protected $fillable = [
        'user_id',
        'blog_id',
        'comment'
    ];

    public function users(){
        $this->belongsTo('App\Models\Comment');
    }

    public function blogs(){
        $this->belongsTo('App\Models\Comment');
    }

}
