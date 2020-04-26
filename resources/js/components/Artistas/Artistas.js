import React, {Component} from 'react';

export default class Artistas extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                <div className="titulo">
                    <h3>Artístas</h3>
                </div>
                <div className="grid-template">
                    {this.props.listSong.map((artista, index)=>{
                        return(
                            <React.Fragment key={index}>
                                <div className="card-template">
                                    <img src={artista.cover_art_url} alt=""/>
                                    <div className="nameSong">
                                        <p>{artista.name}</p>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })}
                </div>
            </React.Fragment>
        )
    }
}