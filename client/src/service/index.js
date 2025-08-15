import axios from "axios"

export const baseURL= 'http://localhost:5000/api'

const createService = (headers = {}) => {
    const service = axios.create({
        baseURL: baseURL,
        headers: {
            ...headers
        },
    });
    return service;
};

export default createService;
