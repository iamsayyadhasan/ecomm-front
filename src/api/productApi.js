import axios from "axios";


const API = axios.create({
  baseURL: "http://localhost:5000/api",
});


export const fetchProducts = () => API.get("/products");


export const fetchProductById = (id) => API.get(`/products/${id}`);


export const fetchProductsByCategory = (category) =>
  API.get(`/products?category=${category}`);

export default API;
