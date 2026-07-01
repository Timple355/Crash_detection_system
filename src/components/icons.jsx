import React from 'react';

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const make = (path) => ({ size = 18, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
    {path}
  </svg>
);

export const IconDashboard = make(
  <>
    <rect x="3" y="3" width="7" height="9" rx="1.5" />
    <rect x="14" y="3" width="7" height="5" rx="1.5" />
    <rect x="14" y="12" width="7" height="9" rx="1.5" />
    <rect x="3" y="16" width="7" height="5" rx="1.5" />
  </>
);

export const IconBattery = make(
  <>
    <rect x="2.5" y="7" width="16" height="10" rx="2" />
    <path d="M21.5 10v4" />
    <path d="M7 11.5h2.2l1-2 1.6 4 1-2H15" strokeWidth="1.6" />
  </>
);

export const IconActivity = make(
  <path d="M2.5 12.5h4l2-6 3.5 11 2.5-9 1.6 4h5.4" />
);

export const IconAlert = make(
  <>
    <path d="M12 2.5 2.5 19.5h19L12 2.5Z" />
    <path d="M12 9.5v4.5" />
    <circle cx="12" cy="17" r="0.9" fill="currentColor" stroke="none" />
  </>
);

export const IconSettings = make(
  <>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 13.5a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.85 2.85l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.02 1.55V19.6a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.55 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.85-2.85l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.55-1.02H4.4a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.55-1.1 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.85-2.85l.06.06a1.7 1.7 0 0 0 1.87.34h.06a1.7 1.7 0 0 0 1.02-1.55V4.4a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1.02 1.55h.06a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.85 2.85l-.06.06a1.7 1.7 0 0 0-.34 1.87v.06a1.7 1.7 0 0 0 1.55 1.02h.1a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.55 1.02Z" />
  </>
);

export const IconGauge = make(
  <>
    <path d="M3.5 18a8.5 8.5 0 1 1 17 0" />
    <path d="M12 13.5 16 9" />
    <circle cx="12" cy="13.5" r="1" fill="currentColor" stroke="none" />
  </>
);

export const IconThermometer = make(
  <>
    <path d="M11 13.7V5a1.8 1.8 0 1 1 3.6 0v8.7a3.6 3.6 0 1 1-3.6 0Z" />
    <path d="M12.8 7.5h-1.8" />
  </>
);

export const IconMapPin = make(
  <>
    <path d="M12 21.5s7-6.4 7-12A7 7 0 1 0 5 9.5c0 5.6 7 12 7 12Z" />
    <circle cx="12" cy="9.5" r="2.4" />
  </>
);

export const IconShieldCheck = make(
  <>
    <path d="M12 2.8 19.5 6v6c0 5-3.2 8.4-7.5 10-4.3-1.6-7.5-5-7.5-10V6L12 2.8Z" />
    <path d="M8.7 12.3 11 14.6l4.6-4.7" />
  </>
);

export const IconBolt = make(
  <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
);

export const IconCompass = make(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="m15 9-2 6-6 2 2-6 6-2Z" />
  </>
);

export const IconUser = make(
  <>
    <circle cx="12" cy="8.2" r="3.4" />
    <path d="M4.8 20c0-3.7 3.2-6.2 7.2-6.2s7.2 2.5 7.2 6.2" />
  </>
);

export const IconMail = make(
  <>
    <rect x="2.5" y="5" width="19" height="14" rx="2.4" />
    <path d="m3.5 6.5 8.5 7 8.5-7" />
  </>
);

export const IconLock = make(
  <>
    <rect x="4.5" y="10.5" width="15" height="10" rx="2.2" />
    <path d="M7.5 10.5V7.6a4.5 4.5 0 0 1 9 0v2.9" />
  </>
);

export const IconEye = make(
  <>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
    <circle cx="12" cy="12" r="2.6" />
  </>
);

export const IconEyeOff = make(
  <>
    <path d="M3.5 3.5l17 17" />
    <path d="M10.6 5.7A10.6 10.6 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a16 16 0 0 1-3.2 4M6.6 6.6C4 8.4 2.5 12 2.5 12s3.5 6.5 9.5 6.5a9.6 9.6 0 0 0 3.4-.6" />
    <path d="M9.9 9.9a2.6 2.6 0 0 0 3.6 3.6" />
  </>
);

export const IconChevronRight = make(<path d="m9 5 7 7-7 7" />);

export const IconSignal = make(
  <>
    <path d="M3 18h2v3H3z" fill="currentColor" stroke="none" />
    <path d="M8 14h2v7H8z" fill="currentColor" stroke="none" />
    <path d="M13 9h2v12h-2z" fill="currentColor" stroke="none" opacity="0.55" />
    <path d="M18 4h2v17h-2z" fill="currentColor" stroke="none" opacity="0.3" />
  </>
);

export const IconPhone = make(
  <path d="M5 4.5h3.2l1.4 4.3-2 1.6a12 12 0 0 0 5.5 5.5l1.6-2 4.3 1.4V18a2 2 0 0 1-2.2 2A16 16 0 0 1 3 5.7 2 2 0 0 1 5 4.5Z" />
);

export const IconCross = make(
  <>
    <path d="M12 2.8 19.5 6v6c0 5-3.2 8.4-7.5 10-4.3-1.6-7.5-5-7.5-10V6L12 2.8Z" />
    <path d="M12 9v6M9 12h6" />
  </>
);

export const IconClock = make(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.2 2" />
  </>
);

export const IconLogout = make(
  <>
    <path d="M9 21H5.8A1.8 1.8 0 0 1 4 19.2V4.8A1.8 1.8 0 0 1 5.8 3H9" />
    <path d="M16 16l5-4-5-4" />
    <path d="M21 12H9" />
  </>
);

export const IconBell = make(
  <>
    <path d="M5.5 16V11a6.5 6.5 0 1 1 13 0v5l1.8 2.6H3.7L5.5 16Z" />
    <path d="M9.5 20.5a2.5 2.5 0 0 0 5 0" />
  </>
);

export const IconScooter = make(
  <>
    <circle cx="6" cy="18.5" r="2.2" />
    <circle cx="17.5" cy="18.5" r="2.2" />
    <path d="M6 18.5h7.5l2.5-6h3" />
    <path d="M13.5 12.5 11 7.5h3.2" />
    <path d="M8 7.5h3" />
  </>
);

export const IconTrendUp = make(
  <>
    <path d="m3 16 6-6 4 4 8-9" />
    <path d="M15 5h6v6" />
  </>
);
