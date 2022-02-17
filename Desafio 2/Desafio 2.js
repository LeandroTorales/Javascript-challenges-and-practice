//Se declara el jugador que debe ser adivinado
const jugador = "Leonel Messi"

//Se le pide al usuario el nombre a adivinar
let entradaJugador = prompt("¿Qué jugador gano la copa américa 2021 y tiene 7 balones de oro?");

//Se compara la entrada de prompt con la variable constante y se imprime en alert
if (entradaJugador === jugador){
    alert("Acertaste");
}else{
    alert("No acertaste");
}