import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

function Dashboard() {
  const [vehicles, setVehicles] = useState([]);
  const [maintenance, setMaintenance] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const vehicleRes = await axios.get('http://localhost:5000/vehicles');
        const maintenanceRes = await axios.get('http://localhost:5000/maintenance');
        setVehicles(vehicleRes.data);
        setMaintenance(maintenanceRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const getNextDue = (vehicleId, type, interval) => {
    const record = maintenance.find(
      (entry) => entry.vehicle_id === vehicleId && entry.type.toLowerCase() === type.toLowerCase()
    );
    if (!record) return 'No record';

    return `${record.last_service_mileage + interval} mi`;
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <button className="add-btn" onClick={() => navigate('/cars')}>Add Vehicle</button>
      </div>

      {vehicles.length === 0 ? (
        <p>No vehicles found.</p>
      ) : (
        vehicles.map((vehicle) => (
          <div key={vehicle.id} className="vehicle-card">
            <h3>{vehicle.year} {vehicle.make} {vehicle.model}</h3>
            <p><strong>Current Mileage:</strong> {vehicle.mileage} mi</p>
            <p><strong>Next Oil Change:</strong> {getNextDue(vehicle.id, 'oil change', 3000)}</p>
            <p><strong>Next Tire Rotation:</strong> {getNextDue(vehicle.id, 'tire rotation', 5000)}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;
