console.log("Funciones por parametro");


//Ejemplo 1
const nombresClaseJS = ["Rodrigo", "Agustin", "Leandro", "Pepito", "Esmeralda", "Luz"];
function transformarNombres(nombres, transformador) {
    let nuevosNombresEnMayusculas = [];
    for (const nombre of nombres) {
        // console.log(transformador(nombre))...
        nuevosNombresEnMayusculas.push(transformador(nombre))
    }
    return nuevosNombresEnMayusculas
}
//Imprimir los nombres en mayusculas con el parametro referenciado por fuera
const mayusculas = cadena => cadena.toUpperCase();
const nuevosNombresEnMayusculasOtroArrayPeroConScopeGlobal = transformarNombres(nombresClaseJS, mayusculas);
console.log(nuevosNombresEnMayusculasOtroArrayPeroConScopeGlobal.join("_"));
//Transformarlo en minusculas pero con parametro que se referencia a si mismo
const nuevosNombresEnMinusculasOtroArrayPeroConScopeGlobal = transformarNombres(nombresClaseJS, m => m.toLowerCase());
console.log(nuevosNombresEnMinusculasOtroArrayPeroConScopeGlobal.join("_"));

