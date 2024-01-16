// Importar el módulo 'path' de Node.js para gestionar rutas de archivos
const path = require('path');

// Definir la ruta del archivo de entrada (entry point) de la aplicación
const entry = './src/app/index.js';

// Configurar la salida (output) de la aplicación
const output = {
  // Utilizar la función 'path.resolve' para obtener la ruta absoluta de la carpeta 'src/public'
  path: path.resolve(__dirname, 'src/public'),
  // Especificar el nombre del archivo de salida como 'bundle.js'
  filename: 'bundle.js',
};

// Definir reglas para el procesamiento de archivos con Webpack
const rules = [
  {
    // Utilizar 'babel-loader' para transpilar archivos JavaScript
    use: 'babel-loader',
    // Aplicar la regla a archivos con extensión '.js'
    test: /\.js$/,
    // Excluir la carpeta 'node_modules' del proceso de transpilación
    exclude: /node_modules/,
  },
  {
    // Utilizar 'style-loader' y 'css-loader' para gestionar archivos CSS
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  },
];

// Deshabilitar la generación de mapas de origen (source maps)
const devtool = false;

// Exportar la configuración de Webpack para su uso en la aplicación
module.exports = {
  entry,    // Ruta del archivo de entrada
  output,   // Configuración de salida
  module: { rules },  // Reglas de procesamiento de archivos
  devtool,  // Configuración de generación de source maps
};
