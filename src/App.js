import React, { Component } from 'react';
import api from './services/api';
import Menu from './components/Menu';
import { Button } from 'reactstrap';

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
      <div>
        <Menu />
        <h1>Os melhores artistas do momento</h1>
        {musicas.map(musica => (
          <ul key={musica.id}>
            <h3>              
              <p>Artista: {musica.art.name}</p>
              <p>Música: {musica.name}</p>
              <img src={musica.art.pic_medium}/>
              <p><a href={musica.art.url} target="_blank">Ver artista</a><Button color="success" >Ver Artista </Button></p>
            </h3>
          </ul>
        ))}
        
      </div>
    )
  }
}

export default App;

/*<p><Button color="success" onClick={() => this.handleClick() }> <a href={musica.art.url} target="_blank">Ver artista</a></Button></p>*/