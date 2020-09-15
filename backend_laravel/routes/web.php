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

Route::post('image/create',[imageController::class,'create']);

Route::delete('image/delete/{id}',[imageController::class,'destroy']);

Route::get('image/list',[imageController::class,'list_all']);

Route::get('image/show/{id}',[imageController::class,'list_one']);

Route::get('image/import',[imageController::class,'import']);

Route::delete('image/deleteAll',[imageController::class,'destroyAll']);

Route::post('image/update',[imageController::class,'update']);