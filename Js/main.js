
//variables 
let totalCompra = 0;
let opcion;
let totalimp =0;
class Producto {
    constructor(categoria, codigo, nombre, importe, descripcionprod) {
        this.categoria = categoria;
        this.codigo = codigo;
        this.nombre = nombre;
        this.importe = importe;
        this.descripcionprod = descripcionprod;
    }
}
const productos = [];





// Se arma una estructura repetitiva para ingresar  la opcion del usuario   en base a un menu que este tiene como objetivo sumar la compra total como si fuera un carrito 
while (true) {
    let opcion = prompt("Ingrese su login como usuario o admin");

    switch (opcion) {
        case "admin":
            while (true) {
                let opcionadm = prompt("Menu:\n1-Agregar Producto \n2-Modificar Producto \n3-Eliminar Producto \n4-Buscar Producto \n5-Salir");

                switch (opcionadm) {
                    case "1":
                        agregarProducto();
                        console.log("Producto Agregado");
                        break;
                    case "2":
                        modificarProducto()
                        console.log("Producto Modificado");
                        break;
                    case "3":
                        EliminarProducto()
                        break;
                    case "4":
                        console.log("buscar");
                        break;
                    case "5":
                        console.log("Vuelta al menu principal");
                        break;
                    default:
                        prompt("Opción no válida. Por favor, elige una opción válida Menu:\n1-Agregar Producto \n2-Modificar Producto \n3-Eliminar Producto \n4-Buscar Producto \n5-Salir");
                        break;
                }

                if (opcionadm === "5") {
                    break; 
                }
            }
            break;

        case "usuario":
            // Funciones del usuario + Menu
            break;

        case "finalizar":
            console.log("Programa finalizado");
            break;

        default:
            console.log("Opción no válida. Por favor, elige una opción válida (admin, usuario, finalizar).");
            break;
    }

    if (opcion === "finalizar") {
        break; 
    }
}


/*

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

*/  




//Seccion producto admin




function agregarProducto() {
    let categoria = prompt("Ingrese la categoría del Producto");
    let codigo = prompt("Ingresa el código del producto:");
    let nombre = prompt("Ingresa el nombre del producto:");
    let importe = prompt("Ingresa el importe:");
    let descripcionprod = prompt("Ingrese la descripción del producto:");

    let nuevoProducto = new Producto(categoria,codigo, nombre, parseInt(importe), descripcionprod);
    productos.push(nuevoProducto);
    console.table(productos);
}


function modificarProducto() {
    
    let codigo = prompt("Ingrese el código del producto que desea modificar:");

    
    let productoEncontrado = productos.find(producto => producto.codigo === codigo);
    
    if (productoEncontrado) {
        let nuevaCategoria = prompt("Ingrese la nueva categoría del Producto");
        let nuevoCodigo = prompt("Ingrese el nuevo codigo del producto:");
        let nuevoNombre = prompt("Ingrese el nuevo nombre del producto:");
        let nuevoImporte = prompt("Ingrese el nuevo importe:");
        let nuevaDescripcion = prompt("Ingrese la nueva descripción del producto:");

        productoEncontrado.categoria = nuevaCategoria;
        productoEncontrado.codigo= nuevoCodigo;
        productoEncontrado.nombre = nuevoNombre;
        productoEncontrado.importe = parseInt(nuevoImporte);
        productoEncontrado.descripcionprod = nuevaDescripcion;

        
    } else {
        console.log("No se encontro ningun producto con el codigo proporcionado.");
    }
}


function EliminarProducto() {
    while (true) {
        let codigo = prompt("Ingrese el código del producto que desea eliminar:");

        let productoEncontrado = productos.find(producto => producto.codigo === codigo);

        if (productoEncontrado) {
            let confirmacion = prompt(`Estas seguro que deseas eliminar el\n producto: "${productoEncontrado.nombre}" \n codigo: "${codigo}" (s/n)`);

            if (confirmacion.toLowerCase() === 's') {
                let indiceProducto = productos.findIndex(producto => producto.codigo === codigo);
                let productoEliminado = productos.splice(indiceProducto, 1)[0];
                console.log("Producto encontrado y eliminado");
                console.log("Producto eliminado:");
                console.log(productoEliminado); 
                return; 
            } else {
                console.log("El producto no fue eliminado.");
                return;
            }
        } else {
            console.log("Producto no encontrado");
        }
    }
}




// defino el producto  verifico que sea un entero y lanzo la llamada  a escribir el numero
/*function producto() {
    let precioProducto = parseInt(prompt("¿Cuanto cuesta el producto?"));
    return precioProducto;
}
//en la variable totalimp pongo los datos almacenados de totalcompra y los multiplico por el 21 %
function totalimpuestos (){
    totalimp=totalCompra*1.21;
 
}*/