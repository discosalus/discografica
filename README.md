# DISCOGRÁFICA SALUS
Discos y conciertos de distintos artistas en cualquier lugar de España

# Resumen
Este es un archivo README para documentar el funcionamiento del apartado artistas, dentro de la aplicación web Discográfica Salus.

En el caso concreto que me atañe, se trata de de un pequeño archivo en el que se incluye la documentación de soporte de uso 
de la aplicación web "artistas", dentro del proyecto conjunto Discográfica Salus,
promovida como entregable 3 del Curso de Desarrollo Web impartido en Coop Salus 
y realizado en colaboración con Juanan Arnau, Paloma Camacho y Salvador Fernández,
encargados cada uno de ellos de otras parcelas (creación de modelos y controladores, sección/apartado discos y sección/apartado conciertos) 
del citado proyecto conjunto y global: Discográfica Salus.

En el apartado que se refiere a "artistas", me encargado de elaborar cuatro archivos de vistas con sus correspondientes controladores, 
para que el usuario/cliente puede consultar el listado de artistas que forman parte de la discográfica, (artistas)
añadir nuevos nombres de artistas, sean cuales sean sus nombres,(nuevoArtista)
eliminar aquellos que considere oportunos, porque ya no forman de la discográfica o porque no desea que existan más en la base de datos, (eliminarArtista)
así como actualizar datos referentes a cada uno de ellos, por ejemplo, 
cambiar el nombre de un artista por otro nuevo y distinto al anterior

# Procedimientos

Mediante el Modelo Vista Controlador (MVC) se han creado cuatro modelos que permiten ver cuatro rutas distintas,
correspondientes al mismo número de vistas, es decir cuatro.

A través de la ruta principal .use('/artistas',miRouterArtistas), que se incluye en la app general, 
y añadiendo a ella la ruta 'artistas/listado', que es una de las cuatro vistas (plantillas) que puede "ver"
el usuario/cliente, éste puede acceder al listado de artistas que forman parte de la discográfica Salus.

Si se utiliza la ruta '/artistas/nuevo', el usuario/cliente tiene la posibilidad de añadir, incluir
el nombre de un nuevo artista, que no exista previamente. Una vez realizada la operación, si se hace de manera correcta, 
se redirige al inicio de la vista artistas (el listado completo con el nuevo nombre insertado).

Si se utiliza la ruta '/artistas/eliminar', el usuario/cliente puede eliminar cualquier artista 
ingresando el valor de un id que exista equivalente a uno de ellos. De nuevo, si se realiza la acción de manera correcta, 
se redirige a la plantilla al inicio de la vista artistas (el listado completo con el nombre eliminado y su id).

Por último, si se utiliza la ruta '/artistas/actualiza', el usuario/cliente puede cambiar el nombre de un artista atendiendo a su id. 
Es decir, si quiero que el artistas con id 29 (Prince) pase a llamarse, por ejemplo, Michael Jackson, al atender la petición, 
si se ejecuta de manera correcta, la acción se lleva a cabo y regresas a la página principal de artistas 
con el nombre del artista con id 29 modificado.



# Autor
Pablo Beltrán Rius       paribe.pbr@gmail.com
Encargado de la elaboración del modelo y controlador vinculado al apartado artistas dentro de la aplicación web discográfica Salus

# Resumen2
Este es un archivo README para documentar el funcionamiento del apartado discos, dentro de la aplicación web Discográfica Salus.

# Autora
Paloma Camacho Burdeos camachoburdeos.paloma@gmail.com
Encargada de la realazación del modelo,vista y controlador del apartado discos dentro de la aplicación web discográfica Salus.

# Resumen3 de tareas por ficheros en el modelo ya tenia las pautas a seguir por la persona encargada de crear la estructura, añadí la siguiente función:

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
añadí en este modúlo seleccionarDiscoPorId.

En  vista he creado  cinco plantillas la portada listar,insertar,actualizar y borrar registros dentro de la base de datos.
En el controlador he puesto las instrucciones de get, post, put y delete correspondientes para poder realizar dichas plantillas y que se vean en el navegador utilizando las rutas designadas en las plantillas y en el controlador .

Ejemplo de modificar un registro de la base de datos con las instrucciones pertinentes: 


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
Tambien he creado una carpeta de estilos en css.
=====================================================================================================================
AUTOR: Juanan

Mi tarea ha sido la de diseño y creación de la base de datos. Además he imlementado la estructura del servidor Nodejs y el modelo de acceso a esta base de datos.
Además para que el resto de usuarios pudiera ver la base de datos, he implementado en la capa de control y vistas un ejemplo para mis compañeros


# Resumen 4 de la sección "conciertos"para documentación de la misma 

# Autor
Salvador Fernández lsfc@outlook.es 

Encargado de la realización del modelo vista controlador de la sección “conciertos”.

Introducción y enfoque: 
Reunión del equipo para tratar la resolución de la asignación de tareas para el desarrollo del proyecto Discosalus, enfocándolo hacia la parte que cada uno desarrollará. Tratamiento de los prerrequisitos relativos a los aspectos comunes de cada participante, así como de los específicos a llevar a cabo de forma individual.

El proyecto se inicia el día 8 de abril de 2019 y se fija como límite máximo de entrega el día 12 del mismo mes, con diversas reuniones de equipo, en un ambiente de fluída participación en las que cada integrante expresa su opinión y todos la valoran para su posterior puesta en funcionamiento,  en base a realizar de manera más cómoda el desarrollo del mismo. Así, venimos a marcarnos el objetivo de resolverlo sobre el día 10 y dejar el resto de aspectos más superficiales para las últimas fechas en base a una menor relevancia.

En lo que a mí respecta, he desarrollado los archivos de vistas listaConciertos.pug nuevoConcierto.pug, actualizaConcierto.pug, eliminaConcierto.pug en los que se han definido las rutas que serán enlazadas desde sus respectivos controladores, de modo que el cliente puede crear, modificar una vez seleccionado por id, actualizar cualquiera de los campos y eliminar un concierto desde las rutas creadas al efecto, siendo las mismas: nuevoConcierto, actualizarConcierto, eliminaConcierto.


PROCEDIMIENTOS

Modelo–vista–controlador

Modelo-vista-controlador (MVC) es un patrón de arquitectura de software, que separa los datos y la lógica de negocio de una aplicación de su representación y el módulo encargado de gestionar los eventos y las comunicaciones. Para ello MVC propone la construcción de tres componentes distintos que son el modelo, la vista y el controlador, es decir, por un lado define componentes para la representación de la información, y por otro lado para la interacción del usuario. Este patrón de arquitectura de software se basa en las ideas de reutilización de código y la separación de conceptos, características que buscan facilitar la tarea de desarrollo de aplicaciones y su posterior mantenimiento

En el MVC se crean cuatro modelos con cuatro rutas  y cuatro vistas.
En la ruta principal .use('/conciertos',miRouterConciertos) , en la app general, y desde la ruta raíz puede "ver" el usuario/cliente, el listado de conciertos de  la discográfica Salus: http://localhost:8080/conciertos.

Para insertar un nuevo concierto, el usuario puede utilizar la ruta '/conciertos/nuevoConcierto’, pudiendo rellenar todos los campos relativos al mencionado concierto:
http://localhost:8080/conciertos/nuevoConcierto.

A través de la página de modificación de conciertos, el usuario puede, una vez seleccionado el id del concierto, actualizar cualquiera de los campos.
http://localhost:8080/conciertos/actualizarConcierto.

En la ruta '/conciertos/eliminaConcierto' se permite que el cliente o usuario pueda eliminar cualquier concierto programado una vez que introduce el identificador o id vinculado al concierto en cuestión, pudiendo verificarlo, al actualizar la página inicial de conciertos.
http://localhost:8080/conciertos/eliminaConcierto.

Se ha desarrollado a través de Sublime Text y Nodejs y Express, haciendo uso de las bibliotecas necesarias para su desarrollo.

Para el listado de conciertos tenemos el siguiente enrutamiento y renderización:

router.get('/',(req,res)=>{
	modelo.seleccionarTodos((error, registros)=>{
		res.render('listaConciertos', {registros})
	})
})

Para la creación de un nuevo concierto:

router.get('/nuevoConcierto', (req, res)=>{
	res.render('nuevoConcierto');
});

router.post('/insertarConcierto/insertar', (req, res)=>{
	modelo.insertar(req.body,(error, resultado)=>{
		console.log(error);
		res.redirect('/conciertos/nuevoConcierto')});

});

En el caso de eliminar, introducimos el método "delete":

router.get('/eliminaConcierto', (req, res)=>{
	res.render('eliminaConcierto');
});

router.delete('/eliminaConcierto/eliminar', (req, res)=>{
	modelo.eliminarPorId(req.body.id, (error, resultado)=>{res.render('eliminaConcierto', {mensaje: "Se eliminó el concierto éxito"});
	});
});

De igul modo para modificar, o actualizar concierto, usamos el mtodo "put":

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

