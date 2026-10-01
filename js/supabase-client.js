/**
 * AH LANKA — Supabase Cloud Integration Client (2026)
 * Real-time PostgreSQL database synchronization for Vehicle Sales & Tourist Rentals.
 */

const AHSupabase = {
  url: "https://rbxkcaucuhvolksevjmo.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJieGtjYXVjdWh2b2xrc2V2am1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA4MzI5NzMsImV4cCI6MjEwNjQwODk3M30.ObhM6nSO1Wk_hkEIxtTFRHTf4jdLSurxUtdUZehl1JU",

  headers: function() {
    return {
      "apikey": this.anonKey,
      "Authorization": "Bearer " + this.anonKey,
      "Content-Type": "application/json"
    };
  },

  // -------------------------------------------------------------
  // SALES VEHICLES (PostgreSQL table: vehicles_sales)
  // -------------------------------------------------------------
  fetchSales: async function() {
    try {
      const res = await fetch(`${this.url}/rest/v1/vehicles_sales?select=*&order=created_at.desc`, {
        method: "GET",
        headers: this.headers()
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      
      if (Array.isArray(data) && data.length > 0) {
        const mapped = data.map(row => ({
          id: row.id,
          name: row.name,
          category: (row.category || 'suv').toLowerCase(),
          year: row.year,
          mileage: row.mileage,
          fuel: row.fuel,
          trans: row.trans,
          priceNumber: parseInt(row.price_number || 0),
          price: row.price,
          badge: row.badge || row.status,
          badgeType: row.badge_type || (row.status === 'Available' ? 'green' : 'red'),
          engine: row.engine || '',
          desc: row.desc || '',
          img: row.img,
          status: row.status || 'Available'
        }));
        
        // Cache to localStorage for instant offline access
        localStorage.setItem('ah_sales_inventory', JSON.stringify(mapped));
        window.dispatchEvent(new Event('ah_sales_updated'));
        return mapped;
      }
      return null;
    } catch (err) {
      console.warn("[AH Supabase] Using offline/cached sales data:", err.message);
      return null;
    }
  },

  saveSalesVehicle: async function(vehicle) {
    const payload = {
      id: vehicle.id || ("AH-SALES-" + Math.floor(1000 + Math.random() * 9000)),
      name: vehicle.name,
      category: vehicle.category || "SUV",
      year: parseInt(vehicle.year) || 2022,
      price: vehicle.price || `LKR ${(vehicle.priceNumber || 0).toLocaleString()}`,
      price_number: parseInt(vehicle.priceNumber) || 0,
      fuel: vehicle.fuel || "Diesel",
      trans: vehicle.trans || "Automatic",
      mileage: vehicle.mileage || "0 km",
      engine: vehicle.engine || "",
      features: vehicle.features || [],
      desc: vehicle.desc || "",
      badge: vehicle.badge || vehicle.status,
      badge_type: vehicle.badgeType || "green",
      status: vehicle.status || "Available",
      img: vehicle.img
    };

    try {
      const res = await fetch(`${this.url}/rest/v1/vehicles_sales`, {
        method: "POST",
        headers: {
          ...this.headers(),
          "Prefer": "resolution=merge-duplicates"
        },
        body: JSON.stringify(payload)
      });
      return res.ok;
    } catch (err) {
      console.error("[AH Supabase] Save sales error:", err);
      return false;
    }
  },

  deleteSalesVehicle: async function(id) {
    try {
      const res = await fetch(`${this.url}/rest/v1/vehicles_sales?id=eq.${encodeURIComponent(id)}`, {
        method: "DELETE",
        headers: this.headers()
      });
      return res.ok;
    } catch (err) {
      console.error("[AH Supabase] Delete sales error:", err);
      return false;
    }
  },

  // -------------------------------------------------------------
  // RENTAL VEHICLES (PostgreSQL table: vehicles_rentals)
  // -------------------------------------------------------------
  fetchRentals: async function() {
    try {
      const res = await fetch(`${this.url}/rest/v1/vehicles_rentals?select=*&order=created_at.desc`, {
        method: "GET",
        headers: this.headers()
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      
      if (Array.isArray(data) && data.length > 0) {
        const mapped = data.map(row => ({
          id: row.id,
          name: row.name,
          category: row.category,
          passengers: row.seats || 4,
          luggage: row.luggage || 3,
          trans: row.trans || 'Automatic',
          acType: row.ac || 'Dual AC',
          dailyRateUsd: parseInt(row.daily_rate ? row.daily_rate.replace(/[^0-9]/g, '') : 50) || 50,
          dailyRateFormatted: row.daily_rate,
          weeklyRateFormatted: row.weekly_rate,
          badge: row.badge || row.category,
          badgeType: 'green',
          tagline: (row.features && row.features.length) ? row.features.join(' • ') : (row.name + ' for hire in Sri Lanka'),
          img: row.img,
          status: row.status || 'Available'
        }));
        
        // Cache to localStorage for instant offline access
        localStorage.setItem('ah_rental_inventory', JSON.stringify(mapped));
        window.dispatchEvent(new Event('ah_rentals_updated'));
        return mapped;
      }
      return null;
    } catch (err) {
      console.warn("[AH Supabase] Using offline/cached rentals data:", err.message);
      return null;
    }
  },

  saveRentalVehicle: async function(rental) {
    const payload = {
      id: rental.id || ("AH-RENT-" + Math.floor(1000 + Math.random() * 9000)),
      name: rental.name,
      category: rental.category || "SUV",
      daily_rate: rental.dailyRateFormatted || `LKR ${(rental.dailyRateUsd * 310).toLocaleString()} / day`,
      weekly_rate: rental.weeklyRateFormatted || `LKR ${(rental.dailyRateUsd * 310 * 6.2).toLocaleString()} / wk`,
      seats: parseInt(rental.passengers) || 4,
      luggage: parseInt(rental.luggage) || 3,
      trans: rental.trans || "Automatic",
      fuel: rental.fuel || "Diesel",
      ac: rental.acType || "Dual Zone Climate AC",
      features: rental.tagline ? [rental.tagline] : ["Air Conditioned", "Islandwide Service"],
      badge: rental.badge || rental.category,
      status: rental.status || "Available",
      img: rental.img
    };

    try {
      const res = await fetch(`${this.url}/rest/v1/vehicles_rentals`, {
        method: "POST",
        headers: {
          ...this.headers(),
          "Prefer": "resolution=merge-duplicates"
        },
        body: JSON.stringify(payload)
      });
      return res.ok;
    } catch (err) {
      console.error("[AH Supabase] Save rental error:", err);
      return false;
    }
  },

  deleteRentalVehicle: async function(id) {
    try {
      const res = await fetch(`${this.url}/rest/v1/vehicles_rentals?id=eq.${encodeURIComponent(id)}`, {
        method: "DELETE",
        headers: this.headers()
      });
      return res.ok;
    } catch (err) {
      console.error("[AH Supabase] Delete rental error:", err);
      return false;
    }
  },

  // -------------------------------------------------------------
  // INITIAL SYNC (Called automatically on page load)
  // -------------------------------------------------------------
  initSync: function() {
    this.fetchSales();
    this.fetchRentals();
  }
};

// Automatic background sync on load
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    AHSupabase.initSync();
  });
}
