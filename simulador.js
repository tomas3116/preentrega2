// Variables globales
let cepas = ["Malbec", "Cabernet Sauvignon", "Torrontés", "Syrah", "Bonarda"];
let regiones = ["Mendoza", "Salta", "La Rioja", "San Juan", "Patagonia"];

// Objetos simulando los vinos
const vinos = [
    { nombre: "Malbec Reserva", cepa: "Malbec", region: "Mendoza", precio: 1200, alcohol: 14 },
    { nombre: "Torrontés Clásico", cepa: "Torrontés", region: "Salta", precio: 800, alcohol: 12.5 },
    { nombre: "Cabernet Sauvignon Premium", cepa: "Cabernet Sauvignon", region: "San Juan", precio: 1500, alcohol: 13.5 },
    { nombre: "Syrah Joven", cepa: "Syrah", region: "Patagonia", precio: 1000, alcohol: 13 },
    { nombre: "Bonarda Gran Reserva", cepa: "Bonarda", region: "La Rioja", precio: 900, alcohol: 12 }
];

// Función para recomendar un vino basado en la cepa
function recomendarVinoPorCepa(cepaSeleccionada) {
    let vinoEncontrado = false;
    for (let i = 0; i < vinos.length; i++) {
        if (vinos[i].cepa.toLowerCase() === cepaSeleccionada.toLowerCase()) {
            alert(`Te recomendamos el vino ${vinos[i].nombre} de la región de ${vinos[i].region}. Precio: $${vinos[i].precio}.`);
            vinoEncontrado = true;
            break;
        }
    }
    if (!vinoEncontrado) {
        alert("Lo siento, no tenemos recomendaciones para esa cepa.");
    }
}

// Capturamos la entrada del usuario para la cepa
let cepaIngresada = prompt("Ingrese una cepa de vino (Malbec, Torrontés, Cabernet Sauvignon, Syrah, Bonarda):");
recomendarVinoPorCepa(cepaIngresada);

// Agregamos un ciclo para mostrar todos los vinos disponibles
let listaVinos = "Aquí tienes la lista de todos los vinos disponibles:\n";
for (let i = 0; i < vinos.length; i++) {
    listaVinos += `Vino: ${vinos[i].nombre}, Cepa: ${vinos[i].cepa}, Región: ${vinos[i].region}, Precio: $${vinos[i].precio}, Alcohol: ${vinos[i].alcohol}%\n`;
}
alert(listaVinos);
