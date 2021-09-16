const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const modaMujerSchema = new Schema({
    
    idModelo: {
      type: String,
      required: true
    },
    idImagen: {
    type: String,
    required: true
  },
    linea: {
    type: String,
    required: true
  },
    tipo: {
    type: String,
    required: true
  },
    temporada: {
    type: String,
    required: true
  },
    fabricante: {
    type: String,
    required: true
  },
    tallas: {
    type: String,
    required: true
  },
    precioBase: {
    type: String,
    required: true
  },
    pvp: {
    type: String,
    required: true
  },
    idCliente: {
      type: String,
      required: true
    } 
  
  
})

module.exports = mongoose.model('ModaMujer', modaMujerSchema)