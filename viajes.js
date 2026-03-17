// viajes.js - Version Base 

// Array para guardar los destinos
var destinos = [];

// Función para registrar un destino de viaje
function registrarDestino(destino, fecha, transporte){
    var nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        costo: calcularCosto(destino, transporte)
    };

    destinos.push(nuevoViaje);
}

// Función para calcular el costo del viaje
function calcularCosto(destino, transporte){
    var costoBase = 0;

    if (destino === "Parin"){
        costoBase = 500;
    } else if (destino === "Londres"){
        costoBase = 400;
    } else if (destino === "New York"){
        costoBase = 600;
    }

    if (transporte === "Avión"){
        costoBase += 200;
    } else if (transporte === "Tren"){
        costoBase += 100;
    }

    return costoBase;
}

// Función para mostrar el itinerario
function mostrarItinerario(){
    for (var i = 0; i < destinos.length; i++){
        var viaje = destinos[i];
        console.log("Destino: " + viaje.destino);
        console.log("Fecha: " + viaje.fecha);
        console.log("Transporte: " + viaje.transporte);
        console.log("Costo: $" + viaje.costo);
        console.log("---------------------------");
    }
}
