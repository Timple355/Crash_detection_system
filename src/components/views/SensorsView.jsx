import React from 'react';
import { IconGauge, IconThermometer, IconActivity, IconCompass } from '../icons';

export default function SensorsView({ liveData }) {
  return (
    <>
      <div className="view-header">
        <div>
          <div className="view-header__eyebrow">Vehicle</div>
          <h2>Sensor readings</h2>
          <p>Raw output from the onboard IMU, speed and temperature sensors.</p>
        </div>
      </div>

      <div className="card">
        <div className="section-label">Speed &amp; temperature</div>
        <div className="metric-grid">
          <div className="metric-tile">
            <div className="metric-tile__label"><IconGauge size={14} /> Speed</div>
            <div className="metric-tile__value">{liveData?.VehicleSpeed ?? 0} km/h</div>
          </div>
          <div className="metric-tile">
            <div className="metric-tile__label"><IconThermometer size={14} /> Temperature</div>
            <div className="metric-tile__value">{liveData?.Temperature ?? 0}°C</div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="section-label">Accelerometer</div>
        <div className="metric-grid">
          <div className="metric-tile">
            <div className="metric-tile__label"><IconActivity size={14} /> Acc X</div>
            <div className="metric-tile__value">{liveData?.AccX ?? 'N/A'}</div>
          </div>
          <div className="metric-tile">
            <div className="metric-tile__label"><IconActivity size={14} /> Acc Y</div>
            <div className="metric-tile__value">{liveData?.AccY ?? 'N/A'}</div>
          </div>
          <div className="metric-tile">
            <div className="metric-tile__label"><IconActivity size={14} /> Acc Z</div>
            <div className="metric-tile__value">{liveData?.AccZ ?? 'N/A'}</div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="section-label">Gyroscope</div>
        <div className="metric-grid">
          <div className="metric-tile">
            <div className="metric-tile__label"><IconActivity size={14} /> Gyro X</div>
            <div className="metric-tile__value">{liveData?.GyroX ?? 'N/A'}</div>
          </div>
          <div className="metric-tile">
            <div className="metric-tile__label"><IconActivity size={14} /> Gyro Y</div>
            <div className="metric-tile__value">{liveData?.GyroY ?? 'N/A'}</div>
          </div>
          <div className="metric-tile">
            <div className="metric-tile__label"><IconActivity size={14} /> Gyro Z</div>
            <div className="metric-tile__value">{liveData?.GyroZ ?? 'N/A'}</div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="section-label">Orientation</div>
        <div className="metric-grid">
          <div className="metric-tile">
            <div className="metric-tile__label"><IconCompass size={14} /> Roll angle</div>
            <div className="metric-tile__value">{liveData?.RollAngle ?? 0}°</div>
          </div>
          <div className="metric-tile">
            <div className="metric-tile__label"><IconCompass size={14} /> Pitch angle</div>
            <div className="metric-tile__value">{liveData?.PitchAngle ?? 0}°</div>
          </div>
        </div>
      </div>
    </>
  );
}
