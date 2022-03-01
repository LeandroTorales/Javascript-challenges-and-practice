//Bienvenida al usuario y se imprime por alert
let nombreUsuario = ""


//While que cada vez que el usuario ingrese una cadena vacia en el prompt le vuelve a pedir el nombre 
while(nombreUsuario == ""){
    console.log("Cadena vacia no es un nombre");
    nombreUsuario = prompt("Hola, dinos tu nombre por favor");
}

//Se le pide al usuario un jugador a elegir
let entradaJugador = prompt(`${nombreUsuario}, te pediremos a continuacion un jugador de futbol, tienes para elegir estos 5 jugadores:\nLeonel Messi \nCristiano Ronaldo \nRaheem Sterling \nPhil Foden \nVinicius Junior`);


//Se crea la clase para evaluar las estadisticas del jugador
class Jugador{
    constructor(nombreJugador, equipoJugador, ritmo, regate, tiro, pase, fisico, defensa){
        this.nombreJugador = nombreJugador.toLowerCase();
        this.equipoJugador = equipoJugador;
        this.ritmo = ritmo;
        this.regate = regate;
        this.tiro = tiro;
        this.pase = pase;
        this.fisico = fisico;
        this.defensa = defensa;
    }
}


//Creacion del array
const arrayDeJugadores = [];


//If que verifica si la entrada coincide con algun objeto creado, si coincide, pushea el objeto hacia el array y lo imprime por consola 
if(entradaJugador != "" && entradaJugador.toLowerCase() == "Leonel Messi".toLowerCase()){
    arrayDeJugadores.push(new Jugador ("Leonel Messi", "Paris Saint-Germain", 91, 96, 92, 89, 77, 43))
}else if(entradaJugador != "" && entradaJugador.toLowerCase() == "Cristiano Ronaldo".toLowerCase()){
    arrayDeJugadores.push(new Jugador ("Cristiano Ronaldo", "Manchester United", 90, 85, 90, 81, 83, 34))
}else if(entradaJugador != "" && entradaJugador.toLowerCase() == "Raheem Sterling".toLowerCase()){
    arrayDeJugadores.push(new Jugador ("Raheem Sterling", "Manchester City", 95, 89, 91, 87, 76, 30))
}else if(entradaJugador != "" && entradaJugador.toLowerCase() == "Phil Foden".toLowerCase()){
    arrayDeJugadores.push(new Jugador ("Phil Foden", "Manchester City", 84, 90, 87, 91, 73, 66))
}else if(entradaJugador != "" && entradaJugador.toLowerCase() == "Vinicius Junior".toLowerCase()){
    arrayDeJugadores.push(new Jugador ("Vinicius Junior", "Real Madrid", 99, 95, 87, 84, 56, 42))
}else{
    console.log("Nombre o caracter no valido, por favor ingresa un nombre o valor correcto");
}


//For of para imprimir los valores de las estadisticas por consola por fuera del objeto del array creado
for (const Jugador of arrayDeJugadores){
    console.log(`${nombreUsuario}, este fue el jugador que elegiste: "${Jugador.nombreJugador}". Estas son las estadisticas de tu jugador en cuestión:\n Equipo: ${Jugador.equipoJugador}\n Ritmo: ${Jugador.ritmo}\n Regate: ${Jugador.regate}\n Tiro: ${Jugador.tiro}\n Pase: ${Jugador.pase}\n Fisico: ${Jugador.fisico}\n Defensa: ${Jugador.defensa}`)
}


//Se imprime el array pusheado por consola
console.log(arrayDeJugadores);


//Saludo
alert(`Nos vemos pronto, ${nombreUsuario}`);


// arrayDeJugadores.push(new Jugador ("Leonel Messi", "Paris Saint-Germain", 91, 96, 92, 89, 77, 43));
// arrayDeJugadores.push(new Jugador ("Cristiano Ronaldo", "Manchester United", 90, 85, 90, 81, 83, 34));
// arrayDeJugadores.push(new Jugador ("Raheem Sterling", "Manchester City", 95, 89, 91, 87, 76, 30));
// arrayDeJugadores.push(new Jugador ("Phil Foden", "Manchester City", 84, 90, 87, 91, 73, 66));
// arrayDeJugadores.push(new Jugador ("Vinicius Junior", "Real Madrid", 99, 95, 87, 84, 56, 42));