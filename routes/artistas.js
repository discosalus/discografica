const 	miExpress = require('express'),
        miRouter = miExpress.Router(),
		artistas = require('../models/artistas.js')

miRouter.get('/listado', (peticion,respuesta) => {
	artistas.seleccionarTodos((error,artistas) => {
		respuesta.render ('artistas', {artistas})
	})
})

miRouter.get('/nuevo', (peticion,respuesta) => {
	respuesta.render('nuevoArtista')
})

miRouter.post('/nuevo', (peticion,respuesta) => {
	artistas.insertar(peticion.body,(error,artistas) => {
		respuesta.redirect ('/artistas/listado')
	})
})

miRouter.get('/eliminar', (peticion,respuesta) => {
	respuesta.render('eliminarArtista')
})

miRouter.post('/eliminar', (peticion,respuesta) => {
	artistas.eliminarPorId(peticion.body.id,(error,artistas) => {
		respuesta.redirect ('/artistas/listado')
	})
})

miRouter.get('/actualiza', (peticion,respuesta) => {
	respuesta.render('modificarArtista')
})

miRouter.post('/actualiza',(peticion,respuesta) => {
	artistas.actualizarPorId(peticion.body,(error,artistas) => respuesta.redirect('/artistas/listado'))
})

module.exports = miRouter