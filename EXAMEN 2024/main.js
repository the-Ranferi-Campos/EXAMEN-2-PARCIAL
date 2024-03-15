// main.js

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto

    var nombre = document.getElementById('nombre').value;
    var edad = parseInt(document.getElementById('edad').value);

    if (edad >= 18) {
        alert("¡Hola, " + nombre + "! Eres mayor de edad");
    } else {
        alert("¡Hola, " + nombre + "! Eres menor de edad");
    }
});