# Simulación de Peticiones HTTP

## Descripción
Práctica de laboratorio para comprender y aplicar los conceptos de HTTP/HTTPS, métodos REST, códigos de estado y CORS desde el entorno del frontend.

## Tecnologías Utilizadas
- HTML5
- CSS3
- JavaScript (ES6 Modules)
- Fetch API

## Estructura del Proyecto
```
/proyecto
├── index.html          # Estructura HTML principal
├── css/
│   └── styles.css      # Estilos de la página
├── js/
│   ├── main.js         # Lógica principal y manejo del DOM
│   └── httpClient.js   # Módulo de peticiones HTTP
└── README.md           # Documentación
```

## Servidor de Prueba
Se utiliza [JSONPlaceholder](https://jsonplaceholder.typicode.com/) como API REST de prueba.


## Resultados de las Peticiones HTTP

|--------|----------------------------------------------|------------------|------------------|--------------------------------|
| Método | URL                                          | Código de Estado | Tiempo Respuesta | Observaciones CORS             |
|--------|----------------------------------------------|------------------|------------------|--------------------------------|
| GET    | https://jsonplaceholder.typicode.com/posts/1 | 200 OK           | ~150ms           | Access-Control-Allow-Origin: * |
| POST   | https://jsonplaceholder.typicode.com/posts   | 201 Created      | ~200ms           | Access-Control-Allow-Origin: * |
| PUT    | https://jsonplaceholder.typicode.com/posts/1 | 200 OK           | ~180ms           | Access-Control-Allow-Origin: * |
| DELETE | https://jsonplaceholder.typicode.com/posts/1 | 200 OK           | ~160ms           | Access-Control-Allow-Origin: * |
|--------|----------------------------------------------|------------------|------------------|--------------------------------|

> **Nota:** Los tiempos de respuesta pueden variar según la conexión a internet.

---

## Análisis de Headers

### Request Headers (Ejemplo GET)
```
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
Connection: keep-alive
Host: jsonplaceholder.typicode.com
Origin: http://127.0.0.1:5500
```

### Response Headers (Ejemplo GET)
```
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Cache-Control: max-age=43200
```

---

## Códigos de Estado Observados

|--------|-----------------------|----------------------------------------|
| Código | Significado           | Cuándo ocurre                          |
|--------|-----------------------|----------------------------------------|
| 200    | OK                    | Petición GET, PUT, DELETE exitosa      |
| 201    | Created               | Petición POST exitosa (recurso creado) |
| 400    | Bad Request           | Datos mal formados en la petición      |
| 500    | Internal Server Error | Error en el servidor                   |
|--------|-----------------------|----------------------------------------|

---

## Política CORS

JSONPlaceholder permite peticiones desde cualquier origen gracias a su header:
```
Access-Control-Allow-Origin: *
```
Esto significa que cualquier dominio puede realizar peticiones a esta API sin restricciones CORS.

---

## Instrucciones de Ejecución

1. Clonar el repositorio
2. Abrir con VS Code
3. Descargar la extensión Live Server
4. Click derecho en cualquier parte dentro del archivo index.html
5. Click en "Open with Live Server"/"Abrir con Live Server"
6. Abrir DevTools (F12) para observar Network y Console

---

## Autor
José Encalada

## Fecha
21 de Noviembre del 2025