import './DesignSystemMap.css';

export default function DesignSystemMap({ data }) {
  if (!data) return null;

  const layers = [
    { id: 'strategy',   label: 'Design Strategy',      items: data.designStrategyPoints, icon: <IcoTarget /> },
    { id: 'patterns',   label: 'Interaction Patterns',  items: data.interactionPatterns,  icon: <IcoCursor /> },
    { id: 'components', label: 'Components',            items: data.components,           icon: <IcoBox /> },
    { id: 'foundations',label: 'Foundations',           items: data.foundations,          icon: <IcoLayers /> },
  ];

  return (
    <div className="dsm">
      <div className="dsm__header">
        <span className="dsm__strategy-tag">{data.designStrategy}</span>
        <p className="dsm__context">{data.systemContext}</p>
      </div>

      <table className="dsm__table">
        <thead>
          <tr>
            <th>Layer</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {layers.map((layer) => (
            <tr key={layer.id} className={`dsm__row--${layer.id}`}>
              <td>
                <div className="dsm__cell-label">
                  <span className="dsm__layer-icon">{layer.icon}</span>
                  <span className="dsm__layer-label">{layer.label}</span>
                </div>
              </td>
              <td className="dsm__cell-items">
                <ul className="dsm__item-list">
                  {layer.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {data.outcome && (
        <div className="dsm__outcome">
          <span className="dsm__outcome-label">Outcome</span>
          <p className="dsm__outcome-text">{data.outcome}</p>
        </div>
      )}
    </div>
  );
}

function IcoTarget() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  );
}
function IcoCursor() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l7 18 3-7 7-3L4 4z"/>
    </svg>
  );
}
function IcoBox() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
    </svg>
  );
}
function IcoLayers() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
    </svg>
  );
}
