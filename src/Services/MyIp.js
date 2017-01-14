import Axios from 'axios';

const MyIp = {
  myIp() {
    return Axios.get(`https://api.ipify.org/?format=json`)
  }
}

export default MyIp;
