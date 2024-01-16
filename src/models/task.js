//Componente task.js para solicitar los campos de la Base de Datos 

const {mongoose } = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    _id: { type: String, required: true },
    fecha: { type: String, required: true},
    usuario: { type: String, required: true},
    text: { type: String, required: true},
    cl_text: { type: String, required: true}
});
const All = mongoose.model('All', taskSchema,'All');
module.exports = Prueba;