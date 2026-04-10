import './APOEUserFlows.css';

const STEPS = [
  {
    id: 'gene',
    phase: 'Gene Entry',
    color: '#7c3aed',
    bg: '#f5f3ff',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    actor: 'Researcher',
    actions: ['Search by gene name'],
  },
  {
    id: 'analysis',
    phase: 'Analysis Type',
    color: '#0284c7',
    bg: '#f0f9ff',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6"/>
        <line x1="8" y1="12" x2="21" y2="12"/>
        <line x1="8" y1="18" x2="21" y2="18"/>
        <line x1="3" y1="6" x2="3.01" y2="6"/>
        <line x1="3" y1="12" x2="3.01" y2="12"/>
        <line x1="3" y1="18" x2="3.01" y2="18"/>
      </svg>
    ),
    actor: 'Researcher',
    actions: ['Choose analysis type'],
  },
  {
    id: 'configure',
    phase: 'Configure Options',
    color: '#0f766e',
    bg: '#f0fdfa',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="6" x2="20" y2="6"/>
        <line x1="4" y1="12" x2="20" y2="12"/>
        <line x1="4" y1="18" x2="20" y2="18"/>
        <circle cx="8" cy="6" r="2" fill="currentColor" stroke="none"/>
        <circle cx="16" cy="12" r="2" fill="currentColor" stroke="none"/>
        <circle cx="10" cy="18" r="2" fill="currentColor" stroke="none"/>
      </svg>
    ),
    actor: 'Researcher',
    actions: ['Additional parameters shown dynamically based on analysis type'],
    note: 'dynamic',
  },
  {
    id: 'results',
    phase: 'Explore Results',
    color: '#16a34a',
    bg: '#f0fdf4',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    actor: 'Platform',
    actions: ['Visualization renders instantly', 'Raw data table alongside charts'],
  },
];

export default function APOEUserFlows() {
  return (
    <div className="auf">

      <div className="auf__flow">
        {STEPS.map((step, i) => (
          <div key={step.id} className="auf__step-wrap">
            <div className="auf__step" style={{ '--step-color': step.color, '--step-bg': step.bg }}>
              <div className="auf__icon-wrap">
                {step.icon}
              </div>
              <span className="auf__phase">{step.phase}</span>
              <span className="auf__actor" style={{ color: step.color, background: step.bg }}>
                {step.actor}
              </span>
              <ul className="auf__actions">
                {step.actions.map((a, j) => (
                  <li key={j} className="auf__action">
                    <span className="auf__action-num">{j + 1}</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {i < STEPS.length - 1 && (
              <div className="auf__arrow">
                <div className="auf__arrow-line" />
                <svg width="8" height="12" viewBox="0 0 8 12" className="auf__arrow-head">
                  <path d="M0 0 L8 6 L0 12" fill="none" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="auf__note">
        Parameter options update dynamically — once an analysis type is selected, only relevant inputs are shown.
      </p>
    </div>
  );
}
