<?php


namespace App\Services\Interfaces;


interface AuthServiceInterface
{
    public function login($email, $password);
    
    public function logout();

    public function register($email, $name, $password);
}