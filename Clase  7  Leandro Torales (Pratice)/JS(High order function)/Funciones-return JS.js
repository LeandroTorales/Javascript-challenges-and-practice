//Ejemplo 1
function regresaFuncion(){
    return() => {console.log("que onda")}
}
regresaFuncion()();


//Ejemplo 2
function multiplicarPor(multiplicador){
    // return n => {return n * multiplicador}... tambien es valido pero mejor hacer con return implicito
    return n => n * multiplicador
}
const multiplicarPor10 = multiplicarPor(10);
//n => n * 10
console.log(multiplicarPor10(8));


//Ejemplo 3
function saludo(nombre) {
    return() => console.log("Hola como estas, " + nombre)
}
const saludarALeandro = saludo("Leandro");
saludarALeandro();
const saludarAPepito = saludo("Pepito");
saludarAPepito()