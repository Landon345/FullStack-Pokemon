<?php

use Illuminate\Http\Request;
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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['as' => 'v1.', 'prefix' => 'v1', 'namespace' => 'Api\V1'], function () {
    Route::middleware('auth:api')->group(function () {
        Route::get('captured', 'CaptureController@index')->name('captured');
        Route::get('captured/{pokemonid}', 'CaptureController@isCaptured')->name('capturedBy');
        Route::post('capture', 'CaptureController@store')->name('createCapture');
        Route::delete('captured/{pokemonid}', 'CaptureController@destroy')->name('deleteCapture');
        //user logout
        Route::post('logout', 'UserController@logout')->name('logout');
    });

    //Users
    Route::post('register', 'UserController@register')->name('register');
    Route::post('login', 'UserController@login')->name('login');



    //Route::get('testregister', 'UserController@testregister');
    //This is for registering with an email confirmation option;
    //If not enabled, we don't need these two lines, the mail folder, the emails.confirm view,
    //and the controller methods for these two end points.
    Route::post('testregister', 'UserController@testRegisterEmailConfirmation');
    Route::get('testregister/confirm/{token}', 'UserController@testConfirmEmail');

    //Pokemon Routes
    //Can take a query string of /?name=ven  "would return venasaur"
    //Can also take a query string of /?description=the "would return all the pokemon with "the" in the description. 
    Route::get('pokemon', 'PokemonController@index')->name('pokemon');
    Route::get('pokemon/type', 'PokemonController@type')->where('type', '[a-zA-Z]+')->name('byType');
    Route::get('pokemon/ability', 'PokemonController@ability')->where('ability', '[a-zA-Z]+')->name('byAbility');
    Route::get('pokemon/egg_group', 'PokemonController@egg_group')->where('egg_group', '[a-zA-Z]+')->name('byEggGroup');
    Route::get('pokemon/{id}', 'PokemonController@show')->where('id', '[0-9]+')->name('pokemonDetail');
    Route::get('allPokemon', 'PokemonController@allIndex')->name('allPokemon');
});
//if not authorized when going to a route that need authorization, go to this route specified in the authenticate middleware.
// I have this down here because it wasn't finding the route with the prefix before it.
Route::get('notAuthorized', 'Controller@notAuthorized')->name('notAuthorized');

Route::fallback(function () {
    return response()->json([
        'message' => 'Page Not Found.'
    ], 404);
});
