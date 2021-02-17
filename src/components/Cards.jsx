import React, { Component } from "react";
//import api from '../../services/api';
import Card from "./Card";

import img1 from '../assets/reactjs.png';
import img2 from '../assets/nodejs.png';
import img3 from '../assets/axios.png';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    /*
    async componentDidMount() {
        const response = await api.get('/artigo')
        this.setState({ artigos: response.data })

      }*/

    render() {

        //const { artigos } = this.state;

        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="React JS" />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title="Node JS" />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title="Axios" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;
