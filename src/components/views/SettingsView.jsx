import React, { useState } from 'react';
import { IconUser, IconBell, IconSettings, IconShieldCheck } from '../icons';

export default function SettingsView({ vehicleNumber }) {
  const [notifications, setNotifications] = useState(true);
  const [autoLocation, setAutoLocation] = useState(true);

  const initials = (vehicleNumber || 'LL').replace(/\s/g, '').slice(0, 2);

  return (
    <>
      <div className="view-header">
        <div>
          <div className="view-header__eyebrow">Settings</div>
          <h2>System settings</h2>
          <p>Manage your profile, vehicle and notification preferences.</p>
        </div>
      </div>

      <div className="card profile-card">
        <div className="profile-avatar">{initials}</div>
        <div>
          <h3>Admin</h3>
          <p>Vehicle {vehicleNumber || 'N/A'} · Registered owner</p>
        </div>
      </div>

      <div className="card">
        <div className="section-label">Account</div>
        <div className="settings-row">
          <div className="settings-row__label">
            <IconUser size={17} />
            <div>
              <div className="settings-row__title">Vehicle number</div>
              <div className="settings-row__desc">Linked to your LifeLine device</div>
            </div>
          </div>
          <span className="badge badge--neutral">{vehicleNumber || 'N/A'}</span>
        </div>
        <div className="settings-row">
          <div className="settings-row__label">
            <IconShieldCheck size={17} />
            <div>
              <div className="settings-row__title">Theme</div>
              <div className="settings-row__desc">Dashboard appearance</div>
            </div>
          </div>
          <span className="badge badge--neutral">Dark</span>
        </div>
      </div>

      <div className="card">
        <div className="section-label">Preferences</div>
        <div className="settings-row">
          <div className="settings-row__label">
            <IconBell size={17} />
            <div>
              <div className="settings-row__title">Push notifications</div>
              <div className="settings-row__desc">Crash and anomaly alerts</div>
            </div>
          </div>
          <button
            type="button"
            className={`toggle ${notifications ? 'is-on' : ''}`}
            onClick={() => setNotifications((v) => !v)}
            aria-label="Toggle notifications"
          />
        </div>
        <div className="settings-row">
          <div className="settings-row__label">
            <IconSettings size={17} />
            <div>
              <div className="settings-row__title">Auto-share location</div>
              <div className="settings-row__desc">Share GPS during emergencies</div>
            </div>
          </div>
          <button
            type="button"
            className={`toggle ${autoLocation ? 'is-on' : ''}`}
            onClick={() => setAutoLocation((v) => !v)}
            aria-label="Toggle auto location sharing"
          />
        </div>
      </div>
    </>
  );
}
