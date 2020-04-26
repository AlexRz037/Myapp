import React, {Component} from 'react';

import axios from 'axios';

export default class GenerosDetail extends Component{
    constructor(props){
        super(props)
        this.state={
            details: []
        }
    }
    async componentDidMount(){
        this.getGenreId();
    }
    async getGenreId(){
        const generoId = this.props.match.params.id;
        const getGeneroId = await axios.get(`http://localhost:8080/DrowsFinalF/public/api/genre/list/${generoId}`)

        this.setState({details:getGeneroId.data})
    }
    render(){
        const {details} = this.state
        return(
            <React.Fragment>
                <div className="template-detail">
                    <div className="template-portada">
                        <h2>{details.nombre}</h2>
                        <img src={`../`+details.image} alt=""/>
                    </div>
                    <div className="grid-template">
                        <div className="card-template">

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}