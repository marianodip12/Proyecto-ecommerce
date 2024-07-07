const divContenedor = document.getElementById("divContenedor")
const btnCarrito = document.getElementById("carrito")
const inputSearch = document.getElementById("inputSearch")
const spanCarrito = document.getElementById("productosEnCarrito")

const carrito = JSON.parse(localStorage.getItem("carritoCompras")) ?? []
const Productos=[]
const URLproductos = "https://668af2bc2c68eaf3211e466a.mockapi.io/Productos" // aplicación backend

//const URLproductos = "js/productos.json" //url para funcion fetch


function mostrarMensajeToast(mensaje, color) {
    Toastify({
        text: mensaje,
        duration: 3500,
        // close: true,
        style: { background: color, }
        }).showToast();
}



//Funcion para crear las card 
function retornarCardHTML(Productos) {
    return `<div class="div-card">
                 <div class="imagen"><img src="${Productos.imagen}"></div>
                <div class="producto">${Productos.nombreproducto}</div>
                <div class="importe">$ ${Productos.precio}</div>
                <button id="${Productos.id}" class="add-to-cart">Agregar</button>
            </div>`
}


    async function obtenerProductos() {
        try {
            const response = await fetch(URLproductos)
            const data = await response.json()
            Productos.push(...data)
            cargarProductos(Productos)
        } catch (error) {
            divContenedor.innerHTML = retornarCardError()        
        }
    }

/*
function obtenerProductos() {
    // Petición FETCH para traer los productos
    fetch(URLproductos)
    .then((response)=> response.json())
    .then((datos)=> Productos.push(...datos) )
    .then(()=> cargarProductos(Productos))
    .catch((error)=> {
        console.error(error)
        divContenedor.innerHTML = retornarCardError()
    })
} */

function cargarProductos(array) {
    if (array.length > 0) {
        divContenedor.innerHTML = ""
        array.forEach((Productos)=> {
            divContenedor.innerHTML += retornarCardHTML(Productos)
        })
        activarEventosClick()
        // Funcion para saber si hay elementos en el carrito  y actualiza el 

        carrito.length > 0 && actualizarTotalCarrito()
    } 
}






function actualizarTotalCarrito() {
    spanCarrito.textContent = carrito.length
}

function activarEventosClick() {
    const botonesAgregar = document.querySelectorAll("button.add-to-cart")

    if (botonesAgregar.length > 0) {

        botonesAgregar.forEach((boton)=> {

            boton.addEventListener("click", ()=> {

                const productoSeleccionado = Productos.find((producto)=> producto.id == boton.id)

                carrito.push(productoSeleccionado)

                actualizarTotalCarrito()

                //Guardo el producto en local y convierto en json
                localStorage.setItem("carritoCompras", JSON.stringify(carrito))

            })
        })
    }
}


obtenerProductos(Productos)

//Funcion para buscar un producto
inputSearch.addEventListener("keyup", (e)=> { 
    if (e.key === "Enter") {
        let resultado = Productos.filter((producto)=> producto.nombreproducto.toLowerCase().includes(inputSearch.value.toLowerCase()))
        localStorage.setItem("ultimaBusqueda", inputSearch.value)

        if (resultado.length > 0) {
            cargarProductos(resultado)
        }
    }
})





btnCarrito.addEventListener("click", ()=> {
    carrito.length > 0 ? location.href = "checkout.html" : alert("⛔️ Cargue al menos un producto en el carrito.")
})

btnCarrito.addEventListener("mousemove", ()=> {
    if (carrito.length > 0) {
        btnCarrito.title = "Productos en carrito: " + carrito.length
    }
})

//Evento para filtrar por categoria
document.addEventListener("DOMContentLoaded", () => {
    cargarProductos(Productos);
    const FiltroCategoria = document.querySelectorAll(".Filtro-Categoria");

    FiltroCategoria.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const categoria = e.target.getAttribute("data-category");
            const FiltroProducto = Productos.filter(producto => producto.categoria === categoria);
            cargarProductos(FiltroProducto);
        });
    });
});

