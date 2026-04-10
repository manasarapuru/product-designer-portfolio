import './UserPersonas.css';

const PERSONAS = [
  {
    id: 'alex',
    name: 'Alex M.',
    age: 31,
    role: 'Customer Facing Team',
    team: '',
    avatarBg: '#29b6f6',
    avatarShirt: '#1976d2',
    quote: '"I just need the data — I shouldn\'t have to wait 2 days or explain what I need three times."',
    tagline: 'The Requester',
    tagColor: '#1976d2',
    tagBg: '#e3f2fd',
    goals: [
      'Get data quickly to serve clients on time',
      'Work independently without bottlenecks',
      'Trust that the data is accurate and current',
    ],
    painPoints: [
      'Waits 1–3 days for data from Bioinformatics',
      'Has to re-explain context every single request',
      'Receives wrong data due to miscommunication',
      'Feels like a burden raising tickets',
    ],
    tools: ['Salesforce', 'Excel', 'Teams', 'Email'],
    techComfort: 3,
    motivation: 5,
  },
  {
    id: 'sam',
    name: 'Sam R.',
    age: 28,
    role: 'Supporting Team',
    team: '',
    avatarBg: '#ffb74d',
    avatarShirt: '#5c6bc0',
    quote: '"I want to focus on real analysis, not manually pulling the same reports every week for 6 different people."',
    tagline: 'The Responder',
    tagColor: '#5c3d99',
    tagBg: '#f0eeff',
    goals: [
      'Focus time on high-value scientific work',
      'Reduce repetitive manual data pulls',
      'Communicate results without ambiguity',
    ],
    painPoints: [
      'Spends 40% of time on routine data retrieval',
      'Unclear requirements lead to rework',
      'Interruptions disrupt deep analysis work',
      'No single source of truth for requests',
    ],
    tools: ['Python', 'SQL', 'Jupyter', 'Teams'],
    techComfort: 5,
    motivation: 4,
  },
];

export default function UserPersonas() {
  return (
    <div className="up">
      <p className="up__heading">User personas — research synthesis</p>
      <div className="up__grid">
        {PERSONAS.map(p => <PersonaCard key={p.id} p={p} />)}
      </div>
    </div>
  );
}

function PersonaCard({ p }) {
  return (
    <div className="up__card" style={{ '--up-color': p.tagColor }}>
      <div className="up__card-band" />
      <div className="up__card-inner">
        {/* Left: avatar + identity */}
        <div className="up__card-header">
          <PersonaAvatar p={p} />
          <div className="up__card-intro">
            <div className="up__name-row">
              <span className="up__name">{p.name}</span>
              <span className="up__tag" style={{ color: p.tagColor, background: p.tagBg }}>{p.tagline}</span>
            </div>
            <span className="up__role">{p.role}</span>
            {/* <span className="up__team">● {p.team} team · Age {p.age}</span> */}
          </div>
          <blockquote className="up__quote">{p.quote}</blockquote>
        </div>

        {/* Middle: goals + pain side by side */}
        <div className="up__body">
          <div>
            <span className="up__section-label up__section-label--goals">Goals</span>
            <ul className="up__list">
              {p.goals.map((g, i) => (
                <li key={i} className="up__list-item up__list-item--goal">
                  <span className="up__bullet">✓</span>{g}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="up__section-label up__section-label--pain">Pain points</span>
            <ul className="up__list">
              {p.painPoints.map((pp, i) => (
                <li key={i} className="up__list-item up__list-item--pain">
                  <span className="up__bullet">✕</span>{pp}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: tools + meters */}
        {/* <div className="up__footer">
          <div className="up__tools">
            <span className="up__footer-label">Daily tools</span>
            <div className="up__chips">
              {p.tools.map(t => <span key={t} className="up__chip">{t}</span>)}
            </div>
          </div>
          <div className="up__metrics">
            <Meter label="Tech comfort" value={p.techComfort} color={p.tagColor} />
            <Meter label="Motivation" value={p.motivation} color={p.tagColor} />
          </div>
        </div> */}
      </div>
    </div>
  );
}

function Meter({ label, value, color }) {
  return (
    <div className="up__meter">
      <span className="up__footer-label">{label}</span>
      <div className="up__meter-dots">
        {[1,2,3,4,5].map(i => (
          <span
            key={i}
            className="up__meter-dot"
            style={{ background: i <= value ? color : '#e5e7eb' }}
          />
        ))}
      </div>
    </div>
  );
}

function PersonaAvatar({ p }) {
  const isAlex = p.id === 'alex';
  return (
    <svg width="64" height="64" viewBox="0 0 48 48" className="up__avatar" aria-hidden="true">
      <circle cx="24" cy="24" r="24" fill={p.avatarBg} />
      <rect x="20" y="30" width="8" height="5" fill="#fddcae" />
      <ellipse cx="24" cy="44" rx="14" ry="10" fill={p.avatarShirt} />
      <ellipse cx="24" cy="22" rx="10" ry="11" fill="#fddcae" />
      {isAlex ? (
        <g fill="#4e342e">
          <ellipse cx="24" cy="12" rx="10" ry="5" />
          <rect x="14" y="11" width="4" height="8" rx="2" />
          <rect x="30" y="11" width="4" height="8" rx="2" />
          <rect x="14" y="10" width="20" height="4" />
        </g>
      ) : (
        <g fill="#212121">
          <ellipse cx="24" cy="12" rx="10" ry="5" />
          <rect x="14" y="11" width="3" height="12" rx="1.5" />
          <rect x="31" y="11" width="3" height="12" rx="1.5" />
          <rect x="14" y="10" width="20" height="4" />
        </g>
      )}
      <ellipse cx="21" cy="20" rx="1.8" ry="2" fill="#1a1a1a" />
      <ellipse cx="27" cy="20" rx="1.8" ry="2" fill="#1a1a1a" />
      <circle cx="22" cy="19" r="0.7" fill="white" />
      <circle cx="28" cy="19" r="0.7" fill="white" />
      {!isAlex && (
        <g stroke="#555" strokeWidth="1.2" fill="none">
          <rect x="17.5" y="17.5" width="7" height="5" rx="2" />
          <rect x="23.5" y="17.5" width="7" height="5" rx="2" />
          <line x1="14" y1="20" x2="17.5" y2="20" />
          <line x1="30.5" y1="20" x2="34" y2="20" />
          <line x1="24.5" y1="20" x2="23.5" y2="20" />
        </g>
      )}
      <ellipse cx="17" cy="24" rx="2.5" ry="1.5" fill={isAlex ? '#f48fb1' : '#ffcc80'} opacity="0.5" />
      <ellipse cx="31" cy="24" rx="2.5" ry="1.5" fill={isAlex ? '#f48fb1' : '#ffcc80'} opacity="0.5" />
      <path d={isAlex ? 'M20 26 Q24 30 28 26' : 'M21 26 Q24 28.5 27 26'}
        stroke="#c0714a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}
