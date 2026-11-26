
// GALERÍA INTERACTIVA - DISCOGRAFÍA

// Seleccionamos todas las portadas de los álbumes.
const portadasAlbum = document.querySelectorAll(".portadaAlbum");

// Seleccionamos el título y el contenido de la ventana modal.
const modalAlbumTitulo = document.querySelector("#modalAlbumTitulo");
const modalAlbumContenido = document.querySelector("#modalAlbumContenido");
const modalAlbumFecha = document.querySelector("#modalAlbumFecha");

// Recorremos todas las portadas.
portadasAlbum.forEach(function(portada) {

    // Detectamos cuando el usuario hace clic en una portada.
    portada.addEventListener("click", function() {

        // Obtenemos el álbum seleccionado.
        const albumSeleccionado = portada.getAttribute("data-album");

        // Comprobamos qué álbum fue seleccionado.
        switch (albumSeleccionado) {

            case "diamond-life":
                modalAlbumTitulo.innerText = "Diamond Life";
                modalAlbumFecha.innerText = "1984";
                modalAlbumContenido.innerHTML = `
                    <p>El álbum debut de Sade presentó una combinación de soul, jazz y R&B que definió gran parte de la identidad sonora del grupo.</p>
                    <p>Su lanzamiento marcó el comienzo de una trayectoria internacional y obtuvo un importante reconocimiento comercial y crítico.</p>
                `;
                break;

            case "promise":
                modalAlbumTitulo.innerText = "Promise";
                modalAlbumFecha.innerText = "1985";
                modalAlbumContenido.innerHTML = `
                    <p>En su segundo álbum, Sade profundizó el sonido elegante y sofisticado de su debut, incorporando composiciones de atmósferas envolventes.</p>
                    <p>La producción consolidó la popularidad internacional del grupo y alcanzó el primer puesto de las listas de álbumes del Reino Unido y Estados Unidos.</p>
                `;
                break;

            case "stronger-than-pride":
                modalAlbumTitulo.innerText = "Stronger Than Pride";
                modalAlbumFecha.innerText = "1988";
                modalAlbumContenido.innerHTML = `
                    <p>Este álbum presenta una sonoridad más sutil y atmosférica, con una mayor presencia de ritmos suaves y arreglos delicados.</p>
                    <p>Representó una nueva etapa en la evolución musical del grupo, manteniendo su estilo característico.</p>
                `;
                break;

            case "love-deluxe":
                modalAlbumTitulo.innerText = "Love Deluxe";
                modalAlbumFecha.innerText = "1992";
                modalAlbumContenido.innerHTML = `
                    <p>Una producción introspectiva que explora emociones como el amor, el deseo y la vulnerabilidad a través de sonidos envolventes.</p>
                    <p>Se caracteriza por sus arreglos atmosféricos y una producción musical cuidada, que le otorgan una identidad particular dentro de la discografía.</p>
                `;
                break;

            case "lovers-rock":
                modalAlbumTitulo.innerText = "Lovers Rock";
                modalAlbumFecha.innerText = "2000";
                modalAlbumContenido.innerHTML = `
                    <p>Después de varios años sin publicar un álbum de estudio, Sade regresó con una producción de sonido cálido e íntimo, influenciada por el reggae y el folk.</p>
                    <p>Este trabajo mostró una faceta más acústica y cercana del grupo.</p>
                `;
                break;

            default:
                modalAlbumTitulo.innerText = "Soldier of Love";
                modalAlbumFecha.innerText = "2010";
                modalAlbumContenido.innerHTML = `
                    <p>El sexto álbum de estudio presenta una sonoridad más intensa, con ritmos marcados y una combinación de elementos electrónicos y orgánicos.</p>
                    <p>Su lanzamiento llegó después de una extensa pausa discográfica y reafirmó la vigencia musical del grupo.</p>
                `;
                break;
        }
    });

});
