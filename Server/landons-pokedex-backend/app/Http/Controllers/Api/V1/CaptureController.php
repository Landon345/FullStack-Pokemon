<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Http\Requests\CaptureRequest;
use App\Http\Resources\ApiError;
use App\Services\CaptureService;

use App\Services\Interfaces\CaptureServiceInterface;
// use App\Models\Captured;
// use App\Http\Resources\Captured as CapturedResource;
use DB;
use Illuminate\Auth\Events\Validated;

class CaptureController extends Controller
{

    private $captureService;

    public function __construct(CaptureServiceInterface $captureService)
    {
        $this->captureService = $captureService;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //Get Captured
        return $this->captureService->index();
    }

    /**
     * Store a newly created resource in storage.
     * Validate the request before defering to the captureService store.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CaptureRequest $request)
    {
        //Insert a new Captured
        $request->validated();
        $id = $request->input('id');
        return $this->captureService->store($id);
    }


    public function isCaptured($pokemonid)
    {
        //return true if captured
        return $this->captureService->isCaptured($pokemonid);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($pokemonid)
    {
        //Get single captured and destroy it
        return $this->captureService->release($pokemonid);
    }
}
