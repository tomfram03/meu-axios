import React, { Component } from 'react';
import ArtigosCard from '../../components/Card';
import { Col, Row } from 'reactstrap';
import Menu from '../../components/Menu';

class Home extends Component {   

  render() {

    return (
      <>
        <Menu />
        <Row>
          <Col sm="3">
            <ArtigosCard />
          </Col>
        </Row>

      </>
    )
  }
}

export default Home;

/*
class App extends Component {
  state = {
    musicas: [],
  }

  async componentDidMount() {
    const response = await api.get('/artigo')
    this.setState({ musicas: response.data })

  }

  render() {

    const { musicas } = this.state;

    return (
      <div className="container">
        <Menu />
        <h1>Os melhores artistas do momento</h1>
        <div className="text-center">
        <Col sm="8">
        <Card className="align-center " >
        <CardBody className="align-center bodyCard">
          {musicas.map(musica => (
            <ul>
              <CardLink className="text-muted" key={musica._id} >{musica.titulo}</CardLink>
              <CardLink className="text-muted">{musica.conteudo}</CardLink>
            </ul>
          ))}
          </CardBody>
        </Card>
        </Col>
        </div>
      </div>
    )
  }
}

export default App;

/*
class App extends Component {
  state = {
    musicas: [],
  }

  async componentDidMount() {
    const response = await api.get('')
    this.setState({ musicas: response.data.mus.week.all })

  }

  render() {

    const { musicas } = this.state;

    return (
      <div className="container">
        <Menu />
        <h1>Os melhores artistas do momento</h1>
        <div className="text-center">
        <Col sm="8">
        <Card className="align-center" body style={{ backgroundColor: '#FFFACD', borderColor: '#FF0000' }}>
        <CardBody className="align-center">
          {musicas.map(musica => (
            <ul key={musica.id}>
              <CardLink href={musica.art.url} target="_blank" className=" lead" ><p>{musica.art.name}</p></CardLink>
              <CardLink href={musica.url} target="_blank" className="text-muted">{musica.name}</CardLink>
              <CardImg src={musica.art.pic_medium} />
              <p><Button href={musica.art.url} target="_blank" color="success" >Ver Artista</Button></p>
              <hr className="my-2" />
            </ul>
          ))}
          </CardBody>
        </Card>
        </Col>
        </div>
      </div>
    )
  }
}

export default App;

<p><Button color="success" onClick={() => this.handleClick() }> <a href={musica.art.url} target="_blank">Ver artista</a></Button></p>*/