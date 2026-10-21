document.addEventListener("DOMContentLoaded", function() {
    let elementosPrecio = document.querySelectorAll('.precio');
    let sumaTotal = 0;

    elementosPrecio.forEach(elemento => {
        let valor = parseFloat(elemento.innerText) || 0;
        sumaTotal += valor;
    });

    document.getElementById('resultado-total').innerText = "$" + sumaTotal.toFixed(2);

});

document.addEventListener("DOMContentLoaded", function() {
    let elementosEncargados = document.querySelectorAll('.encargado');
    let conteoEncargados = {};

    elementosEncargados.forEach(elemento => {
        let nombre = elemento.innerText.trim();
        
        if (nombre !== "") {
            if (conteoEncargados[nombre]) {
                conteoEncargados[nombre]++;
            } else {
                conteoEncargados[nombre] = 1;
            }
        }
    });

    let htmlResultado = "<h3>Tareas por encargado:</h3><ul>";

    for (let nombre in conteoEncargados) {
        htmlResultado += `<li><b>${nombre}:</b> ${conteoEncargados[nombre]} cosas por hacer</li>`;
    }

    htmlResultado += "</ul>";

    let contenedorResumen = document.getElementById('resumen-encargados');
    if (contenedorResumen) {
        contenedorResumen.innerHTML = htmlResultado;
    }

});