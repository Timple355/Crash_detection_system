import React from 'react';
import DashboardOverview from './views/DashboardOverview';
import SensorsView from './views/SensorsView';
import BatteryView from './views/BatteryView';
import EmergencyView from './views/EmergencyView';
import SettingsView from './views/SettingsView';
import { IconShieldCheck, IconAlert } from './icons';

export default function Dashboard({ liveData, vehicleNumber, activeTab }) {
  const isCrash = liveData?.AccidentStatus === 'YES';

  const renderView = () => {
    switch (activeTab) {
      case 'Vehicle': return <SensorsView liveData={liveData} />;
      case 'Battery': return <BatteryView liveData={liveData} />;
      case 'Emergency': return <EmergencyView liveData={liveData} />;
      case 'Settings': return <SettingsView vehicleNumber={vehicleNumber} />;
      default: return <DashboardOverview liveData={liveData} />;
    }
  };

  return (
    <>
      <div className={`status-banner ${isCrash ? 'is-crash' : ''}`}>
        <div className="status-banner__left">
          <div className="status-banner__icon">
            {isCrash ? <IconAlert size={24} /> : <IconShieldCheck size={24} />}
          </div>
          <div>
            <div className="status-banner__title">
              {isCrash ? 'Crash detected' : 'Vehicle status: monitoring'}
            </div>
            <div className="status-banner__meta">
              <span>User <b>{liveData?.UserName || 'N/A'}</b></span>
              <span>ID <b>{liveData?.UserID || 'N/A'}</b></span>
              <span>Plate <b>{vehicleNumber || 'N/A'}</b></span>
            </div>
          </div>
        </div>
        <div className="status-banner__right">
          {isCrash ? (
            <span className="badge badge--danger"><span className="pulse-dot is-danger" /> Action required</span>
          ) : (
            <span className="badge badge--vital"><span className="pulse-dot" /> All systems normal</span>
          )}
        </div>
      </div>

      {renderView()}
    </>
  );
}
