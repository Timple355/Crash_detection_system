import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [liveData, setLiveData] = useState(null);
  const [rowIndex, setRowIndex] = useState(0);

  const API_URL = "https://2zr4zwm9a6.execute-api.ap-southeast-2.amazonaws.com/dashboard";

  const handleLogin = (e) => {
    e.preventDefault();

    // 1. Vehicle Number Format (Example: AB 12 CD 3456)
    const vehicleRegex = /^[A-Z]{2}\s\d{2}\s[A-Z]{2}\s\d{4}$/;

    // 2. Gmail format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!vehicleRegex.test(vehicleNumber)) {
      setLoginError("Invalid vehicle number format — try KL 01 AB 1234");
      return;
    }
    if (!emailRegex.test(email)) {
      setLoginError("Email must be a valid @gmail.com address");
      return;
    }
    if (password.length < 6) {
      setLoginError("Password must be at least 6 characters long");
      return;
    }

    setLoginError('');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab('Dashboard');
    setLiveData(null);
    setRowIndex(0);
  };

  useEffect(() => {
    if (!isLoggedIn) return;
    const fetchCloudData = async () => {
      try {
        const res = await fetch(`${API_URL}?row=${rowIndex}`);
        const data = await res.json();
        setLiveData(data);
      } catch (err) { console.log(err); }
    };
    fetchCloudData();
    const interval = setInterval(() => setRowIndex(prev => prev + 1), 2000);
    return () => clearInterval(interval);
  }, [isLoggedIn, rowIndex]);

  if (!isLoggedIn) {
    return (
      <Login
        vehicleNumber={vehicleNumber}
        setVehicleNumber={setVehicleNumber}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        loginError={loginError}
      />
    );
  }

  return (
    <div className="app-shell">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={handleLogout} />
      <div className="main">
        <div className="main__content">
          <Dashboard liveData={liveData} vehicleNumber={vehicleNumber} activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
}
