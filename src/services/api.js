import axios from 'axios';

// Pode ser algum servidor executando localmente: 
// http://localhost:3000

const api = axios.create({
  baseURL: 'http://localhost:8080',
  /*baseURL: 'https://api.vagalume.com.br/rank.php?apikey=660a4395f992ff67786584e238f501aa&type=mus&period=week&periodVal=201134&scope=all&limit=10',
  headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
  }*/
});

export default api;