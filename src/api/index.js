import axios from 'axios';

const api = axios.create({
    // ip senai
    baseURL: "http://localhost:3000"
});

export default api;