<?php


namespace App\Repositories\Interfaces;

/** Interface for the AuthRepository 
 * Need login, logout, and register function.
 */
interface AuthRepositoryInterface
{
    public function login($email, $password);

    public function logout();

    public function register($email, $name, $password);
}
