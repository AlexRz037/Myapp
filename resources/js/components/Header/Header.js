import React, {Component} from 'react';
import Menu from '../MenuComponent/Menu';

export default class Header extends Component{
    constructor(){
        super()
        this.state={
            MenuList:false,
        }
        this.showMenuList=this.showMenuList.bind(this);
        this.offMenu=this.offMenu.bind(this);
    }
    //MOSTRAR EL MENU
    showMenuList(){
        if($('.avatar').hasClass('menuactivo')){
            $('.avatar').removeClass('menuactivo')
            this.setState({MenuList:false})
        }else{
            $('.avatar').addClass('menuactivo')
            this.setState({MenuList:true})
        }
    }
    //CERRAR EL MENU
    offMenu(){
        if($('.avatar').hasClass('menuactivo')){
            $('.avatar').removeClass('menuactivo')
            this.setState({MenuList:false})
        }
    }
    
    render(){
        const {MenuList} = this.state
        return(
            <React.Fragment>
                <div className="contenedor-logo">
                    <div className="boton-menu" id="toggleMenu"><i className="fas fa-bars"></i></div>
                    <a href="#" className="logo">
                        Drows Music
                    </a>
                </div>
                <div className="barra-busqueda">
                    <input type="text" placeholder="Buscar..."/>
                    <button tuper="submit"><i className="fas fa-search"></i></button>
                </div>
                <div className="botones-header">
                    <div className="botonSearch">
                        <i className="fas fa-search"></i>
                    </div>
                    <div className="avatar" onClick={this.showMenuList}>
                        <img src="images/perfil.svg" alt=""/>
                    </div>
                </div>

                {MenuList ? 
                    (
                        <div className="Menulist">
                            <Menu 
                                offMenu={this.offMenu}
                            />
                        </div>
                    )
                : null}
            </React.Fragment>
        )
    }
}