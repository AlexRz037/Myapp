<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Musica extends Model
{
    protected $table = 'music';
    protected $fillable =['id', 'name', 'cover_art_url', 'url', 'album', 'artist', 'genero'];
}
