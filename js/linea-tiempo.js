// ========== LINEA DE TIEMPO ============

// Creo un array de objetos con los acontecimientos de cada punto de la linea de tiempo

const acontecimientos = [
    {
        fecha: "1981",
        titulo: "Comienzos con Pride",
        categoria: "Trayectoria",
        imagen: "img/biografia/biografia-2.jpg",
        descripcion: "Sade Adu comienza a cantar con la banda británica Pride y realiza presentaciones por distintos lugares del Reino Unido. Allí empieza a desarrollar su identidad musical."
    },
    {
        fecha: "1984",
        titulo: "Diamond Life",
        categoria: "Álbum",
        imagen: "img/discografia/discografia-1.png",
        descripcion: "Sale su álbum debut, que incluye canciones como Smooth Operator y Your Love Is King. El disco marca el inicio de su éxito internacional."
    },
    {
        fecha: "1986",
        titulo: "Primer Grammy",
        categoria: "Trayectoria",
        imagen: "img/legado/legado-2.jpeg",
        descripcion: "Sade gana el Grammy a Mejor Artista Nuevo, un reconocimiento importante en los comienzos de su carrera."
    },
    {
        fecha: "1992",
        titulo: "Love Deluxe",
        categoria: "Álbum",
        imagen: "img/discografia/discografia-4.png",
        descripcion: "Se publica uno de sus álbumes más reconocidos, que contiene canciones como No Ordinary Love y Kiss of Life."
    },
    {
        fecha: "2000",
        titulo: "Lovers Rock",
        categoria: "Álbum",
        imagen: "img/discografia/discografia-5.png",
        descripcion: "Después de ocho años sin publicar un álbum de estudio, la banda regresa con un nuevo trabajo que incluye By Your Side."
    },
    {
        fecha: "2010",
        titulo: "Soldier of Love",
        categoria: "Álbum",
        imagen: "img/discografia/discografia-6.png",
        descripcion: "Publican su sexto álbum de estudio, diez años después de Lovers Rock. Representa una nueva etapa musical para la banda."
    },
    {
        fecha: "2011",
        titulo: "Bring Me Home Tour",
        categoria: "Gira",
        imagen: "img/giras/giras-5.jpg",
        descripcion: "Gira internacional con 106 paises, incluyendo su primera visita a Argentina."
    },
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