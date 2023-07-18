// Seleccionamos el elemento de navegación 
const navegacion = document.querySelector("nav");

// Ahora seleccionamos  los dos elementos con las clases "despejar" y "cancelar"
const botones = document.querySelectorAll(".despejar,.cancelar");

// Creamos iteración sobre cada botón obtenido
for(let i = 0; i < botones.length; i++) {
  // Agregamos un evento de clic a cada botón
  botones[i].addEventListener("click", () => {
    // Queda alternar la clase "desplegado" en el elemento de navegación
    navegacion.classList.toggle("desplegado");
  });
}