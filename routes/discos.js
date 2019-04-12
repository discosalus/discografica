
const 	miExpress = require('express'),
        miRouter = miExpress.Router(),
        discos = require('../models/discos.js')
        

miRouter.get('/menu',(req,res)=>{
	res.render('portada');
});

miRouter.get('/', (peticion,resultado) => {
	
		discos.seleccionarTodos((error,registros) => {
			
				resultado.render('discos',{registros})
			})
})
	


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
	discos.actualizarPorId(req.body, (error, resultado)=>{
		res.render('portada')
	});
});


miRouter.get('/eliminaDiscos', function(req, res) {
  res.render('eliminaDiscos');
});


miRouter.delete('/eliminaDiscos', (req, res)=>{
	discos.eliminarPorId(req.body.artista_id, (error, resultado)=>{res.render('eliminaDiscos', {mensaje: "Se eliminó el album con el siguiente id: " + req.body.artista_id})});
});

module.exports = miRouter
