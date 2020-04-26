import React, {Component} from 'react';

import $ from 'jquery';

export default class Contenido extends Component{
    constructor(props){
        super(props)
        this.state={
            currentPage : 1,
            setCurrentPage : 1,
            postsPerPage: 6,
            setPostsperPage: 6,
            postsPerPageNSong: 6,
            setPostsperPageNsong: 6,
        }
        this.moveLeft=this.moveLeft.bind(this);
        this.moveRigth=this.moveRigth.bind(this);
        this.moveSlider=this.moveSlider.bind(this);
        this.moveLeftN=this.moveLeftN.bind(this);
        this.moveRigthN=this.moveRigthN.bind(this);
        this.moveSliderN=this.moveSliderN.bind(this);
        this.moveLeftD=this.moveLeftD.bind(this);
        this.moveRigthD=this.moveRigthD.bind(this);
        this.moveSliderD=this.moveSliderD.bind(this);
        this.moveLeftG=this.moveLeftG.bind(this);
        this.moveRigthG=this.moveRigthG.bind(this);
        this.moveSliderG=this.moveSliderG.bind(this);
        this.moveLeftA=this.moveLeftA.bind(this);
        this.moveRigthA=this.moveRigthA.bind(this);
        this.moveSliderA=this.moveSliderA.bind(this);
    }
    unselectSong(arr){
        for(let i=0; i<arr.length; i++){
            arr[i].selected = "";
        }
    }
    selectSong(index){
        let songList =this.props.ListSongTemporal;
        this.unselectSong(songList);
        songList[index].selected = "selected";
        this.props.update(songList);
        this.props.sonPlayselected(songList[index]);
    }
    moveLeftA(){
        this.moveSliderA('left')
    }
    moveRigthA(){
        this.moveSliderA('right')
    }
    moveSliderA(direccion){
        var fila = document.querySelector('.contet-sliderA');

        if(direccion === 'right'){
            fila.scrollLeft += fila.offsetWidth
        }else{ 
            fila.scrollLeft -= fila.offsetWidth
        }
    }
    moveLeftG(){
        this.moveSliderG('left')
    }
    moveRigthG(){
        this.moveSliderG('right')
    }
    moveSliderG(direccion){
        var fila = document.querySelector('.contet-sliderG');

        if(direccion === 'right'){
            fila.scrollLeft += fila.offsetWidth
        }else{ 
            fila.scrollLeft -= fila.offsetWidth
        }
    }
    moveLeftD(){
        this.moveSliderD('left')
    }
    moveRigthD(){
        this.moveSliderD('right')
    }
    moveSliderD(direccion){
        var fila = document.querySelector('.contet-sliderD');

        if(direccion === 'right'){
            fila.scrollLeft += fila.offsetWidth
        }else{ 
            fila.scrollLeft -= fila.offsetWidth
        }
    }
    moveLeftN(){
        this.moveSliderN('left')
    }
    moveRigthN(){
        this.moveSliderN('right')
    }
    moveSliderN(direccion){
        var fila = document.querySelector('.contet-sliderN');

        if(direccion === 'right'){
            fila.scrollLeft += fila.offsetWidth
        }else{ 
            fila.scrollLeft -= fila.offsetWidth
        }
    }
    moveLeft(){
        this.moveSlider('left')
    }
    moveRigth(){
        this.moveSlider('right')
    }
    moveSlider(direccion){
        var fila = document.querySelector('.contet-slider');
        var filaN = document.querySelector('.contet-sliderN')

        if($('.contet-slider').hasClass('R')){
            if(direccion === 'right'){
                fila.scrollLeft += fila.offsetWidth
            }else{ 
                fila.scrollLeft -= fila.offsetWidth
            }
        }else{
            if(direccion === 'right'){
                filaN.scrollLeft += filaN.offsetWidth
            }else{ 
                filaN.scrollLeft -= filaN.offsetWidth
            }
        }
    }
    render(){
        // GET SONGS
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost- this.state.postsPerPage;
        const currentPost = this.props.listSong.slice(indexOfFirstPost, indexOfLastPost);
        //GET NEW SONGS
        const indexOfLastPostNewSong = this.state.currentPage * this.state.postsPerPageNSong;
        const indexOfFirstPostNewSong  = indexOfLastPostNewSong - this.state.postsPerPageNSong;
        const currentPostNewSong = this.props.listSong.slice(indexOfFirstPostNewSong, indexOfLastPostNewSong);
        // GET GENEROS
        const indexOfLastPostGenre = this.state.currentPage * this.state.postsPerPageNSong;
        const indexOfFirstPostGenre  = indexOfLastPostGenre - this.state.postsPerPageNSong;
        const currentPostGenre = this.props.listGenero.slice(indexOfFirstPostGenre, indexOfLastPostGenre);
        return(
            <React.Fragment>
                <div className="content-options">
                    <div className="titulo">
                        <h3>Recomendados</h3>
                    </div>
                    <div className="content-sliders">
                            <div className="button-left" onClick={this.moveLeft}>
                                <h1><i className="fas fa-angle-left"></i></h1>
                            </div>
                        <div className="contet-slider R">
                            <div className="carousel">
                                {currentPost.map((song, index)=>{
                                    return(
                                    <React.Fragment key={index}>
                                        <div 
                                        className={"card-slider" + " " + this.props.ListSongTemporal[index].selected}
                                        onClick={()=> this.selectSong(index)}
                                        >
                                            <img src={song.cover_art_url} alt=""/>
                                            <div className="titulo-Song">
                                                <h6>{song.name}</h6>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="button-rigth" onClick={this.moveRigth}>
                            <h1><i className="fas fa-angle-right"></i></h1>
                        </div>
                    </div>
                </div>
                <div className="content-options">
                    <div className="titulo">
                        <h3>Nuevas Canciones</h3>
                    </div>
                    <div className="content-sliders">
                            <div className="button-left" onClick={this.moveLeftN}>
                                <h1><i className="fas fa-angle-left"></i></h1>
                            </div>
                        <div className="contet-sliderN">
                            <div className="carousel">
                            {currentPostNewSong.map((song, index)=>{
                                return(
                                <React.Fragment key={index}>
                                    <div 
                                    className={"card-slider" + " " + this.props.ListSongTemporal[index].selected}
                                    onClick={()=> this.selectSong(index)}
                                    >
                                    <img src={song.cover_art_url} alt=""/>
                                        <div className="titulo-Song">
                                            <h6>{song.name}</h6>
                                        </div>
                                    </div>
                                </React.Fragment>
                                )
                            })}
                            </div>
                        </div>
                        <div className="button-rigth" onClick={this.moveRigthN}>
                            <h1><i className="fas fa-angle-right"></i></h1>
                        </div>
                    </div>
                </div>
                <div className="content-options">
                    <div className="titulo">
                        <h3>Descubrir</h3>
                    </div>
                    <div className="content-sliders">
                            <div className="button-left" onClick={this.moveLeftD}>
                                <h1><i className="fas fa-angle-left"></i></h1>
                            </div>
                        <div className="contet-sliderD">
                            <div className="carousel">
                            {currentPost.map((song, index)=>{
                                return(
                                <React.Fragment key={index}>
                                    <div 
                                    className={"card-slider" + " " + this.props.ListSongTemporal[index].selected}
                                    onClick={()=> this.selectSong(index)}
                                    >
                                    <img src={song.cover_art_url} alt=""/>
                                        <div className="titulo-Song">
                                            <h6>{song.name}</h6>
                                        </div>
                                    </div>
                                </React.Fragment>
                                )
                            })}
                            </div>
                        </div>
                        <div className="button-rigth" onClick={this.moveRigthD}>
                            <h1><i className="fas fa-angle-right"></i></h1>
                        </div>
                    </div>
                </div>
                <div className="content-options">
                    <div className="titulo">
                        <h3>Género</h3>
                    </div>
                    <div className="content-sliders">
                            <div className="button-left" onClick={this.moveLeftG}>
                                <h1><i className="fas fa-angle-left"></i></h1>
                            </div>
                        <div className="contet-sliderG">
                            <div className="carousel">
                            {currentPostGenre.map((genero, index)=>{
                                return(
                                <React.Fragment key={index}>
                                    <div className="card-slider">
                                        <img src={genero.image} alt=""/>
                                        <div className="titulo-Song">
                                            <h6>{genero.nombre}</h6>
                                        </div>
                                    </div>
                                </React.Fragment>
                                )
                            })}
                            </div>
                        </div>
                        <div className="button-rigth" onClick={this.moveRigthG}>
                            <h1><i className="fas fa-angle-right"></i></h1>
                        </div>
                    </div>
                </div>
                <div className="content-options">
                    <div className="titulo">
                        <h3>Artístas</h3>
                    </div>
                    <div className="content-sliders">
                            <div className="button-left" onClick={this.moveLeftA}>
                                <h1><i className="fas fa-angle-left"></i></h1>
                            </div>
                        <div className="contet-sliderA">
                            <div className="carousel">
                            {currentPost.map((song, index)=>{
                                return(
                                <React.Fragment key={index}>
                                    <div 
                                    className={"card-slider" + " " + this.props.ListSongTemporal[index].selected}
                                    onClick={()=> this.selectSong(index)}
                                    >
                                        <img src={song.cover_art_url} alt=""/>
                                        <div className="titulo-Song">
                                            <h6>{song.name}</h6>
                                        </div>
                                    </div>
                                </React.Fragment>
                                )
                            })}
                            </div>
                        </div>
                        <div className="button-rigth" onClick={this.moveRigthA}>
                            <h1><i className="fas fa-angle-right"></i></h1>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}