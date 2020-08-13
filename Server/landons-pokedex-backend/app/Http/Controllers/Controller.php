<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /** Returns this response when trying to access a route without proper authorization. */
    public function notAuthorized()
    {
        return response()->json(["success"=>false, "msg"=>"You are unauthorized. Make sure to send an Authorization token."], 401);
    }
}
