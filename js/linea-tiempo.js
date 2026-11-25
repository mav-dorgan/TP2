// ========== LINEA DE TIEMPO ============

// Creo un array de objetos con los acontecimientos de cada punto de la linea de tiempo

const acontecimientos = [
    {
        fecha: "1984",
        titulo: "Diamond Life",
        categoria: "Álbum",
        imagen: "img/discografia/diamond-life.jpg",
        descripcion: "El álbum debut de Sade, que alcanzó reconocimiento internacional."
    },
    {
        fecha: "1985",
        titulo: "Promise",
        categoria: "Álbum",
        imagen: "img/discografia/promise.jpg",
        descripcion: "El segundo álbum de estudio de Sade."
    },
    {
        fecha: "1992",
        titulo: "Love Deluxe",
        categoria: "Álbum",
        imagen: "img/discografia/love-deluxe.jpg",
        descripcion: "Un álbum que consolidó la identidad musical de Sade."
    }
];

// Genero los acontecimientos en la linea de tiempo como botones

const eventosLineaTiempo = document.querySelector ('#eventosLineaTiempo')

function generarLineaTiempo() {

    // Recorro el array de objetos y por cada uno de ellos creo un div y agrego las clases correspondientes de CSS
    acontecimientos.forEach (function(acontecimiento){
        const evento = document.createElement ('div');
        evento.classList.add('eventoLineaTiempo');

        //modifico el HTML para que se cree un boton dentro del div creado con el año y el nombre del evento.
        evento.innerHTML = `
            <button class="botonAcontecimiento" type="button">
                <span class="fechaEvento">${acontecimiento.fecha}</span>
                <span class="nombreEvento">${acontecimiento.titulo}</span>
            </button>`;



        //Capturo el boton recien creado
        const boton = evento.querySelector ('.botonAcontecimiento');
        
        //al hacerle click ejecuto una funcion que abre la ventana emergente y la completa con la informacion correspondiente
        boton.addEventListener ('click', function () {
            abrirVentana(acontecimiento);
        })

        //appendChild inserta el elemento dentro del elemento que ya tenemos en HTML, en este caso, inserta cada div dentro de #eventosLineaTiempo
        eventosLineaTiempo.appendChild(evento);

    });
}

generarLineaTiempo ();

// ========== VENTANA EMERGENTE ================

//Capturo los elementos del HTML donde se creara la ventana con informacion

const ventanaAcontecimiento = document.querySelector("#ventanaAcontecimiento");
const categoriaAcontecimiento = document.querySelector("#categoriaAcontecimiento");
const imagenAcontecimiento = document.querySelector("#imagenAcontecimiento");
const tituloAcontecimiento = document.querySelector("#tituloAcontecimiento");
const fechaAcontecimiento = document.querySelector("#fechaAcontecimiento");
const descripcionAcontecimiento = document.querySelector("#descripcionAcontecimiento");

//Creo una funcion que me muestre la información del acontecimiento seleccionado

function abrirVentana (acontecimiento) {
    categoriaAcontecimiento.innerText = acontecimiento.categoria; //categoria (album/gira/reconocimiento)
    imagenAcontecimiento.src = acontecimiento.imagen; //src de la imagen
    imagenAcontecimiento.alt = acontecimiento.titulo; //texto alternativo de la imagen
    tituloAcontecimiento.textContent = acontecimiento.titulo; //titulo del evento
    fechaAcontecimiento.textContent = acontecimiento.fecha; //fecha del evento
    descripcionAcontecimiento.textContent = acontecimiento.descripcion; //descripcion del evento

    //se modifica el display de la ventana emergente que originalmente se encontraba como 'display: none;' en el CSS
    ventanaAcontecimiento.style.display = "flex";
}

// ======= CERRAR LA VENTANA =============

//Selecciono el boton para cerrar la ventana
const cerrarModal = document.querySelector ('#cerrarModal');

//"cierro" (escondo) la ventana al hacer click en la cruz
cerrarModal.addEventListener ('click', function() {
    ventanaAcontecimiento.style.display = 'none';
});

//lo mismo sucede al hacer click fuera de la tarjeta
ventanaAcontecimiento.addEventListener('click', function(evento) {

    if (evento.target === ventanaAcontecimiento) {
        ventanaAcontecimiento.style.display = 'none';
    }
});