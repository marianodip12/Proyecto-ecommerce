const tableBody = document.querySelector("table tbody");
const importeTotalCarrito = document.querySelector("td#importeTotalCarrito");
const btnComprar = document.querySelector("button#btnComprar");
let carrito = JSON.parse(localStorage.getItem("carritoCompras")) || [];
//calculo total del carrito
function calcularTotalCarrito() {
    if (carrito.length > 0) {
        let TotalCarrito = carrito.reduce((acc, prod) => acc + prod.precio, 0);
        importeTotalCarrito.textContent = `$ ${TotalCarrito.toLocaleString("es-AR")}`;
    } else {
        importeTotalCarrito.textContent = "$ 0.00";
    }
}
//ARMADO DE TABLA
function armarTablaCarrito({ id, imagen, nombreproducto, precio }) {
    return `<tr data-id="${id}">
                <td class="imagen-carrito"><img src="${imagen}"></td>
                <td>${nombreproducto}</td>
                <td>$ ${precio.toLocaleString("es-AR")}</td>
                <td class="quitar-carrito" title="Clic para quitar del carrito">❌</td>
            </tr>`;
}
//Funcion para recorrer carrito  y armar tabla y  dar la opcion de eliminar  los productos
function cargarProductosDelCarrito() {
    tableBody.innerHTML = "";

    if (carrito.length > 0) {
        carrito.forEach((producto) => {
            tableBody.innerHTML += armarTablaCarrito(producto);
        });
        calcularTotalCarrito();
        Eliminar();

    } else {
        calcularTotalCarrito();
    }
}

//Funcion para eliminar Productos
function Eliminar(){
    const QuitarBotones = document.querySelectorAll('.quitar-carrito');
    QuitarBotones.forEach((boton, id) => {
        boton.addEventListener('click', () => {
            EliminarProducto(id);
        });
    });
}
function EliminarProducto(id) {
    carrito.splice(id, 1); 
    localStorage.setItem('carritoCompras', JSON.stringify(carrito)); 
    cargarProductosDelCarrito(); }


cargarProductosDelCarrito(); 
//Eventos

// Click para finalizar la compra
/*
btnComprar.addEventListener("click", () => {
    const Compra = document.querySelector("div#mensajeComprar");
   
    tableBody.innerHTML = "";
    importeTotalCarrito.textContent = "$ 0.00";
    localStorage.removeItem("carritoCompras");
    carrito = [];
});
*/
btnComprar.addEventListener("click", ()=> {

    Swal.fire({
        title: "Finalizar compra",
        text: "¿Deseas confirmar la compra actual?",
        icon: "question",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Confirmar"
    })
    .then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("carritoCompras")
            carrito.length = 0 // redireccionar al usuario a HOME.
            Swal.fire({
                icon: 'success',
                text: 'Compra finalizada con éxito.'
            })
        }
        const Compra = document.querySelector("div#mensajeComprar");
   
        tableBody.innerHTML = "";
        importeTotalCarrito.textContent = "$ 0.00";
        localStorage.removeItem("carritoCompras");
        carrito = [];
    })
   
})


