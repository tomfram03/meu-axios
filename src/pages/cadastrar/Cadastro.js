import React, { useState } from 'react';
import { Jumbotron, FormGroup, FormText, Input, Label, Col } from 'reactstrap';
import Menu from '../../components/Menu';
import api from '../../services/api';
//import { Card, CardBody, Jumbotron } from 'reactstrap';

import {
  Container,
  Button,
  TextField,
} from "@material-ui/core";

export default function Cadastro() {

  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [assunto, setAssunto] = useState('');
  const [outros, setOutros] = useState('');

  async function handleSubmit() {
    const data = {
      titulo: titulo,
      conteudo: conteudo,
      assunto: assunto,
      outros: outros
    }
    const response = await api.post('/artigo', data);

    //console.log(data)
    
    if (response.status === 200) {
      window.location.href = '/'      
    } else {
      alert('Erro ao cadastrar o artigo!')
    }
  }

  return (
    <>
    <Menu />
    <div className="container">
      
      <h1>Cadastro de Artigos</h1>
      <Jumbotron >

        <Container maxWidth="sm" component="article" className="form">

          <FormGroup onSubmit={(e) => {
            e.preventDefault();
          }}>
            <TextField
              id="titulo"
              label="Título"
              variant="outlined"
              margin="dense"
              fullWidth
              value={titulo}
              onChange={e => setTitulo(e.target.value)}
            />
            <TextField
              id="conteudo"
              label="Conteúdo"
              variant="outlined"
              margin="dense"
              fullWidth
              value={conteudo}
              onChange={e => setConteudo(e.target.value)}
            />
            <FormGroup>
              <FormText color="muted">Assunto do artigo</FormText >
              <Input
                type="select"
                name="assunto"
                id="assunto"
                value={assunto}
                onChange={e => setAssunto(e.target.value)}
              >
                <option>-</option>
                <option>Ciências</option>
                <option>Tecnologia</option>
                <option>Música</option>
                <option>Astronomia</option>
                <option>Ativismo</option>
                <option>Política</option>
                <option>Automobilismo</option>
                <option>Literatura</option>
                <option>Artes</option>
                <option>Outros</option>
              </Input>
              <FormGroup row>
                <Col sm={10}>
                  <FormText color="muted" sm={2}>Sobre</FormText>
                  <Input
                    type="textarea"
                    name="outros"
                    id="outros"
                    value={outros}
                    onChange={e => setOutros(e.target.value)}
                  />
                </Col>
              </FormGroup>
            </FormGroup>
            <Button
              className="btn-form"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Cadastrar
        </Button>
          </FormGroup>
        </Container>
      </Jumbotron>
    </div>
    </>
  );
}

