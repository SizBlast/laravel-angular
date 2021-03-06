<?php

namespace App\Http\Controllers;

use App\Comment;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CommentController extends Controller
{
    /**
     * Send back all comments as JSON
     *
     * @return Response
     */
    public function index()
    {
        return response()->json(Comment::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(Request $request)
    {
        $comment = new Comment();

        $comment->author = $request->author;
        $comment->text = $request->text;

        $comment->save();

        return response()->json(array('success' => true));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        Comment::destroy($id);

        return response()->json(array('success' => true));
    }
}
