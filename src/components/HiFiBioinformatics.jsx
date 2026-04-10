import './HiFiBioinformatics.css';

const TABLE_ROWS = [
  { id: 'S-001', tissue: 'Hippocampus', genotype: 'APOE4/4', expression: '2.84', status: 'high' },
  { id: 'S-002', tissue: 'Cortex',      genotype: 'APOE3/4', expression: '1.62', status: 'mid' },
  { id: 'S-003', tissue: 'Cerebellum',  genotype: 'APOE3/3', expression: '0.91', status: 'low' },
  { id: 'S-004', tissue: 'Brainstem',   genotype: 'APOE4/4', expression: '2.31', status: 'high' },
];

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

        {/* Data table */}
        <div className="hbio__tile hbio__tile--wide">
          <span className="hbio__tag">Data table — sample results</span>
          <div className="hbio__table-wrap">
            <table className="hbio__table">
              <thead>
                <tr>
                  <th>Sample ID</th>
                  <th>Tissue</th>
                  <th>Genotype</th>
                  <th>Expression</th>
                  <th>Level</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(row => (
                  <tr key={row.id}>
                    <td className="hbio__id">{row.id}</td>
                    <td>{row.tissue}</td>
                    <td className="hbio__mono">{row.genotype}</td>
                    <td className="hbio__num">{row.expression}</td>
                    <td><span className={`hbio__badge hbio__badge--${row.status}`}>{row.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
