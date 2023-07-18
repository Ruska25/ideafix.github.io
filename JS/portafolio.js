// Seleccionar todos los elementos de enlace dentro de la clase "galeria"
const vinculo = document.querySelectorAll(".galeria a");

// Seleccionar el elemento con la clase "flechas"
const flechas = document.querySelector(".flechas");

// Seleccionamos la imagen dentro del elemento con la clase "flechas img"
const imgFlechas = document.querySelector(".flechas img");

// Ahora seleccionamos los botones "antes" y "siguiente"
const antes = document.querySelector(".flechas button:nth-child(1)");
const siguiente = document.querySelector(".flechas button:nth-child(3)");

// Creamos un variable para almacenar  la imagen actual
let imagenActual = 0;

// creamos una iteración sobre cada elemento de enlace dentro de "galeria"
vinculo.forEach(function(vinculo, indice) {
  // Agregamos un evento de clic a cada enlace
  vinculo.addEventListener("click", function(evento) {
    evento.preventDefault();
    // Actualizamos el índice de la imagen actual
    imagenActual = indice;
    // Enlancamos la fuente de la imagen de flechas al enlace seleccionado
    imgFlechas.setAttribute("src", vinculo.getAttribute("href"));
    // Agregamos la clase "visible" a la clase "flechas"
    flechas.classList.add("visible");
  });
});

// Agregamos un evento de clic al elemento "flechas"
flechas.addEventListener("click", function() {
  // Removemos la clase "visible" de la clase "flechas"
  flechas.classList.remove("visible");
});

// Agregamos un evento de clic al botón "antes"
antes.addEventListener("click", function(evento) {
  evento.stopPropagation();
  // Cambiamos el índice de la imagen actual según el índice anterior
  imagenActual = imagenActual > 0 ? imagenActual - 1 : vinculo.length - 1;
  // enlazamos  la imagen de flechas al enlace correspondiente
  imgFlechas.setAttribute("src", vinculo[imagenActual].getAttribute("href"));
});

// Hacemos lo mismo pero con el boton  "siguiente"
siguiente.addEventListener("click", function(evento) {
  evento.stopPropagation();
 
  imagenActual = imagenActual < vinculo.length - 1 ? imagenActual + 1 : 0;
  
  imgFlechas.setAttribute("src", vinculo[imagenActual].getAttribute("href"));
});
