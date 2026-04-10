import './APOEDesignContext.css';

const PAIN_POINTS = [
  'Running the same analysis repeatedly across different genes and conditions',
  'No way to compare across datasets — results lived in separate spreadsheets',
  'No visualizations existed to surface trends — patterns in the data were invisible',
];

const GOALS = [
  'Enable lab members to quickly and intuitively access gene information',
  'Surface previously hidden data and reveal connections not apparent in raw files',
  'Transform fragmented, static datasets into a cohesive, explorable experience',
];

export default function APOEDesignContext() {
  return (
    <div className="adc">
      <div className="adc__layout">

        {/* Left — professor session */}
        <div className="adc__col">
          <div className="adc__col-header">
            <div className="adc__avatar">
              <ProfIcon />
            </div>
            <div>
              <span className="adc__col-title">Professor interview</span>
              <span className="adc__col-sub">Pain points surfaced</span>
            </div>
          </div>
          <div className="adc__items">
            {PAIN_POINTS.map((p, i) => (
              <div key={i} className="adc__pain-item">
                <span className="adc__pain-dot">✕</span>
                <span className="adc__pain-text">{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="adc__arrow">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M4 14h20M16 7l8 7-8 7" stroke="#c8c3b8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="adc__arrow-label">defined</span>
        </div>

        {/* Right — design goals */}
        <div className="adc__col">
          <div className="adc__col-header">
            <div className="adc__avatar adc__avatar--req">
              <ReqIcon />
            </div>
            <div>
              <span className="adc__col-title">Design goals</span>
              <span className="adc__col-sub">Pain points → goals</span>
            </div>
          </div>
          <div className="adc__items">
            {GOALS.map((g, i) => (
              <div key={i} className="adc__req-item">
                <span className="adc__req-num">{i + 1}</span>
                <span className="adc__pain-text">{g}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

function ProfIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill="#f0ebe0"/>
      <ellipse cx="20" cy="17" rx="7" ry="7.5" fill="#d4b896"/>
      <ellipse cx="20" cy="34" rx="12" ry="9" fill="#8A857E"/>
      <rect x="12" y="15" width="6" height="4" rx="2" fill="none" stroke="#5a4e3e" strokeWidth="1.2"/>
      <rect x="22" y="15" width="6" height="4" rx="2" fill="none" stroke="#5a4e3e" strokeWidth="1.2"/>
      <line x1="18" y1="17" x2="22" y2="17" stroke="#5a4e3e" strokeWidth="1.2"/>
    </svg>
  );
}

function ReqIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill="#d4f5f3"/>
      <rect x="12" y="10" width="16" height="20" rx="2" fill="white" stroke="#4ecdc4" strokeWidth="1.5"/>
      <line x1="15" y1="15" x2="25" y2="15" stroke="#4ecdc4" strokeWidth="1.2"/>
      <line x1="15" y1="19" x2="25" y2="19" stroke="#c8c3b8" strokeWidth="1.2"/>
      <line x1="15" y1="23" x2="21" y2="23" stroke="#c8c3b8" strokeWidth="1.2"/>
      <polyline points="14,26 17,29 23,22" stroke="#4ecdc4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
