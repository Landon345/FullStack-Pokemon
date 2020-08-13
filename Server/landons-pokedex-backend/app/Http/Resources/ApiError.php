<?php

namespace App\Http\Resources;

class ApiError
{
    public static function error($code = 400, $message = "", $more="")
    {

        switch ($code) {
            case 404:
                $code_message = 'Requested resource not found.';
                break;
            case 401:
            case 403:
                $code_message = 'You are not authorized to request this information, please login or register.';
                break;
            case 500:
                $code_message = 'A server error Has occurred';
                break;
            default:
                $code_message = 'Unknown error occurred';
                break;
        }

        $data = array(
            "error" => array (
                'code'      => $code,
                'message'   => $code_message,
                'data'      => $message,
                
            )
        );
        return response()->json($data, $code);
    }
}
