import React, {Component} from 'react';

import {Link} from 'react-router-dom';

export default class Generos extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                <div className="titulo">
                    <h3>Géneros</h3>
                </div>
                <div className="grid-template">
                    {this.props.listGenero.map((genero, index)=>{
                        return(
                            <Link to={`/DrowsFinalF/public/Generos/${genero.id}`} key={index}>
                                <div className="card-template">
                                    <img src={genero.image} alt=""/>
                                    <div className="nameSong">
                                        <p>{genero.nombre}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </React.Fragment>
        )
    }
}