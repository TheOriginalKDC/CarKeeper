import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Welcome to CarKeeper</h2>
      <p>This is your dashboard. Use the menu to navigate through your vehicle maintenance features.</p>
      <div className="highlight-box">
        <h3>Need a reminder?</h3>
        <p>Track oil changes, tire rotations, inspections, and more — all in one place.</p>
      </div>
    </div>
  );
};

export default Dashboard;
