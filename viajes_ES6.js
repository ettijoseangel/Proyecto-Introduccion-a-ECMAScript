// viajes_ES6.js - Versión Moderna (ES6)

// CONSTante de tipo Array porque la referencia no cambia
const destinos = [];

// Funcion flecha y export
// Modificacion: 'pasajeros' agregado al proyecto
export const registrarDestino = (destino, fecha, transporte, pasajeros = 1) => {
    const costoTotal = calcularCosto(destino, transporte, pasajeros)

    const nuevoViaje = {
        // Si la propiedad y el valor se llaman igual, solo se pone UNO (Shorthand)
        destino,
        fecha,
        transporte,
        pasajeros,
        // costo: calcularCosto(destino, transporte)
        costo: costoTotal
    };

    destinos.push(nuevoViaje);
};

// Funcion privada (no se exporta) para logica interna
const calcularCosto = (destino, transporte, pasajeros) => {
    let costoBase = 0;

    const preciosDestino = {
        "Paris": 500,
        "Londres": 400,
        "New York": 600,
        "Tokio": 800, // Nuevo destino añadido
        "Oaxaca": 70 // Nuevo destino añadido
    };

    costoBase = preciosDestino[destino] || 300; // 300 por defecto si no existe

    //Costos de transporte
    const suplementoTransporte = {
        "Avión": 200,
        "Tren": 100,
        "Bus": 50 // Nueva opción
    };

    costoBase += (suplementoTransporte[transporte] || 0);

    let total = costoBase * pasajeros;

    // Lógica de descuento: 10% si son 3 o más personas
    if (pasajeros >= 3){
        total *= 0.9;
        console.log(`¡Descuentazo de grupo aplicado para el viaje a ${destino}!`);
    }

    return total;

};

// // let porque costoBase sí se va a reasignar
// const calcularCosto = (destino, transporte) => {
//     let costoBase = 0;

//     // Usar objetos para los costos es más limpio que muchos 'if'
//     const preciosDestino = {
//         "Paris": 500,
//         "Londres": 400,
//         "New York": 600
//     };

//     costoBase = preciosDestino[destino] || 0;

//     if (transporte === "Avion") costoBase += 200;
//     if (transporte === "Tren") costoBase += 100;

//     return costoBase;
// };

// export const mostrarItinerario = () => {
//     console.log("--- ITINERARIO DE VIAJES ---");
//     // Usamos forEach en vez del ciclo 'for' tradicional
//     destinos.forEach(viaje => {
//         // Template Literals con comillas invertidas
//         console.log(`Destino: ${viaje.destino}`);
//         console.log(`Fecha: ${viaje.fecha}`);
//         console.log(`Transporte: ${viaje.transporte}`);
//         console.log(`Costo: ${viaje.costo}`);
//         console.log("---------------------------");
//     });
// };

export const mostrarItinerario = () => {
    console.log("=== Itinerario de Viajes 3.0 ===");

    //Uso de forEach y Template Literals
    destinos.forEach(({ destino, fecha, transporte, pasajeros, costo }) => {
        console.log(`
            Destino: ${destino},
            Fecha: ${fecha},
            Transporte: ${transporte},
            Pasajeros: ${pasajeros},
            Costo Total: ${costo.toFixed(2)}
            -----------------------`
        );
    });
};