function generarTabla() {

    let contenedor = document.getElementById("contenedorTabla");

    let contenido = "";

    for (let i = 1; i <= 10; i++) {
        contenido = contenido + "<p>3 x " + i + " = " + (3 * i) + "</p>";
    }

    contenedor.innerHTML = contenido;
}