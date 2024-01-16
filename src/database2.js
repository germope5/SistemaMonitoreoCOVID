// Componente JavaScript para la Conexión con la Base de Datos en MongoDB LOCAL
// database2.js
const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/Fechas_COVID'; // Cambia la cadena de conexión aquí

const connection2 = mongoose.createConnection(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});

// Verificar conexión exitosa para la segunda base de datos
connection2.on('connected', async () => {
  console.log('Conectado a la segunda base de datos MongoDB (Tópicos Obtenidos)');

  // Obtener una lista de todas las colecciones en la base de datos
  const collections = await connection2.db.collections();

  // Iterar sobre cada colección y crear el índice en el campo "fecha"
  for (const collection of collections) {
    try {
      await collection.createIndex({ fecha: 1 });
      //console.log(`Índice creado en la colección: ${collection.collectionName}`);
    } catch (error) {
      console.error(`Error al crear el índice en la colección ${collection.collectionName}:`, error);
    }
  }
});

module.exports = connection2;
