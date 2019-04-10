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
