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

## Prompts (en español; en inglés suelen dar mejores resultados, se incluye ambos)

### 1 · Bulevar turístico en el lago Titicaca (`bulevar.jpg`)
ES: Render arquitectónico realista de un bulevar turístico frente al lago Titicaca al atardecer, paseo peatonal de madera y piedra con barandas, farolas cálidas, miradores techados, áreas verdes, barcas de totora en el agua, familias caminando, montañas andinas al fondo, cielo naranja y violeta, estilo fotografía de concepto, sin texto ni logos.
EN: Realistic architectural concept render of a lakefront tourist boulevard on Lake Titicaca at sunset, wooden and stone promenade with railings, warm street lamps, covered viewpoints, green areas, traditional totora reed boats on the water, families walking, Andean mountains in the background, orange and purple sky, concept-art photography style, no text, no logos.

### 2 · Segunda circunvalación de Puno (`circunvalacion.jpg`)
ES: Vista aérea realista de una nueva vía de circunvalación pavimentada que rodea una ciudad andina junto a un lago, doble carril con berma y señalización, camiones y buses, cerros marrones y verdes, el lago azul a un lado, luz de media tarde, estilo fotografía aérea de concepto, sin texto ni logos.
EN: Realistic aerial view of a new paved ring road bypassing an Andean city next to a lake, two lanes with shoulder and road markings, trucks and buses, brown and green hills, blue lake on one side, mid-afternoon light, concept aerial photography, no text, no logos.

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
