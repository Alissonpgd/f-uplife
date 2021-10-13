import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-uplife.herokuapp.com/usuarios",
});

export default api;