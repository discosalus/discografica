const 	miMysql = require('mysql'),
	miConexion = miMysql.createConnection({
	//	host:'lameuacasa.duckdns.org',
		host:'localhost',
		port:'3306',
		database:'discografica',
		user:'teofilo',
		password:'necrofilo'
	})

module.exports = miConexion
