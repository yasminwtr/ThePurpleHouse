import axios from 'axios';

const api = axios.create({
    baseURL: "https://the-purple-house.up.railway.app"
});

export default api;