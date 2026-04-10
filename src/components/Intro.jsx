import { useEffect, useState } from 'react';
import './Intro.css';

const TIMINGS = [
  [300,  1],  // start walking
  [1000, 2],  // bubble 1
  [3500, 3],  // bubble 2
  [9500, 4],  // bubble 3
  [12000, 5], // bubble 4
  [13500, 6], // turned
  [14300, 7], // door opens
  [15300, 8], // zoom
];
const TOTAL_MS = 16500;

export default function Intro({ onDone }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = TIMINGS.map(([ms, p]) => setTimeout(() => setPhase(p), ms));
    const done = setTimeout(onDone, TOTAL_MS);
    return () => { timers.forEach(clearTimeout); clearTimeout(done); };
  }, [onDone]);

  const walking = phase >= 1 && phase < 6;
  const turned  = phase >= 6;

  return (
    <div className={`intro${phase >= 8 ? ' intro--zoom' : ''}`}>
      <div className="intro__scene">

        <div className="intro__sky" />
        <div className="intro__ground" />

        {/* Floating sparkles */}
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`intro__sparkle intro__sparkle--${i % 5}`} style={{ '--i': i }} />
        ))}

        {/* Door */}
        <div className={`intro__door-wrap${phase >= 7 ? ' intro__door-wrap--open' : ''}`}>
          <div className="intro__door-frame">
            <div className="intro__door-panel">
              <div className="intro__door-window" />
              <div className="intro__door-knob" />
            </div>
          </div>
          <div className={`intro__door-light${phase >= 7 ? ' intro__door-light--on' : ''}`} />
        </div>

        {/* Character + bubbles */}
        <div className={`intro__char${walking ? ' intro__char--walk' : ''}${turned ? ' intro__char--turned' : ''}`}>

          <TypedBubble n={1} show={phase === 2}
            text="Hi, I'm Manasa 👋" />
          <TypedBubble n={2} show={phase === 3}
            text="Product designer & developer. I've seen how poor usability impacts the work that depends on it so I design to change that." />
          <TypedBubble n={3} show={phase === 4}
            text="If my work resonates, I'd love to connect." />
          <TypedBubble n={4} show={phase === 5}
            text="Let's step into my work ✨" />

          <SmoothGirl turned={turned} walking={walking} />
        </div>

        <button className="intro__skip" onClick={onDone}>Skip →</button>
      </div>
    </div>
  );
}

function TypedBubble({ n, show, text }) {
  return (
    <div className={`intro__bubble intro__bubble--${n}${show ? ' intro__bubble--show' : ''}`}>
      {text}
    </div>
  );
}

function SmoothGirl({ turned, walking }) {
  return (
    <svg
      className={`smooth-girl${walking ? ' smooth-girl--walk' : ''}${turned ? ' smooth-girl--turned' : ''}`}
      width="72" height="120"
      viewBox="0 0 36 60"
      aria-hidden="true"
    >
      {/* ── Hair back layer ── */}
      <ellipse cx="18" cy="10" rx="10" ry="11" fill="#3d2314" />
      <rect x="8" y="10" width="4" height="20" rx="2" fill="#3d2314" />
      <rect x="24" y="10" width="4" height="20" rx="2" fill="#3d2314" />

      {/* ── Face ── */}
      <ellipse cx="18" cy="11" rx="8" ry="9" fill="#f5c5a3" />

      {/* ── Hair top ── */}
      <ellipse cx="18" cy="4" rx="8" ry="5" fill="#3d2314" />
      <ellipse cx="13" cy="4" rx="3.5" ry="4" fill="#3d2314" />
      <ellipse cx="23" cy="4" rx="3.5" ry="4" fill="#3d2314" />

      {/* ── Eyes ── */}
      <ellipse cx="14.5" cy="11" rx="1.8" ry="2" fill="#fff" />
      <ellipse cx="21.5" cy="11" rx="1.8" ry="2" fill="#fff" />
      <ellipse cx="14.8" cy="11.2" rx="1.1" ry="1.3" fill="#3d2314" />
      <ellipse cx="21.8" cy="11.2" rx="1.1" ry="1.3" fill="#3d2314" />
      {/* Shine */}
      <circle cx="15.2" cy="10.5" r="0.4" fill="#fff" />
      <circle cx="22.2" cy="10.5" r="0.4" fill="#fff" />

      {/* ── Blush ── */}
      <ellipse cx="12" cy="13.5" rx="2" ry="1.2" fill="#f4a0a0" opacity="0.6" />
      <ellipse cx="24" cy="13.5" rx="2" ry="1.2" fill="#f4a0a0" opacity="0.6" />

      {/* ── Smile ── */}
      <path d="M15 15.5 Q18 17.5 21 15.5" stroke="#c06060" strokeWidth="1.2" fill="none" strokeLinecap="round" />

      {/* ── Neck ── */}
      <rect x="16" y="19" width="4" height="3" rx="1" fill="#f5c5a3" />

      {/* ── Body / shirt ── */}
      <rect x="10" y="22" width="16" height="14" rx="5" fill="#b5222a" />
      {/* Collar */}
      <path d="M16 22 Q18 25 20 22" stroke="#f5c5a3" strokeWidth="1.5" fill="none" />
      {/* Flower dots */}
      <circle cx="14" cy="27" r="1.2" fill="#fff" opacity="0.8" />
      <circle cx="22" cy="26" r="1" fill="#ffcdd2" opacity="0.9" />
      <circle cx="18" cy="29" r="1" fill="#ffcdd2" opacity="0.9" />
      <circle cx="13" cy="31" r="0.9" fill="#fff" opacity="0.7" />
      <circle cx="23" cy="31" r="0.9" fill="#fff" opacity="0.7" />

      {/* ── Arms ── */}
      <rect x="8" y="23" width="3" height="9" rx="1.5" fill="#f5c5a3" />
      <rect x="25" y="23" width="3" height="9" rx="1.5" fill="#f5c5a3" />
      {/* Cuffs */}
      <rect x="8" y="30" width="3" height="2" rx="1" fill="#b5222a" />
      <rect x="25" y="30" width="3" height="2" rx="1" fill="#b5222a" />

      {/* ── Jeans ── */}
      <rect x="11" y="35" width="14" height="16" rx="4" fill="#3a5f8a" />
      {/* Centre seam */}
      <rect x="17" y="35" width="2" height="4" rx="1" fill="#2e4f75" />
      {/* Leg highlights */}
      <rect x="12" y="39" width="5" height="10" rx="3" fill="#4a72a0" />
      <rect x="19" y="39" width="5" height="10" rx="3" fill="#4a72a0" />
      <rect x="17" y="42" width="2" height="9" rx="1" fill="#2e4f75" />

      {/* ── Shoes ── */}
      <ellipse cx="15" cy="52" rx="5" ry="3" fill="#2a1f1a" />
      <ellipse cx="21" cy="52" rx="5" ry="3" fill="#2a1f1a" />
      <ellipse cx="14" cy="51" rx="3" ry="1.5" fill="#3d2e28" />
      <ellipse cx="20" cy="51" rx="3" ry="1.5" fill="#3d2e28" />
    </svg>
  );
}
