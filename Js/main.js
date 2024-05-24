
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
class Carrito{
    constructor(){
        this.productos=[];
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
                        BuscarProducto()
                        
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
            while (true) {
                let opcionadm = prompt("Menu:\n1-Mostrar Productos \n2-Agregar Producto al carrito al carrito \n4-Mostrar carrito  \n5-finalizar compra \n6-Salir ");

                switch (opcionadm) {
                    case "1":
                        mostrarProductosAgregados()
                        break;
                    case "2":
                        BuscarProducto()
                        
                        break;
                    case "3":
                        Agregarproductoalcarrito()
                        break;
                    case "4":
                        mostrarCarrito()
                        
                        break;
                    case "5":
                        finalizarCompra();
                        
                        break;
                    case "6":
                        console.log("Vuelta al menu principal");
                        break;
                    default:
                        prompt("Opción no válida. Por favor, elige una opción válida Menu:\n1-Agregar Producto \n2-Modificar Producto \n3-Eliminar Producto \n4-Buscar Producto \n5-Salir");
                        break;
                }

                if (opcionadm === "6") {
                    break; 
                }
            }
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

//Seccion producto admin


function agregarProducto() {
    let categoria = prompt("Ingrese la categoria del Producto");
    let codigo = prompt("Ingresa el codigo del producto:");
    let nombre = prompt("Ingresa el nombre del producto:");
    let importe = prompt("Ingresa el importe:");
    let descripcionprod = prompt("Ingrese la descripcion del producto:");

    let nuevoProducto = new Producto(categoria,codigo, nombre, parseInt(importe), descripcionprod);
    productos.push(nuevoProducto);
    console.table(productos);
}


function modificarProducto() {
    
    let codigo = prompt("Ingrese el codigo del producto que desea modificar:");

    
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
        let codigo = prompt("Ingrese el codigo del producto que desea eliminar:");

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

function BuscarProducto() {
    while (true) {
        let codigo1 = prompt("Ingrese el codigo del producto que desea buscar (o escriba 'salir' para volver al menu principal):");
        
        if (codigo1.toLowerCase() === 'salir') {
            break;
        }
        
        let productoEncontrado = productos.find(producto => producto.codigo === codigo1);
        
        if (productoEncontrado) {
            console.log("Producto encontrado:");
            console.table(productoEncontrado);
        } else {
            console.log("Producto no encontrado.");
        }
    }
}


//Seccion usuario

function mostrarProductosAgregados() {
    console.log("Productos agregados por el administrador:");
    if (productos.length === 0) {
        console.log("No se han agregado productos aún.");
    } else {
        productos.forEach(producto => {
            console.table(`Categoría: ${producto.categoria}, Código: ${producto.codigo}, Nombre: ${producto.nombre}, Importe: ${producto.importe}, Descripción: ${producto.descripcionprod}`);
        });
    }
}

function Agregarproductoalcarrito() {
    let codigo = prompt("Ingrese el código del producto que desea agregar al carrito (o escriba 'salir' para volver al menú principal):");
    
    if (codigo.toLowerCase() === 'salir') {
        console.log("Volviendo al menú principal...");
        return;
    }
    
    let productoEncontrado = productos.find(producto => producto.codigo === codigo);
    
    if (productoEncontrado) {
        carrito.agregarProducto(productoEncontrado);
    } else {
        console.log("Producto no encontrado.");
    }
}


function mostrarCarrito() {
    console.log("Contenido del carrito:");
    if (carrito.productos.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        carrito.productos.forEach(producto => {
            console.table(producto);
        });
    }
}
function finalizarCompra() {
    // Mostrar el contenido del carrito
    console.log("Contenido del carrito:");
    if (carrito.productos.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        carrito.productos.forEach(producto => {
            console.table(producto);
        });
    }
    
    // Calcular el importe total
    let importeTotal = 0;
    carrito.productos.forEach(producto => {
        importeTotal += producto.importe;
    });

    // Mostrar el importe total
    console.log("Importe total de la compra: $" + importeTotal.toFixed(2));
    
    // Limpiar el carrito
    carrito.productos = [];
}



//en la variable totalimp pongo los datos almacenados de totalcompra y los multiplico por el 21 %
function totalimpuestos (){
    totalimp=totalCompra*1.21;
 
}