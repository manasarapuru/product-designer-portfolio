import { useEffect, useState } from 'react';
import './PosterProductAnimation.css';

// Phase 0: confused at poster
// Phase 1: scanning QR
// Phase 2: phone appears (zooms in)
// Phase 3: cards start expanding one by one

const CYCLE_MS = 13000;
const PHASES = [
  { at: 0,    phase: 0 },
  { at: 2200, phase: 1 },
  { at: 3800, phase: 2 },
  { at: 4800, phase: 3 },
];

const CARDS = [
  { id: 'question', label: null,      color: 'dark',  delay: 0    },
  { id: 'method',   label: 'Method',  color: 'blue',  delay: 800  },
  { id: 'finding',  label: 'Finding', color: 'green', delay: 1600 },
];

export default function PosterProductAnimation() {
  const [phase, setPhase] = useState(0);
  const [expanded, setExpanded] = useState({});
  const [autoExpanded, setAutoExpanded] = useState([]);

  useEffect(() => {
    let timers = [];
    const run = () => {
      setPhase(0);
      setExpanded({});
      setAutoExpanded([]);
      PHASES.forEach(({ at, phase: p }) => {
        timers.push(setTimeout(() => setPhase(p), at));
      });
      // Auto-expand cards sequentially after phase 3
      CARDS.forEach(card => {
        timers.push(setTimeout(() => {
          setAutoExpanded(prev => [...prev, card.id]);
        }, 4800 + card.delay));
      });
    };
    run();
    const loop = setInterval(() => {
      timers.forEach(clearTimeout);
      timers = [];
      run();
    }, CYCLE_MS);
    return () => { timers.forEach(clearTimeout); clearInterval(loop); };
  }, []);

  const toggleCard = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const isOpen = (id) => expanded[id] !== undefined ? expanded[id] : autoExpanded.includes(id);

  return (
    <div className="ppa">
      <div className="ppa__scene">

        {/* ── Poster ── */}
        <div className={`ppa__poster${phase >= 1 ? ' ppa__poster--dim' : ''}`}>
          <div className="ppa__poster-header">
            <div className="ppa__poster-title-line ppa__poster-title-line--long" />
            <div className="ppa__poster-title-line ppa__poster-title-line--med" />
            <div className="ppa__poster-authors-line" />
          </div>
          <div className="ppa__poster-grid">
            {['Abstract', 'Methodology', 'Results', 'Conclusion'].map(label => (
              <div key={label} className="ppa__poster-section">
                <div className="ppa__section-label">{label}</div>
                <div className="ppa__section-lines">
                  {[90, 75, 85, 60, 80].map((w, i) => (
                    <div key={i} className="ppa__section-line" style={{ width: `${w}%` }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className={`ppa__qr${phase >= 1 ? ' ppa__qr--pulse' : ''}`}>
            <div className="ppa__qr-inner">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="2" y="2" width="10" height="10" rx="1" fill="#1e293b"/>
                <rect x="4" y="4" width="6" height="6" rx="0.5" fill="white"/>
                <rect x="16" y="2" width="10" height="10" rx="1" fill="#1e293b"/>
                <rect x="18" y="4" width="6" height="6" rx="0.5" fill="white"/>
                <rect x="2" y="16" width="10" height="10" rx="1" fill="#1e293b"/>
                <rect x="4" y="18" width="6" height="6" rx="0.5" fill="white"/>
                <rect x="16" y="16" width="4" height="4" fill="#1e293b"/>
                <rect x="22" y="16" width="4" height="4" fill="#1e293b"/>
                <rect x="16" y="22" width="4" height="4" fill="#1e293b"/>
                <rect x="22" y="22" width="4" height="4" fill="#1e293b"/>
              </svg>
              <span className="ppa__qr-label">QR</span>
            </div>
          </div>
        </div>

        {/* ── Attendee ── */}
        <div className={`ppa__attendee${phase >= 1 ? ' ppa__attendee--scan' : ''}`}>
          <div className="ppa__person-wrap">
            <svg className="ppa__person-svg" width="32" height="52" viewBox="0 0 16 26" fill="none">
              <circle cx="8" cy="4" r="3.5" fill="#374151"/>
              <rect x="4.5" y="8" width="7" height="9" rx="2" fill="#374151"/>
              <line x1="5.5" y1="17" x2="4.5" y2="25" stroke="#374151" strokeWidth="2.2" strokeLinecap="round"/>
              <line x1="10.5" y1="17" x2="11.5" y2="25" stroke="#374151" strokeWidth="2.2" strokeLinecap="round"/>
            </svg>
            <div className={`ppa__bubble ppa__bubble--confused${phase === 0 ? ' ppa__bubble--show' : ''}`}>?</div>
            <div className={`ppa__bubble ppa__bubble--scan${phase === 1 ? ' ppa__bubble--show' : ''}`}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
              </svg>
            </div>
            <div className={`ppa__bubble ppa__bubble--got${phase >= 2 ? ' ppa__bubble--show' : ''}`}>💡</div>
          </div>
        </div>

        {/* ── Phone ── */}
        <div className={`ppa__phone${phase >= 2 ? ' ppa__phone--show' : ''}`}>
          <div className="ppa__phone-shell">
            <div className="ppa__phone-notch" />
            <div className="ppa__phone-screen">

              {/* Plain language badge */}
              <div className="ppa__plain-badge">✦ plain language summary</div>

              {/* Title */}
              <div className="ppa__screen-title">
                <div className="ppa__screen-line ppa__screen-line--bold" style={{ width: '90%' }} />
                <div className="ppa__screen-line ppa__screen-line--bold" style={{ width: '75%' }} />
                <div className="ppa__screen-line" style={{ width: '55%', marginTop: 3 }} />
              </div>

              {/* Core question card */}
              <div className="ppa__screen-section-label">CORE RESEARCH QUESTION</div>
              <div
                className={`ppa__screen-card ppa__screen-card--dark ppa__screen-card--collapsible${isOpen('question') ? ' ppa__screen-card--open' : ''}`}
                onClick={() => toggleCard('question')}
              >
                <div className="ppa__screen-line ppa__screen-line--white ppa__screen-line--bold" style={{ width: '80%' }} />
                <div className="ppa__screen-collapse-body">
                  <div className="ppa__screen-line ppa__screen-line--white" style={{ width: '95%' }} />
                  <div className="ppa__screen-line ppa__screen-line--white" style={{ width: '88%' }} />
                  <div className="ppa__screen-line ppa__screen-line--white" style={{ width: '70%' }} />
                </div>
                <div className="ppa__show-more ppa__show-more--white">
                  {isOpen('question') ? '▲ Show less' : '▼ Show more'}
                </div>
              </div>

              {/* Key concepts */}
              <div className="ppa__screen-section-label" style={{ marginTop: 6 }}>KEY CONCEPTS</div>
              <div
                className={`ppa__screen-card ppa__screen-card--blue ppa__screen-card--collapsible${isOpen('method') ? ' ppa__screen-card--open' : ''}`}
                onClick={() => toggleCard('method')}
              >
                <div className="ppa__screen-tag ppa__screen-tag--blue">Method</div>
                <div className="ppa__screen-line ppa__screen-line--bold" style={{ width: '70%', marginTop: 3 }} />
                <div className="ppa__screen-collapse-body">
                  <div className="ppa__screen-line" style={{ width: '95%' }} />
                  <div className="ppa__screen-line" style={{ width: '80%' }} />
                </div>
                <div className="ppa__show-more">
                  {isOpen('method') ? '▲ Show less' : '▼ Show more'}
                </div>
              </div>

              <div
                className={`ppa__screen-card ppa__screen-card--green ppa__screen-card--collapsible${isOpen('finding') ? ' ppa__screen-card--open' : ''}`}
                onClick={() => toggleCard('finding')}
              >
                <div className="ppa__screen-tag ppa__screen-tag--green">Finding</div>
                <div className="ppa__screen-line ppa__screen-line--bold" style={{ width: '65%', marginTop: 3 }} />
                <div className="ppa__screen-collapse-body">
                  <div className="ppa__screen-line" style={{ width: '90%' }} />
                  <div className="ppa__screen-line" style={{ width: '75%' }} />
                </div>
                <div className="ppa__show-more">
                  {isOpen('finding') ? '▲ Show less' : '▼ Show more'}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
      <p className="ppa__caption">Attendee scans the QR code on the poster — and gets a plain-language summary in under five seconds.</p>
    </div>
  );
}
