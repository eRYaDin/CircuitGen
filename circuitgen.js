// ═══════════════════════════════════════════
//  CircuitGen — AI-Powered EDA Platform
//  script.js
// ═══════════════════════════════════════════

// ─── COMPONENT DATABASE ───────────────────────────────────────
const COMPONENT_DB = {
  relay: [
    { id: 'HLS8L-DC5V', name: 'HLS8L-DC5V-S-C', brand: 'HONGFA', icon: '🔌',
      desc: 'Relay SPDT 5V DC, kontak 10A/250VAC. Cocok untuk switching AC dari mikrokontroler.',
      specs: { 'Coil Voltage': '5V DC', 'Contact Rating': '10A / 250VAC', 'Package': 'DIP-5', 'Operate Time': '≤10ms' },
      pinout: ['Coil+', 'Coil−', 'COM', 'NC', 'NO'],
      price: 'Rp 4.500', stock: 'stock', stores: ['Tokopedia','Shopee','LCSC'],
      alts: [{ name: 'SRD-05VDC-SL-C', note: 'Lebih murah, rating sama' }, { name: 'JQC-3FC/T73', note: 'PCB mount variant' }] },
    { id: 'SRD-05VDC', name: 'SRD-05VDC-SL-C', brand: 'SONGLE', icon: '🔌',
      desc: 'Relay 5V low-cost populer untuk proyek Arduino & ESP32. Banyak tersedia.',
      specs: { 'Coil Voltage': '5V DC', 'Contact Rating': '10A / 250VAC', 'Package': 'SRD-5PIN', 'Coil Current': '~70mA' },
      pinout: ['Coil+', 'Coil−', 'COM', 'NC', 'NO'],
      price: 'Rp 3.200', stock: 'stock', stores: ['Tokopedia','Shopee'],
      alts: [{ name: 'HLS8L-DC5V-S-C', note: 'Kualitas lebih baik' }] },
    { id: 'G5V-2-DC5', name: 'G5V-2-DC5', brand: 'OMRON', icon: '🔌',
      desc: 'Signal relay 5V DPDT high-sensitivity dari OMRON. Untuk aplikasi presisi.',
      specs: { 'Coil Voltage': '5V DC', 'Contact Rating': '1A / 125VAC', 'Package': 'DIP-8', 'Sensitivity': '140mW' },
      pinout: ['Pin1', 'Coil', 'COM', 'NC', 'NO', 'NC2', 'NO2', 'Coil−'],
      price: 'Rp 18.000', stock: 'low', stores: ['LCSC','Digikey'],
      alts: [{ name: 'IM07TS', note: 'Equivalent AXICOM' }] },
    { id: 'JQC-3FC-12V', name: 'JQC-3FC/T73 12V', brand: 'NINGBO', icon: '🔌',
      desc: 'Relay 12V untuk automotive dan industrial switching. SPDT 10A.',
      specs: { 'Coil Voltage': '12V DC', 'Contact Rating': '10A / 250VAC', 'Package': 'PCB-5', 'Isolation': '2500VRMS' },
      pinout: ['Coil+', 'Coil−', 'COM', 'NC', 'NO'],
      price: 'Rp 5.800', stock: 'stock', stores: ['Tokopedia','Shopee','Bukalapak'],
      alts: [{ name: 'SRD-12VDC-SL-C', note: 'Pin-compatible alternative' }] },
  ],
  capacitor: [
    { id: 'CAP-100UF-50V', name: '100µF 50V Electrolytic', brand: 'Nichicon', icon: '⚡',
      desc: 'Kapasitor elektrolitik general purpose 100µF 50V.',
      specs: { 'Capacitance': '100µF', 'Voltage': '50V', 'Package': 'Radial DIP', 'Temp': '-40~+105°C' },
      pinout: ['+', '−'],
      price: 'Rp 1.200', stock: 'stock', stores: ['Tokopedia','Shopee','LCSC'],
      alts: [{ name: 'Rubycon 100µF 50V', note: 'Grade lebih tinggi' }] },
    { id: 'CAP-10UF-SMD', name: '10µF 25V Ceramic X5R', brand: 'Murata', icon: '⚡',
      desc: 'Kapasitor keramik SMD 0805 10µF X5R untuk decoupling.',
      specs: { 'Capacitance': '10µF', 'Voltage': '25V', 'Package': '0805 SMD', 'Dielectric': 'X5R' },
      pinout: ['A', 'B'],
      price: 'Rp 800', stock: 'stock', stores: ['LCSC','Mouser'],
      alts: [{ name: 'TDK C2012X5R1E106', note: 'Pin-compatible' }] },
    { id: 'CAP-100NF', name: '100nF 50V Ceramic X7R', brand: 'TDK', icon: '⚡',
      desc: 'Bypass capacitor wajib di hampir setiap desain PCB. Package 0402.',
      specs: { 'Capacitance': '100nF', 'Voltage': '50V', 'Package': '0402 SMD', 'Dielectric': 'X7R' },
      pinout: ['A', 'B'],
      price: 'Rp 350', stock: 'stock', stores: ['LCSC','Mouser','Digikey'],
      alts: [{ name: 'Yageo CC0402KRX7R9BB104', note: 'Harga lebih terjangkau' }] },
  ],
  mosfet: [
    { id: 'IRLZ44N', name: 'IRLZ44N', brand: 'Infineon', icon: '🔧',
      desc: 'N-Channel Logic-Level MOSFET 55V 47A. Bisa di-drive langsung dari GPIO 3.3V/5V.',
      specs: { 'Vds': '55V', 'Id': '47A', 'Rds(on)': '22mΩ', 'Package': 'TO-220' },
      pinout: ['Gate', 'Drain', 'Source', 'Tab'],
      price: 'Rp 12.000', stock: 'stock', stores: ['Tokopedia','Shopee','LCSC'],
      alts: [{ name: 'IRL540N', note: '100V variant' }, { name: 'STP36NF06L', note: 'ST alternative' }] },
    { id: 'IRF540N', name: 'IRF540N', brand: 'Vishay', icon: '🔧',
      desc: 'N-Channel Power MOSFET 100V 33A. Standard gate drive.',
      specs: { 'Vds': '100V', 'Id': '33A', 'Vgs(th)': '2-4V', 'Package': 'TO-220' },
      pinout: ['Gate', 'Drain', 'Source'],
      price: 'Rp 9.500', stock: 'stock', stores: ['Tokopedia','Shopee'],
      alts: [{ name: 'IRLB3034', note: 'Lower Rds(on)' }] },
    { id: 'AO3401', name: 'AO3401', brand: 'Alpha & Omega', icon: '🔧',
      desc: 'P-Channel MOSFET SOT-23 30V 4A. Load switch dan reverse protection.',
      specs: { 'Vds': '-30V', 'Id': '-4A', 'Package': 'SOT-23', 'Rds(on)': '50mΩ' },
      pinout: ['Gate', 'Source', 'Drain'],
      price: 'Rp 1.500', stock: 'stock', stores: ['LCSC','Shopee'],
      alts: [{ name: 'SI2301', note: 'Package SOT-23 sama' }] },
  ],
  'arduino nano': [
    { id: 'ARD-NANO-V3', name: 'Arduino Nano V3.0', brand: 'Arduino / Clone', icon: '🤖',
      desc: 'Board mikrokontroler ATmega328P mini. 14 digital pin, 8 analog.',
      specs: { 'MCU': 'ATmega328P', 'Clock': '16 MHz', 'Flash': '32KB', 'GPIO': '14+8 analog' },
      pinout: ['VIN', '5V', '3V3', 'GND', 'RST', 'D0-D13', 'A0-A7'],
      price: 'Rp 25.000', stock: 'stock', stores: ['Tokopedia','Shopee','Bukalapak'],
      alts: [{ name: 'Arduino Nano Every', note: 'Versi terbaru ATmega4809' }] },
    { id: 'ARD-NANO-EVERY', name: 'Arduino Nano Every', brand: 'Arduino', icon: '🤖',
      desc: 'Generasi terbaru Nano, ATmega4809 20MHz, 48KB flash.',
      specs: { 'MCU': 'ATmega4809', 'Clock': '20 MHz', 'Flash': '48KB', 'GPIO': '14+8 analog' },
      pinout: ['VIN', '5V', '3V3', 'GND', 'RST', 'D0-D21'],
      price: 'Rp 185.000', stock: 'low', stores: ['Tokopedia','official Arduino'],
      alts: [{ name: 'Arduino Nano V3.0', note: 'Lebih murah, kompatibel' }] },
  ],
  esp32: [
    { id: 'ESP32-DEVKITC', name: 'ESP32-DevKitC V4', brand: 'Espressif', icon: '📡',
      desc: 'Development board ESP32, dual-core 240MHz, WiFi+BT terintegrasi.',
      specs: { 'CPU': 'Xtensa LX6 Dual', 'Clock': '240 MHz', 'Flash': '4MB', 'Wireless': 'WiFi + BT 4.2' },
      pinout: ['3V3', 'GND', 'EN', 'GPIO0-39', 'TX', 'RX', 'VIN'],
      price: 'Rp 65.000', stock: 'stock', stores: ['Tokopedia','Shopee','LCSC'],
      alts: [{ name: 'ESP32-WROOM-32', note: 'Module saja tanpa board' }] },
    { id: 'ESP32-S3', name: 'ESP32-S3-DevKitC', brand: 'Espressif', icon: '📡',
      desc: 'ESP32-S3 dengan AI acceleration, USB native.',
      specs: { 'CPU': 'Xtensa LX7 Dual', 'Clock': '240 MHz', 'Flash': '8MB', 'Extra': 'AI Accel, USB OTG' },
      pinout: ['3V3', 'GND', 'GPIO0-48', 'USB_D+', 'USB_D−'],
      price: 'Rp 95.000', stock: 'stock', stores: ['Tokopedia','LCSC'],
      alts: [{ name: 'ESP32-C3', note: 'RISC-V, lebih hemat' }] },
  ],
  lm7805: [
    { id: 'LM7805CT', name: 'LM7805CT', brand: 'Texas Instruments', icon: '⚙️',
      desc: 'Voltage regulator linear +5V 1A klasik. Keluaran stabil.',
      specs: { 'Vout': '+5V', 'Iout': '1A', 'Vin': '7-35V', 'Package': 'TO-220' },
      pinout: ['IN', 'GND', 'OUT'],
      price: 'Rp 3.000', stock: 'stock', stores: ['Tokopedia','Shopee','LCSC'],
      alts: [{ name: 'L7805CV (ST)', note: 'Pin-compatible' }, { name: 'AMS1117-5.0', note: 'SMD LDO alternative' }] },
  ],
  led: [
    { id: 'LED-RED-5MM', name: 'LED Merah 5mm', brand: 'Generic', icon: '💡',
      desc: 'LED 5mm standar merah. Vf ~2V, 20mA. Paling umum untuk indikator.',
      specs: { 'Color': 'Red', 'Vf': '~2.0V', 'If': '20mA', 'Luminosity': '400-800 mcd' },
      pinout: ['Anode (+)', 'Cathode (−)'],
      price: 'Rp 300', stock: 'stock', stores: ['Tokopedia','Shopee','Bukalapak'],
      alts: [{ name: 'LED Merah SMD 0805', note: 'SMD variant' }] },
    { id: 'LED-WS2812B', name: 'WS2812B RGB LED', brand: 'WorldSemi', icon: '🌈',
      desc: 'Addressable RGB LED dengan IC controller terintegrasi. Chainable.',
      specs: { 'Vcc': '5V', 'Color': 'RGB 24-bit', 'Package': 'SMD 5050', 'Protocol': 'Single-wire NRZ' },
      pinout: ['VDD', 'DOUT', 'VSS', 'DIN'],
      price: 'Rp 2.500', stock: 'stock', stores: ['Tokopedia','Shopee','LCSC'],
      alts: [{ name: 'SK6812', note: 'Compatible, kecerahan lebih tinggi' }] },
  ],
};

function generateFallback(query) {
  return [
    { id: `${query}-001`, name: `${query.toUpperCase()}-A100`, brand: 'Generic', icon: '🔩',
      desc: `Komponen ${query} general purpose. Cocok untuk berbagai aplikasi PCB.`,
      specs: { 'Type': query, 'Package': 'DIP/SMD', 'Status': 'Active', 'RoHS': 'Compliant' },
      pinout: ['Pin1', 'Pin2', 'GND', 'VCC'],
      price: 'Rp 5.000', stock: 'stock', stores: ['Tokopedia','Shopee'],
      alts: [{ name: `${query.toUpperCase()}-B200`, note: 'Variant lain' }] },
    { id: `${query}-002`, name: `${query.toUpperCase()}-B200`, brand: 'Name Brand', icon: '🔩',
      desc: `${query} versi premium dengan toleransi lebih ketat.`,
      specs: { 'Type': query, 'Package': 'SMD', 'Grade': 'Industrial', 'Temp': '-40~+125°C' },
      pinout: ['In', 'Out', 'GND'],
      price: 'Rp 12.000', stock: 'low', stores: ['LCSC','Mouser'],
      alts: [{ name: `${query.toUpperCase()}-A100`, note: 'Budget alternative' }] },
  ];
}
function getComponents(query) {
  const q = query.toLowerCase().trim();
  for (const key of Object.keys(COMPONENT_DB)) {
    if (q.includes(key) || key.includes(q)) return COMPONENT_DB[key];
  }
  return generateFallback(query);
}

// ─── PCB PRESETS ──────────────────────────────────────────────
const PRESETS = {
  'relay-driver': ['Relay 5V SRD-05VDC', 'Transistor BC547', 'Diode 1N4007', 'Resistor 1kΩ', 'LED Merah', 'Pin Header 2.54mm'],
  'led-matrix': ['WS2812B LED x16', 'Resistor 330Ω', 'Capacitor 100µF', 'Capacitor 100nF', 'Pin Header 2.54mm'],
  'power-supply': ['LM7805 Regulator', 'Capacitor 1000µF 25V', 'Capacitor 100nF', 'Diode Bridge 2A', 'LED Indikator', 'Fuse Holder'],
  'sensor-node': ['ESP32 Module', 'DHT22 Sensor', 'Resistor 10kΩ', 'Capacitor 100nF', 'LM1117-3.3 LDO', 'USB-C Connector'],
  'h-bridge': ['IRF540N x4', 'Diode 1N4148 x4', 'Resistor 10kΩ', 'Resistor 100Ω', 'Capacitor 100nF', 'Terminal Block', 'Opto-isolator', 'Gate Driver IC'],
  'buck-converter': ['LM2596S', 'Inductor 100µH', 'Schottky Diode SS34', 'Capacitor 470µF', 'Capacitor 100nF', 'LED Indikator', 'Potentiometer 10kΩ'],
};

// ─── SCROLL REVEAL ────────────────────────────────────────────
const reveals = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => revealObs.observe(el));

// ─── NAV ──────────────────────────────────────────────────────
document.getElementById('navHamburger')?.addEventListener('click', () => {
  const links = document.querySelector('.nav-links');
  if (links) links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
});

// ─── FEATURE TABS ─────────────────────────────────────────────
function switchFTab(id) {
  document.querySelectorAll('.ftab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.ftab-panel').forEach(p => p.classList.remove('active'));
  const targetTab = document.querySelector(`.ftab[data-ftab="${id}"]`);
  const targetPanel = document.getElementById(`ftab-${id}`);
  if (targetTab) targetTab.classList.add('active');
  if (targetPanel) targetPanel.classList.add('active');
  const contextMap = {
    'component': 'Komponen PCB', 'pcb-builder': 'PCB Builder',
    'pcb-analysis': 'Analisis PCB', 'comp-analysis': 'Analisis Komponen',
    'pcb-examples': 'Contoh PCB', 'overview': 'Global'
  };
  document.getElementById('chatContext').textContent = contextMap[id] || 'Global';
}
document.querySelectorAll('.ftab').forEach(tab => {
  tab.addEventListener('click', () => switchFTab(tab.dataset.ftab));
});

// ─── COMPONENT SEARCH TABS ────────────────────────────────────
document.querySelectorAll('.csb-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.csb-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.csb-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab)?.classList.add('active');
  });
});

// ─── COMPONENT SEARCH LOGIC ──────────────────────────────────
function renderComponents(query) {
  const results = getComponents(query);
  const grid = document.getElementById('compGrid');
  document.getElementById('resultsQuery').innerHTML = `Menampilkan: <strong>${query}</strong>`;
  document.getElementById('resultsCount').textContent = `${results.length} komponen ditemukan`;
  grid.innerHTML = Array(results.length).fill(0).map(() => `<div class="comp-card"><div style="height:180px" class="skeleton"></div></div>`).join('');
  setTimeout(() => {
    grid.innerHTML = results.map(c => `
      <div class="comp-card" data-id="${c.id}" onclick="openModal('${c.id}', '${query}')">
        <div class="cc-header"><div class="cc-symbol">${c.icon}</div><div class="cc-badges"><span class="cc-badge ${c.stock}">${c.stock === 'stock' ? '✓ Tersedia' : '⚠ Stok Terbatas'}</span></div></div>
        <div class="cc-name">${c.name}</div>
        <div class="cc-brand">${c.brand}</div>
        <div class="cc-desc">${c.desc}</div>
        <div class="cc-specs">${Object.entries(c.specs).slice(0,3).map(([k,v]) => `<span class="cc-spec">${k}: ${v}</span>`).join('')}</div>
        ${c.pinout ? `<div class="cc-pinout">${c.pinout.slice(0,5).map(p => `<span class="cc-pin">${p}</span>`).join('')}</div>` : ''}
        <div class="cc-footer"><div class="cc-price">${c.price}</div><button class="cc-action" onclick="event.stopPropagation(); addToPCB('${c.name}')">+ PCB Builder</button></div>
      </div>`).join('');
    grid.querySelectorAll('.comp-card').forEach((card, i) => {
      card.style.opacity = '0'; card.style.transform = 'translateY(16px)';
      setTimeout(() => { card.style.transition = 'opacity 0.35s ease, transform 0.35s ease'; card.style.opacity = '1'; card.style.transform = 'none'; }, i * 70);
    });
  }, 450);
}
renderComponents('relay');

document.getElementById('searchBtn')?.addEventListener('click', () => {
  const val = document.getElementById('compSearchInput').value.trim();
  if (val) renderComponents(val);
});
document.getElementById('compSearchInput')?.addEventListener('keydown', e => {
  if (e.key === 'Enter') { const val = e.target.value.trim(); if (val) renderComponents(val); }
});
document.getElementById('clearSearch')?.addEventListener('click', () => {
  document.getElementById('compSearchInput').value = '';
  document.getElementById('compSearchInput').focus();
});
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const q = chip.dataset.query;
    document.getElementById('compSearchInput').value = q;
    renderComponents(q);
  });
});

// ─── MODAL ────────────────────────────────────────────────────
function openModal(id, query) {
  const allComps = getComponents(query);
  const comp = allComps.find(c => c.id === id) || allComps[0];
  if (!comp) return;
  document.getElementById('modalContent').innerHTML = `
    <div class="md-header"><div class="md-symbol">${comp.icon}</div><div><div class="md-name">${comp.name}</div><div class="md-brand">${comp.brand}</div><div class="md-desc">${comp.desc}</div></div></div>
    ${comp.pinout ? `<div class="md-section-title">Pinout</div><div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px">${comp.pinout.map((p,i) => `<span style="font-family:var(--mono);font-size:11px;padding:4px 10px;background:rgba(184,115,51,0.12);border:1px solid rgba(184,115,51,0.3);border-radius:4px;color:#b87333"><strong>P${i+1}:</strong> ${p}</span>`).join('')}</div>` : ''}
    <div class="md-section-title">Spesifikasi Teknis</div>
    <div class="md-specs-grid">${Object.entries(comp.specs).map(([k,v]) => `<div class="md-spec-item"><div class="md-spec-label">${k}</div><div class="md-spec-val">${v}</div></div>`).join('')}</div>
    <div class="md-section-title">Beli di Mana</div>
    <div class="md-where">${comp.stores.map(s => `<div class="md-store">${s === 'Tokopedia' ? '🟢' : s === 'Shopee' ? '🟠' : '🔵'} ${s}</div>`).join('')}</div>
    ${comp.alts && comp.alts.length ? `<div class="md-section-title">Alternatif</div><div class="md-alts">${comp.alts.map(a => `<div class="md-alt"><div><div class="md-alt-name">${a.name}</div><div class="md-alt-note">${a.note}</div></div><button class="md-alt-action" onclick="searchFromModal('${a.name}')">Lihat →</button></div>`).join('')}</div>` : ''}
    <button class="md-add-pcb" onclick="addToPCB('${comp.name}'); closeModal()">⚙️ Tambahkan ke PCB Builder</button>`;
  document.getElementById('compModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() { document.getElementById('compModal').classList.remove('open'); document.body.style.overflow = ''; }
function searchFromModal(name) { closeModal(); document.getElementById('compSearchInput').value = name; renderComponents(name); }
document.getElementById('modalClose')?.addEventListener('click', closeModal);
document.getElementById('modalBackdrop')?.addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ─── IMAGE UPLOAD ─────────────────────────────────────────────
document.getElementById('imgUploadBtn')?.addEventListener('click', () => document.getElementById('imgFileInput')?.click());
document.getElementById('imgFileInput')?.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    document.getElementById('previewImg').src = ev.target.result;
    document.querySelector('.iua-inner').style.display = 'none';
    document.getElementById('imgPreview').style.display = 'block';
    setTimeout(() => {
      document.getElementById('imgPreview').style.display = 'none';
      document.querySelector('.iua-inner').style.display = 'block';
      renderComponents('relay');
      document.getElementById('resultsQuery').innerHTML = 'Menampilkan: <strong>Diidentifikasi: Relay</strong>';
      document.querySelector('.csb-tab[data-tab="text"]').click();
    }, 2500);
  };
  reader.readAsDataURL(file);
});

// ─── PCB BUILDER ──────────────────────────────────────────────
let pcbComponents = [];
let currentStep = 1;

function updateStepUI() {
  document.querySelectorAll('.pbu-step').forEach((el, i) => {
    el.classList.remove('active', 'done');
    if (i + 1 === currentStep) el.classList.add('active');
    else if (i + 1 < currentStep) el.classList.add('done');
  });
  document.querySelectorAll('.pbu-panel').forEach(p => p.classList.remove('active'));
  document.getElementById(`pbu-step-${currentStep}`)?.classList.add('active');
}

function renderTags() {
  const container = document.getElementById('compTags');
  container.innerHTML = pcbComponents.map((c, i) => `
    <div class="comp-tag">${c}<span class="comp-tag-remove" onclick="removeTag(${i})">×</span></div>`).join('');
  if (pcbComponents.length > 0) {
    document.getElementById('pcbHint').style.display = 'none';
    document.getElementById('pcbStats').style.display = 'grid';
    document.getElementById('statComps').textContent = pcbComponents.length;
    document.getElementById('statNets').textContent = pcbComponents.length * 2 + 2;
    const area = Math.max(50, Math.ceil(Math.sqrt(pcbComponents.length * 800)));
    document.getElementById('statArea').textContent = `${area}×${area}mm`;
    drawSchematicPreview();
  } else {
    document.getElementById('pcbHint').style.display = 'flex';
    document.getElementById('pcbStats').style.display = 'none';
    drawEmptyCanvas();
  }
}
function removeTag(i) { pcbComponents.splice(i, 1); renderTags(); }
function addToPCB(name) {
  if (!pcbComponents.includes(name)) {
    pcbComponents.push(name);
    renderTags();
    showToast(`✓ ${name} ditambahkan ke PCB Builder`);
    switchFTab('pcb-builder');
  }
}

document.getElementById('compAddBtn')?.addEventListener('click', () => {
  const val = document.getElementById('compTagInput').value.trim();
  if (val && !pcbComponents.includes(val)) { pcbComponents.push(val); renderTags(); document.getElementById('compTagInput').value = ''; }
});
document.getElementById('compTagInput')?.addEventListener('keydown', e => {
  if (e.key === 'Enter') { const val = e.target.value.trim(); if (val && !pcbComponents.includes(val)) { pcbComponents.push(val); renderTags(); e.target.value = ''; } }
});
document.querySelectorAll('.qp-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const preset = PRESETS[btn.dataset.preset];
    if (preset) { pcbComponents = [...preset]; renderTags(); }
  });
});
document.getElementById('nextToStep2')?.addEventListener('click', () => {
  if (pcbComponents.length === 0) { showToast('⚠ Tambahkan setidaknya satu komponen'); return; }
  currentStep = 2; updateStepUI();
});
document.getElementById('backToStep1')?.addEventListener('click', () => { currentStep = 1; updateStepUI(); });
document.getElementById('nextToStep3')?.addEventListener('click', () => {
  currentStep = 3; updateStepUI();
  triggerGenerateScan();
  setTimeout(() => {
    drawFinalPCB();
    document.getElementById('statRoute').textContent = '98.7%';
  }, 3800);
});
document.getElementById('resetBuilder')?.addEventListener('click', () => {
  pcbComponents = []; currentStep = 1; updateStepUI(); renderTags();
  terminalLog('System reset. Worksheet cleared.', 'info');
});

// ─── GENERATE SCAN ANIMATION ─────────────────────────────────
function triggerGenerateScan() {
  const overlay = document.getElementById('canvasScanOverlay');
  if (!overlay) return;
  overlay.classList.add('active');
  showTerminalLog();
  const logLines = [
    { text: '> Parsing component list...', type: 'info', delay: 200 },
    { text: `> Components loaded: ${pcbComponents.length}`, type: 'ok', delay: 600 },
    { text: '> Running AI placement algorithm...', type: 'copper', delay: 1000 },
    { text: '> Calculating trace routing paths...', type: 'copper', delay: 1600 },
    { text: '> Selecting optimal IC packages...', type: 'info', delay: 2200 },
    { text: '> Auto-routing complete: 98.7%', type: 'ok', delay: 2800 },
    { text: '> DRC check passed ✓', type: 'ok', delay: 3200 },
    { text: '> Generating Gerber files...', type: 'copper', delay: 3500 },
    { text: '> Schematic generated successfully ✓', type: 'ok', delay: 3800 },
  ];
  logLines.forEach(({ text, type, delay }) => {
    setTimeout(() => terminalLog(text, type), delay);
  });
  setTimeout(() => {
    overlay.classList.remove('active');
    triggerElectronParticles();
  }, 4000);
}

// ─── TERMINAL LOG ─────────────────────────────────────────────
function showTerminalLog() {
  const win = document.getElementById('terminalLogWindow');
  if (win) { win.classList.add('visible'); document.getElementById('terminalLogBody').innerHTML = ''; }
}
function terminalLog(text, type = '') {
  const body = document.getElementById('terminalLogBody');
  if (!body) return;
  const line = document.createElement('div');
  line.className = `tl-line ${type}`;
  line.textContent = text;
  body.appendChild(line);
  body.scrollTop = body.scrollHeight;
}

// ─── ELECTRON PARTICLE ANIMATION ─────────────────────────────
function triggerElectronParticles() {
  const canvas = document.getElementById('electronCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.classList.add('active');
  const particles = [];
  // Create particles flowing along grid lines
  for (let i = 0; i < 60; i++) {
    const isH = Math.random() > 0.5;
    const lineCoord = Math.round(Math.random() * (isH ? canvas.height : canvas.width) / 96) * 96;
    particles.push({
      x: isH ? 0 : lineCoord,
      y: isH ? lineCoord : 0,
      vx: isH ? (2 + Math.random() * 3) : 0,
      vy: isH ? 0 : (2 + Math.random() * 3),
      life: 1,
      decay: 0.005 + Math.random() * 0.01,
      size: 2 + Math.random() * 2,
      color: Math.random() > 0.5 ? '#00ff41' : '#f5a623',
    });
  }
  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.life -= p.decay;
      if (p.life <= 0) return;
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1; ctx.shadowBlur = 0;
    frame++;
    if (frame < 200 && particles.some(p => p.life > 0)) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.classList.remove('active');
    }
  }
  animate();
}

// ─── CANVAS DRAWING ───────────────────────────────────────────
function drawEmptyCanvas() {
  const canvas = document.getElementById('pcbPreviewCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  ctx.fillStyle = '#0d1f13'; ctx.fillRect(0, 0, W, H);
  // Grid lines
  ctx.strokeStyle = 'rgba(44,207,164,0.06)'; ctx.lineWidth = 1;
  for (let x = 0; x < W; x += 24) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
  for (let y = 0; y < H; y += 24) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
  // Axis lines (X and Y)
  ctx.strokeStyle = 'rgba(184,115,51,0.25)'; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(W/2, 0); ctx.lineTo(W/2, H); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(0, H/2); ctx.lineTo(W, H/2); ctx.stroke();
  ctx.fillStyle = 'rgba(44,207,164,0.15)'; ctx.font = '11px Space Mono'; ctx.textAlign = 'center';
  ctx.fillText('Desain komponen untuk memulai', W/2, H/2 + 24);
}

function drawSchematicPreview() {
  const canvas = document.getElementById('pcbPreviewCanvas');
  if (!canvas || pcbComponents.length === 0) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  ctx.fillStyle = '#0a1a10'; ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = 'rgba(44,207,164,0.05)'; ctx.lineWidth = 1;
  for (let x = 0; x < W; x += 24) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
  for (let y = 0; y < H; y += 24) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
  ctx.strokeStyle = 'rgba(184,115,51,0.15)'; ctx.lineWidth = 1.2;
  ctx.beginPath(); ctx.moveTo(W/2, 0); ctx.lineTo(W/2, H); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(0, H/2); ctx.lineTo(W, H/2); ctx.stroke();
  const n = pcbComponents.length;
  const cols = Math.ceil(Math.sqrt(n)); const rows = Math.ceil(n / cols);
  const cellW = (W - 60) / cols; const cellH = (H - 60) / rows;
  pcbComponents.forEach((comp, i) => {
    const col = i % cols; const row = Math.floor(i / cols);
    const cx = 30 + col * cellW + cellW / 2; const cy = 30 + row * cellH + cellH / 2;
    const color = getCompColor(comp);
    ctx.strokeStyle = color; ctx.lineWidth = 1.5;
    const bw = Math.min(cellW * 0.6, 70); const bh = 28;
    ctx.strokeRect(cx - bw/2, cy - bh/2, bw, bh);
    ctx.fillStyle = color + '30'; ctx.fillRect(cx - bw/2, cy - bh/2, bw, bh);
    ctx.fillStyle = color; ctx.font = `bold ${Math.min(10, cellW * 0.12)}px Space Mono`; ctx.textAlign = 'center';
    const label = comp.split(' ').slice(0, 2).join(' ');
    ctx.fillText(label.length > 10 ? label.slice(0, 10) + '…' : label, cx, cy + 4);
    if (i < n - 1) {
      const nextCol = (i + 1) % cols; const nextRow = Math.floor((i + 1) / cols);
      const nx = 30 + nextCol * cellW + cellW / 2; const ny = 30 + nextRow * cellH + cellH / 2;
      ctx.strokeStyle = 'rgba(184,115,51,0.5)'; ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.moveTo(cx + bw/2, cy); ctx.lineTo(nx - bw/2, ny); ctx.stroke();
    }
  });
}

function drawFinalPCB() {
  const canvas = document.getElementById('pcbPreviewCanvas');
  if (!canvas || pcbComponents.length === 0) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  ctx.fillStyle = '#0d2116'; ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = 'rgba(44,207,164,0.06)'; ctx.lineWidth = 1;
  for (let x = 0; x < W; x += 20) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
  for (let y = 0; y < H; y += 20) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
  ctx.strokeStyle = 'rgba(200,160,40,0.4)'; ctx.lineWidth = 2; ctx.strokeRect(14, 14, W - 28, H - 28);
  const n = pcbComponents.length; const cols = Math.ceil(Math.sqrt(n)); const rows = Math.ceil(n / cols);
  const cellW = (W - 80) / cols; const cellH = (H - 80) / rows;
  const tracePoints = pcbComponents.map((_, i) => ({
    cx: 40 + (i % cols) * cellW + cellW/2, cy: 40 + Math.floor(i / cols) * cellH + cellH/2
  }));
  // Draw copper traces
  ctx.strokeStyle = `rgba(184,115,51,0.6)`; ctx.lineWidth = 2;
  for (let i = 0; i < tracePoints.length - 1; i++) {
    const a = tracePoints[i]; const b = tracePoints[i + 1];
    ctx.beginPath(); ctx.moveTo(a.cx + 10, a.cy);
    ctx.lineTo(a.cx + 10 + (b.cx - a.cx)/2, a.cy);
    ctx.lineTo(a.cx + 10 + (b.cx - a.cx)/2, b.cy);
    ctx.lineTo(b.cx - 10, b.cy); ctx.stroke();
  }
  pcbComponents.forEach((comp, i) => {
    const col = i % cols; const row = Math.floor(i / cols);
    const cx = 40 + col * cellW + cellW/2; const cy = 40 + row * cellH + cellH/2;
    const bw = Math.min(cellW * 0.65, 80); const bh = Math.min(cellH * 0.5, 50);
    const color = getCompColor(comp);
    ctx.fillStyle = 'rgba(20,50,30,0.9)'; ctx.strokeStyle = 'rgba(255,255,255,0.45)'; ctx.lineWidth = 1;
    roundRect(ctx, cx - bw/2, cy - bh/2, bw, bh, 3);
    ctx.fillStyle = color; ctx.fillRect(cx - bw/2, cy - bh/2, 6, 6);
    const padColor = 'rgba(200,160,40,0.9)';
    for (let p = 0; p < 3; p++) {
      ctx.fillStyle = padColor; ctx.beginPath(); ctx.arc(cx - bw/2 - 8, cy - 8 + p * 8, 4, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#0d2116'; ctx.beginPath(); ctx.arc(cx - bw/2 - 8, cy - 8 + p * 8, 2, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = padColor; ctx.beginPath(); ctx.arc(cx + bw/2 + 8, cy - 8 + p * 8, 4, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#0d2116'; ctx.beginPath(); ctx.arc(cx + bw/2 + 8, cy - 8 + p * 8, 2, 0, Math.PI * 2); ctx.fill();
    }
    ctx.fillStyle = 'rgba(255,255,255,0.75)'; ctx.font = `bold ${Math.min(9, cellW * 0.1)}px Space Mono`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    const short = comp.split(' ').slice(0, 2).join(' ');
    ctx.fillText(short.length > 9 ? short.slice(0, 9) + '…' : short, cx + 3, cy);
    // Silk screen label
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.font = '7px Space Mono'; ctx.textBaseline = 'top';
    ctx.fillText(`U${i+1}`, cx - bw/2 + 2, cy + bh/2 + 3);
  });
  // Mounting holes
  [[14,14],[W-14,14],[14,H-14],[W-14,H-14]].forEach(([hx,hy]) => {
    ctx.strokeStyle = 'rgba(200,160,40,0.5)'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(hx, hy, 5, 0, Math.PI * 2); ctx.stroke();
    ctx.fillStyle = '#0d2116'; ctx.beginPath(); ctx.arc(hx, hy, 2.5, 0, Math.PI * 2); ctx.fill();
  });
}

function getCompColor(comp) {
  const n = comp.toLowerCase();
  if (n.includes('relay')) return '#60a0e0';
  if (n.includes('led') || n.includes('light')) return '#e8e060';
  if (n.includes('capacitor') || n.includes('cap')) return '#60c080';
  if (n.includes('resistor') || n.includes('res')) return '#c08040';
  if (n.includes('transistor') || n.includes('mosfet') || n.includes('bc')) return '#a060e0';
  if (n.includes('esp32') || n.includes('arduino') || n.includes('mcu')) return '#40c0a0';
  if (n.includes('sensor')) return '#e06080';
  if (n.includes('diode') || n.includes('1n4')) return '#f06060';
  if (n.includes('regulator') || n.includes('lm78') || n.includes('buck')) return '#9c6fff';
  return '#f5a623';
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath(); ctx.moveTo(x + r, y); ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r); ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r); ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r); ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r); ctx.closePath(); ctx.fill(); ctx.stroke();
}

document.querySelectorAll('.pv-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.pv-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if (pcbComponents.length > 0) {
      if (btn.dataset.view === 'layout' || btn.dataset.view === '3d') drawFinalPCB();
      else drawSchematicPreview();
    }
  });
});
document.querySelectorAll('.gf-dl').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = '✓ Done'; btn.style.borderColor = 'var(--accent-teal)'; btn.style.color = 'var(--accent-teal)';
    setTimeout(() => { btn.textContent = 'Download'; btn.style.borderColor = ''; btn.style.color = ''; }, 2000);
  });
});
drawEmptyCanvas();

// ─── PCB EXAMPLES ─────────────────────────────────────────────
function drawExamplePCB(canvas, exampleKey) {
  const comps = PRESETS[exampleKey] || PRESETS['relay-driver'];
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  ctx.fillStyle = '#0d2116'; ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = 'rgba(44,207,164,0.06)'; ctx.lineWidth = 1;
  for (let x = 0; x < W; x += 20) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
  for (let y = 0; y < H; y += 20) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
  ctx.strokeStyle = 'rgba(200,160,40,0.4)'; ctx.lineWidth = 1.5; ctx.strokeRect(8, 8, W - 16, H - 16);
  const n = comps.length; const cols = Math.ceil(Math.sqrt(n)); const rows = Math.ceil(n / cols);
  const cellW = (W - 40) / cols; const cellH = (H - 40) / rows;
  comps.forEach((comp, i) => {
    const col = i % cols; const row = Math.floor(i / cols);
    const cx = 20 + col * cellW + cellW/2; const cy = 20 + row * cellH + cellH/2;
    const bw = Math.min(cellW * 0.7, 60); const bh = Math.min(cellH * 0.55, 32);
    const color = getCompColor(comp);
    ctx.fillStyle = 'rgba(20,50,30,0.85)'; ctx.strokeStyle = 'rgba(255,255,255,0.3)'; ctx.lineWidth = 0.8;
    roundRect(ctx, cx - bw/2, cy - bh/2, bw, bh, 2);
    ctx.fillStyle = color + '80'; ctx.fillRect(cx - bw/2, cy - bh/2, 5, 5);
    if (i < n - 1) {
      const nx = 20 + ((i+1) % cols) * cellW + cellW/2; const ny = 20 + Math.floor((i+1) / cols) * cellH + cellH/2;
      ctx.strokeStyle = 'rgba(184,115,51,0.4)'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(cx + bw/2, cy); ctx.lineTo(nx - bw/2, ny); ctx.stroke();
    }
    const padColor = 'rgba(200,160,40,0.7)';
    for (let p = 0; p < 2; p++) {
      ctx.fillStyle = padColor; ctx.beginPath(); ctx.arc(cx - bw/2 - 5, cy - 4 + p * 8, 2.5, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#0d2116'; ctx.beginPath(); ctx.arc(cx - bw/2 - 5, cy - 4 + p * 8, 1.2, 0, Math.PI * 2); ctx.fill();
    }
    ctx.fillStyle = 'rgba(255,255,255,0.6)'; ctx.font = `bold ${Math.min(8, cellW * 0.12)}px Space Mono`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    const label = comp.split(' ')[0];
    ctx.fillText(label.length > 7 ? label.slice(0,7) : label, cx + 1, cy);
  });
  [[12,12],[W-12,12],[12,H-12],[W-12,H-12]].forEach(([hx,hy]) => {
    ctx.strokeStyle = 'rgba(200,160,40,0.5)'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(hx, hy, 4, 0, Math.PI * 2); ctx.stroke();
    ctx.fillStyle = '#0d2116'; ctx.beginPath(); ctx.arc(hx, hy, 1.5, 0, Math.PI * 2); ctx.fill();
  });
}

function loadPCBExample(key) {
  pcbComponents = [...(PRESETS[key] || [])];
  renderTags();
  showToast(`✓ Preset "${key}" dimuat ke PCB Builder`);
  switchFTab('pcb-builder');
  setTimeout(() => drawFinalPCB(), 300);
}

setTimeout(() => {
  document.querySelectorAll('.pec-canvas').forEach(canvas => {
    const key = canvas.dataset.example;
    if (key) drawExamplePCB(canvas, key);
  });
}, 200);

// ─── PCB ANALYSIS DEMO ────────────────────────────────────────
function showDemoAnalysis() {
  document.getElementById('analysisResult').style.display = 'block';
  document.querySelector('.pcb-upload-zone').style.display = 'none';
}

// ─── COMPONENT ANALYSIS ───────────────────────────────────────
const COMP_ANALYSIS_DATA = {
  relay: {
    icon: '🔌', name: 'HLS8L-DC5V-S-C', subtitle: 'Relay SPDT 5V · HONGFA',
    params: [
      { label: 'Coil Voltage', val: '5V DC' }, { label: 'Contact Rating', val: '10A/250VAC' },
      { label: 'Operate Time', val: '≤10ms' }, { label: 'Release Time', val: '≤5ms' },
      { label: 'Coil Resistance', val: '71.25Ω' }, { label: 'Package', val: 'DIP-5' },
    ],
    analysis: 'Relay ini cocok untuk aplikasi switching AC/DC rendah-menengah dari mikrokontroler. Perhatikan: coil membutuhkan ~70mA pada 5V, jadi GPIO mikrokontroler TIDAK bisa langsung drive — harus melalui transistor BJT (BC547/S8050) atau MOSFET. Selalu pasang flyback diode (1N4007) antiparallel pada coil untuk proteksi back-EMF.'
  },
  irlz44n: {
    icon: '🔧', name: 'IRLZ44N', subtitle: 'N-Ch Logic MOSFET · Infineon',
    params: [
      { label: 'Vds Max', val: '55V' }, { label: 'Id Max', val: '47A' },
      { label: 'Rds(on)', val: '22mΩ' }, { label: 'Vgs(th)', val: '1-2V' },
      { label: 'Pd Max', val: '110W' }, { label: 'Package', val: 'TO-220' },
    ],
    analysis: 'IRLZ44N adalah pilihan excellent untuk power switching yang di-drive dari GPIO 3.3V/5V. Threshold gate 1-2V artinya GPIO langsung bisa drive MOSFET ini ke saturasi penuh. Rds(on) 22mΩ sangat rendah — disipasi panas minimal di high-current applications. Pasang resistor gate 100-470Ω untuk mencegah osilasi.'
  },
  esp32: {
    icon: '📡', name: 'ESP32-DevKitC V4', subtitle: 'WiFi+BT MCU · Espressif',
    params: [
      { label: 'CPU Cores', val: '2× Xtensa LX6' }, { label: 'Clock Max', val: '240 MHz' },
      { label: 'Flash', val: '4MB' }, { label: 'SRAM', val: '520KB' },
      { label: 'GPIO', val: '38 pins' }, { label: 'Wireless', val: 'WiFi + BT 4.2' },
    ],
    analysis: 'ESP32 adalah pilihan kuat untuk proyek IoT mahasiswa. GPIO 34-39 adalah input-only. ADC2 tidak bisa digunakan saat WiFi aktif — gunakan ADC1 (GPIO 32-39) untuk pengukuran analog yang reliable saat WiFi on.'
  },
  lm7805: {
    icon: '⚙️', name: 'LM7805CT', subtitle: 'Linear Regulator 5V · Texas Instruments',
    params: [
      { label: 'Vout', val: '+5V ±4%' }, { label: 'Iout Max', val: '1A' },
      { label: 'Vin Min', val: '7V' }, { label: 'Vin Max', val: '35V' },
      { label: 'Dropout', val: '~2V' }, { label: 'Package', val: 'TO-220' },
    ],
    analysis: 'LM7805 adalah regulator linear yang simple dan reliable. Contoh: input 12V, output 5V, arus 500mA → disipasi panas (12-5)×0.5 = 3.5W. Butuh heatsink! Untuk efisiensi lebih baik pada battery-powered project, pertimbangkan LM2596 atau AMS1117.'
  }
};

function showCompAnalysis(el, key) {
  document.querySelectorAll('.ca-comp-item').forEach(i => i.classList.remove('active'));
  el.classList.add('active');
  const data = COMP_ANALYSIS_DATA[key];
  if (!data) return;
  document.getElementById('caResult').innerHTML = `
    <div class="car-header"><div class="car-icon">${data.icon}</div><div><div class="car-name">${data.name}</div><div class="car-subtitle">${data.subtitle}</div></div></div>
    <div class="car-params">${data.params.map(p => `<div class="cap-item"><div class="cap-label">${p.label}</div><div class="cap-val">${p.val}</div></div>`).join('')}</div>
    <div class="car-ai-analysis"><div class="caa-title">🤖 AI Analysis</div><div class="caa-text">${data.analysis}</div></div>`;
}
showCompAnalysis(document.querySelector('.ca-comp-item.active'), 'relay');

// ─── TOAST ────────────────────────────────────────────────────
function showToast(msg) {
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, {
    position: 'fixed', bottom: '100px', left: '50%', transform: 'translateX(-50%)',
    background: '#111318', border: '1px solid rgba(245,166,35,0.3)', color: '#f5a623',
    fontFamily: 'Space Mono, monospace', fontSize: '12px', padding: '10px 20px',
    borderRadius: '100px', zIndex: '1000', animation: 'fadeToast 0.3s ease', pointerEvents: 'none'
  });
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2200);
}

// ─── SIDEBAR TOOLS ────────────────────────────────────────────
document.querySelectorAll('.st-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.st-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.dataset.category;
    terminalLog(`> Category selected: ${category}`, 'info');
    showTerminalLog();
    setTimeout(() => {
      if (category === 'power') {
        document.getElementById('compSearchInput').value = 'regulator';
        renderComponents('regulator');
        switchFTab('component');
      } else if (category === 'passive') {
        document.getElementById('compSearchInput').value = 'capacitor';
        renderComponents('capacitor');
        switchFTab('component');
      } else if (category === 'active') {
        document.getElementById('compSearchInput').value = 'mosfet';
        renderComponents('mosfet');
        switchFTab('component');
      } else if (category === 'tools') {
        switchFTab('pcb-builder');
      }
    }, 200);
  });
});

// ─── AI CHAT WIDGET ───────────────────────────────────────────
const chatBtn = document.getElementById('aiChatBtn');
const chatPanel = document.getElementById('aiChatPanel');
const chatMessages = document.getElementById('acpMessages');
const chatInput = document.getElementById('acpInput');
const chatSend = document.getElementById('acpSend');

chatBtn.addEventListener('click', () => {
  chatBtn.classList.toggle('open');
  chatPanel.classList.toggle('open');
  if (chatPanel.classList.contains('open')) {
    setTimeout(() => chatInput.focus(), 300);
  }
});

chatInput.addEventListener('input', function () {
  this.style.height = 'auto';
  this.style.height = Math.min(this.scrollHeight, 100) + 'px';
});

chatInput.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendChat(); }
});
chatSend.addEventListener('click', sendChat);

function sendQuickMsg(msg) {
  if (!chatPanel.classList.contains('open')) {
    chatBtn.classList.add('open');
    chatPanel.classList.add('open');
  }
  chatInput.value = msg;
  setTimeout(sendChat, 100);
}

let chatHistory = [];

const SYSTEM_PROMPT = `Kamu adalah CircuitGen-AI, asisten desain sirkuit cerdas yang terintegrasi dalam platform "CircuitGen" — sebuah platform EDA (Electronic Design Automation) berbasis AI untuk mahasiswa teknik Indonesia, khususnya Instrumentasi Cerdas.

CircuitGen Online. Siap membantu merancang, menghitung nilai komponen, dan melakukan validasi sirkuit. Apa yang ingin kita bangun hari ini?

Kamu ahli dalam:
- Generative circuit design: LED flasher, oscillator, timer, filter, amplifier
- Elektronika: komponen PCB, schematic, layout, fabrication
- Embedded systems: Arduino, ESP32, Raspberry Pi, STM32
- PCB design: KiCad, Altium, Eagle
- Komponen elektronik: relay, MOSFET, kapasitor, resistor, sensor, mikrokontroler
- Konversi format teknik: ECAD, MCAD, Gerber

PENTING — Jika user mengetik "BOM", tampilkan tabel Bill of Materials dalam format:
| Nama Part | Nilai | Package | Mouser | Digikey |
Isi dengan data relevan berdasarkan konteks percakapan.

Kepribadian: Teknikal tapi friendly, komunikatif dalam bahasa Indonesia yang natural. Jawab singkat dan to-the-point. Gunakan format markdown ringan bila perlu. Jika ada kode, gunakan backtick. Maksimal 3 paragraf per jawaban.`;

async function sendChat() {
  const msg = chatInput.value.trim();
  if (!msg) return;
  chatInput.value = '';
  chatInput.style.height = 'auto';
  chatSend.disabled = true;

  addMessage('user', msg);
  chatHistory.push({ role: 'user', content: msg });
  const typing = addTyping();

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages: chatHistory
      })
    });
    const data = await response.json();
    typing.remove();
    const reply = data.content?.[0]?.text || 'Maaf, tidak bisa mendapat respons sekarang.';
    chatHistory.push({ role: 'assistant', content: reply });
    if (chatHistory.length > 20) chatHistory = chatHistory.slice(-16);

    // Log activity to terminal
    terminalLog(`> AI response generated (${reply.length} chars)`, 'info');

    // Check for BOM keyword
    if (msg.toLowerCase().includes('bom')) {
      addMessage('ai', formatBOMTable(reply));
    } else {
      addMessage('ai', reply);
    }
  } catch (err) {
    typing.remove();
    addMessage('ai', 'Koneksi gagal. Pastikan kamu terhubung ke internet dan coba lagi.');
  }
  chatSend.disabled = false;
  chatInput.focus();
}

function formatBOMTable(text) {
  // The AI should already return a markdown table for BOM, this ensures proper rendering
  return text;
}

function addMessage(role, text) {
  const now = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  const div = document.createElement('div');
  div.className = `chat-msg ${role}`;
  const formatted = role === 'ai' ? formatAIText(text) : escapeHtml(text);
  div.innerHTML = `<div class="chat-bubble">${formatted}</div><div class="chat-time">${now}</div>`;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return div;
}

function addTyping() {
  const div = document.createElement('div');
  div.className = 'chat-msg ai';
  div.innerHTML = `<div class="chat-typing"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>`;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return div;
}

function formatAIText(text) {
  let out = escapeHtml(text)
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\n/g, '<br>');

  // Render markdown table to HTML
  if (out.includes('|')) {
    out = out.replace(/((\|[^\n]+\|<br>)+)/g, (match) => {
      const rows = match.split('<br>').filter(r => r.trim() && r.includes('|'));
      const validRows = rows.filter(r => !r.match(/^\|[\s\-|]+\|$/));
      if (validRows.length < 2) return match;
      const header = validRows[0].split('|').filter(c => c.trim());
      const body = validRows.slice(1);
      return `<table><tr>${header.map(h => `<th>${h.trim()}</th>`).join('')}</tr>${body.map(r => `<tr>${r.split('|').filter(c => c.trim()).map(c => `<td>${c.trim()}</td>`).join('')}</tr>`).join('')}</table>`;
    });
  }
  return out;
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
