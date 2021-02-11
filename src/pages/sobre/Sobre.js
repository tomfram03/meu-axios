import React, { Component } from 'react';
import Menu from './../../components/Menu';
import { Jumbotron } from 'reactstrap';

class Sobre extends Component {

    render() {

        return (
            <>
                <Menu />
                <div className="container">

                    <h1>Sobre Desenvolvedor</h1>
                    <Jumbotron className="align-center ">

                    </Jumbotron>

                </div>
            </>
        )
    }
}

export default Sobre;