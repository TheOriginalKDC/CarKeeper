import React, { useState, useEffect } from 'react';
import '../styles/CarDetails.css';

const CarDetails = () => {
  const [vehicles, setVehicles] = useState([]);
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    mileage: '',
  });

  useEffect(() => {
    fetch('http://localhost:5000/vehicles')
      .then(res => res.json())
      .then(data => setVehicles(data));
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/vehicles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const newVehicle = await res.json();
    setVehicles(prev => [...prev, { ...formData, id: newVehicle.id }]);
    setFormData({ make: '', model: '', year: '', mileage: '' });
  };

  return (
    <div className="car-container">
      <h2>Your Vehicles</h2>
      <form onSubmit={handleSubmit} className="vehicle-form">
        <input type="text" name="make" value={formData.make} onChange={handleChange} placeholder="Make" required />
        <input type="text" name="model" value={formData.model} onChange={handleChange} placeholder="Model" required />
        <input type="number" name="year" value={formData.year} onChange={handleChange} placeholder="Year" required />
        <input type="number" name="mileage" value={formData.mileage} onChange={handleChange} placeholder="Mileage" required />
        <button type="submit">Add Vehicle</button>
      </form>

      <ul className="vehicle-list">
        {vehicles.map((v, i) => (
          <li key={i}>
            {v.year} {v.make} {v.model} – {v.mileage} miles
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarDetails;
