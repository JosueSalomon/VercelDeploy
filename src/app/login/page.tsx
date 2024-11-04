"use client"; // Asegúrate de que esta línea esté al principio

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '../../services/userService'; // Asegúrate de que esta ruta sea correcta

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter(); // Obtén el enrutador

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = await loginUser(username, password);
            // Si la respuesta es exitosa, muestra el mensaje de bienvenida
            if (data.user === "Login exitoso") {
                setMessage(data.user); // Mensaje de éxito
                // Redirigir a otra página después de un inicio de sesión exitoso
                router.push('/'); // Cambia esta ruta a donde desees redirigir
            } else {
                setMessage('Credenciales no válidas'); // Manejo de errores
            }
        } catch (error: unknown) {
            console.error(error);
            if (error instanceof Error) {
                setMessage(error.message); // Mensaje de error específico del servidor
            } else {
                setMessage('Error desconocido al iniciar sesión'); // Mensaje genérico
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-6 text-center text-sky-700">Inicio de Sesión</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input 
                            type="text" 
                            name="username" // Agregado
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
                            name="password" // Agregado
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
                        Iniciar Sesión
                    </button>
                </form>
                {message && <p className="mt-4 text-red-500 text-center">{message}</p>}
                <div className="mt-4 text-center">
                    <button
                        onClick={() => router.push('/Register')} // Cambia '/register' a la ruta de tu página de registro
                        className="text-blue-500 hover:underline"
                    >
                        Regresar al Registro
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
