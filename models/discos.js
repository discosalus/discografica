const miBD = require('./bd.js')

const contar = (callback) => {
	let miConsulta = `SELECT COUNT (*) AS cuantos
			  FROM discos`
	miBD.query(miConsulta,(error,filas) => {
		return callback(error,filas[0].cuantos || 0)
	})
}

const seleccionarTodos = (callback) => {
	let miConsulta = `SELECT *
                          FROM discos
                          ORDER BY titulo`
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

const actualizarPorId = (disco,callback) => {
	let miConsulta = `UPDATE discos
			  SET artista_id = ${disco.artista_id}
			      titulo = '${disco.titulo}',
			      ano = '${disco.ano}'
			  WHERE id = ${disco.id}`
        miBD.query(miConsulta,(error,filas) => {
                return callback(error,filas)
        })
}

const insertar = (disco,callback) => {
	let miConsulta = `INSERT INTO discos
			  (artista_id,titulo,ano)
			  VALUES
			  (${disco.artista_id},'${disco.titulo}','${disco.ano}')`
	miBD.query(miConsulta,(error,filas) => {
		return callback(error,filas)
	})
}

const eliminarPorId = (id,callback) => {
	miConsulta = `DELETE FROM discos
		      WHERE id = ${id}`
	miBD.query(miConsulta,(error,filas) => {
		console.log(error);
		return callback(error,filas)
	})
}

const contarPorArtistaId = (artista_id,callback) => {
        let miConsulta = `SELECT COUNT (*) AS cuantos
                          FROM discos
			  WHERE artista_id = ${artista_id}`
        miBD.query(miConsulta,(error,filas) => {
                return callback(error,filas[0].cuantos || 0)
        })
}

const seleccionarPorArtistaId = (artista_id,callback) => {
        let miConsulta = `SELECT *
                          FROM discos
                          WHERE artista_id = ${artista_id}`
        miBD.query(miConsulta,(error,filas) => {
                return callback(error,filas)
        })
}
const seleccionarDiscoPorId = (id,callback) => {
        let miConsulta = `SELECT *
                          FROM discos
                          WHERE id = ${id}`
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
	seleccionarPorArtistaId,
	seleccionarDiscoPorId
}
