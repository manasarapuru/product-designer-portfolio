import './PosterWireframes.css';

export default function PosterFlowDiagram() {
  return (
    <div className="pw__flow">
      <div className="pw__flow-step">
        <div className="pw__flow-num">1</div>
        <span>Author fills in research details</span>
      </div>
      <div className="pw__flow-arrow">→</div>
      <div className="pw__flow-step">
        <div className="pw__flow-num">2</div>
        <span>AI generates structured artifact</span>
      </div>
      <div className="pw__flow-arrow">→</div>
      <div className="pw__flow-step">
        <div className="pw__flow-num">3</div>
        <span>QR code printed on poster</span>
      </div>
      <div className="pw__flow-arrow">→</div>
      <div className="pw__flow-step">
        <div className="pw__flow-num">4</div>
        <span>Attendee scans and reads</span>
      </div>
    </div>
  );
}
