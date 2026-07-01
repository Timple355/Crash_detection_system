import React, { useState } from 'react';
import {
  IconScooter, IconUser, IconMail, IconLock, IconEye, IconEyeOff,
  IconAlert, IconShieldCheck, IconMapPin, IconBattery,
} from './icons';

export default function Login({
  vehicleNumber, setVehicleNumber, email, setEmail, password, setPassword,
  handleLogin, loginError,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-shell">
      {/* Brand panel */}
      <aside className="login-aside">
        <svg className="login-aside__pulse" viewBox="0 0 600 120" preserveAspectRatio="none">
          <path
            d="M0 60 L120 60 L150 20 L180 100 L210 60 L260 60 L290 40 L320 80 L350 60 L600 60"
            fill="none" stroke="#6FA0FF" strokeWidth="2"
          />
        </svg>

        <div className="login-aside__brand">
          <img src="/logo.png" alt="LifeLine" />
          <div>
            <h1>LifeLine</h1>
            <span>CRASH ALERT SYSTEM</span>
          </div>
        </div>

        <h2 className="login-aside__heading">
          Real-time vigilance for every <em>ride</em>.
        </h2>
        <p className="login-aside__copy">
          LifeLine watches your EV's vitals around the clock — motion, location and
          battery health — and raises the alarm the moment something looks wrong.
        </p>

        <div className="login-aside__features">
          <div className="login-aside__feature">
            <span className="login-aside__feature-icon"><IconAlert size={16} /></span>
            Instant crash detection &amp; alerts
          </div>
          <div className="login-aside__feature">
            <span className="login-aside__feature-icon"><IconMapPin size={16} /></span>
            Live GPS tracking on every trip
          </div>
          <div className="login-aside__feature">
            <span className="login-aside__feature-icon"><IconBattery size={16} /></span>
            Continuous battery &amp; sensor health
          </div>
        </div>
      </aside>

      {/* Form panel */}
      <main className="login-main">
        <div className="login-card">
          <div className="login-card__mobile-brand">
            <img src="/logo.png" alt="LifeLine" />
            <div>
              <h1>LifeLine</h1>
              <span>CRASH ALERT SYSTEM</span>
            </div>
          </div>

          <h2>Welcome back</h2>
          <p className="login-card__lead">Sign in to monitor your vehicle in real time.</p>

          <form onSubmit={handleLogin}>
            <div className="field">
              <label htmlFor="vehicleNumber">Vehicle number</label>
              <div className="input-wrap">
                <IconScooter size={16} className="field-icon" />
                <input
                  id="vehicleNumber"
                  className="input"
                  placeholder="KL 01 AB 1234"
                  value={vehicleNumber}
                  onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="email">Email address</label>
              <div className="input-wrap">
                <IconMail size={16} className="field-icon" />
                <input
                  id="email"
                  className="input"
                  type="email"
                  placeholder="you@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="password">Password</label>
              <div className="input-wrap">
                <IconLock size={16} className="field-icon" />
                <input
                  id="password"
                  className="input"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="field-toggle"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <IconEyeOff size={16} /> : <IconEye size={16} />}
                </button>
              </div>
            </div>

            <div className="field-row">
              <label className="checkbox-row">
                <input type="checkbox" />
                Remember me
              </label>
              <span className="link-muted" onClick={() => alert('Redirecting to password recovery...')}>
                Forgot password?
              </span>
            </div>

            {loginError && (
              <div className="form-error">
                <IconAlert size={16} />
                <span>{loginError}</span>
              </div>
            )}

            <button type="submit" className="btn-primary">Sign in</button>
          </form>

          <p className="login-card__footnote">
            <IconShieldCheck size={13} style={{ verticalAlign: '-2px', marginRight: '5px' }} />
            Your vehicle data is monitored securely, every second.
          </p>
        </div>
      </main>
    </div>
  );
}
