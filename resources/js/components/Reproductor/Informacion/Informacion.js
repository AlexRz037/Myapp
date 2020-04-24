import React, {Component} from 'react';

export default class Informacion extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <React.Fragment>
                <div className="image">
                    <img src={this.props.imgArtist} alt=""/>
                </div>
                <div className="infoSong">
                    <div className="nameSong">
                        <p>{this.props.nameSong}</p>
                    </div>
                    <div className="ArtistSong">
                        <p>{this.props.nameArtist}</p>
                    </div>
                </div>
                <div className="timeSong">
                    <span>
                        <p>{this.props.timeActual}</p>
                    </span>
                    <span className="space"> / </span>
                    <span>
                        <p>{this.props.timeDuration}</p>
                    </span>
                </div>
            </React.Fragment>
        )
    }
}