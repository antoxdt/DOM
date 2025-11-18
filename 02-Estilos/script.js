/* 
Seleccionar el h1 a través de su clase
*/
const titulo = document.querySelector(".titulo");

/* 
Mostrar el nodo seleccionado 
*/
console.log(titulo);

/* 
Objeto Style

Acceder a este objeto usando la notación de punto:

nodo.style

Resultado es CSSStyleDeclaration, es decir, una lista que representa todas las propiedades
de estilo de un elemento.

Únicamente muestra el valor de los estilos inline declarados directamente en el 
documento HTML.
*/
console.log(titulo.style);

/* 
Acceder a las propiedades de estilo.

Usamos la notación de (.)

nodo.style.nombrePropiedad
*/
console.log("El color del título es: " + titulo.style.color);

/* 
Asignar un valor a la propiedad de estilo del nodo seleccionado

nodo.style.color = valor;
*/
titulo.style.color = "darkBlue";
titulo.style.backgroundColor = "white";
titulo.style.fontSize = "120px";

/* 
Asignar una propiedad de estilo seleccionando de forma más flexible

Sintaxis:

elemento.style.setProperty(nombrePropiedad, valor, important);
*/

titulo.style.setProperty("color", "darkblue");
titulo.style.setProperty("background-color", "green", "important");


/* 

Eliminar valores de propiedades del nodo seleccionado

nodo.style.nombrePropiedad = "" asignamos una cadena vacia

*/

titulo.style.color = "";            
titulo.style.backgroundColor = "";  


/* 

Metodo removeProperty()

Esto elimina la propiedad de estilo

Sintaxis:

elemento.style.removeProperty(nombre-propiedad)

el nombre de la propiedad es en formato Keba-case

*/

titulo.style.removeProperty("color");
titulo.style.removeProperty("background-color");
titulo.style.removeProperty("font-size");