import React from 'react';

export default function CircularGauge({ value = 0, size = 168, stroke = 14, color = 'var(--vital)', label = '' }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const pct = Math.max(0, Math.min(100, value));
  const offset = circumference - (pct / 100) * circumference;
  const center = size / 2;

  return (
    <div className="gauge-wrap">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={center} cy={center} r={radius}
          fill="none" stroke="var(--surface-sunken)" strokeWidth={stroke}
        />
        <circle
          cx={center} cy={center} r={radius}
          fill="none" stroke={color} strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${center} ${center})`}
          style={{ transition: 'stroke-dashoffset 0.6s ease' }}
        />
        <text
          x="50%" y="50%" textAnchor="middle" dominantBaseline="middle"
          className="gauge-wrap__value"
          style={{ fontSize: size * 0.17 }}
        >
          {Math.round(pct)}%
        </text>
      </svg>
      {label && <div className="gauge-caption">{label}</div>}
    </div>
  );
}
