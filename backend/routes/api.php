<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\StationSetupBays;
// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');


Route::post('admin/register',[AuthController::class,'register']);
Route::post('admin/login',[AuthController::class,'login']);

Route::middleware('auth:sanctum')->group (function() {

Route::post('admin/store-bays',[StationSetupBays::class,'storeBays']);



});