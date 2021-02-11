import React, { Component } from 'react';
import api from '../services/api';
import {
    Card, CardDeck, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';

class ArtigoCards extends Component {

    state = {
        artigos: [],
    }

    async componentDidMount() {
        const response = await api.get('/artigo')
        this.setState({ artigos: response.data })

    }

    render() {

        const { artigos } = this.state;

        return (
                <div className="container">
                    <h1>Listar Artigos</h1>
                    <CardDeck className="align-center ">
                        <Card>
                            {artigos.map(artigo => (
                                <CardBody key={artigo._id}>
                                    <CardTitle tag="h5">{artigo.titulo}</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{artigo.assunto}</CardSubtitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{artigo.outros}</CardSubtitle>
                                    <CardText>{artigo.conteudo}</CardText>
                                </CardBody>
                            ))}
                        </Card>
                    </CardDeck>
                </div>
        )
    }
}


export default ArtigoCards;