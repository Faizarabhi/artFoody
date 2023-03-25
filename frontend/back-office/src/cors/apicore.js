import axios from "axios";
const BASE_URL = 'http://localhost:3000/api/';
let headers;
let TOKEN;
if (localStorage.getItem("user") === null) {
  headers = {};
} else {
  TOKEN = localStorage.getItem("user");
  headers = {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${TOKEN}`
  };
}
let http = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: headers
});
export { http, BASE_URL };