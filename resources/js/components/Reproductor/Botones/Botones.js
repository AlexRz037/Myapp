import React, {Component} from 'react';

export default class Botones extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <React.Fragment>
                <div className="ControlVolumen">

                </div>
                <div className="addPlayList">
                    <div className="menuSong">
                        <i className="fas fa-ellipsis-h"></i>
                    </div>
                    <div className="Playlist">
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}