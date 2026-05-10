import axios from "axios"
const token = localStorage.getItem('token') || '';

export const baseURL= 'http://localhost:5000/api'

const createService = (headers = {
      Authorization: `Bearer ${token}`
}) => {
    const service = axios.create({
        baseURL: baseURL,
        headers: {
            
            ...headers
        },
    });
    return service;
};

export default createService;
