<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except', ['login', 'register']]);
    }

    public function login(Request $request)
    {
        $req = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string|min:6'
        ]);

        if ($req->fails()) {
            return response()->json($req->errors(), 422);
        }

        if (! $token = Auth::attempt($req->validated())) {
            return response()->json(['Auth error' => 'Unauthorized'], 401);
        }

        return $this->createToken($token);
    }


    public function createToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' > Auth::factory()->getTTL() * 60,
            'user' => Auth::user()
        ]);
    }
}
