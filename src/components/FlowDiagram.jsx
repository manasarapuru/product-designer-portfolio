import './FlowDiagram.css';

const STEPS = [
  {
    id: 'input',
    phase: 'Input',
    color: '#1976d2',
    //color: '#7c3aed',
    //bg: '#e3f2fd',
    bg: '#f5f3ff',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
        <polyline points="17 8 12 3 7 8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
    ),
    actions: ['Upload CSV file', 'Submit request'],
    actor: 'Alex',
    actorColor: '#1976d2',
    
  },
  {
    id: 'process',
    phase: 'Processing',
    color: '#16a34a',
    bg: '#f5f3ff',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    actions: ['Validate input', 'Run Workflows', 'Format results'],
    actor: 'System',
    actorColor: '#16a34a',
    //actorColor: '#1976d2',
  },
  {
    id: 'output',
    phase: 'Output',
    //color: '#16a34a',
    color: '#1976d2',
    //color: '#7c3aed',
    //bg: '#f0fdf4',
    bg: '#f5f3ff',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    ),
    actions: ['Results ready', 'Download CSV'],
    actor: 'Alex',
    //actorColor: '#16a34a',
    actorColor: '#1976d2',
  },
];

/* const METRICS = [
  { label: 'Before', value: '2–3 days', sub: 'manual handoff', color: '#dc2626', bg: '#fff0f0' },
  { label: 'After',  value: '< 10 sec',  sub: 'self-service',   color: '#16a34a', bg: '#f0fdf4' },
]; */

export default function FlowDiagram() {
  return (
    <div className="fd">
      <p className="fd__heading"></p>

      {/* Main flow */}
      <div className="fd__flow">
        {STEPS.map((step, i) => (
          <div key={step.id} className="fd__step-wrap">
            <div className="fd__step" style={{ '--step-color': step.color, '--step-bg': step.bg }}>
              {/* Icon circle */}
              <div className="fd__icon-wrap">
                {step.icon}
              </div>

              {/* Phase label */}
              <span className="fd__phase">{step.phase}</span>

              {/* Actor badge */}
              <span className="fd__actor" style={{ color: step.actorColor, background: step.bg }}>
                {step.actor}
              </span>

              {/* Actions */}
              <ul className="fd__actions">
                {step.actions.map((a, j) => (
                  <li key={j} className="fd__action">
                    <span className="fd__action-num">{j + 1}</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {/* Arrow between steps */}
            {i < STEPS.length - 1 && (
              <div className="fd__arrow">
                <div className="fd__arrow-line" />
                <svg width="8" height="12" viewBox="0 0 8 12" className="fd__arrow-head">
                  <path d="M0 0 L8 6 L0 12" fill="none" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Before / After */}
      {/* <div className="fd__compare">
        <span className="fd__compare-label">Impact</span>
        <div className="fd__compare-cards">
          {METRICS.map(m => (
            <div key={m.label} className="fd__compare-card" style={{ background: m.bg, borderColor: m.color + '33' }}>
              <span className="fd__compare-tag" style={{ color: m.color }}>{m.label}</span>
              <span className="fd__compare-value" style={{ color: m.color }}>{m.value}</span>
              <span className="fd__compare-sub">{m.sub}</span>
            </div>
          ))}
          <div className="fd__compare-arrow">→</div>
        </div>
      </div> */}

      {/* System note */}
      <p className="fd__note">
        No Bioinformatics team member involved after initial setup — the system handles retrieval, processing, and delivery autonomously.
      </p>
    </div>
  );
}
