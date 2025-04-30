// src/api.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://broadbandmap.fcc.gov',
  headers: {
    username: import.meta.env.VITE_API_USERNAME,
    hash_value: import.meta.env.VITE_API_TOKEN,
  },
});

export default axiosInstance;
