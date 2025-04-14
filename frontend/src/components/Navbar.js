import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css';  optional if you separate styling

const Navbar = () => (
  <nav className="navbar">
    <ul className="nav-list">
      <li><Link to="/">Dashboard</Link></li>
      <li><Link to="/car-details">Car Details</Link></li>
      <li><Link to="/maintenance">Maintenance</Link></li>
      <li><Link to="/settings">Settings</Link></li>
    </ul>
  </nav>
);

export default Navbar;
