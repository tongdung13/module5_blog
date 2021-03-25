<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class LikeController extends Controller
{

    public function getLikeDisLike(Request $request, $id)
    {
        $validator = Validator::make(['blog_id' => (int)$id], [
            'blog_id' => 'required|integer|exists:blogs,id',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }

        $countLike = DB::table('likes')->where(['likes.blog_id' => $id, 'like' => 1])->count() ?? 0;
        $countDislike = DB::table('likes')->where(['likes.blog_id' => $id, 'like' => 0])->count() ?? 0;
        return response()->json(['blog_id' => (int)$id, 'like' => $countLike, 'dislike' => $countDislike], 200);
    }

    public function storeLikeDislike(Request $request, UserController $userController)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|integer|exists:users,id',
            'blog_id' => 'required|integer|exists:blogs,id',
            'likedislike' => 'required|string|in:like,dislike',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }

        $likedislike = $request->likedislike;
        if ($likedislike == 'like') {
            $data = DB::table('likes')
                ->where([
                    'user_id' => $request->user_id,
                    'blog_id' => $request->blog_id,
                    'like' => 1,
                ])
                ->first();
        } else {
            $data = DB::table('likes')
                ->where([
                    'user_id' => $request->user_id,
                    'blog_id' => $request->blog_id,
                    'like' => 0,
                ])
                ->first();
        }
        if ($data === null) {
            $dt = [
                'user_id' => $request->user_id,
                'blog_id' => $request->blog_id,
                'like' => $likedislike == 'dislike' ? 0 : 1,
            ];
            $Like = DB::table('likes')->insert($dt);
            return response()->json($Like, 200);
        } else {
            if ($data->like == 1 && $likedislike == 'like') {
                $update = DB::table('likes')
                    ->where('id', $data->id)
                    ->delete();
                return response()->json($update, 200);
            } elseif ($data->like == 0 && $likedislike == 'dislike') {
                $update = DB::table('likes')
                    ->where('id', $data->id)
                    ->delete();
                return response()->json($update, 200);
            } else {
                return response()->json('Something wrong.', 400);
            }
        }
    }

    public function getTopLikes()
    {
        $data = DB::table('likes')
            ->select(DB::raw('count(*) as like_count, blog_id'))
            ->where('like', 1)
            ->groupBy('blog_id')
            ->orderByDesc('like_count')
            ->limit(5)
            ->get()
            ->toArray();
        $data = json_decode(json_encode($data), true);

        return response()->json($data, 200);
    }

    public function getSongInfo($id)
    {
        $data = Blog::with('Users')->where('id', $id)->first()->toArray();
        return $data;
    }
}
