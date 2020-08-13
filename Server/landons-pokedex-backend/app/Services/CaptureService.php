<?php

namespace App\Services;

use App\Repositories\CaptureRepository;
use App\Http\Resources\Captured;
use App\Http\Resources\Pokemon;
use App\Http\Resources\ApiError;

use App\Repositories\Interfaces\CaptureRepositoryInterface;
// use App\Mail\PokemonCaptured;
use Illuminate\Support\Facades\Mail;
use Auth;

class CaptureService implements Interfaces\CaptureServiceInterface
{
    private $captureRepository;

    /** Use object compostion to inject the CaptureRepository class */
    public function __construct(CaptureRepositoryInterface $captureRepository)
    {
        $this->captureRepository = $captureRepository;
    }
    /** Returns a pokemon collection */
    public function index()
    {
        return Captured::collection($this->captureRepository->index());
    }
    /** returns a pokemon that user tried to capture */
    public function store($id)
    {

        return new Pokemon($this->captureRepository->store($id));
    }
    /** returns the remaining pokemon, not including the one just tried to release. */
    public function release($pokemonid)
    {
        return Pokemon::collection($this->captureRepository->release($pokemonid));
    }
    /** returns the pokemon if it is captured. Otherwise returns an api error that says that that pokemon was not captured. */
    public function isCaptured($pokemonid)
    {
        $res = $this->captureRepository->isCaptured($pokemonid);
        if ($res) {
            return new Pokemon($this->captureRepository->isCaptured($pokemonid));
        }
        return ApiError::error(404, "That pokemon of id " . $pokemonid . " is not captured.");
    }
}
