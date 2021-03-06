<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;
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

    public function blog (){

        $blog = DB::select('select * from users inner join blogs where blogs.user_id = users.id', [1]);
        return response()->json($blog);
    }

    public function getBlogsOfMe() {
        $blogs = JWTAuth::toUser()->blogs()->with('user')->get();
        return response()->json($blogs);
    }
}
