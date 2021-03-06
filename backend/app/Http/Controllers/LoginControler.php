<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Facades\JWTAuth;

class LoginControler extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json([
                    'error' => 'invalid_credentials',
                    'message' => 'Your account is incorrect !'
                ], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        return response()->json(
            [
                'user' => Auth::user(),
                'token' => $token
            ], 200 );
    }

    public function me()
    {
        return response()->json(auth()->user());
    }


    public function getAuthenticatedUser()
    {
        try {

            if (! $user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            }

        } catch (TokenExpiredException $e) {

            return response()->json(['token_expired'], $e->getCode());

        } catch (TokenInvalidException $e) {

            return response()->json(['token_invalid'], $e->getCode());

        } catch (JWTException $e) {

            return response()->json(['token_absent'], $e->getCode());
        }

        return response()->json(compact('user'));
    }
}
