const formulario = document.getElementById('portfolioForm');
const estado = document.getElementById('estadoFormulario');
const boton = document.getElementById('botonEnviar');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    
    boton.disabled = true;
    iconoCarga.style.display = "inline-block";
    textoBoton.textContent = "Enviando...";
    estado.textContent = "";

    const datos = new FormData(formulario);

    fetch("https://formspree.io/f/xnjdlkry", {
        method: 'POST',
        body: datos,
        headers: { 'Accept': 'application/json' }
    })
    .then(respuesta => {
        if (respuesta.ok) {
            estado.textContent = "¡Enviado con éxito!";
            estado.style.color = "green";
            formulario.reset();
        } else {
            throw new Error();
        }
    })
    .catch(() => {
        estado.textContent = "Error al enviar.";
        estado.style.color = "red";
    })
    .finally(() => {
        boton.disabled = false;
        iconoCarga.style.display = "none";
        textoBoton.textContent = "Enviar mensaje";
    });
});