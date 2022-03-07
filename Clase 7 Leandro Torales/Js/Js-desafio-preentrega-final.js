console.log("Pre entrega final(Final)");


//Ciclo que pide un nombre de usuario y lo imprime en consola y se guarda en una variable
cicloInput = function () {
    let nombreUsuario = prompt("Bienvenido, dinos tu nombre por favor");
    while(nombreUsuario == ""){
        console.log("Cadena vacia no es un nombre");
        nombreUsuario = prompt("Hola, dinos tu nombre por favor");
    }
    return () => nombreUsuario;
}
let nombreUsuario = cicloInput()();
console.log(`Nombre de usuario: ${nombreUsuario}`);


//Ciclo que pide un input sobre un jugador valido, si es valido lo imprime por consola y lo guarda en una variable
cicloInputJugador = function(){
    let inputJugador = prompt(`${nombreUsuario}, tienes 5 jugadores para escoger, estas son las opciones:\nLeonel Messi \nCristiano Ronaldo \nRaheem Sterling \nPhil Foden \nVinicius Junior`);
    while (inputJugador == "" && inputJugador == "Leonel Messi" && inputJugador != "Cristiano Ronaldo" && inputJugador != "Raheem Sterling" && inputJugador != "Phil Foden" && inputJugador != "Vinicius Junior"){
        console.log("Jugador o caracter no valido");
        inputJugador = prompt(`${nombreUsuario}, escoge un jugador valido, estas son las opciones:\nLeonel Messi \nCristiano Ronaldo \nRaheem Sterling \nPhil Foden \nVinicius Junior`);
    }
    return () => inputJugador;
}
let inputJugador = cicloInputJugador()();
console.log(`Jugador ingresado: ${inputJugador}`);


//Array de objetos de jugadores
const almacenDeJugadores = [
    {nombreJugador: "Leonel Messi", equipoJugador: "Paris Saint-Germain", ritmo: 91, regate: 96, tiro: 92, pase: 89, fisico: 77, defensa: 43},
    {nombreJugador: "Cristiano Ronaldo", equipoJugador: "Manchester United", ritmo: 90, regate: 85, tiro: 90, pase: 81, fisico: 83, defensa: 34},
    {nombreJugador: "Raheem Sterling", equipoJugador: "Manchester City", ritmo: 95, regate: 89, tiro: 91, pase: 87, fisico: 76, defensa: 30},
    {nombreJugador: "Phil Foden", equipoJugador: "Manchester City", ritmo: 84, regate: 90, tiro: 87, pase: 91, fisico: 73, defensa: 66},
    {nombreJugador: "Vinicius Junior", equipoJugador: "Real Madrid", ritmo: 99, regate: 95, tiro: 87, pase: 84, fisico: 56, defensa: 42}
];


//Imprime por consola el objeto del array seleccionado en el inputJugador
const jSeleccionadoConsola = function(){
    return almacenDeJugadores.find(jugador => jugador.nombreJugador === inputJugador)
}
console.log(jSeleccionadoConsola());


//Array utilizado para pushear los objetos ingresados en el inputJugador 
almacenDeJugadoresPush = [];


//Condicional para comparar el inputJugador y si coincide con algun objeto del array, pushea el objeto en cuestión hacia el array vacio
switch(inputJugador){
    case "Leonel Messi":
        almacenDeJugadoresPush.push(almacenDeJugadores[0]);
        break;
    case "Cristiano Ronaldo":
        almacenDeJugadoresPush.push(almacenDeJugadores[1]);
        break;
    case "Raheem Sterling":
        almacenDeJugadoresPush.push(almacenDeJugadores[2]);
        break;
    case "Phil Foden":
        almacenDeJugadoresPush.push(almacenDeJugadores[3]);
        break;
    case "Vinicius Junior":
        almacenDeJugadoresPush.push(almacenDeJugadores[4]);
        break;
    default: "No es un jugador o caracter valido"
        break;
}
    

//Imprimir el array pusheado por consola
const iJugador = function(){
    for (let imprimirJugador of almacenDeJugadoresPush){
        console.log(`${nombreUsuario}, este fue el jugador que elegiste: "${imprimirJugador.nombreJugador}".\nEstas son las estadisticas de tu jugador en cuestión:\nEquipo: ${imprimirJugador.equipoJugador}\nRitmo: ${imprimirJugador.ritmo}\nRegate: ${imprimirJugador.regate}\nTiro: ${imprimirJugador.tiro}\nPase: ${imprimirJugador.pase}\nFisico: ${imprimirJugador.fisico}\nDefensa: ${imprimirJugador.defensa}`);
    }
}
iJugador();


//Confirm para modificar una estadistica en +1, se le pide un prompt para pedir que estadistica subir
jModificar = function(){
    let booleanModificar = confirm(`${nombreUsuario}, ¿Quieres modificar alguna estadistica?`);
    switch (booleanModificar) {
        case true:
            for (let imprimirJugador of almacenDeJugadoresPush){
                let inputEstadisticaModificar = prompt(`Puedes modificar estas estadisticas a +1:\nRitmo: ${imprimirJugador.ritmo}\nRegate: ${imprimirJugador.regate}\nTiro: ${imprimirJugador.tiro}\nPase: ${imprimirJugador.pase}\nFisico: ${imprimirJugador.fisico}\nDefensa: ${imprimirJugador.defensa}`)
                return() => inputEstadisticaModificar
            };
            break;
        case false:
            return() => console.log(`Nos vemos pronto, ${nombreUsuario} :)`);
    }
}
let booleanModificar = jModificar()();


//Condicionales para comparar el prompt de jModificar, si coincide con alguna estadistica la sube +1
if (booleanModificar == "Ritmo") {
    almacenDeJugadoresPush.forEach(propiedadASubir => {
        console.log("Estadistica escogida a subir +1: ritmo\nRitmo: " + subir1(propiedadASubir.ritmo))
    });
}else if(booleanModificar == "Regate"){
    almacenDeJugadoresPush.forEach(propiedadASubir => {
        console.log("Estadistica escogida a subir +1: regate\nRegate: " + subir1(propiedadASubir.regate))
    });
}else if(booleanModificar == "Tiro"){
    almacenDeJugadoresPush.forEach(propiedadASubir => {
        console.log("Estadistica escogida a subir +1: tiro\nTiro: " + subir1(propiedadASubir.tiro))
    });
}else if(booleanModificar == "Pase"){
    almacenDeJugadoresPush.forEach(propiedadASubir => {
        console.log("Estadistica escogida a subir +1: pase\nPase: " + subir1(propiedadASubir.pase))
    });
}else if(booleanModificar == "Fisico"){
    almacenDeJugadoresPush.forEach(propiedadASubir => {
        console.log("Estadistica escogida a subir +1: fisico\nFisico: " + subir1(propiedadASubir.fisico))
    });
}else if(booleanModificar == "Defensa"){
    almacenDeJugadoresPush.forEach(propiedadASubir => {
        console.log("Estadistica escogida a subir +1: defensa\nDefensa: " + subir1(propiedadASubir.defensa))
    });
}


//Funciones para subir las estadisticas +1
function subir1(ritmo){
    return ritmo = ritmo + 1
}
function subir1(regate){
    return regate = regate + 1
}
function subir1(tiro){
    return tiro = tiro + 1
}
function subir1(pase){
    return pase = pase + 1
}
function subir1(fisico){
    return fisico = fisico + 1
}
function subir1(defensa){
    return defensa = defensa + 1
}


console.log(almacenDeJugadoresPush);
console.log(`Cantidad de jugadores disponibles: ${almacenDeJugadores.length}`);