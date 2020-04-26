import React, {Component} from 'react';

export default class Descubrir extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                <div className="titulo">
                    <h3>Descubrir</h3>
                </div>
                <div className="grid-template">
                    {this.props.listSong.map((song, index)=>{
                        return(
                            <React.Fragment key={index}>
                                <div className="card-template">
                                    <img src={song.cover_art_url} alt=""/>
                                    <div className="nameSong">
                                        <p>{song.name}</p>
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