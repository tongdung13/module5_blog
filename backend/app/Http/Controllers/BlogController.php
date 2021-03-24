<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BlogController extends Controller
{
    public function index() {
        $blogs = Blog::all();
        return response()->json($blogs);
    }

    public function store (Request $request){
        $blogs = new Blog();
        $blogs -> fill($request->all());
        $blogs ->save();
        return response()-> json($blogs);
    }

    public function update (Request $request, $id) {
        $blogs = Blog::findOrFail($id);
        $blogs -> fill($request->all());
        $blogs -> save ();
        return response() ->json($blogs);
    }

    public function delete ($id) {
        $blogs = Blog::findOrFail($id);
        $blogs-> delete();
        return response() ->json($blogs);
    }

    public function show($id)
    {
        $blog = Blog::find($id);
        return response()->json($blog);
    }

    public function blog ($id){
        $blog = User::find($id);
        $blog = DB::table('users')->where('blogs', 'users.id', '=', 'blogs.user_id')->get();
        return response()->json($blog);
    }
}
