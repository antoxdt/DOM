/* 
Seleccionamos al elemento por su ID 
*/
const pokemones = document.getElementById("Pokemones"); // P mayúscula

/* 
mostramos por consola 
*/
console.log(pokemones);

/* 
innerText devuelve un string del contenido visible dentro de un elemento
*/
console.log(pokemones.innerText);

/* 
textContent

Devuelve un "string" del contenido visible dentro de un elemento

elemento.textContent

- Incluye los espacios 
- Incluye los elementos ocultos
- Excluye las etiquetas html
*/ 
console.log(pokemones.textContent);

/* 
innerHTML

Devuelve un "string" con la estructura interna del elemento seleccionado

elemento.innerHTML

- Incluye los espacios
- Incluye los elementos ocultos
- Incluye las etiquetas html
*/
console.log(pokemones.innerHTML);

/* 
Modificar el contenido con innerText

Asignar el valor al elemento seleccionado.

elemento.innerText = "Contenido"
*/
/* pokemones.innerText = "Snorlax yo te elijo" */

const subtitulo = document.querySelector("h2");
const enlace = document.querySelector("a");

/* 
Modificar contenido con innerText
*/
subtitulo.innerText = "Mis pokeamigos favoritos! ♥";
enlace.innerText = "Pikapika! 💣";

/* 
Modificar el contenido con textContent

Asignamos un valor al elemento seleccionado

elemento.textContent = "string"
*/
subtitulo.textContent = "Mis Cuates! 😁";
enlace.textContent  = "Bola de fuego 🔥";

/* 
Modificar el contenido con innerHTML

Asignamos el valor al elemento seleccionado incluyendo etiquetas html.

elemento.innerHTML = "<"
*/
subtitulo.innerHTML = '¡Amigos <span class="resalte">pokecito</span>! 🏀';
enlace.innerHTML = 'Aún más<span class="resalte"> Pokemostros </span>! 👻';

/* 
getAttribute()

Devuelve el valor del atributo del elemento 

elemento.getAttribute(atributo);
*/
console.log(enlace.getAttribute("href")); // muestra la URL antes de eliminar

/* 
removeAttribute()

Eliminamos el valor del atributo de un elemento

elemento.removeAttribute(atributo);

- El atributo desaparece como string
*/


enlace.removeAttribute("href");
console.log(enlace.getAttribute("href")); // null


/* 


*/

enlace.setAttribute("href", "https://www.instagram.com/");
enlace.setAttribute("target", "_blank");
console.log(enlace.getAttribute("href")); // muestra la URL de Instagram


