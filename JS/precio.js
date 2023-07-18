//Creamos funcción anual, seleccionamos cada elemento que necesitamos cambiar y asignamos los valores deseados
function anual() {
    document.getElementById("plan1").innerHTML = "1000¢";
    document.getElementById("plan2").innerHTML = "1200¢";
    document.getElementById("plan3").innerHTML = "1600¢";
}
//Lo mismo pasa con la funcción mensual
function menusal() {
    document.getElementById("plan1").innerHTML = "500¢";
    document.getElementById("plan2").innerHTML = "800¢";
    document.getElementById("plan3").innerHTML = "1200¢";
}