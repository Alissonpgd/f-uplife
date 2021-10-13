import axios from "axios";
require("dotenv").config();

const api = axios.create({
  baseURL: 'https://backend-uplife.herokuapp.com',
});

export default api;