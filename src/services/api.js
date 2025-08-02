import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nextpdv.onrender.com/', // IP da sua máquina
});

export default api;
