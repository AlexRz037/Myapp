<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    protected $table = 'album';
    protected $fillable = ['id', 'nombre', 'artista', 'imagen'];

}
