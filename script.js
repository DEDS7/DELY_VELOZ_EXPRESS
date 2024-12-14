// Funcionalidad de agregar al carrito
const botonesAgregar = document.querySelectorAll('.agregar-carrito');

botonesAgregar.forEach((boton) => {
    boton.addEventListener('click', function() {
        const producto = this.getAttribute('data-producto');
        alert(`${producto} ha sido agregado al carrito.`);
    });
});

// Funcionalidad del formulario de contacto
const formulario = document.getElementById('formulario-contacto');
formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    alert(`Gracias ${nombre}, hemos recibido tu mensaje.`);
    formulario.reset();  // Limpiar el formulario
});
