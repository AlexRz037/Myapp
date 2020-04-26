import React, {Component} from 'react';

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
                            <React.Fragment key={index}>
                                <div className="card-template">
                                    <img src={genero.image} alt=""/>
                                    <div className="nameSong">
                                        <p>{genero.nombre}</p>
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