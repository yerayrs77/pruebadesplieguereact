const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clientesWebSchema = new Schema({
    
    tokenCliente: {
        type: String,
        required: true
      },
    nombre: {
        type: String,
        required: true
      },
    email: {
        type: String,
        required: true
      },
    telefono: {
        type: String,
        required: true
      },
    direccionEntrega: {
        type: String,
        required: true
      },
    totalCarrito:{
        type: String,
        required: true
      }   
     
})

module.exports = mongoose.model('ClientesWeb', clientesWebSchema)


