"use client"; // Asegúrate de que esta línea esté al principio

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter(); // Obtén el enrutador

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100 text-gray-900">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">¡Bienvenido!</h1>
        <p className="text-lg text-gray-600">Has iniciado sesión correctamente en tu cuenta.</p>
      </header>
      <div className="flex flex-col space-y-4">
        <button
          onClick={() => router.push('/Register')}
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-200 w-48"
        >
          Ir a Registro
        </button>
        <button
          onClick={() => router.push('/login')}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200 w-48"
        >
          Ir a Login
        </button>
      </div>
    </div>
  );
}
