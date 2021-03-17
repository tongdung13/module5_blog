<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('login', [UserController::class, 'login']);
    Route::post('register', [UserController::class, 'register']);
    Route::post('logout', [UserController::class, 'logout']);
    Route::get('user-profile', [UserController::class, 'user']);
    Route::post('signin', [LoginController::class, 'login']);
});

Route::prefix('blog')->group(function () {
    Route::get('', [\App\Http\Controllers\BlogController::class , 'index']);
    Route::post('/store',[\App\Http\Controllers\BlogController::class , 'store']);
    Route::put('/update/{id}', [\App\Http\Controllers\BlogController::class, 'update']);
});

Route::prefix(['middleware' => ['jwt']], function () {

});
