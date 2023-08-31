import axios from 'axios';

const api = axios.create({
    baseURL: 'http://admin.istockuy.com/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',

    },
    timeout: 10000,
    responseType: 'json',
    responseEncoding: 'utf8',
});

export default api;