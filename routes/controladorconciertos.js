const express = require('express');
var router = express.Router();
const modelo = require('../models/conciertos');


router.get('/',(req,res)=>{
	modelo.seleccionarTodos((error, registros)=>{
		res.render('listaConciertos', {registros})
	})
})

router.get('/nuevoConcierto', (req, res)=>{
	res.render('nuevoConcierto');
});

router.post('/insertarConcierto/insertar', (req, res)=>{
	modelo.insertar(req.body,(error, resultado)=>{
		console.log(error);
		res.redirect('/conciertos/nuevoConcierto')});

});


router.get('/eliminaConcierto', (req, res)=>{
	res.render('eliminaConcierto');
});

router.delete('/eliminaConcierto/eliminar', (req, res)=>{
	modelo.eliminarPorId(req.body.id, (error, resultado)=>{res.render('eliminaConcierto', {mensaje: "Se eliminó el concierto éxito"});
	});
});


				
router.get('/actualizarConcierto', (req, res) => {
		res.render('actualizaConcierto')
	});


router.post('/actualizarConcierto',(req,res) => {
		modelo.seleccionarConciertoPorId(req.body.id,(error, resultado)=>{
			console.log(resultado);
			res.render('actualizaConcierto',{registros:resultado})
	})
})

router.put('/actualizarConcierto', (req, res)=>{
	modelo.actualizarPorId(req.body,(error, resultado)=>{
		modelo.seleccionarConciertoPorId(req.body.id,(error2, resultado2)=>{
			res.render('listaConciertos', {registros:resultado2})});
	});
});





router.get('/seleccionaConcierto', (req, res)=>{
res.render('seleccionaConcierto');
});

router.post('/seleccionarConcierto/seleccionar', (req, res)=>{
modelo.seleccionarPorId(req.body.artista_id,(error, resultado)=>
 res.render('seleccionaConcierto', {registros:resultado}));
});




module.exports = router;