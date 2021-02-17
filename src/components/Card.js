import React from 'react';
import './card-style.css';

const CardListItem = props => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="ReactJS" className='card-img-top' />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dicta itaque cumque necessitatibus possimus deserunt at qui mollitia voluptatibus enim alias veritatis, minus quia accusantium, eius, atque quo ab sed.
        </p>
        <a href="#" className="btn btn-outline-success">Ir para Site</a>
      </div>
    </div>
  );
};

/*
const ArtigoCards = () => {
  return (
    <ul style={{ listStyleType: "none" }}>
      {characters.map(character => {
        return <CardListItem character={character} key={character.id} />;
      })}
    </ul>
  );
};*/


export default CardListItem;

/*

import React, { Component } from 'react';
import api from '../services/api';
import {
    Card, CardDeck, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

class ArtigoCards extends Component {

    state = {
        artigos: [
            {
                titulo: "Teste de titulo",
                assunto: "Teste de assunto",
                outros: "Teste de outros",
                conteudo: "Teste de conteudo..."
              },
              {
                titulo: "Teste de titulo2",
                assunto: "Teste de assunto2",
                outros: "Teste de outros2",
                conteudo: "Teste de conteudo...2"
              },
              {
                titulo: "Teste de titulo3",
                assunto: "Teste de assunto3",
                outros: "Teste de outros3",
                conteudo: "Teste de conteudo...3"
              },
        ],
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

*/