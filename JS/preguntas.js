//Seleccionamos los selectores con la clase "pregunta00"
const preguntasFrec = document.querySelectorAll('.pregunta00');

// Iteramos sobre cada elemento de pregunta
preguntasFrec.forEach((pregunta) => {

    //Agregamos un evento de cliick en cada pregunta
pregunta.addEventListener('click', () => {

   // Alternamos la clase active en la pregunta
pregunta.classList.toggle('active');

//Obtenemos la respuesta
const respuesta= pregunta.nextElementSibling;

//Si es visible mostramos la respuesta y si esta oculta escondemos
if (respuesta.style.display === 'block') {
respuesta.style.display = 'none';
} else {
respuesta.style.display = 'block';
}
});
});