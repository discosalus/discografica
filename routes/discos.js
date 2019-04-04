const   miExpress = require('express'),
        miRouter = miExpress.Router(),
        discos = require('../models/discos.js')

miRouter.get('/', (peticion,respuesta) => {
        discos.seleccionarTodos((error,discos) => {
		respuesta.render('discos',{discos})
        })
})

miRouter.put('/',(peticion,respuesta) => {
	discos.insertar(peticion.body,(error,discos) => respuesta.redirect('/discos'))
})

miRouter.post('/',(peticion,respuesta) => {
	discos.actualizarPorId(peticion.body,(error,discos) => {
console.log(error)
respuesta.redirect('/discos')})
})

miRouter.delete('/',(peticion,respuesta) => {
	discos.eliminarPorId(peticion.body.id,(error,resultado) => respuesta.redirect('/discos/'))
})

module.exports = miRouter
