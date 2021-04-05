<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CommentController extends Controller
{
    public function store(Request $request)
    {
        $comment = new Comment();
        $comment->fill($request->all());
        $comment->save();
        return response()->json($comment);
    }

    public function show($id)
    {
        $comment = Comment::find($id);
        return response()->json($comment);
    }

    public function index()
    {
        $comment = DB::table('blogs')->join('comments', 'blogs.id', '=', 'comments.blog_id')->get();
        return response()->json($comment);

    }
}
