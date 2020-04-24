import React, {Component} from 'react';

export default class Controles extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <React.Fragment>
                <div className="shuffle">

                </div>
                <div className="botonPrev">
                    <i className="icon-to-start"></i>
                </div>
                <div className="botonPlay" onClick={()=>this.props.play()}>
                    <i className={this.props.btnPlay}></i>
                </div>
                <div className="botonNext">
                    <i className="icon-to-end"></i>
                </div>
                <div className="repeat">

                </div>
            </React.Fragment>
        )
    }
}