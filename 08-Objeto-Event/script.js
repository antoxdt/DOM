/* 
Objeto Event

El objeto evento (e) es la representación de un 
suceso que ocurre en el navegador, como un click, 
pulsar una tecla o el movimiento del mouse. Nos 
proporciona información sobre sus propiedades y métodos
para manipularlo.

Para acceder al objeto event (e) se pasa como argumento
de la función manejadora (handler)

Sintaxis:

function eventHandler(e){
    // código que se ejecuta
}

Algunas propiedades del objeto:

type 👉 devuelve el tipo de evento
target 👉 devuelve el elemento donde ocurre el evento
timeStamp 👉 devuelve el tiempo en milisegundos desde
             la carga de la página
code 👉 devuelve el valor de la tecla presionada
key 👉 devuelve el valor de la tecla presionada

clientX 👉 devuelve la posición horizontal del puntero
           del mouse en relación a la ventana del navegador
clientY 👉 devuelve la posición vertical del puntero
           del mouse en relación a la ventana del navegador.
*/

// Referencia
const apachurra = document.getElementById("apachurra");

// Evento
apachurra.addEventListener("click", mostrarObjetoEvento);

// Función Declarada
function mostrarObjetoEvento(event) {
    // Código que se ejecuta
    console.log(event);
    // Para acceder a las propiedades con .
    console.log(event.type);
    console.log(event.target);
    console.log(event.timeStamp);
    console.log(event.target.innerText);
}

// Evento de teclas
document.addEventListener("keydown", function (event) {
    // Código que se ejecuta cuando el usuario presiona una tecla.
    //console.log(event); 
    //console.log(event.key); 
    //console.log(event.code);
    console.log(event.key);
});

// Evento de mouse

document.addEventListener("mousemove" , (e) => {
    // Código que se ejecuta 
    //console.log(e);
    //console.log(e.type);
    //cosole.log(e.clientX);
    //cosole.log(e.clientY);
    console.log(`coordenadas de mi mouse son x: ${e.clientX} y 
    de y: ${e.clientY} y pues eso!`);
})
