import React, { useState, useEffect } from 'react';
import '../styles/Maintenance.css';

const Maintenance = () => {
  const [vehicles, setVehicles] = useState([]);
  const [maintenanceItems, setMaintenanceItems] = useState([]);
  const [formData, setFormData] = useState({
    vehicle_id: '',
    type: '',
    mileage_interval: '',
    last_service_mileage: '',
    notes: '',
  });

  useEffect(() => {
    fetch('http://localhost:5000/vehicles')
      .then(res => res.json())
      .then(data => setVehicles(data));

    fetch('http://localhost:5000/maintenance')
      .then(res => res.json())
      .then(data => setMaintenanceItems(data));
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/maintenance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const newEntry = await res.json();
    setMaintenanceItems(prev => [...prev, { ...formData, id: newEntry.id }]);
    setFormData({
      vehicle_id: '',
      type: '',
      mileage_interval: '',
      last_service_mileage: '',
      notes: '',
    });
  };

  return (
    <div className="maintenance-container">
      <h2>Track Maintenance</h2>
      <form onSubmit={handleSubmit} className="maintenance-form">
        <select name="vehicle_id" value={formData.vehicle_id} onChange={handleChange} required>
          <option value="">Select Vehicle</option>
          {vehicles.map(vehicle => (
            <option key={vehicle.id} value={vehicle.id}>
              {vehicle.year} {vehicle.make} {vehicle.model}
            </option>
          ))}
        </select>
        <input type="text" name="type" placeholder="Type (e.g., Oil Change)" value={formData.type} onChange={handleChange} required />
        <input type="number" name="mileage_interval" placeholder="Mileage Interval" value={formData.mileage_interval} onChange={handleChange} />
        <input type="number" name="last_service_mileage" placeholder="Last Service Mileage" value={formData.last_service_mileage} onChange={handleChange} />
        <input type="text" name="notes" placeholder="Notes" value={formData.notes} onChange={handleChange} />
        <button type="submit">Add Maintenance</button>
      </form>

      <ul className="maintenance-list">
        {maintenanceItems.map((m, i) => (
          <li key={i}>
            <strong>{m.type}</strong> – every {m.mileage_interval} miles (Last: {m.last_service_mileage})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Maintenance;
