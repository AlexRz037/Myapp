import React, {Component} from 'react';
import $ from 'jquery';

export default class ProgressBar extends Component{
    constructor(props){
        super(props)
        this.state={}
        this.moveSlider=this.moveSliderX.bind(this);
    }
    moveSlider(event){
        this.moveSliderX(event);
    }
    moveSliderX(event){
        var pos = $('.rep-body .reproductors .reproduction').offset();
        var posX = event.pageX - pos.left;

        if(posX >= 0 && posX <= $(".rep-body .reproductors .reproduction").outerWidth()){
            var duracion = this.props.audio.current.duration;
            var barraActual = posX;
            var longitudBarra = parseInt($('.rep-body .reproductors .reproduction').css("width").split("px")[0]);
            var currentTime = (barraActual * duracion) / longitudBarra;
  
            this.props.audio.current.currentTime = currentTime;
          }
    }
    render(){
        return(
            <React.Fragment>
                <div className="reproductors">
                    <div className="reproduction" onMouseDown={this.moveSlider}>
                        <div className="reproducted">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}