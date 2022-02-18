//Se declaran las variables 
let password = parseInt(prompt("Ingresar password: "));
let trys = 5

//Switch para en caso de si la contraseña es correcta se rompe el ciclo y muestra alert
switch(password){
    case 911:
        alert("Bienvenido");
        default:
        //Si la contraseña no es correcta, se acciona el ciclo con while hasta que se acaben los intentos
        while(password != 911 && trys >0){ 
            alert("password incorrecta");
            password = parseInt(prompt("Ingresar una password valida, tienes "+`${trys}`+" mas"));
            trys--;
        }
            //Si los intentos son menores o iguales que 0, se acaban los intentos y los muestra por alert
            if (trys <= 0){
                alert("Se terminaron los intentos");
            }
}