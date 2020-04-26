<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    protected $table = 'song';
    protected $fillable = ['id', 'name', 'cover_art_url', 'url', 'artist', 'album', 'genero'];
}
