let suma = 0
//Se declara la variable que pide al usuario que ponga numeros a sumar
let entradaNumero = parseInt(prompt("Ingresar numeros a sumar, cuando decidas no querer ingresar mas digitos escribir: 000."));

//Se hace la condición si la entrada del usuario no tiene caracteres vacios y que sea a la vez mayor que 0
if (entradaNumero != "" && entradaNumero >= 0){
    //El while verifica si se escribió o no el "000" y hace su algoritmo
    while (entradaNumero != 000) {
        suma += entradaNumero;
        //Si el numero es ingresado correctamente se repite el ciclo
        entradaNumero = parseInt(prompt("Ingresar numeros a sumar, cuando decidas no querer ingresar mas digitos escribir: 000."));
    }
    //Si es menor que 0 el numero ingresado, se rompe el ciclo
}else if (entradaNumero < 0){
    console.log(`La suma solo se hace con numeros positivo, el numero ingresado fue: ${entradaNumero}`);
}else{
    console.log(`Caracter no valido`);
}
//Se imprime el valor por consola
console.log(`La suma de los digitos ingresados es: ${suma}`);