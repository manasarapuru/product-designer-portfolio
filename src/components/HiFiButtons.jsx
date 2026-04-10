import './HiFiButtons.css';

export default function HiFiButtons() {
  return (
    <div className="stl">
      <p className="stl__caption">Streamlit component library — key interactions</p>
      <div className="stl__grid">

        {/* st.file_uploader */}
        <Tile tag="st.file_uploader">
          <div className="stl__uploader">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#adb5bd" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/>
              <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/>
            </svg>
            <p className="stl__uploader-text">Drag and drop file here</p>
            <p className="stl__uploader-hint">Limit 200MB · CSV, XLSX</p>
            <button className="stl__btn stl__btn--outline stl__btn--sm">Browse files</button>
          </div>
          <div className="stl__file-chip">
            <IcoCsv />
            <div className="stl__file-info">
              <span className="stl__file-name">task_details_Q2.csv</span>
              <span className="stl__file-meta">14.2 KB · Ready</span>
            </div>
            <span className="stl__file-check">✓</span>
          </div>
        </Tile>

        {/* st.button — states */}
        <Tile tag="st.button — states">
          <div className="stl__state-stack">
            <button className="stl__btn stl__btn--primary">Run analysis</button>
            <button className="stl__btn stl__btn--primary stl__btn--loading">
              <span className="stl__spinner" /> Running…
            </button>
            <button className="stl__btn stl__btn--primary" disabled>Run analysis</button>
          </div>
          <div className="stl__state-labels">
            <span>Default</span><span>Processing</span><span>Disabled</span>
          </div>
        </Tile>

        {/* st.success + st.download_button */}
        <Tile tag="st.success + st.download_button" wide>
          <div className="stl__success-box">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="2 8 6 12 14 4"/></svg>
            Analysis complete
          </div>
          <button className="stl__btn stl__btn--download">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download results.csv
          </button>
        </Tile>

      </div>
    </div>
  );
}

function Tile({ tag, children, wide }) {
  return (
    <div className={`stl__tile${wide ? ' stl__tile--wide' : ''}`}>
      <span className="stl__tag">{tag}</span>
      {children}
    </div>
  );
}

function IcoCsv() {
  return (
    <svg width="22" height="22" viewBox="0 0 32 32" aria-hidden="true" style={{ flexShrink: 0 }}>
      <rect width="32" height="32" rx="4" fill="#107c10"/>
      <text x="4" y="22" fontSize="11" fontWeight="700" fill="white" fontFamily="monospace">CSV</text>
    </svg>
  );
}
