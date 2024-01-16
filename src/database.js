// Componente JavaScript para la Conexión con la Base de Datos en MongoDB LOCAL
// database.js


/* En esta línea, se importa la biblioteca Mongoose, que se utiliza para interactuar
 con bases de datos MongoDB desde una aplicación Node.js. */
const mongoose = require('mongoose');

/* Se define la URI de conexión a la base de datos MongoDB. En este caso,
 se especifica que la base de datos se encuentra en localhost en el puerto 27017 y se llama Covid. */
const URI = 'mongodb://localhost:27017/Covid';


/*Se utiliza el método connect de Mongoose para establecer la conexión a la base de datos utilizando
 la URI proporcionada. Se pasan algunas opciones de configuración, como useNewUrlParser y useUnifiedTopology,
que son recomendadas para evitar advertencias de deprecación. El parámetro family: 4 indica que se debe utilizar IPv4 para la conexión. */
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});

// Verificar conexión exitosa
/* Este bloque de código establece un manejador de eventos que se activa cuando la conexión
 a la base de datos es exitosa. Cuando se conecta, muestra un mensaje indicando que la conexión se ha realizado con éxito.
Luego, obtiene una lista de todas las colecciones en la base de datos y, para cada una de ellas, crea un índice en el campo fecha.
 Esto puede ser útil para acelerar las consultas que involucran fechas en esas colecciones. */
mongoose.connection.on('connected', async () => 
{
  
  console.log('Conectado a la base de datos MongoDB (Conjunto de Tweets)');

  // Obtener una lista de todas las colecciones en la base de datos
  const collections = await mongoose.connection.db.collections();

  // Iterar sobre cada colección y crear el índice en el campo "fecha"
  for (const collection of collections) 
  {
    try {
      await collection.createIndex({ fecha: 1 });
      //console.log(`Índice creado en la colección: ${collection.collectionName}`);
    } catch (error) {
      console.error(`Error al crear el índice en la colección ${collection.collectionName}:`, error);
    }
  }
});


/* Finalmente, se exporta el objeto mongoose, lo que permite a otros módulos de la aplicación
 utilizar la misma instancia de Mongoose para interactuar con la base de datos. */
module.exports = mongoose;