import axios from 'axios';

const API = axios.create({ baseURL: "https://blog-pandacover.herokuapp.com/" });


export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);

export const createUser = (userData) => API.post("/auth/registerUser", userData);
export const loginUser = (userData) => API.post("/auth/loginUser", userData);
