import React from 'react';
import { IconAlert, IconShieldCheck, IconMapPin, IconCross, IconPhone, IconClock } from '../icons';

export default function EmergencyView({ liveData }) {
  const isCrash = liveData?.AccidentStatus === 'YES';

  const contacts = [
    { name: 'National Emergency', sub: 'All-in-one emergency response', number: '112' },
    { name: 'Ambulance', sub: 'Medical emergency response', number: '108' },
    { name: 'Police control room', sub: 'Report the incident', number: '100' },
  ];

  return (
    <>
      <div className="view-header">
        <div>
          <div className="view-header__eyebrow">Emergency</div>
          <h2>Emergency monitoring</h2>
          <p>Crash detection status and rapid-response contacts.</p>
        </div>
      </div>

      <div className={`emergency-hero ${isCrash ? 'is-crash' : ''}`}>
        <div className="emergency-hero__icon">
          {isCrash ? <IconAlert size={30} /> : <IconShieldCheck size={30} />}
        </div>
        <div>
          <div className="emergency-hero__title">
            {isCrash ? 'Critical — crash detected' : 'No incidents — monitoring'}
          </div>
          <p className="emergency-hero__sub">
            {isCrash
              ? 'A sudden impact was detected. Emergency contacts and nearby responders are listed below — reach out immediately if this wasn\'t a false alarm.'
              : 'LifeLine is actively watching motion, orientation and impact sensors. You\'ll be alerted the instant something unusual happens.'}
          </p>
        </div>
      </div>

      <div className="card">
        <div className="section-label">Incident details</div>
        <div className="detail-grid">
          <div className="detail-tile">
            <div className="detail-tile__label">Status</div>
            <div className="detail-tile__value">{isCrash ? 'Critical' : 'Normal'}</div>
          </div>
          <div className="detail-tile">
            <div className="detail-tile__label">Severity</div>
            <div className="detail-tile__value">{isCrash ? 'High' : 'None'}</div>
          </div>
          <div className="detail-tile">
            <div className="detail-tile__label">Nearby hospital</div>
            <div className="detail-tile__value">{isCrash ? 'Contacting services…' : 'Available'}</div>
          </div>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card__header">
            <div className="card__title"><IconPhone size={17} /> Emergency contacts</div>
          </div>
          <div className="contact-list">
            {contacts.map((c) => (
              <a key={c.number} className="contact-item" href={`tel:${c.number}`}>
                <div className="contact-item__left">
                  <span className="contact-item__icon"><IconCross size={16} /></span>
                  <div>
                    <div className="contact-item__name">{c.name}</div>
                    <div className="contact-item__sub">{c.sub}</div>
                  </div>
                </div>
                <span className="contact-item__call">{c.number}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card__header">
            <div className="card__title"><IconClock size={17} /> Response checklist</div>
          </div>
          <div className="data-row">
            <span className="data-row__label"><IconMapPin size={15} /> Location shared</span>
            <span className="data-row__value">{isCrash ? 'Yes' : 'Standby'}</span>
          </div>
          <div className="data-row">
            <span className="data-row__label"><IconPhone size={15} /> Contacts notified</span>
            <span className="data-row__value">{isCrash ? 'In progress' : 'Standby'}</span>
          </div>
          <div className="data-row">
            <span className="data-row__label"><IconShieldCheck size={15} /> Sensors active</span>
            <span className="data-row__value">Yes</span>
          </div>
        </div>
      </div>
    </>
  );
}
