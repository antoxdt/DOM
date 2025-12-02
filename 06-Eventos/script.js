/* 
Evento

Un evento es una acción o suceso que ocurre
en el navegador o en un elemento del DOM. Puede ser iniciado
por el usuarioo por el sistema. Los eventos pueden ser manejados mediante
js

+ Manejar Eventos con JS

1. Target (objetivo o blanco) 🎯

Es el elemento del DOM en el que se encuentra dentro del 
objeto evento (event) y se accede mediante la propiedad event.target

2. Event Listener (Escuchador del evento)

Es el "oido" que esta atento a que ocurra un evento en un elemento (target)
en especifico. Usamos el método addventListener para escuchar los eventos.



3. Trigger (Disparador)

Es el desencadenante que un evento ocurra. Es la acción que realiza
el usuario o el sistema para activar el evento. 
 
+ Hacer clic
+ Mover ratón
+ Tipear teclas

4. Event Handler (manejador de evento)

Es una función que se va a ejecutar cada vez que ocurra el evento. Con JS le decimos que va a 
ejecutar el manejador.

+Mostrar un evento
+Cambiar un color
+Agregar un elemento
+Lanzar una alerta 

sintaxis: 

target.eventListener(trigger, eventHandler);

target 👉 elemento donde ocurre el evento
listener 👉 escucha y detecta el evento
trigger 👉 accion que ocurre en el evento
handler 👉 la funcion que se ejecuta al ocurrir el evento
*/

// Seleccionamos un elemento

const button = document.getElementById("button")

// Manejar evento

button.addEventListener("click" , mostrarMensaje);

// Definir la función

function mostrarMensaje() {
    //Codigo que se ejecuta
    alert("Ya vamonos 👹")
}