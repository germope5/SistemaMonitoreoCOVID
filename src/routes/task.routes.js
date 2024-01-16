const express = require('express');
const router = express.Router();
// Importa la instancia de Mongoose desde el archivo 'database.js'
const { mongoose } = require('../database'); 

// Ruta para obtener todas las colecciones de la base de datos 'Covid'
router.get('/collections', async (req, res) => {
  try {
    // Obtener una lista de todas las colecciones en la base de datos
    const collections = await mongoose.connection.db.collections();

    // Filtrar solo los nombres de las colecciones que pertenecen a la base de datos 'Covid'
    const covidCollections = collections
      .map((collection) => collection.collectionName)
      .filter((collectionName) => collectionName.startsWith('Covid'));

    // Responde con un JSON que contiene los nombres de las colecciones de 'Covid'
    res.json(covidCollections);
  } catch (error) {
    console.error('Error al obtener las colecciones:', error);
    // Responde con un error si ocurre algún problema
    res.status(500).json({ error: 'Error al obtener las colecciones' }); 
  }
});

// Ruta para obtener todos los documentos de una colección específica
router.get('/collection/:name', async (req, res) => {
  try {
    // Obtiene el nombre de la colección desde la URL
    const collectionName = req.params.name; 

    // Obtener la colección específica de acuerdo al nombre proporcionado en la URL
    const collection = await mongoose.connection.db.collection(collectionName);

    if (!collection) {
      // Si la colección no existe, lanza un error
      throw new Error(`La colección ${collectionName} no existe`);
    }

    // Obtener todos los documentos de la colección específica
    const documents = await collection.find().toArray();

    // Responde con un JSON que contiene los documentos de la colección
    res.json(documents); 
  } catch (error) {
    console.error('Error al obtener los documentos de la colección:', error);
    // Responde con un error si ocurre algún problema
    res.status(500).json({ error: 'Error al obtener los documentos de la colección' }); 
  }
});

// Exporta el enrutador para su uso en otras partes de la aplicación
module.exports = router; 


