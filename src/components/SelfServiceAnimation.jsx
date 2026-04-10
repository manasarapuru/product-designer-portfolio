import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './SelfServiceAnimation.css';

// Phases
// 0  — login screen
// 1  — dashboard loads, Alex profile visible
// 2  — cursor moves to Upload
// 3  — file picker opens
// 4  — csv selected, picker closes, file chip shows
// 5  — cursor moves to Submit, clicks
// 6  — spinner / processing
// 7  — "Task complete!" + download button
// 8  — cursor moves to Download, clicks
// 9  — impact credits

const PHASE_AT = [
  [0,    0],
  [1200, 1],
  [2600, 2],
  [3600, 3],
  [4800, 4],
  [6200, 5],
  [7000, 6],
  [8800, 7],
  [10200, 8],
  [11600, 9],
];
const TOTAL_MS = 15000;

export default function SelfServiceAnimation() {
  const [loopKey, setLoopKey] = useState(0);
  const [phase, setPhase]     = useState(0);

  useEffect(() => {
    setPhase(0);
    const timers = PHASE_AT.map(([ms, p]) => setTimeout(() => setPhase(p), ms));
    const loop   = setTimeout(() => setLoopKey(k => k + 1), TOTAL_MS);
    return () => { timers.forEach(clearTimeout); clearTimeout(loop); };
  }, [loopKey]);

  return (
    <div className="ssa" key={loopKey}>
      <div className="ssa__browser">
        {/* Browser chrome */}
        <div className="ssa__browser-bar">
          <div className="ssa__browser-dots">
            <span className="ssa__dot ssa__dot--red"   />
            <span className="ssa__dot ssa__dot--yellow"/>
            <span className="ssa__dot ssa__dot--green" />
          </div>
          <div className="ssa__browser-url">
            <span className="ssa__lock">🔒</span>
            <span>datatool.internal</span>
          </div>
        </div>

        {/* Screen */}
        <div className="ssa__screen">
          {phase === 0 && <LoginScreen />}
          {phase >= 1  && <AppScreen phase={phase} />}
        </div>
      </div>
    </div>
  );
}

/* ── Login Screen ────────────────────────────────────────── */
function LoginScreen() {
  return (
    <div className="ssa__login">
      <div className="ssa__login-card">
        <div className="ssa__login-logo">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="#1a535c"/>
            <rect x="7" y="7" width="8" height="8" rx="2" fill="white" opacity="0.9"/>
            <rect x="17" y="7" width="8" height="8" rx="2" fill="white" opacity="0.5"/>
            <rect x="7" y="17" width="8" height="8" rx="2" fill="white" opacity="0.5"/>
            <rect x="17" y="17" width="8" height="8" rx="2" fill="#4ecdc4" opacity="0.9"/>
          </svg>
          <span className="ssa__login-product">DataTool</span>
        </div>
        <p className="ssa__login-label">Sign in</p>
        <div className="ssa__login-field">
          <span>alex.m@company.com</span>
        </div>
        <div className="ssa__login-field ssa__login-field--pass">
          <span>••••••••</span>
        </div>
        <div className="ssa__login-btn">
          <span className="ssa__login-spinner" />
          Signing in…
        </div>
      </div>
    </div>
  );
}

/* ── App Shell ───────────────────────────────────────────── */
function AppScreen({ phase }) {
  const showPicker   = phase === 3;
  const fileSelected = phase >= 4;
  const showSpinner  = phase === 6;
  const showSuccess  = phase >= 7;
  const showDownload = phase >= 7;
  const showCredits  = phase >= 9;

  // Cursor target positions (relative to app content, %)
  const cursorPos = (() => {
    if (phase === 2) return { x: 42, y: 52 };   // over Upload
    if (phase === 3) return { x: 55, y: 64 };   // in file picker
    if (phase === 4) return { x: 55, y: 64 };
    if (phase === 5) return { x: 42, y: 68 };   // over Submit
    if (phase === 8) return { x: 62, y: 74 };   // over Download
    return null;
  })();

  return (
    <div className="ssa__app">
      {/* Sidebar */}
      <aside className="ssa__sidebar">
        <div className="ssa__sidebar-logo">
          <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="6" fill="#1a535c"/>
            <rect x="7" y="7" width="8" height="8" rx="2" fill="white" opacity="0.9"/>
            <rect x="17" y="7" width="8" height="8" rx="2" fill="white" opacity="0.5"/>
            <rect x="7" y="17" width="8" height="8" rx="2" fill="white" opacity="0.5"/>
            <rect x="17" y="17" width="8" height="8" rx="2" fill="#4ecdc4" opacity="0.9"/>
          </svg>
        </div>
        <nav className="ssa__sidebar-nav">
          <div className="ssa__sidebar-item ssa__sidebar-item--active">
            <IcoUploadNav />
          </div>
          <div className="ssa__sidebar-item"><IcoHistory /></div>
          <div className="ssa__sidebar-item"><IcoSettings /></div>
        </nav>
        {/* Alex profile at bottom */}
        <div className="ssa__sidebar-profile">
          <AlexAvatar size={30} />
          <div className="ssa__sidebar-profile-info">
            <span className="ssa__profile-name">Alex M.</span>
            <span className="ssa__profile-role">Customer Success</span>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="ssa__main">
        {/* Top bar */}
        <div className="ssa__topbar">
          <div className="ssa__topbar-title">
            <span className="ssa__topbar-label">Run Analysis</span>
          </div>
          <div className="ssa__topbar-right">
            <AlexAvatar size={28} />
          </div>
        </div>

        {/* Card */}
        <div className="ssa__card">
          <div className="ssa__card-header">
            <span className="ssa__card-title">Upload task file</span>
            <span className="ssa__card-sub">xlsx format · max 10 MB</span>
          </div>

          {/* Drop zone */}
          <div className={`ssa__dropzone${fileSelected ? ' ssa__dropzone--filled' : ''}${showPicker ? ' ssa__dropzone--active' : ''}`}>
            {fileSelected ? (
              <div className="ssa__file-chip">
                <IcoCsv />
                <div className="ssa__file-info">
                  <span className="ssa__file-name">customers_request.xlsx</span>
                  <span className="ssa__file-size">2.4 KB · Ready</span>
                </div>
                <span className="ssa__file-check">✓</span>
              </div>
            ) : (
              <>
                <div className="ssa__dropzone-icon"><IcoCloud /></div>
                <span className="ssa__dropzone-text">Drop file here or</span>
                <button className={`ssa__upload-btn${phase === 2 ? ' ssa__upload-btn--hover' : ''}`}>
                  Upload
                </button>
              </>
            )}
          </div>

          {/* File picker overlay */}
          {showPicker && <FilePicker />}

          {/* Submit */}
          <button
            className={`ssa__submit${phase === 5 ? ' ssa__submit--clicking' : ''}${showSuccess ? ' ssa__submit--done' : ''}`}
            disabled={!fileSelected}
          >
            {showSpinner && <span className="ssa__spinner" />}
            {!showSpinner && !showSuccess && 'Submit'}
            {showSpinner && 'Processing…'}
            {showSuccess && '✓ Task complete!'}
          </button>

          {/* Download */}
          <div className={`ssa__download-row${showDownload ? ' ssa__download-row--show' : ''}`}>
            <button className={`ssa__download-btn${phase === 8 ? ' ssa__download-btn--clicking' : ''}`}>
              <IcoDownload /> Download results
            </button>
          </div>
        </div>

        {/* Impact credits */}
        <div className={`ssa__credits${showCredits ? ' ssa__credits--show' : ''}`}>
          <Stat icon="⚡" value="< 10s" label="Analysis time" />
          <Stat icon="📥" value="1-click" label="Download ready" />
          <Stat icon="🚫" value="0 requests" label="Sent to Bioinformatics" />
          <Stat icon="🔁" value="No back-and-forth" label="Task done first time" />
        </div>
      </main>

      {/* Animated cursor */}
      {cursorPos && (
        <div
          className={`ssa__cursor${phase === 2 || phase === 5 || phase === 8 ? ' ssa__cursor--click' : ''}`}
          style={{ left: `${cursorPos.x}%`, top: `${cursorPos.y}%` }}
        />
      )}
    </div>
  );
}

AppScreen.propTypes = {
  phase: PropTypes.number.isRequired,
};

function Stat({ icon, value, label }) {
  return (
    <div className="ssa__stat">
      <span className="ssa__stat-icon">{icon}</span>
      <span className="ssa__stat-value">{value}</span>
      <span className="ssa__stat-label">{label}</span>
    </div>
  );
}

Stat.propTypes = {
  icon: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

function FilePicker() {
  return (
    <div className="ssa__picker">
      <div className="ssa__picker-header">
        <span className="ssa__picker-title">Open</span>
        <span className="ssa__picker-close">✕</span>
      </div>
      <div className="ssa__picker-sidebar">
        <div className="ssa__picker-loc ssa__picker-loc--active">📁 Downloads</div>
        <div className="ssa__picker-loc">🖥 Desktop</div>
        <div className="ssa__picker-loc">📄 Documents</div>
      </div>
      <div className="ssa__picker-files">
        <div className="ssa__picker-file ssa__picker-file--selected">
          <IcoCsv small />
          <span>customers_request.xlsx</span>
        </div>
        <div className="ssa__picker-file">
          <IcoCsv small />
          <span>archive_2024.xlscx</span>
        </div>
        <div className="ssa__picker-file">
          <span className="ssa__picker-doc-icon">📄</span>
          <span>notes.txt</span>
        </div>
      </div>
    </div>
  );
}

/* ── Alex avatar ─────────────────────────────────────────── */
function AlexAvatar({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className="ssa__avatar" aria-hidden="true">
      <circle cx="24" cy="24" r="24" fill="#29b6f6" />
      <rect x="20" y="30" width="8" height="5" fill="#fddcae" />
      <ellipse cx="24" cy="44" rx="14" ry="10" fill="#1976d2" />
      <ellipse cx="24" cy="22" rx="10" ry="11" fill="#fddcae" />
      {/* hair */}
      <g fill="#4e342e">
        <ellipse cx="24" cy="12" rx="10" ry="5" />
        <rect x="14" y="11" width="4" height="8" rx="2" />
        <rect x="30" y="11" width="4" height="8" rx="2" />
        <rect x="14" y="10" width="20" height="4" />
      </g>
      <ellipse cx="21" cy="20" rx="1.8" ry="2" fill="#1a1a1a" />
      <ellipse cx="27" cy="20" rx="1.8" ry="2" fill="#1a1a1a" />
      <circle cx="22" cy="19" r="0.7" fill="white" />
      <circle cx="28" cy="19" r="0.7" fill="white" />
      <ellipse cx="17" cy="24" rx="2.5" ry="1.5" fill="#f48fb1" opacity="0.5" />
      <ellipse cx="31" cy="24" rx="2.5" ry="1.5" fill="#f48fb1" opacity="0.5" />
      <path d="M20 26 Q24 30 28 26" stroke="#c0714a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ── Icons ───────────────────────────────────────────────── */
function IcoUploadNav() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>;
}
function IcoHistory() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
}
function IcoSettings() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>;
}
function IcoCloud() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/></svg>;
}
function IcoDownload() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>;
}
function IcoCsv({ small }) {
  const s = small ? 20 : 28;
  return (
    <svg width={s} height={s} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="4" fill="#107c10"/>
      <text x="4" y="22" fontSize="11" fontWeight="700" fill="white" fontFamily="monospace">xlsx</text>
    </svg>
  );
}
