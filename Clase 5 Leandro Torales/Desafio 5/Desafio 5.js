//Bienvenida al usuario y se imprime por alert
let nombreUsuario = prompt("Hola, dinos tu nombre por favor");
if (nombreUsuario != ""){
    alert(`Bienvenido, ${nombreUsuario}`+" :)")
}


//Constructor que hace las estadisticas, reuniendo las propiedades e imprimiendolas en un alert mendiante una funcion
function Jugador(nombreJugador, equipoJugador, ritmo, regate, tiro, pase, fisico, defensa) {
    this.nombreJugador = nombreJugador;
    this.equipoJugador = equipoJugador;
    this.ritmo = ritmo;
    this.regate = regate;
    this.tiro = tiro;
    this.pase = pase;
    this.fisico = fisico;
    this.defensa = defensa;
    this.imprimirJugador = function(){alert(`${nombreUsuario}, las estadísticas del jugador que elegiste son: \nNombre del Jugador: ${this.nombreJugador}\nEquipo: ${this.equipoJugador}\nRitmo: ${this.ritmo}\nRegate: ${this.regate}\nTiro: ${this.tiro}\nPase: ${this.pase}\nFisico: ${this.fisico}\nDefensa: ${this.defensa}`)}
}


//Objetos creados
const jugadorLeonelMessi = new Jugador ("Leonel Messi", "Paris Saint-Germain", 91, 96, 92, 89, 77, 43);
const jugadorCristianoRonaldo = new Jugador ("Cristiano Ronaldo", "Manchester United", 90, 85, 90, 81, 83, 34);
const jugadorRaheemSterling = new Jugador ("Raheem Sterling", "Manchester City", 95, 89, 91, 87, 76, 30);
const jugadorPhilFoden = new Jugador ("Phil Foden", "Manchester City", 84, 90, 87, 91, 73, 66);
const jugadorViniciusJunior = new Jugador ("Vinicius Junior", "Real Madrid", 99, 95, 87, 84, 56, 42);


//Se le pide al usuario un jugador a elegir
let entradaJugador = prompt(`${nombreUsuario}, te pediremos a continuacion un jugador de futbol, tienes para elegir estos 5 jugadores:\nLeonel Messi \nCristiano Ronaldo \nRaheem Sterling \nPhil Foden \nVinicius Junior`);


//Se hace el if para ver si el prompt ingresado no es igual a cadena vacia y a la vez si coincide con algun jugador, si coincide, se imprimen sus estadisticas y su estadistica total
if(entradaJugador != "" && entradaJugador == "Leonel Messi"){
jugadorLeonelMessi.imprimirJugador();
alert(`Estadistica total de tu jugador: ${jugadorLeonelMessi.promedioEstadisticas(this.totalEstadisticas)}`);
    }else if(entradaJugador != "" && entradaJugador == "Cristiano Ronaldo"){
        jugadorCristianoRonaldo.imprimirJugador();
        alert(`Estadistica total de tu jugador: ${jugadorCristianoRonaldo.promedioEstadisticas()}`);
    }else if(entradaJugador != "" && entradaJugador == "Raheem Sterling"){
        jugadorRaheemSterling.imprimirJugador();
        alert(`Estadistica total de tu jugador: ${jugadorRaheemSterling.promedioEstadisticas()}`);
    }else if(entradaJugador != "" && entradaJugador == "Phil Foden"){
        jugadorPhilFoden.imprimirJugador();
        alert(`Estadistica total de tu jugador: ${jugadorPhilFoden.promedioEstadisticas()}`);
    }else if(entradaJugador != "" && entradaJugador == "Vinicius Junior"){
        jugadorViniciusJunior.imprimirJugador();
        alert(`Estadistica total de tu jugador: ${jugadorViniciusJunior.promedioEstadisticas()}`);
    }else{
    console.log("Jugador no valido o caracter(es) no valido(s)")
    }


alert(`Nos vemos pronto, ${nombreUsuario}`);