
// CARRUSEL - IDENTIDAD VISUAL

// Selecciona el carrusel de la página de identidad visual.
const carruselSade = document.querySelector("#carruselSade");

// Comprueba que el carrusel exista en la página.
if (carruselSade) {

    // Inicializa el componente Carousel de Bootstrap.
    const miCarrusel = new bootstrap.Carousel(carruselSade, {
        interval: 3000, //cambia de imagen cada 5000 milisegundos (5 segundos)
        pause: "hover", //el carrusel se pausa al pasar el mouse por encima
        wrap: true //al llegar a la última imagen, vuelve a la primera (ciclo continuo)
    });

    miCarrusel.cycle();
}
