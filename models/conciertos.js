const miBD = require('./bd.js')

const contar = (callback) => {
	let miConsulta = `SELECT COUNT (*) AS cuantos
			  FROM conciertos`
	miBD.query(miConsulta,(error,filas) => {
		return callback(error,filas[0].cuantos || 0)
	})
}

const seleccionarTodos = (callback) => {
	let miConsulta = `SELECT *
                          FROM conciertos
                          ORDER BY fecha,hora`
	miBD.query(miConsulta,(error,filas) => {
		return callback(error,filas)
	})
}

const seleccionarPorId = (id,callback) => {
        let miConsulta = `SELECT *
                          FROM conciertos
                          WHERE id = ${id}`
	miBD.query(miConsulta,(error,filas) => {
		return callback(error,filas)
	})
}

const actualizarPorId = (concierto,callback) => {
	let miConsulta = `UPDATE conciertos
			  SET autor_id = ${concierto.artista_id}
			      nombre = '${concierto.nombre}',
			      ciudad = '${concierto.ciudad}',
			      lugar = '${concierto.lugar}'
			      fecha = '${concierto.fecha}',
			      hora = '${concierto.hora}',
			      aforo = ${concierto.aforo},
			      asistentes = ${concierto.asistentes}
			  WHERE id = ${concierto.id}`
        miBD.query(miConsulta,(error,filas) => {
                return callback(error,filas)
        })
}

const insertar = (concierto,callback) => {
	let miConsulta = `INSERT INTO conciertos
			  (artista_id,nombre,ciudad,lugar,fecha,hora,aforo,asistentes)
			  VALUES
			  (${concierto.artista_id},'${concierto.nombre}','${concierto.ciudad}','${concierto.lugar}','${concierto.fecha}','${concierto.hora}',${concierto.aforo},${concierto.asistentes})`
	miBD.query(miConsulta,(error,filas) => {
		return callback(error,filas)
	})
}

const eliminarPorId = (id,callback) => {
	miConsulta = `DELETE FROM conciertos
		      WHERE id = ${id}`
	miBD.query(miConsulta,(error,filas) => {
		return callback(error,filas)
	})
}

const contarPorArtistaId = (artista_id,callback) => {
        let miConsulta = `SELECT COUNT (*) AS cuantos
                          FROM conciertos
			  WHERE artista_id = ${artista_id}`
        miBD.query(miConsulta,(error,filas) => {
                return callback(error,filas[0].cuantos || 0)
        })
}

const seleccionarPorArtistaId = (artista_id,callback) => {
        let miConsulta = `SELECT *
                          FROM conciertos
                          WHERE artista_id = ${artista_id}`
        miBD.query(miConsulta,(error,filas) => {
                return callback(error,filas)
        })
}

module.exports = {
	contar,
	seleccionarTodos,
	seleccionarPorId,
	insertar,
	actualizarPorId,
	eliminarPorId,

	contarPorArtistaId,
	seleccionarPorArtistaId
}
