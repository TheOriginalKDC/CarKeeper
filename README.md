CarKeeper

CarKeeper is a personal vehicle maintenance tracking app built as a solo school project. The goal is to help users remember and plan critical maintenance tasks like oil changes, air filter replacements, tire rotations, and more — all based on mileage, age, and type of vehicle.

🧰 Tech Stack
Frontend: React, React Router DOM

Backend: Node.js, Express

Database: SQLite3

Styling: Custom CSS (dark theme with green accents)

📦 Features Completed (Sprint 1 + 2)
Full frontend layout with routing between Dashboard, Car Details, Maintenance, and Settings pages

Custom dark-themed UI with responsive navigation

Initial SQLite database created via schema.sql

Backend Express server running on port 5000

Project supports user-specific stored data (prepped for future expansion)

🏃‍♂️ Getting Started
Clone the Repository
git clone https://github.com/TheOriginalKDC/CarKeeper.git
cd CarKeeper

Install Frontend Dependencies
cd frontend
npm install

Install Backend Dependencies
cd ../backend
npm install

Create the Database
Run this from the /backend folder (requires SQLite installed):
sqlite3 carKeeper.db < schema.sql

Start the Backend Server
npm start

Start the Frontend
Open another terminal window:
cd ../frontend
npm start

🌱 Upcoming Features (Sprint 3 Goals)
Fetch maintenance data from backend and display in UI

Add form for entering and saving car details

Hook up real-time updates to database with React forms

📂 Folder Structure
car-keeper/
├── backend/
│   ├── server.js         # Express server
│   ├── db.js             # SQLite connection
│   └── schema.sql        # DB schema
├── frontend/
│   ├── src/
│   │   ├── pages/        # Dashboard, Maintenance, etc.
│   │   ├── components/   # Navbar
│   │   └── styles/       # App.css
├── .env
└── README.md

✍️ Author
Built by Kyle Campbell
GitHub: https://github.com/TheOriginalKDC