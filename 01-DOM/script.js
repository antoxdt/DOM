/* 

Nodo de documento 

Este representa el documento completo de HTML. Incluye el contenido raiz > root hasta los elementos hijos.

para acceder a este nodo usamos 👉 document

*/

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);

/* 

Nodos Elemento

Podemos seleccionar nodos de los elementos del HTML

document.getElementsByTagName("element");

*/

let title = document.getElementsByTagName("h1");

console.log(title);
console.log(title[0].id);

/* 

Nodos de Atributo

Son los nodos que accedemos a través de su clase o 

document.getElementById("id");
document.getElementsByClassName("clase");

document.querySelector("nombreSelector"); 👉 Selecciona la primera coincidencia
document.querySelectorAll("nombreSelector"); 👉 Selecciona todas las colecciones

Para querySelector y querySelectorAll hay que especificar el tipo de selector.
"nombreEtiqueta" 👉 si no lleva caracteres especiales selecciona etiquetas
"#nombreId" 👉 con un numeral secciona id

*/

let parafo = document.getElementById("puchunguito");

console.log(parafo);
console.log(parafo.innerText);

let bullet = document.getElementsByClassName("bullet");

console.log(bullet);

for (let i = 0; i < bullet.length; i++) {
    console.log(bullet[i].innerText);
}

let main = document.querySelector("#main");

console.log(main);

let sections = document.querySelectorAll("section"); // selecciona todas las secciones

console.log(sections);

/* 

Nodo de Texto 

Las propiedades que permiten acceder al contenido de los elementos de HTML

nodo.innerText
nodo.textContent

*/

let subtitulo = document.querySelector("#subtitulo"); // ahora directo
console.log(subtitulo.innerText);
