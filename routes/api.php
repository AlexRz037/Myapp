<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('getSongs', 'Api\ApiController@getSongs');

Route::get('getGeneros', 'Api\ApiController@getGeneros');

Route::get('genre/list/{id}', 'Api\ApiController@detalle');

Route::get('getArtist', 'Api\ApiController@getArtist');

Route::get('getArtist/{id}', 'Api\ApiController@detalleArtist');