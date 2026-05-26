import { useEffect, useState } from 'react';
import './Intro.css';

// Phases:
// 0 = scene fades in, door closed
// 1 = door begins to open (1.2s)
// 2 = door fully open, light floods (2.4s)
// 3 = zoom-in exit (3.8s)

export default function Intro({ onDone }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1200);
    const t2 = setTimeout(() => setPhase(2), 2400);
    const t3 = setTimeout(() => setPhase(3), 3800);
    const t4 = setTimeout(onDone, 5000);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [onDone]);

  return (
    <div className={`intro${phase >= 3 ? ' intro--zoom' : ''}`}>
      <div className="intro__scene">

        <div className="intro__sky" />
        <div className="intro__ground" />

        {[...Array(10)].map((_, i) => (
          <div key={i} className={`intro__sparkle intro__sparkle--${i % 5}`} style={{ '--i': i }} />
        ))}

        <div className={`intro__door-wrap${phase >= 1 ? ' intro__door-wrap--open' : ''}`}>
          <div className="intro__door-frame">
            <div className="intro__door-panel">
              <div className="intro__door-window" />
              <div className="intro__door-knob" />
            </div>
          </div>
          <div className={`intro__door-light${phase >= 2 ? ' intro__door-light--on' : ''}`} />
          <div className={`intro__door-glow${phase >= 2 ? ' intro__door-glow--on' : ''}`} />
        </div>

        <button className="intro__skip" onClick={onDone}>Skip</button>
      </div>
    </div>
  );
}


/* ── OLD sequence (commented out) ──────────────────────────────────────

function OldIntro({ onDone }) { ... }

── END OLD ──────────────────────────────────────────────────────────── */
