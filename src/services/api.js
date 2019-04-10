import axios from 'axios';

const api = axios.create({
    baseURL:'https://omnistackbackendwanderson.herokuapp.com/'
});

export default api;