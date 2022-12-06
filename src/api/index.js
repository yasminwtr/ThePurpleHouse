import axios from 'axios';

const api = axios.create({
  baseURL: "https://the-purple-house.up.railway.app"
});
// baseURL: "http://localhost:3001"

export default api;