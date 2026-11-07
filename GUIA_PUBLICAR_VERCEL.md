# Guía para publicar el mapa de propuestas en Vercel (para la reunión)

Tiempo estimado: 10 a 15 minutos la primera vez. Es un sitio estático: no necesita compilar nada.

## Antes de publicar (2 minutos)

1. **Es una demo con cifras ilustrativas.** La página ya dice «PROTOTIPO» en la barra negra y en el pie. Si la publicas, cualquiera con el enlace la verá. No la compartas por fuera de la reunión.
2. La página y el archivo `vercel.json` ya piden a los buscadores **no indexar** (`noindex`), para que no aparezca en Google.
3. Usa un nombre de proyecto poco adivinable, por ejemplo `mapa-puno-demo-7k3` (el nombre forma parte de la dirección).
4. Revisa los términos del plan gratuito de Vercel (Hobby): según sus condiciones, está pensado para uso personal no comercial. Una campaña política podría quedar fuera. Para una demo interna de pocos días suele ser tolerable, pero **verifícalo**. Alternativas con plan gratuito para sitios estáticos: Cloudflare Pages y GitHub Pages (ver al final).

## Opción A: Vercel CLI (la más rápida, no necesita GitHub)

Requisitos: Node.js instalado (en esta PC ya está: v22). Cuenta gratuita en vercel.com.

Abre una terminal **dentro de la carpeta `web_propuestas`** y ejecuta, uno por uno:

```bash
npm install -g vercel
```

```bash
vercel login
```
(se abre el navegador; entra con tu correo o GitHub)

```bash
vercel
```
Responde así:
- *Set up and deploy?* → `Y`
- *Which scope?* → tu cuenta personal
- *Link to existing project?* → `N`
- *Project name?* → `mapa-puno-demo-7k3` (o el que elijas)
- *In which directory is your code located?* → `./`
- Si pregunta por framework o configuración: deja los valores por defecto (es un sitio estático, sin comando de build).

Al terminar te da una dirección de **vista previa** (`...vercel.app`). Para la dirección final:

```bash
vercel --prod
```

Esa dirección es la que usarás en el celular y en el QR.

> Nota: las direcciones de *preview* de Vercel pueden pedir inicio de sesión si tu cuenta tiene «Deployment Protection» activada. Para la reunión usa la de producción (`--prod`) y ábrela antes en un celular sin sesión iniciada para confirmar que carga.

## Opción B: GitHub + Vercel (mejor si habrá cambios frecuentes)

1. Crea un repositorio en GitHub (privado está bien) y sube el contenido de `web_propuestas`.
2. En vercel.com → **Add New → Project** → importa el repositorio.
3. *Framework Preset*: **Other**. Deja en blanco *Build Command* y *Output Directory*. Pulsa **Deploy**.
4. Cada vez que cambies `datos.js` y subas el cambio (`git push`), Vercel republica solo.

## Después de publicar: lista de verificación (5 minutos)

- [ ] Abrir la dirección en un **celular con datos móviles** (no con el Wi‑Fi de tu PC).
- [ ] Tocar 3 provincias distintas y comprobar que el mapa y las tarjetas cambian.
- [ ] Probar los filtros (chips) y el buscador.
- [ ] Pulsar **Mostrar QR** y escanearlo con otro celular: debe abrir la misma página.
- [ ] Pulsar **Compartir enlace**.
- [ ] Probar en Chrome (Android) y Safari (iPhone) si es posible.
- [ ] Verificar que se vea la barra negra «PROTOTIPO».

## Para la reunión

- Lleva la dirección y el QR **impresos o en pantalla** (puedes mostrar el QR desde la propia página en el proyector).
- Ten un **plan B**: abrir `index.html` desde la carpeta local (doble clic), o capturas de pantalla, por si falla el internet.
- Deja el aviso «PROTOTIPO» activo (`demo: true` en `datos.js`) mientras las cifras sean ilustrativas.

## Cuando haya datos reales

1. En `datos.js` reemplaza montos, plazos y propuestas por los validados por el equipo técnico y el candidato.
2. Pon `window.CONFIG.demo = false` para quitar el aviso de prototipo.
3. Cambia las ilustraciones por fotos reales si las hay: agrega `imagen: "img/nombre.jpg"` en la propuesta y guarda el archivo en una carpeta `img/` (pesos pequeños, menos de 200 KB cada una).
4. Quita `noindex` de `index.html` y de `vercel.json` **solo si decides que sea público**.
5. Confirma con el JNE qué se debe reportar de una web de campaña y qué pasa en la veda (cierre interno propuesto: 2 de diciembre, 23:59 h).
6. Para impresos (afiches, volantes), genera un **QR estático** con la dirección definitiva. Evita los «QR dinámicos gratis» que caducan.

## Alternativas gratuitas (misma carpeta)

- **Cloudflare Pages:** *Workers & Pages → Create → Pages → Upload assets*; arrastra la carpeta. Sin Git ni línea de comandos.
- **GitHub Pages:** sube la carpeta a un repositorio y activa Pages en *Settings → Pages*.
- **Netlify Drop:** arrastrar la carpeta en app.netlify.com/drop; es la forma más rápida de tener una dirección en 1 minuto. Revisa sus condiciones de uso vigentes.

## Problemas frecuentes

| Síntoma | Causa probable | Solución |
|---|---|---|
| La página sale sin mapa o sin propuestas | Falta subir `mapa.js`, `datos.js` o `ilustraciones.js` | Subir **toda** la carpeta, no solo `index.html` |
| El QR no aparece | El celular no tiene internet (la librería del QR se descarga) | Probar con conexión; plan B: mostrar el QR desde la PC |
| Pide iniciar sesión | Es una URL de *preview* con protección | Usar la URL de producción (`vercel --prod`) |
| Cambié `datos.js` y no se ve | Caché del navegador | Recargar sin caché (Ctrl+F5) o volver a desplegar |
