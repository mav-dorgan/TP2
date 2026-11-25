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

        //appendChild inserta el elemento dentro del elemento que ya tenemos en HTML, en este caso, inserta cada div dentro de #eventosLineaTiempo
        eventosLineaTiempo.appendChild(evento);

    });
}

generarLineaTiempo ();

