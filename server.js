const miApp = require('./app')

miApp.listen(
	miApp.get('miPuerto'),
  	() => console.log(`Iniciado servidor Node.js en el puerto ${miApp.get('miPuerto')}`)
)
