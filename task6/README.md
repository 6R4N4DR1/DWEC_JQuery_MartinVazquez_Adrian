# Tarea 6

Este proyecto consiste en un sitio web con dos páginas (`index.html` y `jquery.html`) que muestran información obtenida de una API en formato de tarjetas. La diferencia entre ambas páginas es que `index.html` usa JavaScript y `jquery.html` usa jQuery para conectarse a la API. Ambas páginas implementan el efecto de desplazamiento infinito (infinite scroll).

## Configuración del Proyecto

1. Clona el repositorio.
2. Instala las dependencias con `npm install`.
3. Ejecuta el comando `npm run build:css` para compilar los estilos de TailwindCSS.

## Estructura del Proyecto

- `fuente/`
  - `css/`
    - `estilos.css`
    - `output.css`
  - `img/`
  - `index.html`
  - `jquery.html`
  - `js/`
    - `script.js`
    - `script-jquery.js`

## Uso de la API

El proyecto se conecta a una API para obtener datos y mostrarlos en formato de tarjetas. Puedes usar cualquier API gratuita disponible en [RapidAPI](https://rapidapi.com/).

## Desplazamiento Infinito

El efecto de desplazamiento infinito se implementa cargando más tarjetas cuando el usuario llega al final de la página.

## Tecnologías Usadas

- TailwindCSS
- JavaScript
- jQuery
- Node.js
- Parcel

## Licencia

Este proyecto está licenciado bajo la licencia ISC.
