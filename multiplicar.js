function generarTabla() {

    let contenedor = document.getElementById("contenedorTabla");

    let contenido = "";

    for (let i = 1; i <= 10; i++) {
        contenido = contenido + "<p>3 x " + i + " = " + (3 * i) + "</p>";
    }

    contenedor.innerHTML = contenido;
}

let titulo = document.getElementById("titulo");
let contenedor = document.getElementById("cuerpo-tabla");

function generarTablas(valor) {
    let contenido = "";

    for (let i = 1; i <= 10; i++) {
        let resultado = i * valor;

        contenido += `
      <tr>
        <td>${valor} × ${i}</td>
        <td>${resultado}</td>
      </tr>
    `;
    }
    titulo.innerText = `Tabla del ${valor}`;
    contenedor.innerHTML = contenido;
}

document.getElementById('btnProbar').addEventListener('click', () => {
    let input = document.getElementById('inputTabla');
    let numeroUsuario = input.value;

    if (numeroUsuario !== "" && numeroUsuario > 0) {
        generarTablas(parseInt(numeroUsuario));
        document.querySelector('.glass-card').classList.add('active');

        setTimeout(() => {
            document.querySelector('.glass-card').classList.remove('active');
        }, 600);
        input.value = "";
        input.placeholder = `Última: tabla del ${numeroUsuario}`;
    } else {
        alert("Necesitas ingresar un número positivo para poder calcular la tabla.");
        input.value = "";
        input.placeholder = "Ej: 3";
        titulo.innerText = "Tabla del...";
        contenedor.innerHTML = "";
    }
});