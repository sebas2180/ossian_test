<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\imageController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/listImage',[imageController::class,'index']);

Route::put('/createImage',[imageController::class,'create']);

Route::get('/showImage/{id}',[imageController::class,'show']);

Route::delete('/deleteImage/{id}',[imageController::class,'delete']);

Route::get('/deleteAll',[imageController::class,'deleteAll']);

Route::post('/ueditImage7{id}',[imageController::class,'update']);