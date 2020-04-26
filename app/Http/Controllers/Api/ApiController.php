<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Musica;
use App\Genero;
use App\Artista;

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
    public function detalle($id){
        $genero = Genero::findOrFail($id);
        return  response()->json($genero);
    }
    public function getArtist(){
        $artistas = Artista::all();
        return response()->json($artistas);
    }
    public function detalleArtist($id){
        $artistas = Artista::findOrFail($id);
        return  response()->json($artistas);
    }
}
