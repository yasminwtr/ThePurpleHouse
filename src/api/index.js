import axios from 'axios';

const api = axios.create({
    // ip senai
    baseURL: "http://localhost:3001"
});

export default api;