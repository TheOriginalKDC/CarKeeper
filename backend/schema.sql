-- Drop old tables if re-running schema manually
DROP TABLE IF EXISTS vehicles;
DROP TABLE IF EXISTS maintenance;

-- Vehicles Table
CREATE TABLE vehicles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    make TEXT NOT NULL,
    model TEXT NOT NULL,
    year INTEGER NOT NULL,
    mileage INTEGER NOT NULL
);

-- Maintenance Table
CREATE TABLE maintenance (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    vehicle_id INTEGER NOT NULL,
    type TEXT NOT NULL,
    mileage_interval INTEGER,
    last_service_mileage INTEGER,
    notes TEXT,
    FOREIGN KEY (vehicle_id) REFERENCES vehicles(id)
);
