const express = require('express');
var router = express.Router();
const modelo = require('../modelos/modeloConciertos');


router.get('/nuevoConcierto', (req, res)=>{
	res.render('nuevoConcierto');
});

router.post('/nuevoConcierto', (req, res)=>{
	/*let receta = {
		nombre: req.body.nombre,
		desc: req.body.descripcion
	}*/
	modelo.nuevaReceta(req.body,(error, resultado)=>res.redirect('/nuevoConcierto'));
});

router.get('/consultaConcierto/:id', (req, res)=>{
	modelo.consultaReceta(req.params.id, (error, resultado)=>res.render('concertario', {registros: resultado}));
});


module.exports = router;