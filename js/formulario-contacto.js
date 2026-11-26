// FORMULARIO DE CONTACTO

// Seleccionamos el formulario.
const formContacto = document.querySelector("#formContacto");


// Detectamos cuando el usuario intenta enviar el formulario.
formContacto.addEventListener("submit", function(event) {

    // Evitamos que el formulario se envíe automáticamente.
    event.preventDefault();

    // Obtenemos los valores ingresados por el usuario.
    const nombre = document.querySelector("#nombre").value.trim();
    const email = document.querySelector("#email").value.trim();
    const motivo = document.querySelector("#motivo").value;
    const mensaje = document.querySelector("#mensaje").value.trim();

    // Seleccionamos los espacios donde mostraremos los errores.
    const errorNombre = document.querySelector("#errorNombre");
    const errorEmail = document.querySelector("#errorEmail");
    const errorMotivo = document.querySelector("#errorMotivo");
    const errorMensaje = document.querySelector("#errorMensaje");

    const respuesta = document.querySelector("#respuestaFormulario");

    // Limpiamos los mensajes de validaciones anteriores.
    errorNombre.innerText = "";
    errorEmail.innerText = "";
    errorMotivo.innerText = "";
    errorMensaje.innerText = "";
    respuesta.innerText = "";

    // Variable que indica si el formulario es válido.
    let formularioValido = true;

    // VALIDACIÓN DEL NOMBRE
    if (nombre === "") {
        errorNombre.innerText = "Ingresá tu nombre.";
        formularioValido = false;
    }

    // VALIDACIÓN DEL CORREO
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Expresión regular (también conocida como RegEx). Patrón que permite comprobar si el mail ingresado cumple determinadas condiciones.
    /*
    Símbolo	Significado:
        ^	Indica el comienzo del texto.
        [^\s@]	Acepta cualquier carácter excepto espacios y @.
        +	Indica que debe haber uno o más caracteres.
        @	Exige que aparezca el símbolo arroba.
        \.	Exige que aparezca un punto.
        $	Indica el final del texto.
    */

    if (email === "") {
        errorEmail.innerText = "Ingresá tu correo electrónico.";
        formularioValido = false;
    } else if (!formatoEmail.test(email)) {
        errorEmail.innerText = "Ingresá un correo electrónico válido.";
        formularioValido = false;
    }

    // VALIDACIÓN DEL MOTIVO
    if (motivo === "") {
        errorMotivo.innerText = "Seleccioná un motivo de contacto.";
        formularioValido = false;
    }

    // VALIDACIÓN DEL MENSAJE
    if (mensaje === "") {
        errorMensaje.innerText = "Escribí un mensaje.";
        formularioValido = false;
    } else if (mensaje.length < 10) {
        errorMensaje.innerText = "El mensaje debe tener al menos 10 caracteres.";
        formularioValido = false;
    }

    // COMPROBAMOS SI EL FORMULARIO ES VÁLIDO
    if (formularioValido) {

        respuesta.innerText = "¡Gracias por escribirnos! Tu formulario fue validado correctamente.";

        // Limpiamos los campos del formulario.
        formContacto.reset();

    } else {

        respuesta.innerText = "Revisá los campos señalados antes de continuar.";

    }

});
