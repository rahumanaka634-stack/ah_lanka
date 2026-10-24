/**
 * AH LANKA — Unified Data & Inventory Store (2026)
 * Handles LocalStorage persistence, synchronization, and admin updates.
 */

const DEFAULT_SALES_INVENTORY = [
  {
    id: "AH-SALES-1303",
    name: "Black Toyota Roomy Custom G (2023 - Modellista)",
    category: "hatchback",
    year: 2023,
    mileage: "10 km",
    fuel: "Petrol",
    trans: "Automatic",
    priceNumber: 10475000,
    price: "LKR 10,475,000",
    badge: "Available",
    badgeType: "green",
    engine: "1,000 cc Petrol Engine",
    desc: "Toyota Roomy Custom G 2023 – Modellista Bodykit • Custom G with Premium Modellista Package • Dual Power Sliding Doors with Soft-Close Assist • Keyless Entry & Push-to-Start • Reverse Camera & Integrated Sensors.",
    img: "images/vehicles/roomy-black.jpg",
    images: [
      "images/vehicles/roomy-black.jpg",
      "https://rbxkcaucuhvolksevjmo.supabase.co/storage/v1/object/public/vehicles/1792816589486_Gemini_Generated_Image_szpmpns.jpg",
      "https://rbxkcaucuhvolksevjmo.supabase.co/storage/v1/object/public/vehicles/1792816595501_image__6_.jpg",
      "https://rbxkcaucuhvolksevjmo.supabase.co/storage/v1/object/public/vehicles/1792816599407_WhatsApp_Image_2026-10-24_at_1.jpeg"
    ],
    status: "Available"
  },
  {
    id: "AH-SALES-4588",
    name: "White Toyota Roomy Custom G (2023 - Modellista Kit)",
    category: "hatchback",
    year: 2023,
    mileage: "10 km",
    fuel: "Petrol",
    trans: "Automatic",
    priceNumber: 10785000,
    price: "LKR 10,785,000",
    badge: "Available",
    badgeType: "green",
    engine: "1,000 cc Petrol Engine",
    desc: "Toyota Roomy Custom G 2023 – Full Modellista Styling Package • Sporty Alloy Wheels • Dual Power Electric Sliding Doors • Smart Key Entry & Push Start • Reverse Camera with Multi-View Assist • Digital Climate Control.",
    img: "images/vehicles/roomy-white.jpg",
    images: [
      "images/vehicles/roomy-white.jpg",
      "https://rbxkcaucuhvolksevjmo.supabase.co/storage/v1/object/public/vehicles/1792815523563_Gemini_Generated_Image_3xqreb3.jpg",
      "https://rbxkcaucuhvolksevjmo.supabase.co/storage/v1/object/public/vehicles/1792815535566_f762bc99-670b-4178-9765-bca609.jpg",
      "https://rbxkcaucuhvolksevjmo.supabase.co/storage/v1/object/public/vehicles/1792815542221_WhatsApp_Image_2026-10-24_at_9.jpeg",
      "https://rbxkcaucuhvolksevjmo.supabase.co/storage/v1/object/public/vehicles/1792815546804_WhatsApp_Image_2026-10-24_at_9.jpeg",
      "https://rbxkcaucuhvolksevjmo.supabase.co/storage/v1/object/public/vehicles/1792815550670_WhatsApp_Image_2026-10-24_at_9.jpeg"
    ],
    status: "Available"
  },
  {
    id: "car-003",
    name: "Suzuki Spacia Custom Hybrid XS Turbo (2025)",
    category: "hatchback",
    year: 2025,
    mileage: "5,000 km",
    fuel: "Hybrid",
    trans: "Automatic",
    priceNumber: 9250000,
    price: "LKR 9,250,000",
    badge: "Available",
    badgeType: "green",
    engine: "660 cc Turbocharged Petrol + Mild Hybrid (ISG System)",
    desc: "Hybrid XS Turbo (Top-Tier Full Option) • Premium Red & Black Two-Tone • 360-degree multi-view reverse camera • Dual Power Sliding Doors • Ottoman-style adjustable rear seats • Full LED headlamps & DRLs.",
    img: "images/vehicles/spacia-red.jpg",
    images: [
      "images/vehicles/spacia-red.jpg",
      "https://rbxkcaucuhvolksevjmo.supabase.co/storage/v1/object/public/vehicles/1792814360694_Gemini_Generated_Image_6uk68c6.jpg",
      "https://rbxkcaucuhvolksevjmo.supabase.co/storage/v1/object/public/vehicles/1792814365713_Gemini_Generated_Image_m9qun1m.jpg",
      "https://rbxkcaucuhvolksevjmo.supabase.co/storage/v1/object/public/vehicles/1792814371953_image__2_.jpg",
      "https://rbxkcaucuhvolksevjmo.supabase.co/storage/v1/object/public/vehicles/1792814387994_image__1_.jpg",
      "https://rbxkcaucuhvolksevjmo.supabase.co/storage/v1/object/public/vehicles/1792814394984_Gemini_Generated_Image_9on8ud9.jpg"
    ],
    status: "Available"
  },
  {
    id: "car-002",
    name: "Red Toyota Roomy Custom G (2025 - Modellista Kit)",
    category: "hatchback",
    year: 2025,
    mileage: "10 km",
    fuel: "Petrol",
    trans: "Automatic",
    priceNumber: 11175000,
    price: "LKR 11,175,000",
    badge: "Available",
    badgeType: "green",
    engine: "1,000 cc Petrol Engine",
    desc: "Toyota Roomy Custom G 2025 – Modellista Bodykit • Factory Modellista Aero Package • Custom Chrome Grille • Dual Power Sliding Doors • Smart Assist Safety Suite • Touchscreen Reverse Camera.",
    img: "images/vehicles/roomy-red.jpg",
    images: [
      "images/vehicles/roomy-red.jpg",
      "https://rbxkcaucuhvolksevjmo.supabase.co/storage/v1/object/public/vehicles/1792814699222_Gemini_Generated_Image_5k5qa65.jpg",
      "https://rbxkcaucuhvolksevjmo.supabase.co/storage/v1/object/public/vehicles/1792814703545_Gemini_Generated_Image_v9m3gqv.jpg",
      "https://rbxkcaucuhvolksevjmo.supabase.co/storage/v1/object/public/vehicles/1792814710775_image__3_.jpg",
      "https://rbxkcaucuhvolksevjmo.supabase.co/storage/v1/object/public/vehicles/1792814744882_image__5_.jpg",
      "https://rbxkcaucuhvolksevjmo.supabase.co/storage/v1/object/public/vehicles/1792814749456_Gemini_Generated_Image_r890hbr.jpg"
    ],
    status: "Available"
  },
  {
    id: "car-001",
    name: "Toyota KDH GDH 223 2026",
    category: "van",
    year: 2026,
    mileage: "0 km",
    fuel: "Diesel",
    trans: "Automatic",
    priceNumber: 28985000,
    price: "LKR 28,985,000",
    badge: "Available",
    badgeType: "green",
    engine: "2800CC Original Turbo Diesel (GDH Engine)",
    desc: "Toyota HiAce GDH 223 High Roof (2026) • Highest Specification High Roof • Pearl White (Color Code 089) • Original 4-Way Camera & Center Mirror Camera System • Factory 5 Alloy Wheels • Maximum Passenger & Cargo Space.",
    img: "images/vehicles/hiace-gdh.jpg",
    images: [
      "images/vehicles/hiace-gdh.jpg",
      "https://rbxkcaucuhvolksevjmo.supabase.co/storage/v1/object/public/vehicles/1792814113375_Gemini_Generated_Image_onsityo.jpg",
      "https://rbxkcaucuhvolksevjmo.supabase.co/storage/v1/object/public/vehicles/1792814184390_Gemini_Generated_Image_w26oiow.jpg"
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
    condition: "Brand New Genuine Parts",
    conditionType: "genuine",
    priceNumber: 18500,
    price: "LKR 18,500",
    status: "In Stock",
    warranty: "6 Months / 10,000 km Warranty",
    desc: "Original Japanese Toyota / Advics ceramic brake pads. Low brake dust, anti-squeal shims included, maximum stopping power under heavy loads.",
    img: "images/parts/prado-brake-pads.jpg",
    images: [
      "images/parts/prado-brake-pads.jpg"
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
    condition: "Japanese OEM (KYB)",
    conditionType: "oem",
    priceNumber: 44000,
    price: "LKR 44,000",
    status: "In Stock",
    warranty: "1 Year Official Replacement Warranty",
    desc: "Heavy-duty KYB Excel-G nitrogen gas charged shocks designed specifically for Sri Lankan road conditions. Restores ride stability and passenger comfort.",
    img: "images/parts/hiace-kyb-shocks.jpg",
    images: [
      "images/parts/hiace-kyb-shocks.jpg"
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
    img: "images/parts/hybrid-battery-pack.jpg",
    images: [
      "images/parts/hybrid-battery-pack.jpg"
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
    condition: "Japanese OEM (Aisin)",
    conditionType: "oem",
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
    img: "images/parts/car-headlamp-koito.jpg",
    images: [
      "images/parts/car-headlamp-koito.jpg"
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
    img: "images/parts/air-filter-denso.jpg",
    images: [
      "images/parts/air-filter-denso.jpg"
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
      // If list only contains old demo dummy cars (e.g. AH-SALES-101 with Prado 2021), migrate to real showroom stock
      const hasOldDemo = list.some(v => v.id === 'AH-SALES-101' || v.id === 'AH-SALES-102');
      if (hasOldDemo && !list.some(v => v.id === 'AH-SALES-1303' || v.id === 'AH-SALES-4588')) {
        this.setSales(DEFAULT_SALES_INVENTORY);
        return DEFAULT_SALES_INVENTORY;
      }
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
        const def = DEFAULT_PARTS_INVENTORY.find(d => d.id === p.id);
        if (def) {
          // If part has outdated unsplash image that was replaced
          if (p.img && (p.img.includes('1600705722908') || p.img.includes('1517524008697') || p.img.includes('1558441719') || p.img.includes('1511919884226') || p.img.includes('1619642751034'))) {
            p.img = def.img;
            p.images = def.images;
            updated = true;
          }
        }
        if (!p.images || !p.images.length) {
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

