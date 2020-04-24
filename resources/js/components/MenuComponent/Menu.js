import React, {Component} from 'react';

export default class Menu extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                <div className="closeMenu" onClick={this.props.offMenu}>
                    <i className="fas fa-times"></i>
                </div>
                <nav>
                    <ul>
                        <li><p>Ver Perfil</p></li>
                        <li>
                            <p>
                                Modo Dark
                            </p>
                            <div className="switch" id="switch">
                                
                            </div>
                        </li>
                        <li>
                            <p>Otro</p>
                        </li>
                        <li>
                            <p>Otro</p>
                        </li>
                        <li>
                            <p>Otro</p>
                        </li>
                        <li>
                            <p>Cerrar Sesión</p>
                        </li>
                    </ul>
                </nav>
            </React.Fragment>
        )
    }
}