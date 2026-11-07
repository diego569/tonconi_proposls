// Ilustraciones referenciales por tipo de obra (SVG propio, sin derechos de autor).
// Para usar una foto real en una propuesta, agregar en datos.js el campo imagen: "img/mi-foto.jpg".
window.ILUSTRACIONES = (function(){
  var A = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 260" preserveAspectRatio="xMidYMid slice" role="img" aria-label="';
  function mont(c1, c2){
    return '<path d="M0 175 L85 95 L150 145 L245 62 L335 150 L430 102 L520 152 L600 112 V260 H0Z" fill="'+c1+'"/>' +
           '<path d="M0 205 L120 145 L220 195 L330 135 L460 198 L600 155 V260 H0Z" fill="'+c2+'"/>';
  }
  var o = {};

  o["Agua y saneamiento"] = A + 'Ilustración referencial: agua potable">' +
    '<defs><linearGradient id="gAg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b6dcff"/><stop offset="1" stop-color="#eef8ff"/></linearGradient></defs>' +
    '<rect width="600" height="260" fill="url(#gAg)"/><circle cx="520" cy="55" r="26" fill="#fff6b8"/>' + mont("#9db9d8", "#6f98c4") +
    '<rect y="212" width="600" height="48" fill="#4f8a58"/>' +
    '<rect x="40" y="198" width="320" height="18" rx="9" fill="#6b7686"/><rect x="352" y="150" width="18" height="66" rx="9" fill="#6b7686"/>' +
    '<path d="M361 152 q0 -34 44 -34 h58" stroke="#6b7686" stroke-width="18" fill="none" stroke-linecap="round"/>' +
    '<rect x="452" y="108" width="22" height="22" rx="4" fill="#4a5563"/>' +
    '<path d="M463 142 q-11 20 0 28 q11 -8 0 -28z" fill="#1d7be0"/><path d="M463 178 q-9 16 0 22 q9 -6 0 -22z" fill="#4aa3ff"/>' +
    '<path d="M110 150 q20 -26 40 0 q20 26 40 0" stroke="#1d7be0" stroke-width="6" fill="none" opacity=".6"/>' +
    '</svg>';

  o["Vial y transporte"] = A + 'Ilustración referencial: carretera">' +
    '<defs><linearGradient id="gVi" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd9a8"/><stop offset="1" stop-color="#fff2dc"/></linearGradient></defs>' +
    '<rect width="600" height="260" fill="url(#gVi)"/><circle cx="90" cy="62" r="28" fill="#ffe27a"/>' +
    '<path d="M0 135 L100 78 L190 125 L290 70 L400 128 L500 84 L600 130 V150 H0Z" fill="#b98f6b"/>' +
    '<rect y="132" width="600" height="128" fill="#7a9a54"/>' +
    '<path d="M225 260 L375 260 L318 132 L282 132Z" fill="#3a3d45"/>' +
    '<path d="M298 258 L302 258 L301 132 L299 132Z" fill="#fff"/>' +
    '<rect x="296" y="236" width="8" height="18" fill="#ffd000"/><rect x="298" y="196" width="5" height="14" fill="#ffd000"/><rect x="299" y="166" width="3" height="10" fill="#ffd000"/><rect x="299" y="146" width="2" height="6" fill="#ffd000"/>' +
    '<g transform="translate(430 170)"><rect width="46" height="26" rx="4" fill="#fe0002"/><rect x="46" y="8" width="20" height="18" rx="3" fill="#c40001"/><circle cx="12" cy="28" r="7" fill="#222"/><circle cx="52" cy="28" r="7" fill="#222"/></g>' +
    '<g transform="translate(120 160)"><path d="M0 40 L18 0 L36 40Z" fill="#ff8a00"/><rect x="6" y="26" width="24" height="5" fill="#fff"/></g>' +
    '</svg>';

  o["Turismo e infraestructura"] = A + 'Ilustración referencial: malecón turístico">' +
    '<defs><linearGradient id="gTu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffcf9a"/><stop offset="1" stop-color="#ffeedd"/></linearGradient></defs>' +
    '<rect width="600" height="260" fill="url(#gTu)"/><circle cx="470" cy="80" r="34" fill="#ffe07a"/>' + mont("#c6a58f", "#a3826f") +
    '<rect y="165" width="600" height="95" fill="#4aa0d8"/><path d="M0 190 q40 -10 80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0" stroke="#bfe5fb" stroke-width="4" fill="none"/>' +
    '<rect y="150" width="600" height="22" fill="#e8d6b8"/><rect y="150" width="600" height="5" fill="#cdb58f"/>' +
    '<g fill="#3a3d45"><rect x="70" y="92" width="5" height="60"/><rect x="200" y="92" width="5" height="60"/><rect x="330" y="92" width="5" height="60"/><rect x="460" y="92" width="5" height="60"/></g>' +
    '<g fill="#ffe14d"><circle cx="72" cy="90" r="8"/><circle cx="202" cy="90" r="8"/><circle cx="332" cy="90" r="8"/><circle cx="462" cy="90" r="8"/></g>' +
    '<g transform="translate(250 190)"><path d="M0 14 q50 30 120 0 l-14 -22 q-46 14 -92 0z" fill="#d9a441"/><path d="M14 -6 q46 12 92 0" stroke="#b8862b" stroke-width="4" fill="none"/></g>' +
    '</svg>';

  o["Seguridad ciudadana"] = A + 'Ilustración referencial: seguridad ciudadana">' +
    '<defs><linearGradient id="gSe" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#27304a"/><stop offset="1" stop-color="#4b5a82"/></linearGradient></defs>' +
    '<rect width="600" height="260" fill="url(#gSe)"/><circle cx="520" cy="50" r="22" fill="#f4f1d0"/>' +
    '<g fill="#1a2036"><rect x="20" y="130" width="50" height="130"/><rect x="80" y="100" width="60" height="160"/><rect x="150" y="145" width="45" height="115"/><rect x="400" y="120" width="55" height="140"/><rect x="465" y="150" width="60" height="110"/><rect x="535" y="110" width="50" height="150"/></g>' +
    '<g fill="#ffd54d" opacity=".85"><rect x="92" y="116" width="8" height="8"/><rect x="112" y="136" width="8" height="8"/><rect x="412" y="140" width="8" height="8"/><rect x="545" y="130" width="8" height="8"/></g>' +
    '<rect x="270" y="110" width="12" height="150" fill="#9aa4bd"/><g transform="translate(236 84)"><rect width="84" height="34" rx="8" fill="#e8ecf6"/><circle cx="62" cy="17" r="11" fill="#27304a"/><circle cx="62" cy="17" r="5" fill="#4aa3ff"/><circle cx="14" cy="17" r="4" fill="#fe0002"/></g>' +
    '<g transform="translate(345 120)"><path d="M0 8 L40 0 L80 8 V50 Q80 80 40 96 Q0 80 0 50Z" fill="#fe0002"/><path d="M22 48 L36 62 L60 34" stroke="#fff" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>' +
    '</svg>';

  o["Riego, agro y ganadería"] = A + 'Ilustración referencial: riego tecnificado">' +
    '<defs><linearGradient id="gRi" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe6ff"/><stop offset="1" stop-color="#f2fbff"/></linearGradient></defs>' +
    '<rect width="600" height="260" fill="url(#gRi)"/><circle cx="90" cy="55" r="26" fill="#fff0a0"/>' +
    '<path d="M0 120 L110 70 L210 115 L320 62 L430 118 L520 80 L600 120 V140 H0Z" fill="#a9b8c9"/>' +
    '<rect y="122" width="600" height="138" fill="#6aa84f"/>' +
    '<g stroke="#4f8a3a" stroke-width="5" fill="none"><path d="M0 250 L250 126"/><path d="M80 260 L290 126"/><path d="M190 260 L320 126"/><path d="M320 260 L350 126"/><path d="M450 260 L380 126"/><path d="M560 260 L410 126"/></g>' +
    '<rect x="296" y="150" width="8" height="60" fill="#6b7686"/><circle cx="300" cy="146" r="9" fill="#4a5563"/>' +
    '<g stroke="#1d7be0" stroke-width="4" fill="none" stroke-linecap="round" opacity=".85"><path d="M300 146 q-60 -60 -110 10"/><path d="M300 146 q60 -60 110 10"/><path d="M300 146 q-30 -50 -55 14"/><path d="M300 146 q30 -50 55 14"/></g>' +
    '<g fill="#4aa3ff"><path d="M180 176 q-5 10 0 14 q5 -4 0 -14z"/><path d="M420 176 q-5 10 0 14 q5 -4 0 -14z"/><path d="M240 184 q-5 10 0 14 q5 -4 0 -14z"/><path d="M360 184 q-5 10 0 14 q5 -4 0 -14z"/></g>' +
    '</svg>';

  o["Educación"] = A + 'Ilustración referencial: educación">' +
    '<defs><linearGradient id="gEd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe9a8"/><stop offset="1" stop-color="#fff6d8"/></linearGradient></defs>' +
    '<rect width="600" height="260" fill="url(#gEd)"/>' +
    '<rect x="70" y="36" width="300" height="150" rx="8" fill="#2f5d46" stroke="#8a5a2b" stroke-width="10"/>' +
    '<g stroke="#e9f3ec" stroke-width="5" stroke-linecap="round" fill="none"><path d="M100 76 h110"/><path d="M100 104 h170"/><path d="M100 132 h90"/><circle cx="300" cy="86" r="16"/><path d="M300 76 v20 M292 86 h16"/></g>' +
    '<rect y="205" width="600" height="55" fill="#b98a55"/>' +
    '<g transform="translate(400 120)"><path d="M0 40 Q50 20 100 40 V100 Q50 80 0 100Z" fill="#fe0002"/><path d="M100 40 Q150 20 200 40 V100 Q150 80 100 100Z" fill="#c40001"/><path d="M100 40 V100" stroke="#fff" stroke-width="4"/></g>' +
    '<g transform="translate(70 196) rotate(-8)"><rect width="150" height="12" rx="3" fill="#ffd000"/><path d="M150 0 l22 6 l-22 6z" fill="#f4d9b0"/><rect x="0" width="14" height="12" fill="#ff7a7a"/></g>' +
    '</svg>';

  return o;
})();
