import React from 'react';
import ReactDOM from 'react-dom/client';
//import "./odometer-style.css";
import "odometer/themes/odometer-theme-train-station.css";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

