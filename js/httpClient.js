/**
 * Módulo httpClient.js
 * Contiene las funciones para realizar peticiones HTTP
 * Utiliza la API JSONPlaceholder como servidor de prueba
 */

// URL base del servidor de prueba
const BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Realiza una petición HTTP y registra información en consola
 * @param {string} url - URL de la petición
 * @param {string} metodo - Método HTTP (GET, POST, PUT, DELETE)
 * @param {object} datos - Datos para enviar (opcional)
 * @returns {object} - Objeto con la respuesta y metadatos
 */
export async function realizarPeticion(url, metodo, datos = null) {
    // Registrar tiempo de inicio
    const tiempoInicio = performance.now();
    
    // Configuración de la petición
    const opciones = {
        method: metodo,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    // Agregar body si hay datos (para POST y PUT)
    if (datos) {
        opciones.body = JSON.stringify(datos);
    }
    
    try {
        // Realizar la petición
        const respuesta = await fetch(url, opciones);
        
        // Calcular tiempo de respuesta
        const tiempoFin = performance.now();
        const tiempoRespuesta = (tiempoFin - tiempoInicio).toFixed(2);
        
        // Obtener los datos de la respuesta
        const datosRespuesta = await respuesta.json();
        
        // Registrar en consola (requerido por la práctica)
        console.log('=== INFORMACIÓN DE LA PETICIÓN ===');
        console.log('URL solicitada:', url);
        console.log('Método usado:', metodo);
        console.log('Tiempo de respuesta:', tiempoRespuesta + ' ms');
        console.log('Código de estado:', respuesta.status);
        console.log('Datos recibidos:', datosRespuesta);
        console.log('================================');
        
        // Retornar objeto con toda la información
        return {
            exito: true,
            url: url,
            metodo: metodo,
            codigo: respuesta.status,
            tiempo: tiempoRespuesta,
            datos: datosRespuesta
        };
        
    } catch (error) {
        // Manejar errores
        console.error('Error en la petición:', error.message);
        return {
            exito: false,
            url: url,
            metodo: metodo,
            codigo: 'Error',
            tiempo: '-',
            datos: null,
            error: error.message
        };
    }
}

/**
 * Petición GET - Obtener posts
 */
export function peticionGet() {
    return realizarPeticion(`${BASE_URL}/posts/1`, 'GET');
}

/**
 * Petición POST - Crear un nuevo post
 */
export function peticionPost() {
    const nuevoPost = {
        title: 'Post de prueba',
        body: 'Este es el contenido del post de prueba',
        userId: 1
    };
    return realizarPeticion(`${BASE_URL}/posts`, 'POST', nuevoPost);
}

/**
 * Petición PUT - Actualizar un post existente
 */
export function peticionPut() {
    const postActualizado = {
        id: 1,
        title: 'Post actualizado',
        body: 'Contenido actualizado del post',
        userId: 1
    };
    return realizarPeticion(`${BASE_URL}/posts/1`, 'PUT', postActualizado);
}

/**
 * Petición DELETE - Eliminar un post
 */
export function peticionDelete() {
    return realizarPeticion(`${BASE_URL}/posts/1`, 'DELETE');
}