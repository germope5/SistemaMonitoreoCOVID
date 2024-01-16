const express = require('express');
const router = express.Router();
const connection2 = require('../database2'); 


// Ruta para obtener todas las colecciones de la base de datos 'Covid'
router.get('/collection2/:name', async (req, res) => {
    try {
      const collectionName = req.params.name;
  
      // Obtener la colección específica de acuerdo al nombre proporcionado en la URL
      const collection = await connection2.db.collection(collectionName);
  
      if (!collection) {
        throw new Error(`La colección ${collectionName} no existe en la segunda base de datos`);
      }
  
      // Obtener todos los documentos de la colección específica
      const documents = await collection.find().toArray();
      res.json(documents);
    } catch (error) {
      console.error('Error al obtener los documentos de la colección en la segunda base de datos:', error);
      res.status(500).json({ error: 'Error al obtener los documentos de la colección en la segunda base de datos' });
    }
  });


// Ruta para obtener todos los documentos de una colección específica
router.get('/collection/:name', async (req, res) => {
  try {
    const collectionName = req.params.name;

    // Obtener la colección específica de acuerdo al nombre proporcionado en la URL
    const collection = await mongoose.connection.db.collection(collectionName);

    if (!collection) {
      throw new Error(`La colección ${collectionName} no existe`);
    }

    // Obtener todos los documentos de la colección específica
    const documents = await collection.find().toArray();
    res.json(documents);
  } catch (error) {
    console.error('Error al obtener los documentos de la colección:', error);
    res.status(500).json({ error: 'Error al obtener los documentos de la colección' });
  }
});

router.get('/otherDb/collection/:name', async (req, res) => {
    try {
      const collectionName = req.params.name;
  
      // Obtener la colección específica de la segunda base de datos
      const collection = await connection2.db.collection(collectionName);
  
      if (!collection) {
        throw new Error(`La colección ${collectionName} no existe en la segunda base de datos`);
      }
  
      // Obtener todos los documentos de la colección específica en la segunda base de datos
      const documents = await collection.find().toArray();
      res.json(documents);
    } catch (error) {
      console.error('Error al obtener los documentos de la colección en la segunda base de datos:', error);
      res.status(500).json({ error: 'Error al obtener los documentos de la colección en la segunda base de datos' });
    }
  });


module.exports = router;

