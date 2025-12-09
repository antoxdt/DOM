/* 
Funciones Eventos

La función en un evento es el Handler. Es lo que se ejecuta cuando
ocurre el evento.

1. Evento con Función Declarada

Esta función se escribe por fuera del evento y se pasa como argumento 
listener

sintaxis:

elemento.addEventListener(tipoEvento, eventHandler);

function eventHandler() {
// Código que se ejecuta
}

*/

// Referencias

const declarada = document.getElementById("declarada");

// Evento con función declarada

declarada.addEventListener("click" , funcionDeclarada); 

function funcionDeclarada(){
    console.log("Hiciste click en el boton con función declarada! 👻")
}

/* 

2. Evento con función anónima

La función se escribe dentro del evento y no tiene un
nombre asignado

sintaxis:

target.addEventListener(trigger, fuction() {código a ejecutar})

*/

// Referencia

const anonima = document.getElementById("anonima");

// Evento con función anonima

anonima.addEventListener("click", function() {
    console.log("Hiciste click en el boton con función anónima! ☠")
})

/* 
3. Evento con Función Flecha

Esta función se escribe también dentro del evento, no tiene nombre y es más

sintaxis:

target.addEventListener(trigger, () => {//codigo que se ejecuta})

* Si el código que se ejecuta tiene más de una linea se debe escribir entre llaves. 
* Si el código que se ejecuta solo tiene 1 linea, se pueden omitir las llaves.
*/

//Referencias

const flecha = document.getElementById("flecha");

// Evento con función flecha

flecha.addEventListener("click" , () => {
    console.log("Hiciste click en el boton con función flecha! 🏹"
    console.log("Otro mensaje!"
    )
} );