import './HiFiRAG.css';

export default function HiFiRAG() {
  return (
    <div className="hrag">
      <p className="hrag__label">Component library — RAG Metadata Tool</p>
      <div className="hrag__grid">

        {/* Chat interface */}
        <div className="hrag__tile">
          <span className="hrag__tag">Chat interface</span>
          <div className="hrag__chat">
            <div className="hrag__msg hrag__msg--user">
              <span>What datasets mention glucose metabolism?</span>
            </div>
            <div className="hrag__msg hrag__msg--ai">
              <span className="hrag__ai-badge">AI</span>
              <span>Found <strong>4 datasets</strong> referencing glucose metabolism. Top match: <em>metabolomics_2024.csv</em></span>
            </div>
            <div className="hrag__msg hrag__msg--user">
              <span>Show me the schema for that one.</span>
            </div>
          </div>
          <div className="hrag__input-row">
            <div className="hrag__input">Ask about your datasets…</div>
            <button className="hrag__send-btn">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </div>
        </div>

        {/* Context pop-out panel */}
        <div className="hrag__tile">
          <span className="hrag__tag">Context pop-out</span>
          <div className="hrag__popout">
            <div className="hrag__popout-header">
              <div className="hrag__popout-icon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <span className="hrag__popout-title">metabolomics_2024.csv</span>
              <span className="hrag__popout-close">✕</span>
            </div>
            <div className="hrag__meta-list">
              <div className="hrag__meta-row">
                <span className="hrag__meta-key">Category</span>
                <span className="hrag__meta-val">Metabolomics</span>
              </div>
              <div className="hrag__meta-row">
                <span className="hrag__meta-key">Rows</span>
                <span className="hrag__meta-val">12,483</span>
              </div>
              <div className="hrag__meta-row">
                <span className="hrag__meta-key">Tags</span>
                <span className="hrag__tag-row">
                  <span className="hrag__chip">glucose</span>
                  <span className="hrag__chip">serum</span>
                  <span className="hrag__chip">Q1–Q3</span>
                </span>
              </div>
            </div>
            <p className="hrag__summary">Metabolite concentrations across 200 patient samples. AI-generated description — reviewed by curator.</p>
            <div className="hrag__popout-actions">
              <button className="hrag__btn hrag__btn--primary">Explore dataset</button>
              <button className="hrag__btn hrag__btn--ghost">View schema</button>
            </div>
          </div>
        </div>

        {/* Quick actions + result state */}
        <div className="hrag__tile hrag__tile--wide">
          <span className="hrag__tag">Quick actions + result state</span>
          <div className="hrag__actions-strip">
            <button className="hrag__btn hrag__btn--primary">Explore dataset</button>
            <button className="hrag__btn hrag__btn--ghost">View schema</button>
            <button className="hrag__btn hrag__btn--ghost">Export metadata</button>
            <button className="hrag__btn hrag__btn--ghost">Add to collection</button>
          </div>
          <div className="hrag__result-row">
            <div className="hrag__result-dot" />
            <span className="hrag__result-text">4 datasets matched · sorted by relevance</span>
          </div>
          <div className="hrag__empty-state">
            <span className="hrag__empty-icon">🔍</span>
            <span className="hrag__empty-text">No results yet — try a broader query</span>
          </div>
        </div>

      </div>
    </div>
  );
}
