CarKeeper

CarKeeper is a personal vehicle maintenance tracking app built as a solo school project. The goal is to help users remember and plan critical maintenance tasks like oil changes, air filter replacements, tire rotations, and more — all based on mileage, age, and type of vehicle.

🧰 Tech Stack
Frontend: React, React Router DOM

Backend: Node.js, Express

Database: SQLite3

Styling: Custom CSS (dark theme with green accents)

📦 Features Completed (Sprint 1 - 3)
Full frontend layout with routing between Dashboard, Car Details, Maintenance, and Settings pages

Custom dark-themed UI with responsive navigation and styling

SQLite database fully set up with vehicles and maintenance tables

Backend Express server with routes for viewing and adding vehicles and maintenance records

Functionality to add cars, track maintenance items, and view all data in real-time

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

🌱 Upcoming Features (Sprint 4 Goals)
Show recent maintenance and upcoming due items per vehicle on Dashboard

Use default mileage intervals to auto-calculate next service due

Display alerts for upcoming or overdue maintenance tasks

✍️ Author
Built by Kyle Campbell
GitHub: https://github.com/TheOriginalKDC
