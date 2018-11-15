import axios from 'axios';
import store from '../../store';

const instance = axios.create({
  baseURL: 'https://api.reactpeople.org',
});

instance.interceptors.request.use(config => {
  let auth = window.localStorage.getItem('@reactpeople:auth');

  if(auth) {
    const { access_token } = JSON.parse(auth);

    config.headers.Authorization  = `Bearer ${access_token}`;
  }

  return config;
});

instance.interceptors.response.use(response => {
  return response;
}, error => {
  const { status } = error.response;

  if (status !== 401)
    return Promise.reject(error);

  store.dispatch({ type: 'UNSET_AUTH' });
});

export default instance;
