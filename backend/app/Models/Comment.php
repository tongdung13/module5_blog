<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

<<<<<<< HEAD
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

=======
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
>>>>>>> 412c62cb9a7884bf39aab20da6213e8f20f71f4f
}
