// Seleccionar el botón y el párrafo donde se mostrará el conteo
const clickButton = document.getElementById('clickButton');
const clickCount = document.getElementById('clickCount');

// Inicializar el contador
let contador = 0;

// Agregar un event listener al botón
clickButton.addEventListener('click', () => {
  // Incrementar el contador cada vez que el botón es clickeado
  contador++;
  // Mostrar el número de clicks en el párrafo
  clickCount.textContent = contador;
});