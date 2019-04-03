const 	miExpress = require('express'),
        miRouter = miExpress.Router(),
	artistas = require('../models/artistas.js'),
	discos = require('../models/discos.js'),
	conciertos = require('../models/conciertos.js')

miRouter.get('/', (peticion,respuesta) => {
	artistas.seleccionarTodos((error,artistas) => {
		discos.seleccionarTodos((error,discos) => {
			conciertos.seleccionarTodos((error,conciertos) => {
				respuesta.render('raiz',{artistas,discos,conciertos})
			})
		})
	})
})

module.exports = miRouter
