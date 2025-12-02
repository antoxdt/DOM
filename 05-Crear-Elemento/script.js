/* 
obtener un elemento de referencia. Este será el nodo html donde 
vamos a crear un nuevo elemento 
*/

const peliculas = document.getElementById("peliculas");

console.log(peliculas);

/* 
para crear un nuevo usamos createElement()
sintaxis
document.createElement("tipo elemento");
*/

const nuevaPeli = document.createElement("li");

/* 
para agregar el elemento al DOM, tomamos el elemento de referencia y usamos
el metodo append()
sintaxis:
elementoReferencia.append(nuevoElemento);
*/

peliculas.append(nuevaPeli);

/* 
Para agregarle contenido al nuevo elemento podemos usar innerText
*/

nuevaPeli.innerText = "🤖 Terminator";

/* 
Agregarle las clases: pelicula y fondo-dos al nuevo elemento
*/

nuevaPeli.classList.add("pelicula", "fondo-dos");
