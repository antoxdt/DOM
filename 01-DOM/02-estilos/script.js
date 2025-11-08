/* 

selccionar el h1 a través de su clase


*/

const titulo = document.querySelector(".titulo")

/* 
mostrar el nodo seleccionado 
*/

console.log(titulo);

/* 

Objeto Style

Acceder a este objeto usando la notación de punto

nodo.style

resultado es CSS style Declaration. es decir una lista que representa todas las propiedades
de estilo de un elemento

las propiedades cambian del formato kebab-case a camelCase

Unicamente muestra el valor de los estilos en liinea decñarados directamente en el 
documento HTML
*/

console.log(titulo.style);

/* 

Acceder a las propiedades de estilo.

Usamos la notación de (.)

nodo.style.nombrePropiedad


*/


console.log("El color del titulo es; " + titulo.style.color);


/* 

Asignar un valor a la propiedad de estilo del nodo seleccinado

node.style.color = valor
*/

titulo.style.color = "darkBlue";
titulo.style.backgroundColor = "white";
titulo.style.fontSize = "120px";