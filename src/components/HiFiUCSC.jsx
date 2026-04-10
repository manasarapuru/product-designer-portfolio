import './HiFiUCSC.css';

const TRACKS = [
  { label: 'GENCODE v44',      type: 'Gene',    on: true,  color: '#1a6b8a' },
  { label: 'ClinVar variants', type: 'Variant', on: true,  color: '#a855f7' },
  { label: 'dbSNP 155',        type: 'SNP',     on: false, color: '#6b7280' },
  { label: 'ENCODE ATAC-seq',  type: 'Signal',  on: true,  color: '#0891b2' },
  { label: 'RepeatMasker',     type: 'Repeat',  on: false, color: '#6b7280' },
];

export default function HiFiUCSC() {
  return (
    <div className="hucsc">
      <p className="hucsc__label">Component library — UCSC Genome Browser Reimagined</p>
      <div className="hucsc__grid">

        {/* AI search bar */}
        <div className="hucsc__tile hucsc__tile--wide">
          <span className="hucsc__tag">AI-powered search</span>
          <div className="hucsc__search-bar">
            <span className="hucsc__search-ai-badge">AI</span>
            <span className="hucsc__search-text">Show me BRCA1 variants in chromosome 17…</span>
            <button className="hucsc__search-btn">Search</button>
          </div>
          <div className="hucsc__suggestions">
            <span className="hucsc__suggestion-label">Suggestions</span>
            <div className="hucsc__suggestion-chips">
              <button className="hucsc__chip">chr17:43,044,295–43,125,364</button>
              <button className="hucsc__chip">BRCA1 exons only</button>
              <button className="hucsc__chip">Pathogenic variants</button>
              <button className="hucsc__chip">Compare with TP53</button>
            </div>
          </div>
        </div>

        {/* Track toggles */}
        <div className="hucsc__tile">
          <span className="hucsc__tag">Track toggles</span>
          <div className="hucsc__tracks">
            {TRACKS.map(track => (
              <div key={track.label} className="hucsc__track-row">
                <div className="hucsc__track-info">
                  <span className={`hucsc__track-dot`} style={{ background: track.on ? track.color : '#d1d5db' }} />
                  <div className="hucsc__track-text">
                    <span className="hucsc__track-name">{track.label}</span>
                    <span className="hucsc__track-type">{track.type}</span>
                  </div>
                </div>
                <div className={`hucsc__toggle${track.on ? ' hucsc__toggle--on' : ''}`}>
                  <div className="hucsc__toggle-thumb" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expandable panel */}
        <div className="hucsc__tile">
          <span className="hucsc__tag">Expandable resource panel</span>
          <div className="hucsc__panel hucsc__panel--open">
            <div className="hucsc__panel-header">
              <span className="hucsc__panel-title">BRCA1 — chr17:43,044,295</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round"><polyline points="18 15 12 9 6 15"/></svg>
            </div>
            <div className="hucsc__panel-body">
              <div className="hucsc__panel-row"><span>Type</span><span>Protein-coding gene</span></div>
              <div className="hucsc__panel-row"><span>Strand</span><span className="hucsc__mono">–</span></div>
              <div className="hucsc__panel-row"><span>Transcript</span><span className="hucsc__mono">ENST00000357654</span></div>
              <div className="hucsc__panel-row"><span>OMIM</span><span className="hucsc__link">113705</span></div>
              <div className="hucsc__panel-actions">
                <button className="hucsc__action-btn">View all transcripts</button>
                <button className="hucsc__action-btn hucsc__action-btn--ghost">Export region</button>
              </div>
            </div>
          </div>
          <div className="hucsc__panel">
            <div className="hucsc__panel-header">
              <span className="hucsc__panel-title">ClinVar — 3 variants in view</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
