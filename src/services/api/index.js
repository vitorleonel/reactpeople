import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.reactpeople.org',
});

export default instance;
