const miBD = require('./bd.js')

const contar = (callback) => {
	let miConsulta = `SELECT COUNT (*) AS cuantos
			  FROM artistas`
	miBD.query(miConsulta,(error,filas) => {
		return callback(error,filas[0].cuantos || 0)
	})
}

const seleccionarTodos = (callback) => {
	let miConsulta = `SELECT *
                          FROM artistas
                          ORDER BY nombre`
	miBD.query(miConsulta,(error,filas) => {
		return callback(error,filas)
	})
}

const seleccionarPorId = (id,callback) => {
        let miConsulta = `SELECT *
                          FROM artistas
                          WHERE id = ${id}`
	miBD.query(miConsulta,(error,filas) => {
		return callback(error,filas)
	})
}

const seleccionarPorNombre = (nombre,callback) => {
        let miConsulta = `SELECT *
                          FROM artistas
                          WHERE nombre LIKE '%${nombre}%'`
        miBD.query(miConsulta,(error,filas) => {
                return callback(error,filas)
        })
}

const actualizarPorId = (artista,callback) => {
	let miConsulta = `UPDATE artistas
			  SET nombre = '${artista.nombre}'
			  WHERE id = ${artista.id}`
        miBD.query(miConsulta,(error,filas) => {
                return callback(error,filas)
        })
}

const insertar = (artista,callback) => {
	let miConsulta = `INSERT INTO artistas
			  (nombre)
			  VALUES
			  ('${artista.nombre}')`
	miBD.query(miConsulta,(error,filas) => {
		return callback(error,filas)
	})
}

const eliminarPorId = (id,callback) => {
	miConsulta = `DELETE FROM artistas
		      WHERE id = ${id}`
	miBD.query(miConsulta,(error,filas) => {
		return callback(error,filas)
	})
}

module.exports = {
	contar,
	seleccionarTodos,
	seleccionarPorId,
	seleccionarPorNombre,
	insertar,
	actualizarPorId,
	eliminarPorId
}
