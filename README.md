# Mapa interactivo de propuestas por provincia (prototipo)

Sitio estático: no necesita servidor, base de datos ni compilación.

## Archivos
- `index.html`: la página (mapa por provincias, filtros, búsqueda, compartir y QR).
- `datos.js`: **lo único que hay que editar**: provincias, tipos de obra y propuestas (en la versión actual los montos y plazos son ILUSTRATIVOS).
- `mapa.js`: contornos de las 13 provincias (generado de límites provinciales abiertos; no editar).
- `ilustraciones.js`: imágenes referenciales por tipo de obra (SVG propio). Para una foto real, agregar `imagen: "img/foto.jpg"` en la propuesta.
- `logo.jpg`: logo de la campaña.
- `vercel.json` y `GUIA_PUBLICAR_VERCEL.md`: configuración y guía para publicar.

## Ver el prototipo en tu computadora
Doble clic en `index.html` (el QR necesita internet). O, desde esta carpeta:
`python -m http.server 8765` y abrir http://127.0.0.1:8765

## Agregar o editar una propuesta
En `datos.js`, copiar un bloque de `window.PROPUESTAS` y cambiar:
`titulo`, `tipo` (uno de `window.TIPOS`), `alcance` (`"provincia"` o `"region"`),
`provincias` (ids como `"puno"`, `"sanroman"`), `fase`, `descripcion`, `monto` (millones de soles, número), `plazo` (meses, número), `fuente`.
Regla: en la versión final **solo cifras validadas por el equipo técnico**; las actuales son ilustrativas.

## Quitar el aviso de prototipo
`datos.js` → `window.CONFIG.demo = false` (y reemplazar los montos y plazos ilustrativos por datos validados).

## Publicar (resumen)
- Vercel: subir la carpeta a un repositorio (o `vercel` desde esta carpeta) y elegir "Other" como framework, sin comando de build.
  Verificar los términos del plan gratuito (Hobby) para uso de campaña.
- Alternativas gratuitas: Cloudflare Pages, GitHub Pages.
- Con la URL definitiva, el QR de la página ("Mostrar QR") ya apunta a ella; para imprimir, descargar un QR estático de esa URL.
