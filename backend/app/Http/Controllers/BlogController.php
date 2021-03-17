<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

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
}
