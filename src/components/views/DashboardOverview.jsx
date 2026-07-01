import React from 'react';
import {
  IconGauge, IconThermometer, IconBattery, IconShieldCheck, IconAlert,
  IconMapPin, IconActivity, IconCompass,
} from '../icons';

export default function DashboardOverview({ liveData }) {
  const isCrash = liveData?.AccidentStatus === 'YES';
  const hasGps = liveData?.Latitude != null && liveData?.Longitude != null
    && !Number.isNaN(Number(liveData?.Latitude)) && !Number.isNaN(Number(liveData?.Longitude));

  let mapSrc = '';
  if (hasGps) {
    const lat = Number(liveData.Latitude);
    const lon = Number(liveData.Longitude);
    const d = 0.006;
    mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lon - d}%2C${lat - d}%2C${lon + d}%2C${lat + d}&layer=mapnik&marker=${lat}%2C${lon}`;
  }

  return (
    <>
      <div className="view-header">
        <div>
          <div className="view-header__eyebrow">Overview</div>
          <h2>Live telemetry</h2>
          <p>A snapshot of your vehicle's vitals, refreshed every couple of seconds.</p>
        </div>
      </div>

      <div className="stat-grid">
        <div className="stat-card">
          <div className="stat-card__top">
            <div className="stat-card__icon"><IconGauge size={19} /></div>
          </div>
          <div className="stat-card__value">{liveData?.VehicleSpeed ?? 0}<span>km/h</span></div>
          <div className="stat-card__label">Current speed</div>
        </div>

        <div className="stat-card">
          <div className="stat-card__top">
            <div className="stat-card__icon"><IconThermometer size={19} /></div>
          </div>
          <div className="stat-card__value">{liveData?.Temperature ?? 0}<span>°C</span></div>
          <div className="stat-card__label">Vehicle temperature</div>
        </div>

        <div className="stat-card stat-card--vital">
          <div className="stat-card__top">
            <div className="stat-card__icon"><IconBattery size={19} /></div>
          </div>
          <div className="stat-card__value">82<span>%</span></div>
          <div className="stat-card__label">Battery charge</div>
        </div>

        <div className={`stat-card ${isCrash ? 'stat-card--danger' : 'stat-card--vital'}`}>
          <div className="stat-card__top">
            <div className="stat-card__icon">{isCrash ? <IconAlert size={19} /> : <IconShieldCheck size={19} />}</div>
          </div>
          <div className="stat-card__value" style={{ fontSize: '19px' }}>
            {isCrash ? 'Crash' : 'Normal'}
          </div>
          <div className="stat-card__label">System status</div>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card__header">
            <div className="card__title"><IconMapPin size={17} /> Live location</div>
            {hasGps && (
              <span className="badge badge--neutral">
                {Number(liveData.Latitude).toFixed(4)}, {Number(liveData.Longitude).toFixed(4)}
              </span>
            )}
          </div>
          {hasGps ? (
            <div className="map-frame">
              <iframe title="map" src={mapSrc} />
            </div>
          ) : (
            <div className="map-placeholder">
              <IconMapPin size={26} />
              <strong>Waiting for GPS fix</strong>
              <span>Location will appear here once coordinates are received from the device.</span>
            </div>
          )}
        </div>

        <div className="card">
          <div className="card__header">
            <div className="card__title"><IconActivity size={17} /> Motion snapshot</div>
          </div>
          <div className="data-row">
            <span className="data-row__label"><IconCompass size={15} /> Roll angle</span>
            <span className="data-row__value">{liveData?.RollAngle ?? 0}°</span>
          </div>
          <div className="data-row">
            <span className="data-row__label"><IconCompass size={15} /> Pitch angle</span>
            <span className="data-row__value">{liveData?.PitchAngle ?? 0}°</span>
          </div>
          <div className="data-row">
            <span className="data-row__label"><IconActivity size={15} /> Acceleration (X/Y/Z)</span>
            <span className="data-row__value">
              {liveData?.AccX ?? 0} / {liveData?.AccY ?? 0} / {liveData?.AccZ ?? 0}
            </span>
          </div>
          <div className="data-row">
            <span className="data-row__label"><IconActivity size={15} /> Gyroscope (X/Y/Z)</span>
            <span className="data-row__value">
              {liveData?.GyroX ?? 0} / {liveData?.GyroY ?? 0} / {liveData?.GyroZ ?? 0}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
