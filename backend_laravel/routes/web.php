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

Route::get('image/list',[imageController::class,'index']);

Route::post('image/create',[imageController::class,'create']);

Route::delete('image/delete/{id}',[imageController::class,'destroy']);

Route::get('image/show/{id}',[imageController::class,'show']);

 

Route::delete('image/deleteAll',[imageController::class,'destroyAll']);

Route::post('image/update',[imageController::class,'update']);