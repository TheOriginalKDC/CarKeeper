import React from 'react';
import '../styles/Settings.css';

const Settings = () => {
  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <p>This page can be used to reset app data, switch themes, or manage preferences in a future version.</p>
      <button onClick={() => alert('Reset feature coming soon!')}>Reset All Data</button>
    </div>
  );
};

export default Settings;
