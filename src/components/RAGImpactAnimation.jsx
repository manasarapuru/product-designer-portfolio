import { useEffect, useState } from 'react';
import './RAGImpactAnimation.css';

const ENRICHED_ROWS = [
  { id: 'DS-0041', name: 'Metabolomics Q1', category: 'Metabolomics', tags: ['glucose', 'serum'], status: 'enriched' },
  { id: 'DS-0042', name: 'Proteomics Panel', category: 'Proteomics',  tags: ['plasma', 'LC-MS'],  status: 'enriched' },
  { id: 'DS-0043', name: 'Cell Viability',  category: 'Cell Biology', tags: ['assay', '96-well'], status: 'enriched' },
];

const CONVERSATION = [
  {
    user: 'Which datasets mention glucose?',
    ai: 'Found 3 datasets. Top match: Metabolomics Q1 — 12,483 rows of serum glucose concentrations across patient cohorts.',
    delay: 0,
  },
  {
    user: 'What columns does it have?',
    ai: 'sample_id, timepoint, glucose_mM, insulin_uIU, cohort. AI-verified schema — last updated 2 weeks ago.',
    delay: 2800,
  },
];

export default function RAGImpactAnimation() {
  const [step, setStep] = useState(0);
  const [typing, setTyping] = useState(false);
  const [enrichStep, setEnrichStep] = useState(0);

  // Stagger row enrichment on mount
  useEffect(() => {
    const timers = ENRICHED_ROWS.map((_, i) =>
      setTimeout(() => setEnrichStep(i + 1), i * 400 + 300)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  // Cycle conversation
  useEffect(() => {
    const run = () => {
      setStep(0);
      CONVERSATION.forEach((c, i) => {
        setTimeout(() => {
          setTyping(true);
          setTimeout(() => {
            setTyping(false);
            setStep(i + 1);
          }, 900);
        }, c.delay + (i > 0 ? 1200 : 0));
      });
    };
    run();
    const interval = setInterval(run, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ragi">
      <p className="ragi__eyebrow">The outcome</p>

      <div className="ragi__layout">
        {/* Left: enriched dataset */}
        <div className="ragi__dataset">
          <div className="ragi__dataset-header">
            <span className="ragi__dataset-title">dataset_export_final_v3.csv</span>
            <span className="ragi__ai-badge">AI enriched</span>
          </div>
          <div className="ragi__rows">
            {ENRICHED_ROWS.map((row, i) => (
              <div
                key={row.id}
                className={`ragi__row${i < enrichStep ? ' ragi__row--visible' : ''}`}
              >
                <div className="ragi__row-top">
                  <span className="ragi__row-id">{row.id}</span>
                  <span className="ragi__row-name">{row.name}</span>
                  <span className="ragi__row-cat">{row.category}</span>
                </div>
                <div className="ragi__row-tags">
                  {row.tags.map(t => (
                    <span key={t} className="ragi__tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: conversation */}
        <div className="ragi__chat">
          <div className="ragi__chat-header">
            <span className="ragi__chat-title">Ask your data</span>
          </div>
          <div className="ragi__messages">
            {CONVERSATION.slice(0, step).map((c, i) => (
              <div key={i} className="ragi__pair">
                <div className="ragi__msg ragi__msg--user">{c.user}</div>
                <div className="ragi__msg ragi__msg--ai">
                  <span className="ragi__ai-dot">AI</span>
                  <span>{c.ai}</span>
                </div>
              </div>
            ))}
            {typing && (
              <div className="ragi__typing">
                <span className="ragi__ai-dot">AI</span>
                <span className="ragi__dots"><span /><span /><span /></span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="ragi__stats">
        <div className="ragi__stat">
          <span className="ragi__stat-val">3×</span>
          <span className="ragi__stat-label">faster comprehension</span>
        </div>
        <div className="ragi__stat">
          <span className="ragi__stat-val">80%</span>
          <span className="ragi__stat-label">less manual tagging</span>
        </div>
        <div className="ragi__stat">
          <span className="ragi__stat-val">0</span>
          <span className="ragi__stat-label">undocumented datasets</span>
        </div>
      </div>
    </div>
  );
}
