import { useEffect, useState } from 'react';
import './RAGProblemAnimation.css';

const ROWS = [
  { id: 'DS-0041', cols: ['???', '???', '???', '???'] },
  { id: 'DS-0042', cols: ['???', '???', '???', '???'] },
  { id: 'DS-0043', cols: ['???', '???', '???', '???'] },
  { id: 'DS-0044', cols: ['???', '???', '???', '???'] },
  { id: 'DS-0045', cols: ['???', '???', '???', '???'] },
];

const BUBBLES = [
  'What is this dataset even for?',
  'No description anywhere…',
  'Which column is the target variable?',
  'Is this data still current?',
];

export default function RAGProblemAnimation() {
  const [bubbleIdx, setBubbleIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setBubbleIdx(i => (i + 1) % BUBBLES.length);
        setVisible(true);
      }, 300);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ragp">
      <p className="ragp__eyebrow">The problem</p>

      {/* Raw dataset — no metadata */}
      <div className="ragp__table-wrap">
        <div className="ragp__table-header">
          <span className="ragp__table-title">dataset_export_final_v3.csv</span>
          <span className="ragp__table-meta">12,483 rows · no description · no tags</span>
        </div>
        <table className="ragp__table">
          <thead>
            <tr>
              <th>ID</th>
              <th>col_A</th>
              <th>col_B</th>
              <th>col_C</th>
              <th>col_D</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map(row => (
              <tr key={row.id}>
                <td className="ragp__id">{row.id}</td>
                {row.cols.map((c, i) => (
                  <td key={i} className="ragp__unknown">{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="ragp__table-fade" />
      </div>

      {/* Confused user bubble */}
      <div className={`ragp__bubble-wrap${visible ? ' ragp__bubble-wrap--visible' : ''}`}>
        <div className="ragp__avatar">👤</div>
        <div className="ragp__bubble">
          <span className="ragp__bubble-dots">
            <span /><span /><span />
          </span>
          <span className="ragp__bubble-text">{BUBBLES[bubbleIdx]}</span>
        </div>
      </div>

      <p className="ragp__caption">Without metadata, structure, or context — data sits unused.</p>
    </div>
  );
}
