
const { validationResult } = require('express-validator');
const mongooseUniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');


const Carrito = require('../models/carrito');
const ClientesWeb = require('../models/clientesWeb');
const ModaHombre = require('../models/modaHombre');
const ModaMujer = require('../models/modaMujer');
const Usuario = require('../models/usuario');


/////coleccion de datos Moda Hombres////////////////////////////////

const modaHombre = async (req, res, next) => {
    mHombre = await ModaHombre.find();
	console.log(mHombre);
	try {
		mHombre = await ModaHombre.find();
	} catch (err) {
		const error = new Error(
			'Ha habido algún error. No se han podido recuperar los datos'
		);
		error.code = 500;
		return next(error);
	}
	if (!mHombre) {
		const error = new Error(
			'No se ha podido encontrar los articulos'
		);
		error.code = 404;
		return next(error);
	}
	res.json({
		Articulos: mHombre,
	});   


};


/////coleccion de datos Moda Mujeres//////////////////////////////

const modaMujer = async (req, res, next) => {
    mMujer = await ModaMujer.find();
	console.log(mMujer);
	try {
		mMujer = await ModaMujer.find();
	} catch (err) {
		const error = new Error(
			'Ha habido algún error. No se han podido recuperar los datos'
		);
		error.code = 500;
		return next(error);
	}
	if (!mMujer) {
		const error = new Error(
			'No se ha podido encontrar los articulos'
		);
		error.code = 404;
		return next(error);
	}
	res.json({
		Articulos: mMujer,
	});  
};


/////coleccion de datos Clientes//////////////////////////////

const clientesWeb = [{
    
    tokenCliente: '',
    nombre: '',
    email: '',
    telefono: '',
    direccionEntrega: '',
    totalCarrito: ''
}],


/////coleccion de datos Usuarios//////////////////////////////

const usuarios = [{
    idUsuario: '',
    emailAcceso: '',
    tokenUsuario: ''
}],


/////coleccion de datos carrito////////////////////////////////////

const carrito = [{
    
    idCliente: '',
    articulos: [],
    totalCarrito: ''

}]


exports.carrito = carrito;
exports.pedido = pedido;
exports.clientesWeb = clientesWeb;
exports.modaHombre = modaHombre;
exports.modaMujer = modaMujer;
exports.usuarios = usuarios;

