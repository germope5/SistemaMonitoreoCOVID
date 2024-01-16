/* En este código index.js es un archivo principal de una aplicación
Node.js que utiliza el framework Express para crear un servidor Web. */


// Importación de módulos y configuración inicial

// Importa Express
const express = require('express'); 
// Importa Morgan (para el registro de solicitudes HTTP)
const morgan = require('morgan'); 
// Importa el módulo 'path' de Node.js
const path = require('path'); 
// Importa una instancia de Mongoose para la base de datos
const { mongoose } = require('./database'); 
// Importa otra conexión a una base de datos (database2)
const connection2 = require('./database2'); 

// Importación de rutas
const taskRoutes = require('./routes/task.routes'); // Importa las rutas de la aplicación (tareas)
const taskRoutes2 = require('./routes/task.routes2'); // Importa otras rutas de la aplicación

// Creación de una instancia de Express
const app = express();

// Configuración del puerto
app.set('port', process.env.PORT || 3000);

// Middlewares (funciones que se ejecutan antes de procesar las rutas)
// Configura el middleware Morgan para el registro de solicitudes HTTP en el modo 'dev'
app.use(morgan('dev')); 
// Habilita Express para analizar JSON en las solicitudes
app.use(express.json()); 

// Rutas de la aplicación
// Define las rutas para la API principal ('/miapi')
app.use('/miapi', taskRoutes); 
// Define otras rutas para una segunda API ('/miapi2')
app.use('/miapi2', taskRoutes2); 

// Archivos estáticos
// Configura Express para servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, 'public'))); 
 // Configura Express para servir archivos estáticos desde el directorio raíz
app.use(express.static("./"));

// Inicio del servidor
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});


