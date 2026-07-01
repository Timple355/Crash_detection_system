import React from 'react';
import CircularGauge from '../CircularGauge';
import { IconThermometer, IconBolt, IconActivity } from '../icons';

export default function BatteryView({ liveData }) {
  return (
    <>
      <div className="view-header">
        <div>
          <div className="view-header__eyebrow">Battery</div>
          <h2>Battery management system</h2>
          <p>Charge level, health and pack diagnostics.</p>
        </div>
        <span className="badge badge--vital">Healthy</span>
      </div>

      <div className="grid-2">
        <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '260px' }}>
          <CircularGauge value={82} color="var(--vital)" label="Charge remaining" />
        </div>

        <div className="card">
          <div className="card__header">
            <div className="card__title"><IconActivity size={17} /> Pack diagnostics</div>
          </div>
          <div className="data-row">
            <span className="data-row__label"><IconBolt size={15} /> Health</span>
            <span className="data-row__value">95%</span>
          </div>
          <div className="data-row">
            <span className="data-row__label"><IconThermometer size={15} /> Temperature</span>
            <span className="data-row__value">{liveData?.Temperature ?? 36}°C</span>
          </div>
          <div className="data-row">
            <span className="data-row__label"><IconBolt size={15} /> Voltage</span>
            <span className="data-row__value">48 V</span>
          </div>
          <div className="data-row">
            <span className="data-row__label"><IconBolt size={15} /> Estimated range</span>
            <span className="data-row__value">~62 km</span>
          </div>
        </div>
      </div>
    </>
  );
}
