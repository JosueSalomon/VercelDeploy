"use client"; // Asegúrate de que esta línea esté al principio

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importa desde next/navigation
import { createUser } from '../../services/userService';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter(); // Obtén el enrutador

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = await createUser(username, password);
            // Usar alert para mostrar el mensaje
            alert(`Usuario creado: ${data.user}`);
            // Redirigir a otra página, como /login después de un registro exitoso
            router.push('/login'); // Redirigir a la página de inicio de sesión
        } catch (error: unknown) {
            console.error(error);
            alert('Error al crear el usuario'); // Mostrar alerta en caso de error
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-6 text-center text-green-800">Registro</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input 
                            type="text" 
                            placeholder="Username" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 bg-gray-100"
                        />
                    </div>
                    <div className="mb-4">
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 bg-gray-100"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition duration-200"
                    >
                        Registrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
