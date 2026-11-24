// CARRUSEL - IDENTIDAD VISUAL

// Selecciona el carrusel de la página de identidad visual.
const carruselSade = document.querySelector("#carruselSade");

// Comprueba que el carrusel exista en la página.
if (carruselSade) {

    // Inicializa el componente Carousel de Bootstrap.
    const miCarrusel = new bootstrap.Carousel(carruselSade, {
        interval: 3000 // cambia de imagen cada 3 segundos
    });

    // Inicia el cambio automático de las imágenes.
    miCarrusel.cycle();
}



