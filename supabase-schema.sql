-- =========================================================================
-- AH LANKA — Supabase Database & Storage Setup Schema (2026)
-- Execute this script in your Supabase Dashboard: SQL Editor -> New Query -> Run
-- Project URL: https://rbxkcaucuhvolksevjmo.supabase.co
-- =========================================================================

-- 1. VEHICLES FOR SALE TABLE
CREATE TABLE IF NOT EXISTS public.vehicles_sales (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT DEFAULT 'SUV',
    year INTEGER DEFAULT 2022,
    price TEXT,
    price_number BIGINT DEFAULT 0,
    fuel TEXT DEFAULT 'Diesel',
    trans TEXT DEFAULT 'Automatic',
    mileage TEXT DEFAULT '0 km',
    engine TEXT,
    features JSONB DEFAULT '[]'::jsonb,
    "desc" TEXT,
    badge TEXT,
    badge_type TEXT DEFAULT 'green',
    status TEXT DEFAULT 'Available',
    img TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. TOURIST & WEDDING RENTAL FLEET TABLE
CREATE TABLE IF NOT EXISTS public.vehicles_rentals (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT DEFAULT 'SUV',
    daily_rate TEXT,
    weekly_rate TEXT,
    seats INTEGER DEFAULT 4,
    luggage INTEGER DEFAULT 3,
    trans TEXT DEFAULT 'Automatic',
    fuel TEXT DEFAULT 'Diesel',
    ac TEXT DEFAULT 'Dual AC',
    features JSONB DEFAULT '[]'::jsonb,
    badge TEXT,
    status TEXT DEFAULT 'Available',
    img TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. AUTO SPARE PARTS TABLE
CREATE TABLE IF NOT EXISTS public.vehicles_parts (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    part_number TEXT,
    brand TEXT DEFAULT 'Toyota',
    category TEXT DEFAULT 'brakes',
    category_label TEXT DEFAULT 'Brakes & Suspension',
    fitment TEXT,
    condition TEXT DEFAULT 'Japanese OEM',
    condition_type TEXT DEFAULT 'oem',
    price TEXT,
    price_number BIGINT DEFAULT 0,
    status TEXT DEFAULT 'In Stock',
    warranty TEXT,
    "desc" TEXT,
    img TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. ENABLE ROW LEVEL SECURITY (RLS)
ALTER TABLE public.vehicles_sales ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vehicles_rentals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vehicles_parts ENABLE ROW LEVEL SECURITY;

-- 5. PUBLIC / ANONYMOUS ACCESS POLICIES (Allow Read & Write via Anon Key)
-- Sales Policies
DROP POLICY IF EXISTS "Public Read Sales" ON public.vehicles_sales;
CREATE POLICY "Public Read Sales" ON public.vehicles_sales FOR SELECT USING (true);

DROP POLICY IF EXISTS "Anon Insert Sales" ON public.vehicles_sales;
CREATE POLICY "Anon Insert Sales" ON public.vehicles_sales FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Anon Update Sales" ON public.vehicles_sales;
CREATE POLICY "Anon Update Sales" ON public.vehicles_sales FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Anon Delete Sales" ON public.vehicles_sales;
CREATE POLICY "Anon Delete Sales" ON public.vehicles_sales FOR DELETE USING (true);

-- Rentals Policies
DROP POLICY IF EXISTS "Public Read Rentals" ON public.vehicles_rentals;
CREATE POLICY "Public Read Rentals" ON public.vehicles_rentals FOR SELECT USING (true);

DROP POLICY IF EXISTS "Anon Insert Rentals" ON public.vehicles_rentals;
CREATE POLICY "Anon Insert Rentals" ON public.vehicles_rentals FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Anon Update Rentals" ON public.vehicles_rentals;
CREATE POLICY "Anon Update Rentals" ON public.vehicles_rentals FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Anon Delete Rentals" ON public.vehicles_rentals;
CREATE POLICY "Anon Delete Rentals" ON public.vehicles_rentals FOR DELETE USING (true);

-- Spare Parts Policies
DROP POLICY IF EXISTS "Public Read Parts" ON public.vehicles_parts;
CREATE POLICY "Public Read Parts" ON public.vehicles_parts FOR SELECT USING (true);

DROP POLICY IF EXISTS "Anon Insert Parts" ON public.vehicles_parts;
CREATE POLICY "Anon Insert Parts" ON public.vehicles_parts FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Anon Update Parts" ON public.vehicles_parts;
CREATE POLICY "Anon Update Parts" ON public.vehicles_parts FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Anon Delete Parts" ON public.vehicles_parts;
CREATE POLICY "Anon Delete Parts" ON public.vehicles_parts FOR DELETE USING (true);

-- 6. STORAGE BUCKET FOR VEHICLE & PART IMAGES
INSERT INTO storage.buckets (id, name, public)
VALUES ('vehicles', 'vehicles', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Storage Policies
DROP POLICY IF EXISTS "Public Access Vehicles Bucket" ON storage.objects;
CREATE POLICY "Public Access Vehicles Bucket" ON storage.objects
FOR SELECT USING (bucket_id = 'vehicles');

DROP POLICY IF EXISTS "Anon Upload Vehicles Bucket" ON storage.objects;
CREATE POLICY "Anon Upload Vehicles Bucket" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'vehicles');

DROP POLICY IF EXISTS "Anon Update Vehicles Bucket" ON storage.objects;
CREATE POLICY "Anon Update Vehicles Bucket" ON storage.objects
FOR UPDATE USING (bucket_id = 'vehicles');

DROP POLICY IF EXISTS "Anon Delete Vehicles Bucket" ON storage.objects;
CREATE POLICY "Anon Delete Vehicles Bucket" ON storage.objects
FOR DELETE USING (bucket_id = 'vehicles');
