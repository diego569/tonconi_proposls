// Ilustraciones referenciales (recreación artística) de las propuestas bandera.
// Clave = id de la propuesta en datos.js. Son dibujos propios, no fotos ni planos de obra.
window.ILUSTRACIONES_PROP = (function(){
  var H = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 260" preserveAspectRatio="xMidYMid slice" role="img" aria-label="';
  var o = {};

  // 1 · Bulevar turístico en el lago Titicaca (atardecer)
  o[1] = H + 'Recreación artística: bulevar turístico frente al lago Titicaca">' +
    '<defs>' +
    '<linearGradient id="b1s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5b4b8a"/><stop offset=".45" stop-color="#e8758a"/><stop offset="1" stop-color="#ffc26b"/></linearGradient>' +
    '<linearGradient id="b1l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f0a06a"/><stop offset="1" stop-color="#2d5f99"/></linearGradient>' +
    '<radialGradient id="b1g" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#fff3b0" stop-opacity="0"/></radialGradient>' +
    '</defs>' +
    '<rect width="600" height="260" fill="url(#b1s)"/>' +
    '<circle cx="300" cy="118" r="70" fill="url(#b1g)"/><circle cx="300" cy="118" r="26" fill="#fff0a8"/>' +
    '<path d="M0 120 L70 96 L130 112 L210 84 L300 118 L390 90 L470 112 L540 92 L600 110 V140 H0Z" fill="#6b4f7e" opacity=".85"/>' +
    '<rect y="125" width="600" height="80" fill="url(#b1l)"/>' +
    '<g stroke="#ffe6a0" stroke-width="3" stroke-linecap="round" opacity=".8"><path d="M270 138 h60"/><path d="M280 148 h40"/><path d="M262 158 h76"/><path d="M285 170 h30"/></g>' +
    '<g transform="translate(430 150)"><path d="M0 18 q40 24 96 0 l-12 -20 q-36 12 -72 0z" fill="#c8923a"/><path d="M48 -2 v-44" stroke="#6b4a1f" stroke-width="3"/><path d="M48 -44 l30 28 h-30z" fill="#fff2d0"/></g>' +
    '<rect y="196" width="600" height="64" fill="#8c6a4a"/><rect y="196" width="600" height="8" fill="#6a4c33"/>' +
    '<g stroke="#a88260" stroke-width="2" opacity=".7"><path d="M0 214 H600"/><path d="M0 232 H600"/><path d="M0 250 H600"/></g>' +
    '<g stroke="#2a2a33" stroke-width="5" fill="none"><path d="M0 186 H600"/></g><g stroke="#2a2a33" stroke-width="3"><path d="M20 186 v10 M80 186 v10 M140 186 v10 M200 186 v10 M260 186 v10 M320 186 v10 M380 186 v10 M440 186 v10 M500 186 v10 M560 186 v10"/></g>' +
    '<g fill="#2a2a33"><rect x="48" y="92" width="5" height="96"/><rect x="196" y="92" width="5" height="96"/><rect x="344" y="92" width="5" height="96"/><rect x="492" y="92" width="5" height="96"/></g>' +
    '<g fill="#ffe27a"><circle cx="50" cy="90" r="9"/><circle cx="198" cy="90" r="9"/><circle cx="346" cy="90" r="9"/><circle cx="494" cy="90" r="9"/></g>' +
    '<g fill="#ffe27a" opacity=".25"><circle cx="50" cy="90" r="22"/><circle cx="198" cy="90" r="22"/><circle cx="346" cy="90" r="22"/><circle cx="494" cy="90" r="22"/></g>' +
    '<g fill="#3c7a3a"><circle cx="110" cy="176" r="16"/><circle cx="262" cy="176" r="16"/><circle cx="414" cy="176" r="16"/><circle cx="560" cy="176" r="16"/></g><g fill="#5a3a22"><rect x="108" y="184" width="5" height="12"/><rect x="260" y="184" width="5" height="12"/><rect x="412" y="184" width="5" height="12"/><rect x="558" y="184" width="5" height="12"/></g>' +
    '<g fill="#1c1c24"><circle cx="160" cy="214" r="6"/><rect x="154" y="220" width="12" height="26" rx="5"/><circle cx="176" cy="217" r="5"/><rect x="171" y="222" width="10" height="22" rx="4"/><circle cx="330" cy="212" r="6"/><rect x="324" y="218" width="12" height="28" rx="5"/><circle cx="420" cy="216" r="5"/><rect x="415" y="221" width="10" height="22" rx="4"/><circle cx="436" cy="214" r="6"/><rect x="430" y="220" width="12" height="26" rx="5"/></g>' +
    '<g transform="translate(60 150)"><rect width="90" height="6" fill="#3a3a44"/><rect x="6" y="6" width="5" height="34" fill="#3a3a44"/><rect x="79" y="6" width="5" height="34" fill="#3a3a44"/><path d="M-6 0 L45 -26 L96 0Z" fill="#fe0002"/></g>' +
    '</svg>';

  // 2 · Segunda circunvalación de Puno (vista aérea)
  o[2] = H + 'Recreación artística: segunda circunvalación vista desde el aire">' +
    '<defs><linearGradient id="b2l" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5eb0e8"/><stop offset="1" stop-color="#2f79c2"/></linearGradient></defs>' +
    '<rect width="600" height="260" fill="#d9c9a3"/>' +
    '<path d="M330 0 H600 V150 Q520 170 470 120 Q430 70 380 60 Q340 40 330 0Z" fill="url(#b2l)"/>' +
    '<path d="M0 0 H150 Q100 40 120 90 Q60 120 0 100Z" fill="#b69b73"/>' +
    '<path d="M0 190 Q60 160 130 200 Q90 235 0 245Z" fill="#8fae63"/><path d="M420 215 Q500 190 600 225 V260 H400Z" fill="#8fae63"/>' +
    '<g fill="#efe6d2" stroke="#c9b894" stroke-width="1"><rect x="150" y="100" width="22" height="16"/><rect x="176" y="100" width="22" height="16"/><rect x="202" y="100" width="22" height="16"/><rect x="228" y="100" width="22" height="16"/><rect x="254" y="100" width="22" height="16"/><rect x="150" y="122" width="22" height="16"/><rect x="176" y="122" width="22" height="16"/><rect x="202" y="122" width="22" height="16"/><rect x="228" y="122" width="22" height="16"/><rect x="254" y="122" width="22" height="16"/><rect x="150" y="144" width="22" height="16"/><rect x="176" y="144" width="22" height="16"/><rect x="202" y="144" width="22" height="16"/><rect x="228" y="144" width="22" height="16"/><rect x="254" y="144" width="22" height="16"/><rect x="176" y="166" width="22" height="16"/><rect x="202" y="166" width="22" height="16"/><rect x="228" y="166" width="22" height="16"/></g>' +
    '<path d="M30 250 C 110 215, 120 70, 230 62 C 330 56, 360 150, 470 145 C 530 142, 560 170, 590 200" stroke="#2f323a" stroke-width="22" fill="none" stroke-linecap="round"/>' +
    '<path d="M30 250 C 110 215, 120 70, 230 62 C 330 56, 360 150, 470 145 C 530 142, 560 170, 590 200" stroke="#ffd000" stroke-width="2.5" stroke-dasharray="12 10" fill="none"/>' +
    '<path d="M30 250 C 110 215, 120 70, 230 62 C 330 56, 360 150, 470 145 C 530 142, 560 170, 590 200" stroke="#fff" stroke-width="22" fill="none" stroke-linecap="round" opacity="0" />' +
    '<g><rect x="95" y="177" width="16" height="9" rx="2" fill="#fe0002" transform="rotate(-62 103 181)"/><rect x="260" y="64" width="16" height="9" rx="2" fill="#ffffff" transform="rotate(-2 268 68)"/><rect x="396" y="124" width="16" height="9" rx="2" fill="#1d7be0" transform="rotate(20 404 128)"/></g>' +
    '<g stroke="#9a8760" stroke-width="3" fill="none"><path d="M200 168 L180 240"/><path d="M280 140 L330 230"/></g>' +
    '<g transform="translate(20 20)"><circle r="14" fill="#fff" opacity=".85"/><path d="M0 -10 L5 4 L0 1 L-5 4Z" fill="#fe0002"/></g>' +
    '</svg>';

  // 4 · Agua y alcantarillado en San Román (corte con tuberías)
  o[4] = H + 'Recreación artística: redes de agua y alcantarillado en una ciudad">' +
    '<defs><linearGradient id="b4s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3ff"/><stop offset="1" stop-color="#f1f9ff"/></linearGradient></defs>' +
    '<rect width="600" height="130" fill="url(#b4s)"/>' +
    '<path d="M0 90 L80 50 L160 85 L250 40 L340 88 L430 55 L520 90 L600 62 V130 H0Z" fill="#b4c4d8"/>' +
    '<g><rect x="30" y="78" width="70" height="48" fill="#e8d3b8"/><path d="M24 78 L65 52 L106 78Z" fill="#c0563b"/><rect x="48" y="96" width="14" height="30" fill="#7a5a3a"/>' +
    '<rect x="120" y="68" width="64" height="58" fill="#f1e2c8"/><path d="M114 68 L152 44 L190 68Z" fill="#a8452f"/><rect x="146" y="98" width="14" height="28" fill="#7a5a3a"/>' +
    '<rect x="420" y="74" width="66" height="52" fill="#e8d3b8"/><path d="M414 74 L453 50 L492 74Z" fill="#c0563b"/><rect x="438" y="98" width="14" height="28" fill="#7a5a3a"/>' +
    '<rect x="506" y="84" width="60" height="42" fill="#f1e2c8"/><path d="M500 84 L536 60 L572 84Z" fill="#a8452f"/></g>' +
    '<g><rect x="262" y="30" width="76" height="42" rx="6" fill="#4aa3ff" stroke="#1e3a8a" stroke-width="4"/><rect x="270" y="38" width="60" height="12" rx="3" fill="#9bd0ff"/><rect x="270" y="72" width="8" height="54" fill="#8a94a6"/><rect x="322" y="72" width="8" height="54" fill="#8a94a6"/><path d="M262 30 L300 12 L338 30Z" fill="#8a94a6"/></g>' +
    '<rect y="126" width="600" height="10" fill="#5b5e68"/><path d="M0 131 H600" stroke="#ffd000" stroke-width="2" stroke-dasharray="14 10"/>' +
    '<rect y="136" width="600" height="124" fill="#8a6a4c"/>' +
    '<g fill="#a88260" opacity=".6"><circle cx="40" cy="236" r="5"/><circle cx="210" cy="244" r="4"/><circle cx="380" cy="238" r="5"/><circle cx="560" cy="246" r="4"/></g>' +
    '<g stroke="#1d7be0" stroke-width="14" fill="none" stroke-linecap="round"><path d="M300 126 V164 H40"/><path d="M300 164 H560"/><path d="M90 164 V132"/><path d="M200 164 V132"/><path d="M450 164 V132"/><path d="M530 164 V132"/></g>' +
    '<g stroke="#9bd0ff" stroke-width="4" fill="none" stroke-linecap="round" stroke-dasharray="3 14"><path d="M300 126 V164 H40"/><path d="M300 164 H560"/></g>' +
    '<g stroke="#7a4a2a" stroke-width="14" fill="none" stroke-linecap="round"><path d="M40 214 H560"/><path d="M120 214 V150"/><path d="M360 214 V150"/></g>' +
    '<g fill="#fff"><path d="M70 214 l-12 -7 v14z"/><path d="M180 214 l-12 -7 v14z"/><path d="M290 214 l-12 -7 v14z"/><path d="M420 214 l-12 -7 v14z"/><path d="M520 214 l-12 -7 v14z"/></g>' +
    '<g fill="#fe0002"><circle cx="300" cy="164" r="9"/><circle cx="450" cy="164" r="7"/></g>' +
    '</svg>';

  // 23 · Agua potable al 100 % (comunidad rural)
  o[23] = H + 'Recreación artística: comunidad rural con agua potable">' +
    '<defs><linearGradient id="b23" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a8d8ff"/><stop offset="1" stop-color="#e9f6ff"/></linearGradient></defs>' +
    '<rect width="600" height="260" fill="url(#b23)"/><circle cx="90" cy="52" r="24" fill="#fff4b0"/>' +
    '<path d="M0 150 L90 88 L170 130 L270 70 L370 128 L470 84 L600 140 V200 H0Z" fill="#8fa9c9"/>' +
    '<path d="M0 190 L120 128 L240 176 L360 118 L480 172 L600 130 V260 H0Z" fill="#6b9a5a"/>' +
    '<rect y="205" width="600" height="55" fill="#86a95a"/>' +
    '<g><rect x="415" y="92" width="44" height="32" rx="4" fill="#4aa3ff" stroke="#1e3a8a" stroke-width="3"/><rect x="420" y="124" width="5" height="22" fill="#6b7686"/><rect x="449" y="124" width="5" height="22" fill="#6b7686"/></g>' +
    '<path d="M437 146 q0 40 -40 50 q-80 24 -150 16" stroke="#1d7be0" stroke-width="7" fill="none" stroke-linecap="round"/>' +
    '<g><rect x="60" y="168" width="64" height="40" fill="#d9b98a"/><path d="M54 168 L92 140 L130 168Z" fill="#9a6a3a"/><rect x="84" y="186" width="14" height="22" fill="#6a4a2a"/>' +
    '<rect x="150" y="176" width="56" height="34" fill="#e4c89d"/><path d="M144 176 L178 152 L212 176Z" fill="#8a5a2a"/><rect x="170" y="192" width="12" height="18" fill="#6a4a2a"/>' +
    '<rect x="500" y="170" width="62" height="38" fill="#d9b98a"/><path d="M494 170 L531 144 L568 170Z" fill="#9a6a3a"/></g>' +
    '<g transform="translate(240 150)"><rect x="0" y="0" width="22" height="64" rx="4" fill="#9aa4b5"/><rect x="-14" y="10" width="40" height="12" rx="5" fill="#9aa4b5"/><rect x="-20" y="16" width="10" height="26" rx="3" fill="#7a8496"/><path d="M-15 44 q-6 14 0 20 q6 -6 0 -20z" fill="#1d7be0"/><path d="M-15 70 q-5 10 0 14 q5 -4 0 -14z" fill="#4aa3ff"/></g>' +
    '<g transform="translate(300 100)"><circle r="42" fill="#fe0002" stroke="#fff" stroke-width="5"/><text y="-2" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-weight="900" font-size="30" fill="#fff">100%</text><text y="20" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-weight="700" font-size="14" fill="#fff">AGUA</text></g>' +
    '</svg>';

  // 24 · Carreteras interprovinciales asfaltadas
  o[24] = H + 'Recreación artística: carreteras que unen las provincias">' +
    '<defs><linearGradient id="b24" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd9a0"/><stop offset="1" stop-color="#fff0d8"/></linearGradient></defs>' +
    '<rect width="600" height="260" fill="url(#b24)"/><circle cx="520" cy="56" r="28" fill="#ffe27a"/>' +
    '<path d="M0 150 L80 96 L150 130 L240 70 L330 128 L420 88 L510 126 L600 96 V170 H0Z" fill="#c4a07e"/>' +
    '<path d="M0 190 L110 138 L220 180 L340 128 L460 176 L600 136 V260 H0Z" fill="#8fae63"/>' +
    '<path d="M-10 250 C 120 200, 160 150, 260 168 C 360 186, 420 130, 520 150 C 560 158, 585 150, 610 140" stroke="#2f323a" stroke-width="24" fill="none"/>' +
    '<path d="M-10 250 C 120 200, 160 150, 260 168 C 360 186, 420 130, 520 150 C 560 158, 585 150, 610 140" stroke="#ffd000" stroke-width="2.5" stroke-dasharray="12 10" fill="none"/>' +
    '<g fill="#fe0002" stroke="#fff" stroke-width="3"><path d="M96 196 q-14 -26 0 -44 q14 18 0 44z"/><path d="M300 164 q-14 -26 0 -44 q14 18 0 44z"/><path d="M520 140 q-14 -26 0 -44 q14 18 0 44z"/></g>' +
    '<g fill="#fff"><circle cx="96" cy="170" r="4"/><circle cx="300" cy="138" r="4"/><circle cx="520" cy="114" r="4"/></g>' +
    '<g><rect x="372" y="190" width="6" height="40" fill="#6b7686"/><rect x="352" y="176" width="46" height="22" rx="3" fill="#1c6b3a" stroke="#fff" stroke-width="2"/><path d="M360 187 h30 M384 182 l6 5 l-6 5" stroke="#fff" stroke-width="3" fill="none"/></g>' +
    '<g transform="translate(180 192)"><rect width="42" height="20" rx="4" fill="#1d7be0"/><rect x="42" y="6" width="18" height="14" rx="3" fill="#1558a8"/><circle cx="10" cy="22" r="6" fill="#222"/><circle cx="48" cy="22" r="6" fill="#222"/></g>' +
    '</svg>';

  // 25 · Riego tecnificado, agro y ganadería (andenes y reservorio)
  o[25] = H + 'Recreación artística: riego tecnificado en andenes">' +
    '<defs><linearGradient id="b25" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b9e2ff"/><stop offset="1" stop-color="#eef9ff"/></linearGradient></defs>' +
    '<rect width="600" height="260" fill="url(#b25)"/><circle cx="520" cy="48" r="24" fill="#fff4b0"/>' +
    '<path d="M0 120 L90 62 L180 104 L290 50 L400 108 L500 70 L600 112 V150 H0Z" fill="#a9b8c9"/>' +
    '<path d="M180 100 Q250 80 330 96 Q300 124 230 124Z" fill="#4aa3ff" stroke="#1e3a8a" stroke-width="3"/>' +
    '<path d="M0 150 H600 V180 H0Z" fill="#7aa857"/><path d="M0 180 H600 V215 H0Z" fill="#6b9a49"/><path d="M0 215 H600 V260 H0Z" fill="#5a8a3a"/>' +
    '<g stroke="#4a7a2c" stroke-width="4" stroke-linecap="round"><path d="M20 164 H580" opacity=".6"/><path d="M20 198 H580" opacity=".6"/><path d="M20 236 H580" opacity=".6"/></g>' +
    '<path d="M280 122 V150 H120 V180 H460 V215 H200" stroke="#1d7be0" stroke-width="7" fill="none" stroke-linejoin="round" stroke-linecap="round"/>' +
    '<g stroke="#6b7686" stroke-width="4"><path d="M130 150 v-12"/><path d="M300 180 v-12"/><path d="M430 180 v-12"/><path d="M240 215 v-14"/></g>' +
    '<g stroke="#1d7be0" stroke-width="3.5" fill="none" stroke-linecap="round" opacity=".9"><path d="M130 138 q-24 -22 -44 6"/><path d="M130 138 q24 -22 44 6"/><path d="M300 168 q-24 -22 -44 6"/><path d="M300 168 q24 -22 44 6"/><path d="M430 168 q-24 -22 -44 6"/><path d="M430 168 q24 -22 44 6"/><path d="M240 201 q-24 -22 -44 6"/><path d="M240 201 q24 -22 44 6"/></g>' +
    '<g fill="#f4f0e6" stroke="#bbb" stroke-width="1"><ellipse cx="60" cy="228" rx="15" ry="9"/><circle cx="50" cy="222" r="5"/><ellipse cx="520" cy="196" rx="15" ry="9"/><circle cx="534" cy="190" r="5"/></g>' +
    '</svg>';

  return o;
})();
