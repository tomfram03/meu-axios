import React, { Component } from 'react';
import api from './api';

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
        <h1>Listar</h1>
        {musicas.map(musica => (
          <li key={musica.id}>
            <h3>              
              <p>Nome: {musica.name}</p>
              <p>Artista: {musica.art.name}</p>
              <p> <a href={musica.art.url} target="_blank">Ver artista</a></p>
              <img src={musica.art.pic_medium}/>
              <p> <a href={musica.art.url} target="_blank">Ver artista</a></p>
            </h3>
          </li>
        ))}
        
      </div>
    )
  }
}

export default App;

