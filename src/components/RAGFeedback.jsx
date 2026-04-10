import './SelfServiceFeedback.css';

export default function RAGFeedback() {
  return (
    <div className="ssf">
      <div className="ssf__header">
        <span className="ssf__tag">Showcase Impressions</span>
        <p className="ssf__sub">Informal reactions gathered during a product showcase · 7+ attendees</p>
      </div>

      <div className="ssf__card" style={{ borderRadius: '10px', border: '1.5px solid var(--border, #e5e7eb)' }}>
        <div className="ssf__card-header">
          <span className="ssf__group-name">General response</span>
          <span className="ssf__count">7+ people</span>
        </div>
        <ul className="ssf__items">
          <li className="ssf__item ssf__item--note">
            <span className="ssf__note-text">The general sentiment was positive — attendees felt the tool would speed up their workflows, appreciated how the knowledge was surfaced in a more intuitive form, and found the metadata generation particularly valuable.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
