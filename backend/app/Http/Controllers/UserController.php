<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
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

        if (!$token = Auth::attempt($req->validated())) {
            return response()->json(['Auth error' => 'Unauthorized'], 401);
        }

        return $this->createToken($token);
    }

    public function register(Request $request)
    {
        $req = Validator::make($request->all(), [
            'name' => 'required|string|min:6',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|min:6|confirmed'
        ]);

        if ($req->fails()) {
            return response()->json($req->errors()->toJson(), 400);
        }

        $user = User::create(array_merge(
            $req->validated(),
            ['password' => bcrypt($request->password) ]
        ));

        return response()->json([
            'message' => 'User Sign Up Success',
            'user' => $user
        ], 201);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json(['message' => 'User logged out']);
    }

    public function refresh()
    {
        return $this->createToken(Auth::refresh());
    }

    public function user()
    {
        return response()->json(Auth::user());
    }

    public function createToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => Auth::factory()->getTTL() * 60,
            'user' => Auth::user()
        ]);
    }

    public function changePass(Request $request, $id)
    {
        $user = User::find($id);
        $password = $user->password;
        $currentPassword = Hash::check($request->password, $password);
        $newPassword = $request->newPassword === $request->newPasswordConfirm;

        if ($currentPassword) {
            if ($newPassword) {
                $user->password = Hash::make($request->newPassword);
                $user->save();
                return response()->json('?????i m???t kh???u th??nh c??ng');
            } else {
                return response()->json('Nh???p m???t kh???u kh??ng ????ng', 401);
            }
        }
        return response()->json('M???t kh???u hi???n t???i kh??ng ch??nh x??c', 400);
    }

    public function getUserInfo(Request $request)
    {
        $user = JWTAuth::toUser();
        return response()->json(['result' => $user]);
    }


}
