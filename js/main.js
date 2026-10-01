/**
 * AH LANKA — Official Interactive JavaScript Core (2026)
 * "Your Vehicle. Your Journey. Your Choice."
 * WhatsApp Conversion Engine & UI Interactions
 */

const AH_CONFIG = {
  phone: "94766322352", // International format for wa.me
  displayPhone: "+94 76 632 2352",
  localPhone: "076 632 2352",
  rates: {
    // Reference exchange rates against LKR (approximate for tourist display)
    USD: 1,
    LKR: 310,
    EUR: 0.92,
    GBP: 0.79
  }
};

// Global Currency State
let currentCurrency = localStorage.getItem('ah_currency') || 'USD';

/**
 * Universal WhatsApp Deep Link Generator
 */
function createWhatsAppUrl(message) {
  return `https://wa.me/${AH_CONFIG.phone}?text=${encodeURIComponent(message.trim())}`;
}

/**
 * 1. Vehicle Sales WhatsApp Message Generator
 */
function getSalesWhatsAppUrl(vehicleName, year, price, refId = '') {
  const msg = `Hello AH Lanka! 👋

I'm interested in buying this vehicle listed on your website:

🚘 Vehicle: ${vehicleName}
📅 Year: ${year}
💰 Price: ${price}
${refId ? `🔖 Ref ID: ${refId}\n` : ''}
Please send me more details, vehicle inspection report, and availability. Thank you!`;

  return createWhatsAppUrl(msg);
}

/**
 * 2. Specific Rental Fleet WhatsApp Message Generator
 */
function getRentalVehicleWhatsAppUrl(vehicleName, category, dailyRate) {
  const msg = `Hello AH Lanka! 👋

I'm interested in renting:

🚙 Vehicle: ${vehicleName}
📂 Category: ${category}
💵 Estimated Rate: ${dailyRate}

Please let me know the availability and rental quotation for my travel dates. Thank you!`;

  return createWhatsAppUrl(msg);
}

/**
 * 3. General Contact WhatsApp Message Generator
 */
function getGeneralContactWhatsAppUrl(topic, customText = '') {
  const msg = `Hello AH Lanka! 👋

I'd like to know more about your vehicle services in Sri Lanka.

📌 Interested in: ${topic}
${customText ? `📝 Note: ${customText}\n` : ''}
Please help me with the available options. Thank you!`;

  return createWhatsAppUrl(msg);
}

/**
 * Interactive Rental Requirement Builder Engine
 */
let rentalBuilderState = {
  type: "Luxury SUV (Prado / Montero)",
  driverMode: "With English-Speaking Driver",
  pickupDate: "",
  returnDate: "",
  passengers: "3 - 4 Passengers",
  location: "Bandaranaike Airport (CMB Katunayake)",
  flightNo: ""
};

function setRentalDriverMode(mode) {
  rentalBuilderState.driverMode = mode;
  
  const btnDriver = document.getElementById('rb-driver-btn');
  const btnSelf = document.getElementById('rb-self-btn');
  
  if (btnDriver && btnSelf) {
    if (mode.includes('Driver')) {
      btnDriver.className = "px-4 py-2.5 rounded-xl border border-emerald-500 bg-emerald-950/60 text-emerald-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm";
      btnSelf.className = "px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-900/80 text-slate-400 font-medium text-xs flex items-center justify-center gap-1.5 transition-all";
    } else {
      btnSelf.className = "px-4 py-2.5 rounded-xl border border-emerald-500 bg-emerald-950/60 text-emerald-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm";
      btnDriver.className = "px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-900/80 text-slate-400 font-medium text-xs flex items-center justify-center gap-1.5 transition-all";
    }
  }
  
  syncRentalBuilder();
}

function syncRentalBuilder() {
  const typeEl = document.getElementById('rb-type');
  const pickDateEl = document.getElementById('rb-pickup-date');
  const retDateEl = document.getElementById('rb-return-date');
  const paxEl = document.getElementById('rb-passengers');
  const locEl = document.getElementById('rb-location');
  const flightEl = document.getElementById('rb-flight-notes');
  const previewEl = document.getElementById('rb-message-preview');
  const submitBtn = document.getElementById('rb-submit-btn');

  if (!previewEl || !submitBtn) return;

  if (typeEl) rentalBuilderState.type = typeEl.value;
  if (pickDateEl && pickDateEl.value) rentalBuilderState.pickupDate = pickDateEl.value;
  if (retDateEl && retDateEl.value) rentalBuilderState.returnDate = retDateEl.value;
  if (paxEl) rentalBuilderState.passengers = paxEl.value;
  if (locEl) rentalBuilderState.location = locEl.value;
  if (flightEl) rentalBuilderState.flightNo = flightEl.value;

  const datesFormatted = (rentalBuilderState.pickupDate && rentalBuilderState.returnDate)
    ? `${rentalBuilderState.pickupDate} → ${rentalBuilderState.returnDate}`
    : `Flexible / To be confirmed`;

  const msg = `Hello AH Lanka! 👋

I'm interested in renting a vehicle for my Sri Lanka journey:

🚙 Vehicle Type: ${rentalBuilderState.type}
👨‍✈️ Service: ${rentalBuilderState.driverMode}
📅 Dates: ${datesFormatted}
👥 Passengers: ${rentalBuilderState.passengers}
📍 Pickup Location: ${rentalBuilderState.location}
${rentalBuilderState.flightNo ? `✈️ Flight / Notes: ${rentalBuilderState.flightNo}\n` : ''}
Please send me the available options and all-inclusive rental rates. Thank you!`;

  previewEl.textContent = msg;
  submitBtn.href = createWhatsAppUrl(msg);
}

/**
 * Currency Switcher Support
 */
function setCurrency(curr) {
  currentCurrency = curr;
  localStorage.setItem('ah_currency', curr);
  
  // Update currency toggle buttons
  document.querySelectorAll('.curr-btn').forEach(btn => {
    if (btn.dataset.currency === curr) {
      btn.classList.add('bg-red-600', 'text-white');
      btn.classList.remove('text-slate-400');
    } else {
      btn.classList.remove('bg-red-600', 'text-white');
      btn.classList.add('text-slate-400');
    }
  });

  // Update dynamic rate elements
  document.querySelectorAll('[data-usd-rate]').forEach(el => {
    const usd = parseFloat(el.dataset.usdRate);
    if (curr === 'USD') {
      el.textContent = `$${usd}`;
    } else if (curr === 'LKR') {
      const lkr = Math.round(usd * AH_CONFIG.rates.LKR).toLocaleString();
      el.textContent = `Rs. ${lkr}`;
    } else if (curr === 'EUR') {
      const eur = Math.round(usd * AH_CONFIG.rates.EUR);
      el.textContent = `€${eur}`;
    } else if (curr === 'GBP') {
      const gbp = Math.round(usd * AH_CONFIG.rates.GBP);
      el.textContent = `£${gbp}`;
    }
  });
}

/**
 * Vehicle Details Modal Engine (for Sales & Featured)
 */
function openVehicleModal(vehicle) {
  const modal = document.getElementById('vehicle-modal');
  if (!modal) return;

  document.getElementById('modal-img').src = vehicle.img;
  document.getElementById('modal-title').textContent = vehicle.name;
  document.getElementById('modal-year').textContent = vehicle.year;
  document.getElementById('modal-price').textContent = vehicle.price;
  document.getElementById('modal-mileage').textContent = vehicle.mileage;
  document.getElementById('modal-fuel').textContent = vehicle.fuel;
  document.getElementById('modal-trans').textContent = vehicle.trans;
  document.getElementById('modal-engine').textContent = vehicle.engine || 'Standard Spec';
  document.getElementById('modal-desc').textContent = vehicle.desc || 'Inspected, certified clean condition with complete vehicle history and verifiable service records.';
  
  const waBtn = document.getElementById('modal-wa-btn');
  waBtn.href = getSalesWhatsAppUrl(vehicle.name, vehicle.year, vehicle.price, vehicle.refId || 'AH-SALES');

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeVehicleModal() {
  const modal = document.getElementById('vehicle-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/**
 * Mobile Navigation Drawer
 */
function toggleMobileNav() {
  const nav = document.getElementById('mobile-nav-drawer');
  if (!nav) return;
  nav.classList.toggle('hidden');
}

/**
 * Setup default dates for Rental Builder
 */
function initDefaultDates() {
  const pickDateEl = document.getElementById('rb-pickup-date');
  const retDateEl = document.getElementById('rb-return-date');
  
  if (pickDateEl && retDateEl && !pickDateEl.value) {
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    const returnDay = new Date(nextWeek);
    returnDay.setDate(nextWeek.getDate() + 7);

    pickDateEl.value = nextWeek.toISOString().split('T')[0];
    retDateEl.value = returnDay.toISOString().split('T')[0];
  }
}

// Global Event Listeners on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initDefaultDates();
  syncRentalBuilder();
  setCurrency(currentCurrency);

  // Close modal on escape or background click
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeVehicleModal();
  });
  
  const modalBackdrop = document.getElementById('vehicle-modal');
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeVehicleModal();
    });
  }
});
