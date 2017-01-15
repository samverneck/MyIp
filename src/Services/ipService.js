import Axios from 'axios';

const dados = {
    URL: 'https://api.ipify.org/'
  , FORMAT: '?format=json'
}

const ipService = {
  myIp() {
    return Axios.get(dados.URL + dados.FORMAT)
  }
}

export default ipService;
