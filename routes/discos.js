
const 	miExpress = require('express'),
        miRouter = miExpress.Router(),
        discos = require('../models/discos.js')	

miRouter.get('/', (peticion,resultado) => {
	
		discos.seleccionarTodos((error,registros) => {
			
				resultado.render('discos',{registros})
			})
})
	

miRouter.post('/nuevoDisco',(peticion,resultado)=>{

	resultado.render('nuevoDisco')

});

miRouter.get('/nuevoDisco',(peticion,resultado)=>{

	resultado.render('nuevoDisco')
})


miRouter.post('/nuevoDisco', (req, res)=>{
	
	
	discos.insertar(req.body,(error, resultado)=>res.redirect('/discos/nuevoDisco'));

});

miRouter.get('/modificaDisco',(peticion,resultado)=>{
	resultado.render('modificaDisco')
});

miRouter.post('/modificaDisco', (req, res)=>{

	discos.seleccionarDiscoPorId(req.body.id, (error, resultado)=>{
		console.log(resultado);
		res.render('modificaDisco', {registros:resultado})
	});		
				
});

miRouter.put('/modificaDisco', (req, res)=>{
	discos.actualizarPorId(req.body, (error, resultado)=>{res.redirect("/discos/modificaDisco")});
});


miRouter.get('/eliminaDiscos', function(req, res) {
  res.render('eliminaDiscos');
});


miRouter.delete('/eliminaDiscos', (req, res)=>{
	discos.eliminarPorId(req.body.artista_id, (error, resultado)=>{res.render('eliminaDiscos', {mensaje: "Se eliminaron los discos cuyo nombre incluía el texto: " + req.body.artista_id})});
});

module.exports = miRouter
