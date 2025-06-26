# IndumentariasOnline - Documentación del Sistema

## Descripción

Este sistema es un backend Node.js/Express para una tienda de indumentaria, con persistencia en Supabase (PostgreSQL). Implementa operaciones CRUD y módulos estadísticos para análisis de ventas y productos.

---

## Endpoints principales

### Productos más vendidos

- **GET** `/estadisticas/productos-mas-vendidos?top=N`
- Devuelve los N productos más vendidos.
- **Respuesta exitosa:**

```json
{
  "ok": true,
  "count": 2,
  "payload": [
    { "id": 1, "nombre": "Remera Dev", "total_vendido": 20 },
    { "id": 2, "nombre": "Buzo Node", "total_vendido": 15 }
  ]
}
```

- **Caso no feliz (parámetro inválido):**

```json
{
  "ok": false,
  "message": "El parámetro debe ser un número entero positivo.",
  "payload": null
}
```

### Ventas agrupadas por mes

- **GET** `/estadisticas/ventas-por-mes`
- Devuelve el total de ventas agrupado por mes.
- **Respuesta exitosa:**

```json
{
  "ok": true,
  "payload": [{ "mes": "2025-05", "total_ventas": 28040.5 }]
}
```

---

## Pruebas manuales

Ver archivo `src/tests/estadisticas.http` y `src/tests/productos.http` para ejemplos de casos felices y no felices.

---

## Configuración

- Variables de entorno y rutas configuradas en `server/config/config.js`.
- Base de datos: Supabase (PostgreSQL).

---

## Cómo correr el servidor

1. Instalar dependencias:
   ```sh
   npm install
   ```
2. Iniciar el servidor:
   ```sh
   npm run dev
   ```
3. Probar los endpoints usando el archivo `.http` o Postman.

---

## Cómo correr el cliente (frontend)

1. Ir a la carpeta del cliente:
   ```sh
   cd client
   ```
2. Instalar dependencias:
   ```sh
   npm install
   ```
3. Iniciar el servidor de desarrollo:
   ```sh
   npm run dev
   ```
4. Acceder a la app en el navegador (por defecto en http://localhost:5173 o el puerto que indique Vite).

---

## Cómo correr el servidor con Docker Compose

1. Desde la raíz del proyecto, ejecuta:
   ```sh
   docker compose up --build
   ```
2. El backend estará disponible en http://localhost:3001 y el frontend en http://localhost:5173
3. Para detener los servicios:
   ```sh
   docker compose down
   ```

---

## Observaciones

- El middleware de errores y los payloads están estandarizados para facilitar el consumo desde frontend.
- El sistema utiliza patrones de diseño como Singleton (para configuración y conexión a la base) y separación de responsabilidades (controller, service, repository).
- Los endpoints estadísticos cumplen con los requisitos de casos de uso de complejidad moderada/alta, transformando y agrupando datos para análisis.
- La arquitectura es fácilmente extensible para agregar nuevos módulos o integraciones.
- La documentación y los tests manuales permiten validar el comportamiento esperado y facilitan la entrega académica.
