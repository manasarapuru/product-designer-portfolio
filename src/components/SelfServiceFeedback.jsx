import './SelfServiceFeedback.css';

const GROUPS = [
  {
    name: 'Customer-Facing Team',
    count: '3+',
    items: [
      { q: 'Does this tool increase efficiency on your end?', a: 'Yes' },
      { q: 'Do you think this tool is needed — do you see value in it?', a: 'Yes' },
      { q: 'Did it tailor to your needs?', a: 'Yes' },
      { q: 'Was it easy to learn?', a: 'Yes' },
    ],
  },
  {
    name: 'Bioinformaticians',
    count: '5+',
    items: [
      { q: 'Did this streamline your work?', a: 'Yes' },
      { q: 'Did you feel it was necessary?', a: 'Yes' },
      { q: 'Was the cross-team interaction necessary?', a: 'Could have been avoided — but no one did it before, so this was very useful', nuanced: true },
    ],
  },
  {
    name: 'Subject Matter Experts',
    count: '3+',
    items: [
      { q: 'Is this a useful tool?', a: 'Yes' },
      { q: 'Did it implement your considerations?', a: 'Yes' },
    ],
  },
  {
    name: 'PM, R&D, and Stakeholders',
    count: '5+',
    items: [
      { q: 'Was this in scope of business requirements?', a: 'Yes' },
      { q: 'Did it bring value to operations?', a: 'Yes' },
      { q: 'Scope exceeded — could be used for other internal purposes too', a: '', note: true },
    ],
  },
];

export default function SelfServiceFeedback() {
  return (
    <div className="ssf">
      <div className="ssf__header">
        <span className="ssf__tag">Stakeholder Feedback</span>
        <p className="ssf__sub">General consensus gathered across groups with visibility into the project</p>
      </div>

      <div className="ssf__grid">
        {GROUPS.map((g) => (
          <div key={g.name} className="ssf__card">
            <div className="ssf__card-header">
              <span className="ssf__group-name">{g.name}</span>
              <span className="ssf__count">{g.count} people</span>
            </div>
            <ul className="ssf__items">
              {g.items.map((item, i) => (
                <li key={i} className={`ssf__item${item.nuanced ? ' ssf__item--nuanced' : ''}${item.note ? ' ssf__item--note' : ''}`}>
                  {item.note ? (
                    <span className="ssf__note-text">{item.q}</span>
                  ) : (
                    <>
                      <span className="ssf__q">{item.q}</span>
                      <span className={`ssf__a${item.nuanced ? ' ssf__a--nuanced' : ''}`}>
                        {item.nuanced ? <NuancedIcon /> : <CheckIcon />}
                        {item.a}
                      </span>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function NuancedIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}
