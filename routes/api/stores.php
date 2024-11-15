<?php
use App\Http\Controllers\Dashboard\StoresController;
use Illuminate\Support\Facades\Route;

Route::get( 'stores', [ StoresController::class, 'index' ] );
Route::post( 'stores/set-selected-store', [ StoresController::class, 'setSelectedStore' ] );
