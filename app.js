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


// **** iniciarApp - Versión ES6 ***** */
const iniciarApp = () => {
    // registrarDestino("Paris", "2024-06-15", "Avión");
    // registrarDestino("Londres", "2024-07-01", "Tren");
    // registrarDestino("New York", "2024-12-20", "Avión"); //Destino extra

    // Nuevos Registros
    // Registro normal
    registrarDestino("Paris", "2024-06-15", "Avión");

    //Registro con transporte nuevo (Bus)
    registrarDestino("Londres", "2024-07-01", "Bus", 2);

    //Registro con descuento (4 personas)
    registrarDestino("Tokio", "2024-10-10", "Avión", 4);


    mostrarItinerario();
};

iniciarApp();