<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => 'required|max:255|email',
            'password' => 'required|min:4|max:255',
        ];
    }
    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'email.required' => 'The email is required buddy.',
            'email.max'  => 'The max length of an email is 255.',
            'email.email'  => 'The email must be in the correct format.',
            'password.required'  => 'The password is required.',
            'password.max'  => 'The max length of the password is 255.',
            'password.min'  => 'The minimum required length of the password is 4.',
        ];
    }
}
