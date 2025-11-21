/**
 * main.js
 * Archivo principal que maneja la interacción con el DOM
 * Importa las funciones del módulo httpClient
 */

import { peticionGet, peticionPost, peticionPut, peticionDelete } from './httpClient.js';

// Referencias a elementos del DOM
const btnGet = document.getElementById('btnGet');
const btnPost = document.getElementById('btnPost');
const btnPut = document.getElementById('btnPut');
const btnDelete = document.getElementById('btnDelete');
const resultado = document.getElementById('resultado');
const urlInfo = document.getElementById('urlInfo');
const metodoInfo = document.getElementById('metodoInfo');
const codigoInfo = document.getElementById('codigoInfo');
const tiempoInfo = document.getElementById('tiempoInfo');

/**
 * Actualiza la interfaz con los datos de la petición
 * @param {object} datos - Objeto con la información de la petición
 */
function actualizarUI(datos) {
    // Actualizar información de la petición
    urlInfo.textContent = datos.url;
    metodoInfo.textContent = datos.metodo;
    codigoInfo.textContent = datos.codigo;
    tiempoInfo.textContent = datos.tiempo + ' ms';
    
    // Mostrar resultado en el div
    if (datos.exito) {
        resultado.textContent = JSON.stringify(datos.datos, null, 2);
    } else {
        resultado.textContent = 'Error: ' + datos.error;
    }
}

/**
 * Muestra mensaje de carga mientras se procesa la petición
 */
function mostrarCargando() {
    resultado.textContent = 'Cargando...';
    urlInfo.textContent = '...';
    metodoInfo.textContent = '...';
    codigoInfo.textContent = '...';
    tiempoInfo.textContent = '...';
}

// Event Listeners para los botones
btnGet.addEventListener('click', async () => {
    mostrarCargando();
    const respuesta = await peticionGet();
    actualizarUI(respuesta);
});

btnPost.addEventListener('click', async () => {
    mostrarCargando();
    const respuesta = await peticionPost();
    actualizarUI(respuesta);
});

btnPut.addEventListener('click', async () => {
    mostrarCargando();
    const respuesta = await peticionPut();
    actualizarUI(respuesta);
});

btnDelete.addEventListener('click', async () => {
    mostrarCargando();
    const respuesta = await peticionDelete();
    actualizarUI(respuesta);
});

// Mensaje inicial en consola
console.log('Aplicación de prueba HTTP iniciada');
console.log('Usa los botones para realizar peticiones y observa la pestaña Network en DevTools');