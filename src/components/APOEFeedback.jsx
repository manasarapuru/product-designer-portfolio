import './SelfServiceFeedback.css';

export default function APOEFeedback() {
  return (
    <div className="ssf">
      <div className="ssf__header">
        <span className="ssf__tag">Lab Requirements & Reception</span>
        <p className="ssf__sub">Professor · Boston University · on behalf of the research group</p>
      </div>

      <div className="ssf__card" style={{ borderRadius: '10px', border: '1.5px solid var(--border, #e5e7eb)' }}>
        <div className="ssf__card-header">
          <span className="ssf__group-name">What was asked for</span>
          <span className="ssf__count">2 people</span>
        </div>
        <ul className="ssf__items">
          <li className="ssf__item ssf__item--note">
            <span className="ssf__note-text">The lab needed a way to explore the dataset that didn't require going back to the researchers who built it. The requirements were centred on intuitive knowledge presentation, simplified data exploration, and the ability to surface insights directly from the platform.</span>
          </li>
        </ul>
      </div>

      <div className="ssf__card" style={{ borderRadius: '10px', border: '1.5px solid var(--border, #e5e7eb)' }}>
        <div className="ssf__card-header">
          <span className="ssf__group-name">How it was received</span>
        </div>
        <ul className="ssf__items">
          <li className="ssf__item ssf__item--note">
            <span className="ssf__note-text">The delivered platform met the stated requirements. The impression was that it achieved what was asked — making the data accessible and interpretable without additional support from the research team.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
