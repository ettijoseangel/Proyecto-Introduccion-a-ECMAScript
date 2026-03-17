// app.js - Punto de entrada
// Importar las funciones del archivo viajes_ES6.js
import { registrarDestino, mostrarItinerario } from "./viajes_ES6";


// **** iniciarApp - Versión Base ***** */
// function iniciarApp() {
        // Ejemplo de cómo registrar destinos
//     registrarDestino("Paris", "2024-06-15", "Avión");
//     registrarDestino("Londres", "2024-07-01", "Tren");

       // Mostrar el itinerario de los viajes
//     mostrarItinerario();
// }

      // Ejecutar la aplicación
// iniciarApp();


// Declarar las funciones con base en ES6
const iniciarApp = () => {
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("Londres", "2024-07-01", "Tren");
    registrarDestino("New York", "2024-12-20", "Avión"); //Destino extra

    mostrarItinerario();
};

iniciarApp();