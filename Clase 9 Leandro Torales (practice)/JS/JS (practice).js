console.log("Eventos practice");

// const btn = document.getElementById("boton");


//TRES FORMAS DE HACER LOS MISMO EN EVENTOS ESCUCHANDO UN EVENTO
    // btn.addEventListener("click", onClickHandler)
    // function onClickHandler(){
    //     console.log("hola");
    // }
    // btn.addEventListener("click", () => {console.log("hola")});
    // btn.onclick = () => {{console.log("hola")}};


//Se captura el input de la entrada y se envia a traves del button (btn), cuando se captura el valor del input se hace una nueva lista y se le hace append
    // btn.addEventListener("click", () => {
    //     const input = document.getElementById("entradaInput")
    //     capturarInput = input.value

    //     const nuevoElemento = document.createElement("li");
    //     nuevoElemento.innerText = capturarInput

    //     const append = document.getElementById("lista");
    //     append.appendChild(nuevoElemento)
    // })


//Cancelar el evento establecido a un elemento con el preventDefault()
const link = document.getElementById("send");

link.addEventListener("click", clickEnEnviar)

function clickEnEnviar(e){
    e.preventDefault()
    console.log("Oprimido en el enlace");
}



