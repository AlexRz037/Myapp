<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Musica;
use App\Genero;

class ApiController extends Controller
{
    public function getSongs(){
        $musics = Musica::all();
        return response()->json($musics);
    }
    public function getGeneros(){
        $genero = Genero::all();
        return response()->json($genero);
    }
}
