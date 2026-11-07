// =====================================================================
// DATOS DEL MAPA DE PROPUESTAS  ·  VERSIÓN DE DEMOSTRACIÓN
// Los montos, plazos y varias de las propuestas de este archivo son
// ILUSTRATIVOS (ficticios) para mostrar el prototipo. No son compromisos
// ni cifras del equipo técnico. Reemplazar por datos validados antes de
// publicar y poner CONFIG.demo = false.
// =====================================================================

window.CONFIG = {
  demo: true,
  actualizado: "Noviembre 2026",
  titulo: "Propuestas para las 13 provincias de Puno"
};

window.PROVINCIAS = [
  { id: "lampa",    nombre: "Lampa",                 corto: "Lampa" },
  { id: "melgar",   nombre: "Melgar",                corto: "Melgar" },
  { id: "carabaya", nombre: "Carabaya",              corto: "Carabaya" },
  { id: "sanroman", nombre: "San Román",             corto: "San Román" },
  { id: "azangaro", nombre: "Azángaro",              corto: "Azángaro" },
  { id: "putina",   nombre: "San Antonio de Putina", corto: "Putina" },
  { id: "sandia",   nombre: "Sandia",                corto: "Sandia" },
  { id: "puno",     nombre: "Puno",                  corto: "Puno" },
  { id: "huancane", nombre: "Huancané",              corto: "Huancané" },
  { id: "moho",     nombre: "Moho",                  corto: "Moho" },
  { id: "chucuito", nombre: "Chucuito",              corto: "Chucuito" },
  { id: "elcollao", nombre: "El Collao",             corto: "El Collao" },
  { id: "yunguyo",  nombre: "Yunguyo",               corto: "Yunguyo" }
];

window.TIPOS = [
  "Agua y saneamiento",
  "Vial y transporte",
  "Turismo e infraestructura",
  "Seguridad ciudadana",
  "Riego, agro y ganadería",
  "Educación"
];

// monto en millones de soles (ilustrativo), plazo en meses (ilustrativo)
// alcance: "provincia" o "region"
window.PROPUESTAS = [
  // ---------------- PUNO ----------------
  { id: 1, bandera: true, titulo: "Bulevar turístico en el lago Titicaca", tipo: "Turismo e infraestructura", alcance: "provincia", provincias: ["puno"],
    fase: "Perfil", monto: 85.0, plazo: 30,
    descripcion: "Paseo peatonal, miradores y muelle turístico frente a la bahía de Puno, con áreas verdes y espacios para artesanos locales.",
    fuente: "Propuesta del candidato (El Búho, 30 oct. 2026). Cifras ilustrativas." },
  { id: 2, bandera: true, titulo: "Segunda circunvalación de Puno", tipo: "Vial y transporte", alcance: "provincia", provincias: ["puno"],
    fase: "Propuesta", monto: 240.0, plazo: 36,
    descripcion: "Nueva vía de evitamiento para descongestionar el tráfico pesado de la ciudad y conectar los accesos norte y sur.",
    fuente: "Propuesta del candidato (El Búho, 30 oct. 2026). Cifras ilustrativas." },
  { id: 3, titulo: "Centro de monitoreo y videovigilancia Puno–Juliaca", tipo: "Seguridad ciudadana", alcance: "provincia", provincias: ["puno", "sanroman"],
    fase: "Propuesta", monto: 12.5, plazo: 12,
    descripcion: "Cámaras, central de monitoreo y enlace con serenazgo y Policía para zonas de mayor incidencia. Competencias por coordinar.",
    fuente: "Equipo de campaña. Cifras ilustrativas." },

  // ---------------- SAN ROMÁN ----------------
  { id: 4, bandera: true, titulo: "Agua y alcantarillado de San Román: concluir el proyecto", tipo: "Agua y saneamiento", alcance: "provincia", provincias: ["sanroman"],
    fase: "Expediente técnico", monto: 68.4, plazo: 24,
    descripcion: "Culminar redes de agua potable y alcantarillado de la provincia y ampliar la cobertura a barrios periféricos de Juliaca.",
    fuente: "Propuesta del candidato (Pachamama Radio). Cifras ilustrativas." },
  { id: 5, titulo: "Mejoramiento de la vía de circunvalación de Juliaca", tipo: "Vial y transporte", alcance: "provincia", provincias: ["sanroman"],
    fase: "Propuesta", monto: 95.0, plazo: 30,
    descripcion: "Ampliación, pavimentación y drenaje pluvial de la circunvalación para mejorar el flujo vehicular.",
    fuente: "Equipo técnico (por validar). Cifras ilustrativas." },

  // ---------------- AZÁNGARO ----------------
  { id: 6, titulo: "Asfaltado del tramo Azángaro – San Antonio de Putina", tipo: "Vial y transporte", alcance: "provincia", provincias: ["azangaro", "putina"],
    fase: "Perfil", monto: 130.0, plazo: 36,
    descripcion: "Pavimentación del corredor entre ambas provincias para reducir tiempos de viaje y costos de transporte de la producción.",
    fuente: "Equipo técnico (por validar). Cifras ilustrativas." },
  { id: 7, titulo: "Riego tecnificado en el valle de Azángaro", tipo: "Riego, agro y ganadería", alcance: "provincia", provincias: ["azangaro"],
    fase: "Expediente técnico", monto: 28.7, plazo: 24,
    descripcion: "Canales revestidos, reservorios y riego por aspersión para pequeños productores de forrajes y lácteos.",
    fuente: "Equipo técnico (por validar). Cifras ilustrativas." },

  // ---------------- MELGAR ----------------
  { id: 8, titulo: "Reservorios y riego tecnificado en Ayaviri", tipo: "Riego, agro y ganadería", alcance: "provincia", provincias: ["melgar"],
    fase: "Perfil", monto: 32.0, plazo: 24,
    descripcion: "Pequeños reservorios, siembra y cosecha de agua y riego para productores ganaderos de la provincia.",
    fuente: "Equipo técnico (por validar). Cifras ilustrativas." },
  { id: 9, titulo: "Agua potable en centros poblados rurales de Melgar", tipo: "Agua y saneamiento", alcance: "provincia", provincias: ["melgar"],
    fase: "Propuesta", monto: 18.9, plazo: 18,
    descripcion: "Sistemas de agua segura con cloración y gestión comunal para localidades rurales sin cobertura.",
    fuente: "Equipo técnico (por validar). Cifras ilustrativas." },

  // ---------------- LAMPA ----------------
  { id: 10, titulo: "Asfaltado del tramo Lampa – Juliaca", tipo: "Vial y transporte", alcance: "provincia", provincias: ["lampa", "sanroman"],
    fase: "Perfil", monto: 110.0, plazo: 30,
    descripcion: "Mejoramiento integral de la vía que conecta Lampa con Juliaca, con señalización y cunetas.",
    fuente: "Equipo técnico (por validar). Cifras ilustrativas." },

  // ---------------- CARABAYA ----------------
  { id: 11, titulo: "Puentes y mejoramiento de vías de acceso en Carabaya", tipo: "Vial y transporte", alcance: "provincia", provincias: ["carabaya"],
    fase: "Propuesta", monto: 64.0, plazo: 30,
    descripcion: "Puentes carrozables y mantenimiento de trochas para conectar distritos de selva alta y zonas productoras.",
    fuente: "Equipo técnico (por validar). Cifras ilustrativas." },

  // ---------------- SANDIA ----------------
  { id: 12, titulo: "Agua y saneamiento rural en Sandia", tipo: "Agua y saneamiento", alcance: "provincia", provincias: ["sandia"],
    fase: "Perfil", monto: 22.3, plazo: 20,
    descripcion: "Redes de agua, letrinas con arrastre hidráulico y capacitación a juntas administradoras.",
    fuente: "Equipo técnico (por validar). Cifras ilustrativas." },

  // ---------------- SAN ANTONIO DE PUTINA ----------------
  { id: 13, titulo: "Fortalecimiento de la cadena de camélidos y ganadería", tipo: "Riego, agro y ganadería", alcance: "provincia", provincias: ["putina"],
    fase: "Propuesta", monto: 15.8, plazo: 18,
    descripcion: "Mejoramiento genético, cobertizos, sanidad animal y asociatividad para criadores de alpacas y ovinos.",
    fuente: "Equipo técnico (por validar). Cifras ilustrativas." },

  // ---------------- HUANCANÉ ----------------
  { id: 14, titulo: "Agua potable y alcantarillado en Huancané", tipo: "Agua y saneamiento", alcance: "provincia", provincias: ["huancane"],
    fase: "Expediente técnico", monto: 26.5, plazo: 22,
    descripcion: "Renovación de redes y nueva planta de tratamiento para la capital provincial y barrios aledaños.",
    fuente: "Equipo técnico (por validar). Cifras ilustrativas." },
  { id: 15, titulo: "Riego tecnificado para productores de Huancané", tipo: "Riego, agro y ganadería", alcance: "provincia", provincias: ["huancane"],
    fase: "Propuesta", monto: 19.2, plazo: 20,
    descripcion: "Riego presurizado y almacenamiento de agua para parcelas familiares.",
    fuente: "Equipo técnico (por validar). Cifras ilustrativas." },

  // ---------------- MOHO ----------------
  { id: 16, titulo: "Mejoramiento vial Moho – Conima", tipo: "Vial y transporte", alcance: "provincia", provincias: ["moho"],
    fase: "Perfil", monto: 48.0, plazo: 24,
    descripcion: "Pavimentación y obras de arte para conectar los distritos ribereños con la capital provincial.",
    fuente: "Equipo técnico (por validar). Cifras ilustrativas." },

  // ---------------- CHUCUITO ----------------
  { id: 17, titulo: "Agua y alcantarillado en Juli y distritos cercanos", tipo: "Agua y saneamiento", alcance: "provincia", provincias: ["chucuito"],
    fase: "Perfil", monto: 35.6, plazo: 24,
    descripcion: "Ampliación de redes y saneamiento para la capital de la provincia y centros poblados vecinos.",
    fuente: "Equipo técnico (por validar). Cifras ilustrativas." },
  { id: 18, titulo: "Ruta turística de iglesias coloniales Juli–Pomata", tipo: "Turismo e infraestructura", alcance: "provincia", provincias: ["chucuito"],
    fase: "Propuesta", monto: 21.4, plazo: 20,
    descripcion: "Señalética, miradores y mejoramiento de accesos para circuitos turísticos en la orilla sur del lago.",
    fuente: "Equipo técnico (por validar). Cifras ilustrativas." },

  // ---------------- EL COLLAO ----------------
  { id: 19, titulo: "Riego tecnificado en Ilave", tipo: "Riego, agro y ganadería", alcance: "provincia", provincias: ["elcollao"],
    fase: "Expediente técnico", monto: 27.8, plazo: 22,
    descripcion: "Canales, tomas y reservorios para productores de papa, quinua y ganadería lechera.",
    fuente: "Equipo técnico (por validar). Cifras ilustrativas." },
  { id: 20, titulo: "Mejoramiento vial Ilave – Pilcuyo", tipo: "Vial y transporte", alcance: "provincia", provincias: ["elcollao"],
    fase: "Perfil", monto: 72.0, plazo: 28,
    descripcion: "Rehabilitación y asfaltado del tramo para el transporte de producción hacia mercados regionales.",
    fuente: "Equipo técnico (por validar). Cifras ilustrativas." },

  // ---------------- YUNGUYO ----------------
  { id: 21, titulo: "Agua y saneamiento en Yunguyo", tipo: "Agua y saneamiento", alcance: "provincia", provincias: ["yunguyo"],
    fase: "Propuesta", monto: 24.1, plazo: 20,
    descripcion: "Renovación de redes y nueva captación para mejorar la continuidad del servicio.",
    fuente: "Equipo técnico (por validar). Cifras ilustrativas." },
  { id: 22, titulo: "Mirador y circuito turístico en Yunguyo", tipo: "Turismo e infraestructura", alcance: "provincia", provincias: ["yunguyo"],
    fase: "Propuesta", monto: 9.8, plazo: 14,
    descripcion: "Mirador, senderos y señalética para visitantes en la frontera con Bolivia.",
    fuente: "Equipo técnico (por validar). Cifras ilustrativas." },

  // ---------------- TODA LA REGIÓN ----------------
  { id: 23, bandera: true, titulo: "Cerrar al 100 % las brechas de acceso al agua potable", tipo: "Agua y saneamiento", alcance: "region", provincias: [],
    fase: "Propuesta", monto: 480.0, plazo: 48,
    descripcion: "Meta regional con hoja de ruta por provincia, priorizando centros poblados rurales sin servicio.",
    fuente: "Propuesta del candidato (La Decana, 19 oct. 2026). Cifras ilustrativas." },
  { id: 24, bandera: true, titulo: "Carreteras interprovinciales asfaltadas", tipo: "Vial y transporte", alcance: "region", provincias: [],
    fase: "Propuesta", monto: 900.0, plazo: 48,
    descripcion: "Programa de pavimentación de corredores que conectan las capitales provinciales.",
    fuente: "Equipo de campaña. Cifras ilustrativas." },
  { id: 25, bandera: true, titulo: "Riego tecnificado, agro y ganadería", tipo: "Riego, agro y ganadería", alcance: "region", provincias: [],
    fase: "Propuesta", monto: 350.0, plazo: 48,
    descripcion: "Programa regional de riego, reservorios y asistencia técnica para productores.",
    fuente: "Equipo de campaña. Cifras ilustrativas." },
  { id: 26, titulo: "Reactivar las plantas de tratamiento de aguas residuales", tipo: "Agua y saneamiento", alcance: "region", provincias: [],
    fase: "Propuesta", monto: 140.0, plazo: 30,
    descripcion: "Rehabilitación y puesta en operación de plantas paralizadas o deficientes en distintas provincias.",
    fuente: "Propuesta del candidato (El Búho, 30 oct. 2026). Cifras ilustrativas." },
  { id: 27, titulo: "Educación financiera en colegios públicos", tipo: "Educación", alcance: "region", provincias: [],
    fase: "Propuesta", monto: 6.5, plazo: 12,
    descripcion: "Contenidos de educación e inteligencia financiera, materiales y capacitación docente. Coordinación con el sector por validar.",
    fuente: "Propuesta del candidato (La Decana, 19 oct. 2026). Cifras ilustrativas." }
];
