# CarKeeper

**No grease. Just data.**

CarKeeper is a personal vehicle maintenance tracking app designed to help users remember and plan critical tasks like oil changes, air filter replacements, tire rotations, and more—based on mileage and time. It features a clean, modern UI with quick-glance alerts, service tracking, and full support for managing multiple vehicles locally.

---

### 🧰 Tech Stack

**Frontend:** React, React Router DOM  
**Backend:** Node.js, Express  
**Database:** SQLite3  
**Styling:** Custom CSS (dark theme with green accents)

---

### 📦 Features Completed (Sprint 1–4)

- Full frontend layout with routing between Dashboard, Vehicle Management, Maintenance, and Settings pages  
- Dashboard view showing upcoming and overdue maintenance across all vehicles  
- Custom dark-themed UI with responsive navigation and modern styling  
- SQLite database with vehicles and maintenance tables  
- Express backend with routes for viewing, adding, editing, and deleting vehicles and maintenance items  
- Functionality to track maintenance by mileage and reset intervals after completion  
- Real-time data updates reflected across all pages  
- Simple settings page for future customization support

---

### 🏃‍♂️ Getting Started

**Clone the Repository**
```bash
git clone https://github.com/TheOriginalKDC/CarKeeper.git
cd CarKeeper
```

**Install Frontend Dependencies**
```bash
cd frontend
npm install
```

**Install Backend Dependencies**
```bash
cd ../backend
npm install
```

**Create the Database**  
Run this from the `/backend` folder (requires SQLite installed):
```bash
sqlite3 carKeeper.db < schema.sql
```

**Start the Backend Server**
```bash
npm start
```

**Start the Frontend**  
In a separate terminal window:
```bash
cd ../frontend
npm start
```

---

### 🌱 Upcoming Features

- Service history log view for completed maintenance  
- Data export to CSV or PDF  
- Notification system for reminders  
- Light/dark theme toggle  
- Cloud sync and user account support

---

### ✍️ Author

Built by Kyle Campbell  
GitHub: [https://github.com/TheOriginalKDC](https://github.com/TheOriginalKDC)