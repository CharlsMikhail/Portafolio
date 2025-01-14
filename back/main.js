function mostrarSeccion(id) {
    document.querySelectorAll('.seccion').forEach(seccion => {
        seccion.classList.remove('activa');
    });
    document.getElementById(id).classList.add('activa');
}

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío real del formulario (puedes eliminarlo si tienes un backend configurado)
    
    // Borra el contenido de los campos
    this.reset();

    // Opcional: Mensaje de confirmación
    alert("Gracias por contactarme. Tu mensaje ha sido enviado.");
});
