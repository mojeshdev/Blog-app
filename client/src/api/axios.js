// api/axios.js
import axios from 'axios';

const API_URL =  'http://localhost:5000/api';

const instance = axios.create({
    baseURL: API_URL,
    withCredentials: true, // ✅ must be true for cookies to be sent/received
});

export default instance;
