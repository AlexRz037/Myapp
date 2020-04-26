import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class SideBar extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <React.Fragment>
                <NavLink exact to="/DrowsFinalF/public/" activeClassName="active" ><i className="fas fa-home"></i><p>Página Principal</p></NavLink>
                <NavLink to="/DrowsFinalF/public/Recomendados"><i className="fas fa-star"></i><p>Recomendados</p></NavLink>
                <NavLink to="/DrowsFinalF/public/Descubrir"><i className="fas fa-fire"></i><p>Descubrir</p></NavLink>
                <hr/>
                <NavLink to="/DrowsFinalF/public/Generos"><i className="fas fa-compact-disc"></i><p>Géneros</p></NavLink>
                <NavLink to="/DrowsFinalF/public/Artistas"><i className="fas fa-music"></i><p>Artístas</p></NavLink>
                <NavLink to="/DrowsFinalF/public/PlayList"><i className="fas fa-bars"></i><p>PlayList</p></NavLink>
            </React.Fragment>
        )
    }
}