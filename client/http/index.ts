import axios from "axios";

const $api = axios.create({
  withCredentials: true,
  baseURL: "http://10.2.52.6:3333",
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export default $api;
