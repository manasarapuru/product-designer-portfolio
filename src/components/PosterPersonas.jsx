import './PosterPersonas.css';

const PERSONAS = [
  {
    role: 'The Presenter',
    type: 'Author',
    description: 'A PhD student or postdoc presenting original research at a conference poster session.',
    goals: [
      'Communicate months of work clearly to a mixed audience',
      'Attract the attention of relevant peers and potential collaborators',
      'Leave an impression that outlasts the 90-minute session',
    ],
    painPoints: [
      'No way to know if anyone actually understood the poster',
      'Spends the session re-explaining the same basics to each person',
      'The poster disappears after the conference with no lasting reach',
      'Hard to calibrate how much detail to include for a mixed audience',
    ],
    color: '#7c3aed',
    soft: '#f3e8ff',
    icon: <PresenterIcon />,
  },
  {
    role: 'The Attendee',
    type: 'Conference-goer',
    description: 'A researcher navigating a hall of 80+ posters with limited time and domain breadth.',
    goals: [
      'Quickly identify which posters are worth a deeper conversation',
      'Understand research outside their immediate specialisation',
      'Take something away from posters even when the presenter is busy',
    ],
    painPoints: [
      'Dense posters with no entry point for non-specialists',
      'Two minutes is not enough to read and evaluate a full poster',
      'Cannot revisit a poster or its content after leaving the session',
      'Presenter is often mid-conversation and not immediately available',
    ],
    color: '#ff6b6b',
    soft: '#fff0f0',
    icon: <AttendeeIcon />,
  },
];

export default function PosterPersonas() {
  return (
    <div className="pp">
      <div className="pp__grid">
        {PERSONAS.map((p) => (
          <div key={p.role} className="pp__card" style={{ '--pp-color': p.color, '--pp-soft': p.soft }}>
            <div className="pp__card-header">
              <div className="pp__avatar">{p.icon}</div>
              <div>
                <span className="pp__type">{p.type}</span>
                <h3 className="pp__role">{p.role}</h3>
              </div>
            </div>
            <p className="pp__desc">{p.description}</p>

            <div className="pp__section">
              <span className="pp__section-label pp__section-label--goals">Goals</span>
              <ul className="pp__list">
                {p.goals.map((g, i) => (
                  <li key={i} className="pp__item pp__item--goal">
                    <span className="pp__bullet">✓</span>{g}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pp__section">
              <span className="pp__section-label pp__section-label--pain">Pain points</span>
              <ul className="pp__list">
                {p.painPoints.map((pt, i) => (
                  <li key={i} className="pp__item pp__item--pain">
                    <span className="pp__bullet">✕</span>{pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PresenterIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill="#f3e8ff" />
      {/* Head */}
      <ellipse cx="20" cy="16" rx="7" ry="7.5" fill="#fddcae" />
      {/* Hair */}
      <ellipse cx="20" cy="10" rx="7.5" ry="4" fill="#4e342e" />
      <ellipse cx="13" cy="13" rx="2" ry="3.5" fill="#4e342e" />
      <ellipse cx="27" cy="13" rx="2" ry="3.5" fill="#4e342e" />
      {/* Eyes */}
      <circle cx="17.5" cy="15.5" r="1.2" fill="#2c1a0e" />
      <circle cx="22.5" cy="15.5" r="1.2" fill="#2c1a0e" />
      <circle cx="18" cy="15" r="0.5" fill="white" />
      <circle cx="23" cy="15" r="0.5" fill="white" />
      {/* Body */}
      <ellipse cx="20" cy="33" rx="11" ry="8" fill="#7c3aed" />
      {/* Presentation pointer */}
      <line x1="26" y1="22" x2="31" y2="18" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="31.5" cy="17.5" r="1" fill="#7c3aed" />
    </svg>
  );
}

function AttendeeIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill="#fff0f0" />
      {/* Head */}
      <ellipse cx="20" cy="16" rx="7" ry="7.5" fill="#fddcae" />
      {/* Hair */}
      <ellipse cx="20" cy="10" rx="7.5" ry="4.5" fill="#212121" />
      <rect x="13" y="10" width="3" height="10" rx="1.5" fill="#212121" />
      <rect x="24" y="10" width="3" height="10" rx="1.5" fill="#212121" />
      {/* Glasses */}
      <rect x="15" y="14" width="5.5" height="4" rx="1.8" fill="none" stroke="#555" strokeWidth="1" />
      <rect x="21.5" y="14" width="5.5" height="4" rx="1.8" fill="none" stroke="#555" strokeWidth="1" />
      <line x1="20.5" y1="16" x2="21.5" y2="16" stroke="#555" strokeWidth="1" />
      <line x1="12" y1="16" x2="15" y2="16" stroke="#555" strokeWidth="1" />
      <line x1="27" y1="16" x2="30" y2="16" stroke="#555" strokeWidth="1" />
      {/* Eyes behind glasses */}
      <circle cx="17.8" cy="16" r="0.9" fill="#2c1a0e" />
      <circle cx="24.2" cy="16" r="0.9" fill="#2c1a0e" />
      {/* Body */}
      <ellipse cx="20" cy="33" rx="11" ry="8" fill="#ff6b6b" />
      {/* Lanyard badge */}
      <line x1="20" y1="24" x2="20" y2="28" stroke="#ccc" strokeWidth="1" />
      <rect x="17.5" y="28" width="5" height="3.5" rx="0.8" fill="white" stroke="#ddd" strokeWidth="0.5" />
    </svg>
  );
}
