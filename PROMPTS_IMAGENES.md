# Prompts para generar imágenes más realistas de las propuestas bandera

Las ilustraciones actuales son dibujos propios (SVG). Para un acabado fotográfico/«render», generar las imágenes con una herramienta de IA que ya usa el equipo (Ideogram, Kling AI, etc.) y colocarlas en `img/`.

## Cómo usarlas
1. Generar la imagen con el prompt (formato horizontal, relación 2,3:1 o 16:9; luego recortar a 1200 × 520 px).
2. Guardar como `img/bulevar.jpg` (JPG o WebP, **menos de 200 KB**).
3. En `datos.js`, en esa propuesta, agregar: `imagen: "img/bulevar.jpg"`.
   La tarjeta mostrará la foto en lugar del dibujo y la etiqueta «Imagen referencial».
4. Probar en el celular con datos móviles (las imágenes pesadas hacen lenta la página en Puno).

## Reglas para no inducir a error
- Siempre etiquetar como **«Recreación artística / imagen referencial»** (la página ya lo hace). No presentarlas como el diseño final de la obra.
- No usar fotos reales de obras de otros lugares ni de personas identificables.
- No poner logos de entidades públicas ni sellos oficiales.
- Evitar escenas con multitudes reconocibles o menores de edad.
- Guardar el prompt usado y la herramienta con la que se generó (para transparencia si lo piden).

## Bloque común de ambientación de Puno (pegar al final de cualquier prompt de ciudad)
ES: Ciudad altiplánica densa a unos 3 800 m de altitud: edificios de ladrillo caravista de 3 a 5 pisos, azoteas con fierros de construcción y tanques de agua, techos de calamina y policarbonato de colores (turquesa, azul, verde, naranja), antenas, calles con asfalto y señalización, cerros áridos de color marrón al fondo, cielo azul intenso con nubes blancas, luz clara de gran altitud. Sin texto, sin logos, sin marcas de agua, sin personas identificables.
EN: Dense high-altitude Andean city at about 3,800 m: exposed red-brick buildings of 3 to 5 floors, rooftops with rebar and water tanks, colorful corrugated-metal and polycarbonate roofs (teal, blue, green, orange), antennas, paved streets with road markings, barren brown hills in the background, deep blue sky with white clouds, clear high-altitude light. No text, no logos, no watermarks, no identifiable people.

## Cómo usar fotos de referencia (como las dos que enviaste)
- Úsalas **solo como referencia de composición y de tipo de ciudad** (modo «imagen de referencia» o «remix» con peso moderado, ~40–60 %). El resultado debe ser una recreación nueva, no una copia.
- **Recorta antes de subirlas**: quita logos, textos, barras de títulos, marcas de agua y a cualquier persona. En la captura del video del candidato hay rostro, logo con tachado y rótulos; en la foto de la avenida hay un logo de aniversario municipal. Súbelas ya recortadas, solo con la calle y la ciudad.
- Las fotos son de terceros (video de campaña y material municipal): no las publiques tal cual en la página; sirven únicamente como guía para generar la imagen.
- Mantén la etiqueta «Recreación artística · referencial».

## Prompts (en español; en inglés suelen dar mejores resultados, se incluye ambos)

### 1 · Bulevar turístico en el lago Titicaca (`bulevar.jpg`)
ES: Render arquitectónico realista de un bulevar turístico frente al lago Titicaca al atardecer, paseo peatonal de madera y piedra con barandas, farolas cálidas, miradores techados, áreas verdes, barcas de totora en el agua, familias caminando, montañas andinas al fondo, cielo naranja y violeta, estilo fotografía de concepto, sin texto ni logos.
EN: Realistic architectural concept render of a lakefront tourist boulevard on Lake Titicaca at sunset, wooden and stone promenade with railings, warm street lamps, covered viewpoints, green areas, traditional totora reed boats on the water, families walking, Andean mountains in the background, orange and purple sky, concept-art photography style, no text, no logos.

### 2 · Segunda circunvalación de Puno (`circunvalacion.jpg`)
Corrección: la circunvalación **no va junto al lago**. Es una vía que atraviesa o bordea la parte alta de la ciudad, entre barrios densos y cerros, como en las fotos de referencia. Hay dos versiones; la **A** sigue la primera foto (vía elevada) y la **B** la segunda (avenida a nivel).

**Versión A · Vía elevada (viaducto) — recomendada**
ES: Vista aérea con dron, de tarde, de una nueva vía elevada (viaducto) de cuatro carriles con separador central, sobre pilares de concreto, que cruza con una ligera curva un barrio denso de una ciudad altiplánica y asciende hacia los cerros. Pocos autos y buses circulando, luminarias a ambos lados, señalización horizontal nítida, un puente peatonal. Alrededor, edificios de ladrillo caravista de 3 a 5 pisos con tanques de agua y fierros en las azoteas, techos de calamina y policarbonato de colores (turquesa, azul, verde, naranja), calles laterales asfaltadas. Cerros áridos marrones al fondo; el lago, si aparece, solo como una franja lejana en el horizonte. Cielo azul intenso con nubes blancas, luz clara de gran altitud. Estilo fotografía de dron realista, composición simétrica con la vía al centro. Sin texto, sin logos, sin marcas de agua, sin personas identificables.
EN: Realistic drone aerial view, afternoon, of a new four-lane elevated roadway (viaduct) with a central median on concrete piers, gently curving through a dense neighborhood of a high-altitude Andean city and climbing toward the hills. A few cars and buses, street lamps on both sides, crisp lane markings, a pedestrian bridge. Around it, exposed red-brick buildings of 3 to 5 floors with water tanks and rebar on the rooftops, colorful corrugated-metal and polycarbonate roofs (teal, blue, green, orange), paved side streets. Barren brown hills in the background; the lake, if visible, only as a distant strip on the horizon. Deep blue sky with white clouds, clear high-altitude light. Photorealistic drone photography, symmetrical composition with the roadway at the center. No text, no logos, no watermarks, no identifiable people.

**Versión B · Avenida de circunvalación a nivel**
ES: Vista aérea con dron de una avenida de circunvalación recién pavimentada que recorre una ciudad altiplánica, dos carriles por sentido con doble línea amarilla central, líneas blancas, cruces peatonales cebra, veredas anchas con postes de alumbrado, algunos buses y camionetas. A los lados, edificios de ladrillo caravista y techos de colores, tanques de agua en azoteas. Al fondo, cerros marrones y, muy lejos, una franja de lago a la izquierda. Cielo azul con nubes blancas, luz de mediodía de gran altitud. Fotografía de dron realista, sin texto, sin logos, sin marcas de agua, sin personas identificables.
EN: Realistic drone aerial view of a freshly paved ring avenue running through a high-altitude Andean city, two lanes per direction with a double yellow center line, white lane lines, zebra crosswalks, wide sidewalks with street lamps, a few buses and pickup trucks. Exposed red-brick buildings and colorful roofs on both sides, water tanks on rooftops. Brown hills in the background and, far away, a strip of lake on the left. Blue sky with white clouds, midday high-altitude light. Photorealistic drone photography, no text, no logos, no watermarks, no identifiable people.

**Negativos sugeridos (si la herramienta los permite):** lago en primer plano, malecón, rascacielos, autopista de estilo europeo o norteamericano, vegetación tropical, nieve, multitudes, texto, logos.

### 3 · Agua y alcantarillado en San Román (`agua-sanroman.jpg`)
ES: Ilustración técnica-realista de una ciudad andina con obras de agua potable y alcantarillado: trabajadores con casco y chaleco instalando tubería en una zanja en la calle, un reservorio elevado al fondo, casas de ladrillo, cielo despejado de altiplano, estilo fotografía documental, sin texto ni logos.
EN: Technical-realistic illustration of an Andean city with water and sewer works: workers in hard hats and vests laying pipe in a street trench, an elevated water tank in the background, brick houses, clear highland sky, documentary photography style, no text, no logos.

### 4 · Agua potable al 100 % (`agua-potable.jpg`)
ES: Comunidad rural altiplánica con una familia usando un caño de agua potable instalado en su vivienda, casas de adobe con techo de calamina, reservorio en la ladera, cerros y cielo azul, luz natural cálida, estilo fotografía documental, sin texto ni logos.
EN: Rural Andean highland community where a family uses a safe tap water fixture at their home, adobe houses with corrugated roofs, a water reservoir on the hillside, mountains and blue sky, warm natural light, documentary photography style, no text, no logos.

### 5 · Carreteras interprovinciales (`carreteras.jpg`)
ES: Carretera asfaltada recién construida que serpentea entre cerros del altiplano peruano, con señalización vial, bermas y cunetas, un bus interprovincial y camiones de carga, praderas con ganado a lo lejos, luz de mañana, estilo fotografía de concepto, sin texto ni logos.
EN: Newly built asphalt highway winding through Peruvian altiplano hills, with road signs, shoulders and drainage ditches, an intercity bus and cargo trucks, grasslands with livestock in the distance, morning light, concept photography style, no text, no logos.

### 6 · Riego tecnificado, agro y ganadería (`riego.jpg`)
ES: Parcelas andinas en andenes con riego tecnificado por aspersión, canales revestidos de concreto, un reservorio en la parte alta, agricultores con sombrero revisando los cultivos, alpacas al fondo, cerros, luz natural, estilo fotografía documental, sin texto ni logos.
EN: Andean terraced fields with sprinkler irrigation, concrete-lined canals, a reservoir at the top, farmers in hats checking crops, alpacas in the background, mountains, natural light, documentary photography style, no text, no logos.

## Consejo de producción
- Genera 3 variantes por propuesta y elige la más sobria (menos «de película»): la gente desconfía de renders demasiado perfectos.
- Si no hay tiempo, las ilustraciones actuales ya cumplen para la demo.

## Estado de las imágenes (19 nov. 2026)
| Propuesta | Archivo | Estado |
|---|---|---|
| 1 · Bulevar turístico | `img/bulevar` | Listo (WebP 800 y 1200 px) |
| 2 · Segunda circunvalación | `img/circunvalacion` | Listo |
| 24 · Carreteras interprovinciales | `img/carreteras` | Listo |
| 25 · Riego tecnificado | `img/riego` | Listo |
| 23 · Agua potable al 100 % | — | **Rehacer**: `agua-potable.jpg` parece una foto real de zanja en una ciudad costera (arena, cables, personas identificables). No usar. Usar el prompt 4 con el bloque de ambientación de Puno. |
| 4 · Agua y alcantarillado San Román | — | **Falta** (prompt 3) |

Convención: guardar el original en el Drive; en la carpeta `img/` solo los WebP `nombre-800.webp` y `nombre-1200.webp` (16:9, menos de 150 KB). En `datos.js` poner `imagen: "img/nombre"` (sin extensión).
