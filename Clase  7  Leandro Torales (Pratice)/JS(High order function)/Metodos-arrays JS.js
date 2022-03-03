console.log("Metodos Arrays");

//Ejemplo 1
//Array de los objetos a calcular
const celulares = [
    {id: 1, titulo: "iPhone", precio: 1000, stock: 5, descuento: 25},
    {id: 2, titulo: "Samsung", precio: 2000, stock: 6, descuento: 20},
    {id: 3, titulo: "Motorola", precio: 800, stock: 7, descuento: 50},
    {id: 4, titulo: "LG", precio: 3000, stock: 18, descuento: 12},
]
//For each para iterar con cada objeto dentro del array y hacer un bloque de codigo con cada propiedad seleccionada
celulares.forEach(propiedadASeleccionar =>{
    console.log (propiedadASeleccionar.titulo);
    //console.log("Descuento de producto final: " + propiedadASeleccionar.precio * propiedadASeleccionar.descuento/100)... Ambiguo de sacar descuento de celulares []
    console.log("Descuento de producto: " + descuentoDeProductoFinal(propiedadASeleccionar.precio, propiedadASeleccionar.descuento));
})
//Funcion para calcular el precio final con descuento
function descuentoDeProductoFinal (precio, descuento){
    return precio - ((precio * descuento) / 100)
}