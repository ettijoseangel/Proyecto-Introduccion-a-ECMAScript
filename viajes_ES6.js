// viajes_ES6.js - Versión Moderna (ES6)

// CONSTante de tipo Array porque la referencia no cambia
const destinos = [];

// Funcion flecha y export
export const registrarDestino = (destino, fecha, transporte) => {
    const nuevoViaje = {
        // Si la propiedad y el valor se llaman igual, solo se pone UNO (Shorthand)
        destino,
        fecha,
        transporte,
        costo: calcularCosto(destino, transporte)
    };

    destinos.push(nuevoViaje);
};

// let porque costoBase sí se va a reasignar
const calcularCosto = (destino, transporte) => {
    let costoBase = 0;

    // Usar objetos para los costos es más limpio que muchos 'if'
    const preciosDestino = {
        "Paris": 500,
        "Londres": 400,
        "New York": 600
    };

    costoBase = preciosDestino[destino] || 0;

    if (transporte === "Avion") costoBase += 200;
    if (transporte === "Tren") costoBase += 100;

    return costoBase;
};

export const mostrarItinerario = () => {
    console.log("--- ITINERARIO DE VIAJES ---");
    // Usamos forEach en vez del ciclo 'for' tradicional
    destinos.forEach(viaje => {
        // Template Literals con comillas invertidas
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Costo: ${viaje.costo}`);
        console.log("---------------------------");
    });
};
