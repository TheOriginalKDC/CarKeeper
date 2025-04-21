import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">CarKeeper</h1>
      <ul className="nav-links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Dashboard</Link>
        </li>
        <li className={location.pathname === '/cars' ? 'active' : ''}>
          <Link to="/cars">Car Details</Link>
        </li>
        <li className={location.pathname === '/maintenance' ? 'active' : ''}>
          <Link to="/maintenance">Maintenance</Link>
        </li>
        <li className={location.pathname === '/settings' ? 'active' : ''}>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
