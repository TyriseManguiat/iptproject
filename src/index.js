import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components
import './start.css';
import App from './App'; // Login page component
import Registration from './registration'; // Registration component
import Start from './Start'; // Start component, if needed

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Login page */}
        <Route path="/register" element={<Registration />} /> {/* Registration page */}
        <Route path="/start" element={<Start />} /> {/* Start page */}
      </Routes>
    </Router>
  </React.StrictMode>
);

