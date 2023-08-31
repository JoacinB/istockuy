import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',

    },
    timeout: 10000,
    responseType: 'json',
    responseEncoding: 'utf8',
});

export default api;