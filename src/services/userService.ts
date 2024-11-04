// src/services/userService.ts
import axios from '../axios';

export const createUser = async (username: string, password: string) => {
    const response = await axios.post('/user/registro', { username, password });
    return response.data;
};

// src/services/userService.ts
export const loginUser = async (username: string, password: string) => {
    const response = await fetch('https://fuerzabruta.onrender.com/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    // Verifica si la respuesta es exitosa
    const data = await response.json(); // Convierte la respuesta en JSON

    if (!response.ok) {
        // Si la respuesta no es exitosa, lanza un error con el mensaje del servidor
        throw new Error(data.user); // Usar el mensaje de error del servidor
    }

    // Si la respuesta es exitosa, devuelve los datos
    return data;
};

