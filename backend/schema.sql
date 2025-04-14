CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS car_details (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  make TEXT,
  model TEXT,
  year INTEGER,
  mileage INTEGER,
  FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS maintenance (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  type TEXT,
  mileage_due INTEGER,
  date_due TEXT,
  completed INTEGER DEFAULT 0,
  FOREIGN KEY(user_id) REFERENCES users(id)
);
