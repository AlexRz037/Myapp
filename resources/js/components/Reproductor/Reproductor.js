import React, {Component} from 'react';
import Informacion from './Informacion/Informacion';
import Controles from './Controles/Controles';
import Botones from './Botones/Botones';
import ProgressBar from './ProgressBar/ProgressBar';

export default class Reproductor extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                <div className="rep-body">
                    <ProgressBar 
                        //AUDIO
                        audio={this.props.audio}
                    />
                </div>
                <div className="informacion" onClick={()=>this.props.newReproductor()}>
                    <Informacion 
                        imgArtist={this.props.imgArtist}
                        nameSong={this.props.nameSong}
                        nameArtist={this.props.nameArtist}
                        timeActual={this.props.timeActual}
                        timeDuration={this.props.timeDuration}
                    />
                </div>
                <div className="controles">
                    <Controles 
                        btnPlay={this.props.btnPlay}
                        //EVENTOS DEL REPRODUCTOR
                            //REPRODUCIR LA CANCION
                            play={this.props.play}
                            //REPRODUCIR LA SIGUIENTE CANCION
                            forwardSong={this.props.forwardSong}
                            //REPRODUCIR LA ANTERIOR CANCION
                            backwardSong={this.props.backwardSong}
                            //SHUFFLE
                            shuffle={this.props.shuffle}
                    />
                </div>
                <div className="botones">
                    <Botones />
                </div>
            </React.Fragment>
        )
    }
}