const contenedorImagen = document.getElementById("fulImgBox"),
      imagenCompleta = document.getElementById("fulImg");

function mostrarImagenCompleta(urlImagen) {
    contenedorImagen.style.display = "flex";
    imagenCompleta.src = urlImagen;
}

function ocultarImagenCompleta() {
    contenedorImagen.style.display = "none";
}

