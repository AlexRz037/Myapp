import React, {Component} from 'react';

import $ from 'jquery';
import axios from 'axios';

import {BrowserRouter} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';

import ReactDOM from 'react-dom';
import Header from './Header/Header';
import Reproductor from './Reproductor/Reproductor';
import SideBar from './SideBar/SideBar';
import NewReproductor from './Reproductor/NewReproductor';
import Contenido from './Contenido/Contenido';
import Recomendados from './Recomendados/Recomendados';
import Descubrir from './Descubrir/Descubrir';
import Generos from './Generos/Generos';
import Artistas from './Artistas/Artistas';
import Playlist from './Playlist/Playlist';
import GenerosDetail from './Generos/GenerosDetail';
import ArtistasDetail from './Artistas/ArtistasDetail';

export default class AppComponentDrow extends Component{
    constructor(){
        super()
        this.audioRef = React.createRef();
        this.state={
            //VARIABLES DE INFORMACION DE LA CANCION
            iconBtn: 'icon-play-1',
            imgArtist: "images/DDY.jpeg",
            nameSong: 'Dance Monkey',
            nameArtist: 'Tones And I',
            duracion: '00:00',
            actual: '00:00',
            song: "",
            songPlist: "",
            imgSong: "https://via.placeholder.com/500x281?text=DrowsMusic",
            //PETICIONES A LA API
                //lista de canciones
                listSong:[],
                ListSongTemporal: [],
                //lista de generos
                listGenero: [],
                //lista de artistas
                listArtistas: [],
            //BUSCADOR
            text: "",
            //NUEVO REPRODUCTOR
            newRep: false,
            //LISTA DE LAS CANCIONES A REPRODUCIR
            listSongsTemporal: [],
            //CANCION QUE SE ESTA REPRODUCIENDO
            songUrl: "songs/xwFwine91Jg9ReN1tZUaTE1heYlHC7CrquuNmc0e.mpga",
        }
        //Peticiones a la api
        this.getSongs=this.getSongs.bind(this);
        //Nuevo Reproductor
        this.newReproductor=this.newReproductor.bind(this);
        this.offReproductor=this.offReproductor.bind(this);
        //funcion Reproducir
        this.playSelectedSong=this.playSelectedSong.bind(this);
        //funcion play-pause
        this.clickBtnPlay=this.clickBtnPlay.bind(this);
        //tiempo de duracion de la cancion
        this.onloadeddata=this.onloadeddata.bind(this);
        this.segundosMinutos=this.segundosMinutos.bind(this);
        //tiempo actual de la cancion
        this.timeupdate=this.timeupdate.bind(this);
        //final de la cancion
        this.scheduleSong=this.scheduleSong.bind(this);
        //actualizar la lista de reproduccion
        this.updateList=this.updateList.bind(this);

    }
    async componentDidMount(){
        this.toggleMenu();
        //peticion de canciones a la Api
        this.getSongs();
        //peticion de generos a la Api
        this.getGenero();
        //peticion de artistas a la Api
        this.getArtistas();
    }
    //PETICION API
    //PETICION DE CANCIONES
    async getSongs(){
        const asset = 'http://localhost:8080/DrowsFinalF/public/';
        const getSongs = await axios.get('http://localhost:8080/DrowsFinalF/public/api/getSongs');
        getSongs.data.forEach((song)=>{song.url=asset+song.url})
        getSongs.data.forEach((song)=>song.cover_art_url=asset+song.cover_art_url)
        this.setState({
            listSong:getSongs.data,
            ListSongTemporal:getSongs.data
        });
    }
    //PETICION DE GENEROS
    async getGenero(){
        const getGeneros = await axios.get('http://localhost:8080/DrowsFinalF/public/api/getGeneros');
        this.setState({
            listGenero:getGeneros.data
        })
    }
    //PETICION DE ARTISTAS
    async getArtistas(){
        const getArtista = await axios.get('http://localhost:8080/DrowsFinalF/public/api/getArtist');
        this.setState({listArtistas:getArtista.data})
    }
    //   REPRODUCIR LA CANCNION SELECCIONADA
    playSelectedSong(song){
        this.setState({
            song: song,
            songUrl: song.url,
            iconBtn: 'icon-pause-1',
            imgArtist: song.cover_art_url,
            nameSong: song.name,
            nameArtist: song.artist
        }
        , ()=>{
            this.audioRef.current.play();
        });
    }
    //   BOTON PLAY - PAUSE
    clickBtnPlay(){
        if(this.state.iconBtn === 'icon-play-1'){
            this.setState({iconBtn: 'icon-pause-1'})
            this.audioRef.current.play();
        }else{
            this.setState({iconBtn: 'icon-play-1'})
            this.audioRef.current.pause();
        }
    }
    //ACTUALIZAR LA LISTA DE LAS CANCIONES
    updateList(arr){
        this.setState({listSongsTemporal:arr})
    }
    //TIEMPO DE LA CANCION
    onloadeddata(){
        var duracion = this.audioRef.current.duration
        this.segundosMinutos(duracion)
    }
    segundosMinutos(duracion){
        var segundos = duracion;
        var minutos = Math.floor(segundos / 60);
        var seg = Math.floor(segundos % 60);
        if(minutos < 10){
            minutos = "0" + minutos;
        }if(seg == 60){
            minutos = parseInt(minutos) + 1;
            minutos = "00" + minutos;
            seg= "00";
        }
        var duracionTotal = minutos + ":" + seg;
        this.setState({duracion: duracionTotal});
    }
    //TIEMPO ACTUAL DE LA CANCION
    timeupdate(){
        var duracion = this.audioRef.current.duration;
        var actual = this.audioRef.current.currentTime;
        var width = $(".rep-body .reproductors .reproduction").width();
        this.changeTime(duracion, width, actual);
    }
    changeTime(duracion, width, actual){
        var segundos = actual;
        var minutos = Math.floor(segundos / 60);
        var seg = Math.floor(segundos % 60);
        if(minutos < 10){
            minutos = "0" + minutos;
        }if(seg == 60){
            minutos = parseInt(minutos) +1;
            minutos = "00" + minutos;
            seg = "00";
        }
        var Actualseconds = minutos + ":" + seg;
        var secondsActual = Actualseconds;

        var width = (actual * width)/ duracion;
        $(".rep-body .reproductors .reproduction .reproducted").css("width", width + "px");
        $(".rep-body .reproductors .reproduction .circle").css("left", width + "px");


        this.setState({actual:secondsActual});
    }
    //ScheduleSong
    scheduleSong(song, arrPlist){
        this.setState({iconBtn: 'icon-play-1'})
        $(".rep-body .reproductors .reproduction .reproducted").css("width", 0 + "px");
        $(".rep-body .reproductors .reproduction .circle").css("left", 0 + "px");
            if(song >= arrPlist.length){
                this.audioRef.current.pause();
                this.setState({iconBtn: 'icon-play-1'})
            }else{
                this.nextSong(arrPlist);
            }
    }
    nextSong(arrPlist){
        for(let i=0; i<arrPlist.length; i++){
            if(arrPlist[i].selected === "selected" && i < arrPlist.length - 1){
                arrPlist[i].selected = "";
                arrPlist[i+1].selected = "selected";
              this.setState({songUrl: arrPlist[i+1].url})
              this.setState({
              imgArtist: arrPlist[i+1].cover_art_url,
              iconBtn: 'icon-pause-1',
              nameSong: arrPlist[i+1].name,
              nameArtist: arrPlist[i+1].artist
              }, ()=>{
                this.audioRef.current.play();
              })
              break;
            }
            else if(arrPlist[i].selected === "selected" && i === arrPlist.length - 1){
                arrPlist[i].selected = "";
                arrPlist[0].selected = "selected";
              this.setState({songUrl: arrPlist[i+1].url})
              this.setState({
                iconBtn: 'icon-pause-1',
                imgArtist: arrPlist[i+1].cover_art_url,
                nameSong: arrPlist[i+1].name,
                nameArtist: arrPlist[i+1].artist
              }, ()=>{
                this.audioRef.current.play();
              })
              break;
            }
            this.setState({listSongsTemporal:arrPlist});
        }
      
    }
    //ESCUCHAR EL EVENTO CLICK Y APARECER EL NUEVO REPRODUCTOR
    newReproductor(){
        this.setState({newRep:true})
    }
    offReproductor(){
        this.setState({newRep:false})
    }
    //TOGGLE MENU
    toggleMenu(){
        $('#toggleMenu').on('click', () => {
            $('#app').toggleClass('active');
        })
        $(window).on('resize', ()=>{
            if($(window).innerWidth <= 768){
                $('#app').removeClass('active');
            }else{
                $('#app').addClass('active');
            }
        });
    }
    render(){
        const {newRep} = this.state
        return(
            <BrowserRouter>
                <div className="header">
                    <Header />
                </div>
                <div className="SideBar">
                    <SideBar />
                </div>
                <Switch>
                    <Route exact path="/DrowsFinalF/public/PlayList">
                        <main className="contenido">
                            <Playlist 

                            />
                        </main>
                    </Route>
                    <Route exact path = "/DrowsFinalF/public/Artistas:id" render = {(matchProps)=>
                        <main className="templateDetails">
                            <div className="contenido">
                                <ArtistasDetail 
                                    {...matchProps}
                                    {...this.props}
                                    handleMatch={this.handleMatch} 
                                />
                            </div>
                        </main>
                    }/>
                    <Route exact path="/DrowsFinalF/public/Artistas">
                        <main className="contenido">
                            <Artistas 
                                //lista de canciones 
                                listSong={this.state.listSong}
                            />
                        </main>
                    </Route>
                    <Route exact path = "/DrowsFinalF/public/Generos/:id" render = {(matchProps)=>
                        <main className="templateDetails">
                            <div className="contenido">
                                <GenerosDetail 
                                   {...matchProps}
                                   {...this.props}
                                   handleMatch={this.handleMatch} 
                                />
                            </div>
                        </main>
                    }/>
                    <Route exact path="/DrowsFinalF/public/Generos">
                        <main className="contenido">
                            <Generos 
                                //lista de generos
                                listGenero={this.state.listGenero}
                            />
                        </main>
                    </Route>
                    <Route exact path="/DrowsFinalF/public/Descubrir">
                        <main className="contenido">
                            <Descubrir 
                                 //funciones
                                 sonPlayselected={this.playSelectedSong} //funcion play 
                                 update={this.updateList} // funcion actualizar lista
                                 //lista de canciones 
                                 listSong={this.state.listSong}
                                 //lista de reproduccion
                                 ListSongTemporal={this.state.ListSongTemporal}
                            />
                        </main>
                    </Route>
                    <Route exact path="/DrowsFinalF/public/Recomendados">
                        <main className="contenido">
                            <Recomendados 
                                //funciones
                                sonPlayselected={this.playSelectedSong} //funcion play 
                                update={this.updateList} // funcion actualizar lista
                                //lista de canciones 
                                listSong={this.state.listSong}
                                //lista de reproduccion
                                ListSongTemporal={this.state.ListSongTemporal}
                            />
                        </main>
                    </Route>
                    <Route exact path="/DrowsFinalF/public/">
                        <main className="contenido">
                            <Contenido
                                //funciones
                                    sonPlayselected={this.playSelectedSong} //funcion play 
                                    update={this.updateList} // funcion actualizar lista
                                //lista de canciones 
                                listSong={this.state.listSong}
                                    //lista de reproduccion
                                    ListSongTemporal={this.state.ListSongTemporal}
                                //lista de generos
                                listGenero={this.state.listGenero}
                                //lista de artistas
                                listArtistas={this.state.listArtistas}
                            />
                        </main>
                    </Route>
                </Switch>
                <div className="reproductor">
                    <Reproductor
                        //AUDIO
                        audio={this.audioRef}
                        //VARIABLES DE INFORMACION
                        btnPlay={this.state.iconBtn}
                        imgArtist={this.state.imgArtist}
                        nameSong={this.state.nameSong}
                        nameArtist={this.state.nameArtist}
                        timeActual={this.state.actual}
                        timeDuration={this.state.duracion} 
                        //NUEVO REPRODUCTOR
                        newReproductor={this.newReproductor}
                        //EVENTOS DEL REPRODUCTOR
                                //REPRODUCIRR CANCION
                                play={this.clickBtnPlay}
                                //REPRODUCIR LA SIGUIENTE CANCION
                                forwardSong={this.forwardSong}
                                //REPRODUCIR LA ANTERIOR CANCION
                                backwardSong={this.backwardSong}
                                //NUEVO REPRODUCTOR
                                newReproductor={this.newReproductor}
                                //SHUFFLE
                                shuffle={this.initShuffle}
                    />
                </div>
                

                {newRep ? (
                    <div className="NewReproductor">
                        <div className="botonClose" onClick={this.offReproductor}>
                            <i className="fas fa-angle-down"></i>
                        </div>
                        <NewReproductor
                            //AUDIO
                            audio={this.audioRef}
                            //VARIABLES DE INFORMACION
                            btnPlay={this.state.iconBtn}
                            imgArtist={this.state.imgArtist}
                            nameSong={this.state.nameSong}
                            nameArtist={this.state.nameArtist}
                            timeActual={this.state.actual}
                            timeDuration={this.state.duracion} 
                            //NUEVO REPRODUCTOR
                            newReproductor={this.newReproductor}
                            //EVENTOS DEL REPRODUCTOR
                                //REPRODUCIRR CANCION
                                play={this.clickBtnPlay}
                                //REPRODUCIR LA SIGUIENTE CANCION
                                forwardSong={this.forwardSong}
                                //REPRODUCIR LA ANTERIOR CANCION
                                backwardSong={this.backwardSong}
                                //NUEVO REPRODUCTOR
                                newReproductor={this.newReproductor}
                                //SHUFFLE
                                shuffle={this.initShuffle}
                        />
                    </div>
                )
                :null}
                <audio
                    ref={this.audioRef}
                    src={this.state.songUrl}
                    //EVENTOS DEL AUDIO
                    onLoadedData={this.onloadeddata}
                    onTimeUpdate={this.timeupdate}
                    onEnded={()=>this.scheduleSong(song, listSongsTemporal)}
                ></audio>
            </BrowserRouter>
        )
    }
}
if(document.getElementById('app')){
    ReactDOM.render(<AppComponentDrow />, document.getElementById('app'));
}