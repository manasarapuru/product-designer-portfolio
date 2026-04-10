import './HiFiPoster.css';

const STEPS = [
  { num: 1, label: 'Research question',    done: true  },
  { num: 2, label: 'Methodology',          done: true  },
  { num: 3, label: 'Key findings',         done: false, active: true },
  { num: 4, label: 'Impact & takeaways',   done: false },
];

export default function HiFiPoster() {
  return (
    <div className="hpos">
      <p className="hpos__label">Component library — AI Cognitive Assistant for Scientific Posters</p>
      <div className="hpos__grid">

        {/* Step progress rail */}
        <div className="hpos__tile hpos__tile--wide">
          <span className="hpos__tag">Step progress rail</span>
          <div className="hpos__stepper">
            {STEPS.map((s, i) => (
              <div key={s.num} className="hpos__step-wrap">
                <div className={`hpos__step${s.done ? ' hpos__step--done' : s.active ? ' hpos__step--active' : ''}`}>
                  {s.done
                    ? <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2 8 6 12 14 4"/></svg>
                    : <span>{s.num}</span>
                  }
                </div>
                <span className={`hpos__step-label${s.active ? ' hpos__step-label--active' : s.done ? ' hpos__step-label--done' : ''}`}>{s.label}</span>
                {i < STEPS.length - 1 && (
                  <div className={`hpos__step-line${s.done ? ' hpos__step-line--done' : ''}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Structured input section */}
        <div className="hpos__tile">
          <span className="hpos__tag">Guided input section</span>
          <div className="hpos__section-card hpos__section-card--active">
            <div className="hpos__section-header">
              <span className="hpos__section-num">3</span>
              <div>
                <span className="hpos__section-title">Key findings</span>
                <span className="hpos__section-hint">What did you discover? State your 2–3 most important results.</span>
              </div>
            </div>
            <textarea
              className="hpos__textarea"
              readOnly
              value="APOE4/4 carriers showed 2.8× elevated expression in hippocampal tissue compared to APOE3/3 controls (p < 0.001)."
            />
            <div className="hpos__section-footer">
              <span className="hpos__char-count">87 / 280</span>
              <button className="hpos__btn hpos__btn--primary">Continue →</button>
            </div>
          </div>
        </div>

        {/* Structured output preview */}
        <div className="hpos__tile">
          <span className="hpos__tag">Output preview card</span>
          <div className="hpos__preview">
            <div className="hpos__preview-header">
              <span className="hpos__preview-label">Your poster summary</span>
              <span className="hpos__preview-badge">AI-structured</span>
            </div>
            <div className="hpos__preview-section">
              <span className="hpos__preview-section-title">Research question</span>
              <p>How does APOE genotype influence gene expression in Alzheimer's-relevant brain regions?</p>
            </div>
            <div className="hpos__preview-section">
              <span className="hpos__preview-section-title">Methodology</span>
              <p>RNA-seq across 5 tissue types, 200 samples, compared across 3 APOE genotypes.</p>
            </div>
            <div className="hpos__preview-section hpos__preview-section--pending">
              <span className="hpos__preview-section-title">Key findings</span>
              <p className="hpos__pending-text">Completing step 3…</p>
            </div>
            <button className="hpos__btn hpos__btn--ghost hpos__btn--full">Export as PDF</button>
          </div>
        </div>

      </div>
    </div>
  );
}
