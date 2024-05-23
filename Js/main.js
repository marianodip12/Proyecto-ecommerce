//variables 
let totalCompra = 0;
let opcion;
let totalimp =0;


// Se arma una estructura repetitiva para ingresar  la opcion del usuario   en base a un menu que este tiene como objetivo sumar la compra total como si fuera un carrito 
while (true) {
    //solicitamos al usuario que ingrese una de estas opciones 
    opcion = prompt("Por favor, elige una opcion (procesador, memoria ram, ventilador, motherboard, gabinete, disco duro, mouse, teclado, auriculares, monitor o finalizar):");

    // Armo el menu 
    switch (opcion) {
        case "procesador":
        case "memoria ram":
        case "ventilador":
        case "motherboard":
        case "gabinete":
        case "disco duro":
        case "mouse":
        case "teclado":
        case "auriculares":
        case "monitor":
            // en la variable totalcompra llamo a la funcion  producto  para preguntar cuanto cuesta  y almaceno y sumo el valor
            totalCompra += producto();
            break;

            // salir del programa
        case "finalizar":
            console.log("Programa finalizado.");
            //llamo a la funcion total impuesto
            totalimpuestos();
            console.log("El costo total de su compra es: " + totalimp);
            
            break;
        default:
            console.log("Opcion no vaida. Por favor, elige una opción valida (procesador, memoria ram, ventilador, motherboard, gabinete, disco duro, mouse, teclado, auriculares, monitor o finalizar).");
            break;
    }

    // Control finalizar
    if (opcion === "finalizar") {
        break;
    }
}

// defino el producto  verifico que sea un entero y lanzo la llamada  a escribir el numero
function producto() {
    let precioProducto = parseInt(prompt("¿Cuanto cuesta el producto?"));
    return precioProducto;
}
//en la variable totalimp pongo los datos almacenados de totalcompra y los multiplico por el 21 %
function totalimpuestos (){
    totalimp=totalCompra*1.21;
 
}