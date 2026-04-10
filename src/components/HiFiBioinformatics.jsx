import './HiFiBioinformatics.css';


export default function HiFiBioinformatics() {
  return (
    <div className="hbio">
      <p className="hbio__label">Component library — Bioinformatics Data Visualization</p>
      <div className="hbio__grid">

        {/* Dropdown + filter */}
        <div className="hbio__tile">
          <span className="hbio__tag">Dropdown — parameter control</span>
          <div className="hbio__dropdown hbio__dropdown--open">
            <div className="hbio__dropdown-trigger">
              <span>Analysis Type</span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
            <div className="hbio__dropdown-menu">
              <div className="hbio__dropdown-item hbio__dropdown-item--active">Analysis 1</div>
              <div className="hbio__dropdown-item">Analysis 2</div>
              <div className="hbio__dropdown-item">Analysis 3</div>
            </div>
          </div>
          <div className="hbio__dropdown hbio__dropdown--closed">
            <div className="hbio__dropdown-trigger">
              <span>Dataset</span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </div>
          <div className="hbio__dropdown hbio__dropdown--closed">
            <div className="hbio__dropdown-trigger">
              <span>Phenotype</span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </div>
        </div>

        {/* Unlabeled vertical bar chart */}
        <div className="hbio__tile">
          <span className="hbio__tag">Bar chart — expression levels</span>
          <div className="hbio__vbar-wrap">
            <svg viewBox="0 0 100 64" className="hbio__vbar-svg" preserveAspectRatio="none">
              {[
                { x: 5,  h: 32 },
                { x: 17, h: 50 },
                { x: 29, h: 24 },
                { x: 41, h: 58 },
                { x: 53, h: 40 },
                { x: 65, h: 52 },
                { x: 77, h: 18 },
                { x: 89, h: 44 },
              ].map((b, i) => (
                <rect key={i} x={b.x} y={64 - b.h} width="9" height={b.h} rx="1.5"
                  fill={i % 2 === 0 ? '#7ec8c8' : '#a8d5a2'} />
              ))}
            </svg>
            <div className="hbio__vbar-baseline" />
          </div>
        </div>

        {/* Unlabeled line chart */}
        <div className="hbio__tile">
          <span className="hbio__tag">Line chart — trend over time</span>
          <div className="hbio__vbar-wrap">
            <svg viewBox="0 0 100 64" className="hbio__vbar-svg" preserveAspectRatio="none">
              <defs>
                <linearGradient id="hbioFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7ec8c8" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#7ec8c8" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 52 C10 48 18 24 30 26 S48 44 60 20 S78 10 100 16"
                fill="none" stroke="#7ec8c8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M0 52 C10 48 18 24 30 26 S48 44 60 20 S78 10 100 16 V64 H0 Z"
                fill="url(#hbioFill)" />
            </svg>
            <div className="hbio__vbar-baseline" />
          </div>
        </div>

        {/* Data table — wireframe style */}
        <div className="hbio__tile hbio__tile--wide">
          <span className="hbio__tag">Data table — sample results</span>
          <div className="hbio__table-wrap">
            <div className="hbio__wf-table">
              {/* Header row */}
              <div className="hbio__wf-row hbio__wf-row--head">
                {[40, 70, 60, 55, 45].map((w, i) => (
                  <div key={i} className="hbio__wf-cell">
                    <div className="hbio__wf-line hbio__wf-line--header" style={{ width: `${w}%` }} />
                  </div>
                ))}
              </div>
              {/* Data rows */}
              {[[30,65,55,35,38],[28,58,50,32,42],[32,70,52,30,36],[29,62,55,34,38]].map((cols, ri) => (
                <div key={ri} className={`hbio__wf-row${ri % 2 === 0 ? ' hbio__wf-row--alt' : ''}`}>
                  {cols.map((w, ci) => (
                    <div key={ci} className="hbio__wf-cell">
                      {ci === 4
                        ? <div className={`hbio__wf-badge hbio__wf-badge--${['high','mid','low','high'][ri]}`} />
                        : <div className="hbio__wf-line" style={{ width: `${w}%` }} />
                      }
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
