import React from 'react';
import {
  IconDashboard, IconBattery, IconScooter, IconAlert, IconSettings, IconLogout,
} from './icons';

const menuItems = [
  { key: 'Dashboard', label: 'Overview', icon: IconDashboard },
  { key: 'Battery', label: 'Battery', icon: IconBattery },
  { key: 'Vehicle', label: 'Sensors', icon: IconScooter },
  { key: 'Emergency', label: 'Emergency', icon: IconAlert },
  { key: 'Settings', label: 'Settings', icon: IconSettings },
];

export default function Sidebar({ activeTab, setActiveTab, onLogout }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <img src="/logo.png" alt="LifeLine" />
        <div className="sidebar__brand-text">
          <h1>LifeLine</h1>
          <span>CRASH ALERT SYSTEM</span>
        </div>
      </div>

      <nav className="sidebar__nav">
        {menuItems.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            type="button"
            className={`nav-item ${activeTab === key ? 'is-active' : ''}`}
            onClick={() => setActiveTab(key)}
          >
            <Icon size={18} />
            <span className="nav-item__label">{label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar__footer">
        <div className="connection-pill">
          <span className="pulse-dot" />
          <span>Live · connected</span>
        </div>
        <button type="button" className="logout-btn" onClick={onLogout}>
          <IconLogout size={17} />
          <span>Sign out</span>
        </button>
      </div>
    </aside>
  );
}
