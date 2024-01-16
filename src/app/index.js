import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importa el componente principal de la aplicación
import * as serviceWorker from '../serviceWorker'; // Importa un módulo para el registro del service worker
import '../public/global.css'; // Importa un archivo de estilos globales
import '../public/App.css'; // Importa un archivo de estilos específicos de la aplicación

// Renderiza el componente principal de la aplicación en el elemento con el id 'root' en el DOM.
ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Componente principal de la aplicación */}
  </React.StrictMode>,
  document.getElementById('root') // Elemento HTML donde se renderizará la aplicación
);

// Service Worker: Un service worker es un script que se ejecuta en segundo plano en el navegador
// y se utiliza para la gestión de caché y otras tareas que mejoran la experiencia del usuario.
// El método serviceWorker.unregister() se utiliza para desactivar el service worker.
serviceWorker.unregister(); // Desactiva el service worker para que la aplicación no funcione offline
