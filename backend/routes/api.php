<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\LoginControler;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserProfileController;
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

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth',
], function ($router) {
    Route::post('login', [UserController::class, 'login']);
    Route::post('register', [UserController::class, 'register']);
    Route::post('logout', [UserController::class, 'logout']);
    Route::get('user-profile', [UserController::class, 'user']);
    Route::post('signin', [LoginControler::class, 'login']);
    Route::post('/store', [BlogController::class, 'store']);
    Route::get('show/{id}', [UserController::class, 'show']);
    Route::put('update/{id}', [UserController::class, 'update']);
    Route::put('change-password/{id}', [UserController::class, 'changePass']);
});

Route::prefix('blog')->group(function () {
    Route::get('', [BlogController::class, 'index']);
    Route::post('', [BlogController::class, 'store']);
    Route::get('/show/{id}', [BlogController::class, 'show']);
    Route::put('/update/{id}', [BlogController::class, 'update']);
    Route::delete('destroy/{id}', [BlogController::class, 'delete']);
});

Route::group(['middleware' => ['jwt']], function () {
    Route::get('user', [LoginControler::class, 'getAuthenticatedUser']);
    Route::prefix('blogs')->group(function () {
        Route::get('', [BlogController::class, 'index']);
        Route::post('', [BlogController::class, 'store']);
        Route::put('update/{id}', [BlogController::class, 'update']);
        Route::get('show/{id}', [BlogController::class, 'show']);
        Route::delete('destroy/{id}', [BlogController::class, 'delete']);
        Route::get('blog', [BlogController::class, 'blog']);
    });

    Route::prefix('me')->group(function () {
        Route::get('/blogs', [BlogController::class, 'getBlogsOfMe']);
    });

    Route::prefix('user')->group(function () {
        Route::get('', [UserProfileController::class, 'index']);
        Route::get('show/{id}', [UserProfileController::class, 'show']);
        Route::put('edit/{id}', [UserProfileController::class, 'update']);
        Route::post('', [UserProfileController::class, 'create']);
    });
});

Route::prefix('users')->group(function () {
    Route::get('', [UserProfileController::class, 'index']);
    Route::post('', [UserProfileController::class, 'create']);
    Route::get('show/{id}', [UserProfileController::class, 'show']);
    Route::put('edit/{id}', [UserProfileController::class, 'update']);
    Route::delete('destroy/{id}', [UserProfileController::class, 'delete']);
});

Route::prefix('comments')->group(function () {
    Route::get('', [CommentController::class, 'index']);
    Route::post('', [CommentController::class, 'store']);
    route::get('show/{id}', [CommentController::class, 'show']);
});
