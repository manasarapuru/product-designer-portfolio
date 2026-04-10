import './UCSCFeedback.css';

// 3 respondents: 2× Level 3 (very familiar), 1× Level 2 (familiar, doesn't use)
// Q3 Clarity:        scores [5,5,4] → avg 4.7
// Q4 Confidence:     scores [4,4,5] → avg 4.3
// Q5 Layout guides:  scores [5,5,4] → avg 4.7
// Q6 vs original:    scores [5,5,5] → 100%

const METRICS = [
  { label: 'Interface clarity', score: 4.7, pct: 94 },
  { label: 'Task confidence',   score: 4.3, pct: 86 },
  { label: 'Layout guidance',   score: 4.7, pct: 94 },
  { label: 'vs. original',      score: '5 / 5', pct: 100, tag: '100%' },
];

const QUOTES = [
  'Less crowded — I didn\'t have to refresh the page to show tracks.',
  'Updated interface, and responsive.',
  'Descriptions for each section help novices and serve as a refresher for familiar users. It updates automatically when you adjust a track.',
];

function Donut({ pct, color }) {
  const r = 26;
  const circ = 2 * Math.PI * r;
  const filled = (pct / 100) * circ;

  return (
    <svg width="68" height="68" viewBox="0 0 68 68">
      <circle cx="34" cy="34" r={r} fill="none" stroke="#f0edfc" strokeWidth="8" />
      <circle
        cx="34" cy="34" r={r}
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeDasharray={`${filled} ${circ}`}
        strokeLinecap="round"
        transform="rotate(-90 34 34)"
      />
    </svg>
  );
}

export default function UCSCFeedback() {
  const color = '#7c6fcf';

  return (
    <div className="ucsc-fb">
      <div className="ucsc-fb__header">
        <span className="ucsc-fb__tag">Prototype Review</span>
        <p className="ucsc-fb__sub">3 users · 5-point scale · Google Forms</p>
      </div>

      <div className="ucsc-fb__donuts">
        {METRICS.map((m) => (
          <div key={m.label} className="ucsc-fb__donut-cell">
            <div className="ucsc-fb__donut-wrap">
              <Donut pct={m.pct} color={color} />
              <span className="ucsc-fb__donut-val" style={{ color }}>
                {m.tag ?? m.score}
              </span>
            </div>
            <p className="ucsc-fb__donut-label">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="ucsc-fb__quotes">
        {QUOTES.map((q, i) => (
          <blockquote key={i} className="ucsc-fb__quote">
            <span className="ucsc-fb__quote-mark">"</span>{q}"
          </blockquote>
        ))}
      </div>
    </div>
  );
}
