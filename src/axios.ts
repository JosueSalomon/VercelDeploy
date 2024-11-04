// src/axios.ts
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fuerzabruta.onrender.com', // Cambia esto por la URL de tu backend
});

export default instance;
