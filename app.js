const 	miExpress = require('express'),
  	miHttpErrors = require('http-errors'),
  	miMorgan = require('morgan'),
	miExpressSession = require('express-session'),
	miMethodOverride = require('method-override'),
	miRouterRaiz = require('./routes/raiz')
  	miRouterArtistas = require('./routes/artistas'),
	miRouterDiscos = require('./routes/discos'),
	miRouterConciertos = require('./routes/conciertos'),
  	miApp = miExpress()

miApp
        .set('miPuerto', (process.env.PORT || 8080))
	.set('views', `${__dirname}/views`)
  	.set('view engine', 'pug')
  	.use(miMorgan('dev'))
  	.use(miExpress.json())
  	.use(miExpress.urlencoded({ extended: false }))
	.use(miExpress.static(`${__dirname}/public`))
	.use(miExpressSession({
		secret:'EnUnPaisMulticolorNacioUnaAbejaBajoElSol',
		resave: true,
        	saveUninitialized: true
	}))
	.use(miMethodOverride((peticion,respuesta) => {
		if(peticion.body._method){
			let miMetodo = peticion.body._method
			delete peticion.body._method
			return miMetodo
		}
	}))
	.use('/',miRouterRaiz)
// 	.use('/artistas',miRouterArtistas)
//	.use('/discos',miRouterDiscos)
//	.use('/conciertos',miRouterConciertos)
  	.use((peticion, respuesta, siguiente) => siguiente(miHttpErrors(404)))
  	.use((error, peticion, respuesta, siguiente) => {
    		respuesta.status(error.status || 500)
    		respuesta.render('error', {error})
  	})

module.exports = miApp
