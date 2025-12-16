// Referencia del emoji del cursor
const cursor = document.querySelector(".cursor");

// Mover el emoji con el mouse
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// Cambiar emoji y fondo con el teclado
document.addEventListener("keydown", (e) => {
    switch (e.key) 
    {
        case "1":
            cursor.textContent = "🎊";
            document.body.style.backgroundColor = "#ff6f61";
            break;

        case "2":
            cursor.textContent = "🎄";
            document.body.style.backgroundColor = "#2e8b57";
            break;
        case "3":
            cursor.textContent = "🥳";
            document.body.style.backgroundColor = "#ffd700";
            break;
        case "4":
            cursor.textContent = "🧶";
            document.body.style.backgroundColor = "#8a2be2";
            break;
        default:
            cursor.textContent = "💩";
            document.body.style.backgroundColor = "#555";
    }
});



