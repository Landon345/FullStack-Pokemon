<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use App\Services\Interfaces\AuthServiceInterface;
use App\Http\Resources\ApiError;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Mail\TestMail;
use Illuminate\Support\Facades\Mail;


class UserController extends Controller
{
    private $authService;

    /** Use object composition to inject the AuthService into the UserController */
    public function __construct(AuthServiceInterface $authService)
    {
        $this->authService = $authService;
    }


    /** Validates the request then defers to the authService login. */
    public function login(LoginRequest $request)
    {
        $request->validated();
        return $this->authService->login(
            $request->input('email'),
            $request->input('password')
        );
    }

    /** Validates the request then defers to the authService register. */
    public function register(RegisterRequest $request)
    {
        $request->validated();
        return $this->authService->register(
            $request->input('email'),
            $request->input('name'),
            $request->input('password')
        );
    }


    /** logout function that defers to the authService logout. */
    public function logout()
    {
        return $this->authService->logout();
    }


    /** For registering with email confirmation */
    public function testRegisterEmailConfirmation(RegisterRequest $request)
    {
        $request->validated();

        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->api_token = Str::random(60);
        if ($user->save()) {
            //send confirmation link
            Mail::to($user->email)->send(new TestMail($user));
            return response()->json(['user' => $user, 'message' => 'We sent you a verification email'], 201);
        }
    }

    /** After email is sent, the user hits a link that hits this route which sets thier verified to true and their email_token to null. */
    public function testConfirmEmail($token)
    {
        $user = User::where("email_token", $token)->firstOrFail();

        $user->verified = true;
        $user->email_token = null;
        $user->save();

        //Should probably put a view here with a link to the login page of the frontend application.
        return 'You are now confirmed. Please login in.';
    }
}
