import React, {Component} from 'react';

export default class SideBar extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <React.Fragment>
                <a href="" className="active"><i className="fas fa-home"></i><p>Página Principal</p></a>
                <a href=""><i className="fas fa-star"></i><p>Recomendados</p></a>
                <a href=""><i className="fas fa-fire"></i><p>Descubrir</p></a>
                <hr/>
                <a href=""><i className="fas fa-compact-disc"></i><p>Géneros</p></a>
                <a href=""><i className="fas fa-music"></i><p>Artístas</p></a>
                <a href=""><i className="fas fa-bars"></i><p>Playlist</p></a>
            </React.Fragment>
        )
    }
}