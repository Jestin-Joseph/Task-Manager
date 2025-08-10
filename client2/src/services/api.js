import axios from 'axios';




export const authApi = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
})

export const api = axios.create(
    {
    
    baseURL: process.env.REACT_APP_USER_BASE_URL,
    headers:{
         Authorization: `Bearer ${localStorage.getItem('authToken')}`
    }
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});