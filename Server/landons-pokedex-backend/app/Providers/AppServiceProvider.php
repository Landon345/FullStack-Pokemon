<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
            'App\Repositories\Interfaces\AuthRepositoryInterface',
            'App\Repositories\AuthRepository'
        );
        $this->app->bind(
            'App\Repositories\Interfaces\CaptureRepositoryInterface',
            'App\Repositories\CaptureRepository'
        );
        $this->app->bind(
            'App\Repositories\Interfaces\PokemonRepositoryInterface',
            'App\Repositories\PokemonRepository'
        );

        $this->app->bind(
            'App\Services\Interfaces\AuthServiceInterface',
            'App\Services\AuthService'
        );
        $this->app->bind(
            'App\Services\Interfaces\CaptureServiceInterface',
            'App\Services\CaptureService'
        );
        $this->app->bind(
            'App\Services\Interfaces\PokemonServiceInterface',
            'App\Services\PokemonService'
        );
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
