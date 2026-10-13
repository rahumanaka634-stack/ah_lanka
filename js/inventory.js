/**
 * AH LANKA — Unified Data & Inventory Store (2026)
 * Handles LocalStorage persistence, synchronization, and admin updates.
 */

const DEFAULT_SALES_INVENTORY = [
  {
    id: "AH-SALES-101",
    name: "Toyota Land Cruiser Prado TX",
    category: "suv",
    year: 2021,
    mileage: "42,000 km",
    fuel: "Diesel",
    trans: "Automatic",
    priceNumber: 48500000,
    price: "LKR 48,500,000",
    badge: "Available",
    badgeType: "red",
    engine: "2800cc Turbo Diesel (1GD-FTV)",
    desc: "Sunroof, 7 leather seats, 360-degree panoramic cameras, Modellista aero kit, original factory condition, clean documented history.",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=85"
    ],
    status: "Available"
  },
  {
    id: "AH-SALES-102",
    name: "Toyota HiAce KDH 201 Super GL",
    category: "van",
    year: 2018,
    mileage: "68,000 km",
    fuel: "Diesel",
    trans: "Automatic",
    priceNumber: 21800000,
    price: "LKR 21,800,000",
    badge: "First Owner",
    badgeType: "green",
    engine: "3000cc Turbo Diesel (1KD-FTV)",
    desc: "Dark Prime edition, dual air conditioning, velvet executive seats, push start, original metallic black finish.",
    img: "https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?auto=format&fit=crop&w=1200&q=85"
    ],
    status: "Available"
  },
  {
    id: "AH-SALES-103",
    name: "Toyota Corolla Axio Hybrid WxB",
    category: "sedan",
    year: 2019,
    mileage: "54,000 km",
    fuel: "Hybrid",
    trans: "Automatic",
    priceNumber: 14200000,
    price: "LKR 14,200,000",
    badge: "Top Fuel Economy",
    badgeType: "red",
    engine: "1500cc Synergy Drive Hybrid",
    desc: "WxB full option with leather-trimmed seats, Toyota Safety Sense, lane departure assist, pristine battery health report.",
    img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85"
    ],
    status: "Available"
  },
  {
    id: "AH-SALES-104",
    name: "Honda Vezel Z Sensing",
    category: "suv",
    year: 2017,
    mileage: "62,000 km",
    fuel: "Hybrid",
    trans: "Automatic",
    priceNumber: 13900000,
    price: "LKR 13,900,000",
    badge: "Clean Documents",
    badgeType: "green",
    engine: "1500cc i-DCD Hybrid",
    desc: "Orange interior trim package, adaptive cruise control, LED headlights, brand new tires fitted, verifiable agency records.",
    img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=85"
    ],
    status: "Available"
  },
  {
    id: "AH-SALES-105",
    name: "Toyota Premio 1.5 F EX Package",
    category: "sedan",
    year: 2018,
    mileage: "49,000 km",
    fuel: "Petrol",
    trans: "Automatic",
    priceNumber: 18500000,
    price: "LKR 18,500,000",
    badge: "Luxury Saloon",
    badgeType: "red",
    engine: "1500cc VVT-i (1NZ-FE)",
    desc: "Teak interior finish, electric driver seat, intelligent clearance sonar, Pearl White metallic, immaculate condition.",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85"
    ],
    status: "Available"
  },
  {
    id: "AH-SALES-106",
    name: "Suzuki Wagon R Stingray Hybrid",
    category: "hatchback",
    year: 2019,
    mileage: "38,000 km",
    fuel: "Hybrid",
    trans: "Automatic",
    priceNumber: 7400000,
    price: "LKR 7,400,000",
    badge: "City Commuter",
    badgeType: "green",
    engine: "660cc Mild Hybrid Turbo",
    desc: "Head-up display, paddle shifters, heated seats, keyless push start, exceptional 24+ km/L fuel efficiency in city driving.",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85"
    ],
    status: "Available"
  }
];

const DEFAULT_RENTAL_INVENTORY = [
  {
    id: "AH-RENT-201",
    name: "Toyota Land Cruiser Prado TX",
    category: "SUV",
    passengers: 5,
    luggage: 4,
    trans: "Automatic",
    acType: "Dual AC",
    dailyRateUsd: 95,
    badge: "Luxury SUV",
    badgeType: "green",
    tagline: "High clearance, 4WD capability, perfect for Ella hill roads and Yala safaris.",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    status: "Available"
  },
  {
    id: "AH-RENT-202",
    name: "Toyota KDH High Roof (14-Seater)",
    category: "Van",
    passengers: 14,
    luggage: 8,
    trans: "Automatic",
    acType: "Hi-Line AC",
    dailyRateUsd: 80,
    badge: "Luxury Van (KDH)",
    badgeType: "green",
    tagline: "Standing room high roof, velvet executive recliners, oversized luggage space.",
    img: "https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&w=800&q=80",
    status: "Available"
  },
  {
    id: "AH-RENT-203",
    name: "Toyota Premio / Axio Sedan",
    category: "Sedan",
    passengers: 4,
    luggage: 3,
    trans: "Automatic",
    acType: "Full AC",
    dailyRateUsd: 48,
    badge: "Comfort Sedan",
    badgeType: "green",
    tagline: "Silent, smooth expressway cruising. Ideal for couples and business travel.",
    img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
    status: "Available"
  },
  {
    id: "AH-RENT-204",
    name: "26 - 33 Seater Luxury Mini Coach",
    category: "Bus",
    passengers: 26,
    luggage: 25,
    trans: "Manual",
    acType: "Ducted AC",
    dailyRateUsd: 140,
    badge: "Tourist Coach",
    badgeType: "green",
    tagline: "Panoramic scenic windows, PA microphone system, high back recliners.",
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    status: "Available"
  },
  {
    id: "AH-RENT-205",
    name: "Suzuki Wagon R / Alto",
    category: "City Car",
    passengers: 4,
    luggage: 2,
    trans: "Automatic",
    acType: "Standard AC",
    dailyRateUsd: 28,
    badge: "City Compact",
    badgeType: "green",
    tagline: "Ultra economical, easy parking in Colombo, ice-cold air conditioning.",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
    status: "Available"
  },
  {
    id: "AH-RENT-206",
    name: "Mitsubishi Montero Sport 4x4",
    category: "SUV",
    passengers: 7,
    luggage: 5,
    trans: "Automatic",
    acType: "Climate Control",
    dailyRateUsd: 90,
    badge: "Off-Road 4x4",
    badgeType: "green",
    tagline: "Super Select 4WD, paddle shifts, robust suspension for off-the-beaten-track travel.",
    img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    status: "Available"
  }
];

const DEFAULT_PARTS_INVENTORY = [
  {
    id: "AH-PART-301",
    name: "Toyota Land Cruiser Prado 150 Front Brake Pad Set",
    partNumber: "04465-60320",
    brand: "Toyota",
    category: "brakes",
    categoryLabel: "Brakes & Suspension",
    fitment: "Toyota Land Cruiser Prado 150 / 120 (2009–2023), Lexus GX460, Hilux Revo",
    condition: "Brand New Genuine OEM",
    conditionType: "genuine",
    priceNumber: 18500,
    price: "LKR 18,500",
    status: "In Stock",
    warranty: "6 Months / 10,000 km Warranty",
    desc: "Original Japanese Toyota / Advics ceramic brake pads. Low brake dust, anti-squeal shims included, maximum stopping power under heavy loads.",
    img: "https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "AH-PART-302",
    name: "Toyota HiAce KDH 200/201 Heavy Duty KYB Gas Shock Absorber Set (Front Pair)",
    partNumber: "48511-26610",
    brand: "Toyota",
    category: "suspension",
    categoryLabel: "Brakes & Suspension",
    fitment: "Toyota HiAce KDH 200, 201, 206, 214, 221 Super GL & Commuter (2005–2021)",
    condition: "Brand New Japanese OEM (KYB)",
    conditionType: "oem",
    priceNumber: 44000,
    price: "LKR 44,000",
    status: "In Stock",
    warranty: "1 Year Official Replacement Warranty",
    desc: "Heavy-duty KYB Excel-G nitrogen gas charged shocks designed specifically for Sri Lankan road conditions. Restores ride stability and passenger comfort.",
    img: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "AH-PART-303",
    name: "Toyota Axio / Fielder / Aqua Hybrid Traction Battery Pack (Matched Panasonic Cells)",
    partNumber: "G9510-52031",
    brand: "Toyota",
    category: "hybrid",
    categoryLabel: "Hybrid & Electrical",
    fitment: "Toyota Corolla Axio Hybrid (NKE165), Fielder Hybrid, Aqua / Prius c (NHP10)",
    condition: "Japanese Reconditioned (High IR / Grade A)",
    conditionType: "reconditioned",
    priceNumber: 245000,
    price: "LKR 245,000",
    status: "In Stock",
    warranty: "1 Year / 20,000 km Warranty with Free Diagnostics",
    desc: "Professionally balanced Grade-A Panasonic Ni-MH hybrid battery module pack. Includes busbars and thermistor harness. Complete health diagnostic report provided.",
    img: "https://images.unsplash.com/photo-1558441719-8b489c63f7d1?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1558441719-8b489c63f7d1?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "AH-PART-304",
    name: "Toyota Prius 30 / Prius Alpha Inverter Electric Water Pump",
    partNumber: "G9020-47031",
    brand: "Toyota",
    category: "engine",
    categoryLabel: "Engine & Cooling",
    fitment: "Toyota Prius 30 (ZVW30), Prius v / Alpha (ZVW40/41), Lexus CT200h (2010–2016)",
    condition: "Brand New Genuine OEM (Aisin)",
    conditionType: "genuine",
    priceNumber: 28500,
    price: "LKR 28,500",
    status: "In Stock",
    warranty: "6 Months Replacement Warranty",
    desc: "Original Aisin Japan electric inverter auxiliary coolant pump. Prevents inverter overheat error codes (P0A93). Direct plug and play.",
    img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "AH-PART-305",
    name: "Toyota Land Cruiser Prado 150 Modellista Aero Body Kit (Front & Rear Skirt)",
    partNumber: "MS341-60001",
    brand: "Toyota",
    category: "body",
    categoryLabel: "Body & Lighting",
    fitment: "Toyota Land Cruiser Prado 150 Facelift (2018–2023 TX/TZ-G)",
    condition: "Brand New Premium Grade (PP Material)",
    conditionType: "genuine",
    priceNumber: 165000,
    price: "LKR 165,000",
    status: "In Stock",
    warranty: "Factory Finish Direct Fitment",
    desc: "High quality flexible polypropylene (PP) Modellista aero body kit with integrated LED DRL front garnishes and dual chrome exhaust tips.",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "AH-PART-306",
    name: "Toyota HiAce KDH 201 Super GL Dark Prime Smoked LED Headlamp (Pair)",
    partNumber: "81110-26570",
    brand: "Toyota",
    category: "body",
    categoryLabel: "Body & Lighting",
    fitment: "Toyota HiAce KDH 200/201/206 4th & 5th Generation Facelift (2014–2022)",
    condition: "Japanese Reconditioned (Original Koito)",
    conditionType: "reconditioned",
    priceNumber: 78000,
    price: "LKR 78,000",
    status: "In Stock",
    warranty: "7 Days Testing Warranty on LED Modules",
    desc: "Original Koito Japan Dark Prime smoked edition factory LED projector headlamp pair. Clear non-yellowed lenses, intact mounting clips and brackets.",
    img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "AH-PART-307",
    name: "Denso Carbon Air Filter & Engine Filter Service Pack",
    partNumber: "17801-21050",
    brand: "Toyota",
    category: "filters",
    categoryLabel: "Filters & Maintenance",
    fitment: "Toyota Axio, Premio 260, Allion 260, Prius 30, Fielder, Aqua, Vitz",
    condition: "Brand New Genuine (Denso Japan)",
    conditionType: "genuine",
    priceNumber: 6500,
    price: "LKR 6,500",
    status: "In Stock",
    warranty: "Genuine Denso Japanese Quality",
    desc: "High filtration efficiency engine intake filter + activated carbon cabin A/C filter. Eliminates exhaust odor and dust particles inside the cabin.",
    img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "AH-PART-308",
    name: "Suzuki Wagon R Stingray / Spacia Turbo Intercooler & Air Duct Assembly",
    partNumber: "13620-72M00",
    brand: "Suzuki",
    category: "engine",
    categoryLabel: "Engine & Cooling",
    fitment: "Suzuki Wagon R Stingray Turbo (MH34S/MH44S/MH55S), Spacia Custom Turbo (MK42S/MK53S)",
    condition: "Japanese Reconditioned (Direct Import)",
    conditionType: "reconditioned",
    priceNumber: 36000,
    price: "LKR 36,000",
    status: "In Stock",
    warranty: "Pressure Tested with 14 Days Warranty",
    desc: "Original Suzuki Japan R06A turbo aluminum intercooler. Pressure tested to 2.0 bar with zero leaks. Direct bolt-on replacement.",
    img: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

const DEFAULT_SETTINGS = {
  phone: "94766322352",
  displayPhone: "+94 76 632 2352",
  localPhone: "076 632 2352",
  tagline: "Your Vehicle. Your Journey. Your Choice.",
  exchangeRates: {
    USD: 1,
    LKR: 310,
    EUR: 0.92,
    GBP: 0.79
  }
};

/**
 * Storage Access Methods
 */
const AHStore = {
  // Sales
  getSales: function() {
    const raw = localStorage.getItem('ah_sales_inventory');
    if (!raw) {
      this.setSales(DEFAULT_SALES_INVENTORY);
      return DEFAULT_SALES_INVENTORY;
    }
    try {
      let list = JSON.parse(raw);
      // Ensure each vehicle has an images array for multi-photo gallery
      let updated = false;
      list = list.map(v => {
        if (!v.images || !v.images.length) {
          const def = DEFAULT_SALES_INVENTORY.find(d => d.id === v.id);
          if (def && def.images) {
            v.images = def.images;
            updated = true;
          } else if (v.img) {
            v.images = [v.img];
          }
        }
        return v;
      });
      if (updated) {
        localStorage.setItem('ah_sales_inventory', JSON.stringify(list));
      }
      return list;
    } catch(e) {
      return DEFAULT_SALES_INVENTORY;
    }
  },
  setSales: function(items) {
    localStorage.setItem('ah_sales_inventory', JSON.stringify(items));
    window.dispatchEvent(new Event('ah_sales_updated'));
  },
  saveSalesVehicle: function(vehicle) {
    const list = this.getSales();
    const idx = list.findIndex(v => v.id === vehicle.id);
    if (idx >= 0) {
      list[idx] = vehicle;
    } else {
      if (!vehicle.id) vehicle.id = "AH-SALES-" + (Date.now() % 10000);
      list.unshift(vehicle);
    }
    this.setSales(list);
    return vehicle;
  },
  deleteSalesVehicle: function(id) {
    const list = this.getSales().filter(v => v.id !== id);
    this.setSales(list);
  },

  // Rentals
  getRentals: function() {
    const raw = localStorage.getItem('ah_rental_inventory');
    if (!raw) {
      this.setRentals(DEFAULT_RENTAL_INVENTORY);
      return DEFAULT_RENTAL_INVENTORY;
    }
    try {
      return JSON.parse(raw);
    } catch(e) {
      return DEFAULT_RENTAL_INVENTORY;
    }
  },
  setRentals: function(items) {
    localStorage.setItem('ah_rental_inventory', JSON.stringify(items));
    window.dispatchEvent(new Event('ah_rentals_updated'));
  },
  saveRentalVehicle: function(vehicle) {
    const list = this.getRentals();
    const idx = list.findIndex(v => v.id === vehicle.id);
    if (idx >= 0) {
      list[idx] = vehicle;
    } else {
      if (!vehicle.id) vehicle.id = "AH-RENT-" + (Date.now() % 10000);
      list.unshift(vehicle);
    }
    this.setRentals(list);
    return vehicle;
  },
  deleteRentalVehicle: function(id) {
    const list = this.getRentals().filter(v => v.id !== id);
    this.setRentals(list);
  },

  // Spare Parts
  getParts: function() {
    const raw = localStorage.getItem('ah_parts_inventory');
    if (!raw) {
      this.setParts(DEFAULT_PARTS_INVENTORY);
      return DEFAULT_PARTS_INVENTORY;
    }
    try {
      let list = JSON.parse(raw);
      let updated = false;
      list = list.map(p => {
        if (!p.images || !p.images.length) {
          const def = DEFAULT_PARTS_INVENTORY.find(d => d.id === p.id);
          if (def && def.images) {
            p.images = def.images;
            updated = true;
          } else if (p.img) {
            p.images = [p.img];
          }
        }
        return p;
      });
      if (updated) {
        localStorage.setItem('ah_parts_inventory', JSON.stringify(list));
      }
      return list;
    } catch(e) {
      return DEFAULT_PARTS_INVENTORY;
    }
  },
  setParts: function(items) {
    localStorage.setItem('ah_parts_inventory', JSON.stringify(items));
    window.dispatchEvent(new Event('ah_parts_updated'));
  },
  savePart: function(part) {
    const list = this.getParts();
    const idx = list.findIndex(p => p.id === part.id);
    if (idx >= 0) {
      list[idx] = part;
    } else {
      if (!part.id) part.id = "AH-PART-" + (Date.now() % 10000);
      list.unshift(part);
    }
    this.setParts(list);
    return part;
  },
  deletePart: function(id) {
    const list = this.getParts().filter(p => p.id !== id);
    this.setParts(list);
  },

  // Settings
  getSettings: function() {
    const raw = localStorage.getItem('ah_settings');
    if (!raw) {
      this.setSettings(DEFAULT_SETTINGS);
      return DEFAULT_SETTINGS;
    }
    try {
      return JSON.parse(raw);
    } catch(e) {
      return DEFAULT_SETTINGS;
    }
  },
  setSettings: function(settings) {
    localStorage.setItem('ah_settings', JSON.stringify(settings));
    window.dispatchEvent(new Event('ah_settings_updated'));
  },

  // Reset
  resetAll: function() {
    this.setSales(DEFAULT_SALES_INVENTORY);
    this.setRentals(DEFAULT_RENTAL_INVENTORY);
    this.setParts(DEFAULT_PARTS_INVENTORY);
    this.setSettings(DEFAULT_SETTINGS);
  }
};

