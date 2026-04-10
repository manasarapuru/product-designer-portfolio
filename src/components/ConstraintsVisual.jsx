import './ConstraintsVisual.css';

/* ── Colour palette data ──────────────────────────────────── */
const PALETTE = [
  {
    group: 'Brand',
    tokens: [
      { label: 'Primary',   hex: '#1976d2', textDark: false },
      { label: 'Primary Lt',hex: '#90caf9', textDark: true  },
      { label: 'Surface',   hex: '#f8f9fa', textDark: true  },
      { label: 'Dark',      hex: '#1a2332', textDark: false },
    ],
  },
  {
    group: 'Feedback',
    tokens: [
      { label: 'Success',   hex: '#2a9e6e', textDark: false },
      { label: 'Success Lt',hex: '#d4f5e9', textDark: true  },
      { label: 'Error',     hex: '#d32f2f', textDark: false },
      { label: 'Error Lt',  hex: '#fde8e8', textDark: true  },
      { label: 'Warning',   hex: '#f59e0b', textDark: true  },
      { label: 'Info',      hex: '#0ea5e9', textDark: false },
    ],
  },
];

/* ── Widget comparison data ───────────────────────────────── */
const WIDGETS = [
  { icon: '📂', label: 'File Uploader', used: true,  why: 'Core upload step'   },
  { icon: '▾',  label: 'Selectbox',     used: true,  why: 'Parameter control'  },
  { icon: '▶',  label: 'Button',        used: true,  why: 'Submit & actions'   },
  { icon: '⊞',  label: 'Dataframe',     used: true,  why: 'Results table'      },
  { icon: '⬇',  label: 'Download',      used: true,  why: 'Export output'      },
  { icon: '↻',  label: 'Spinner',       used: true,  why: 'Processing state'   },
  { icon: '▤',  label: 'Expander',      used: false, why: 'Hides key info'     },
  { icon: '◧',  label: 'Sidebar',       used: false, why: 'Adds complexity'    },
  { icon: '⊟',  label: 'Columns',       used: false, why: 'Breaks linear flow' },
  { icon: '⊟',  label: 'Tabs',          used: false, why: 'Single-flow tool'   },
];

/* ── Constraint vs decision pairs ────────────────────────── */
const TRADEOFFS = [
  {
    limit:    'No custom component logic',
    response: 'Sequenced native widgets top-to-bottom for clear reading order',
    limitColor: '#fde8e8',
    limitText:  '#b91c1c',
    responseColor: '#d4f5e9',
    responseText:  '#166534',
  },
  {
    limit:    'No JavaScript interactivity',
    response: 'st.session_state drives a multi-step wizard flow',
    limitColor: '#fde8e8',
    limitText:  '#b91c1c',
    responseColor: '#d4f5e9',
    responseText:  '#166534',
  },
  {
    limit:    'Fixed layout width',
    response: 'Copy and labels written to fit the column — no wrapping surprises',
    limitColor: '#fde8e8',
    limitText:  '#b91c1c',
    responseColor: '#d4f5e9',
    responseText:  '#166534',
  },
  {
    limit:    'Limited styling hooks',
    response: 'One shared <style> block via st.markdown enforces all colour tokens',
    limitColor: '#fde8e8',
    limitText:  '#b91c1c',
    responseColor: '#d4f5e9',
    responseText:  '#166534',
  },
];

export default function ConstraintsVisual() {
  const used   = WIDGETS.filter(w => w.used);
  const skipped = WIDGETS.filter(w => !w.used);

  return (
    <div className="cv">

      {/* ── 1. Colour palette ── */}
      <div className="cv__card">
        <div className="cv__card-header">
          <span className="cv__card-icon">🎨</span>
          <div>
            <h3 className="cv__card-title">Colour system</h3>
            <p className="cv__card-desc">Tokens defined once in <code>config.toml</code> + a shared style block — consistency enforced by code, not convention.</p>
          </div>
        </div>

        {PALETTE.map(group => (
          <div key={group.group} className="cv__palette-group">
            <span className="cv__group-label">{group.group}</span>
            <div className="cv__swatches">
              {group.tokens.map(t => (
                <div key={t.label} className="cv__swatch" style={{ background: t.hex }}>
                  <span className="cv__swatch-name" style={{ color: t.textDark ? '#1a2332' : '#fff' }}>{t.label}</span>
                  <span className="cv__swatch-hex"  style={{ color: t.textDark ? 'rgba(26,35,50,0.55)' : 'rgba(255,255,255,0.65)' }}>{t.hex}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── 2. Widget audit ── */}
      <div className="cv__card">
        <div className="cv__card-header">
          <span className="cv__card-icon">🧩</span>
          <div>
            <h3 className="cv__card-title">Widget audit</h3>
            <p className="cv__card-desc">Every Streamlit widget was evaluated. Only those that served the core workflow made the cut.</p>
          </div>
        </div>

        <div className="cv__widget-grid">
          <div className="cv__widget-col">
            <div className="cv__widget-header cv__widget-header--used">
              <span>Used</span><span className="cv__pill cv__pill--used">{used.length}</span>
            </div>
            {used.map(w => (
              <div key={w.label} className="cv__widget cv__widget--used">
                <span className="cv__widget-icon">{w.icon}</span>
                <div className="cv__widget-info">
                  <span className="cv__widget-label">{w.label}</span>
                  <span className="cv__widget-why">{w.why}</span>
                </div>
                <span className="cv__widget-check">✓</span>
              </div>
            ))}
          </div>

          <div className="cv__widget-col">
            <div className="cv__widget-header cv__widget-header--skip">
              <span>Skipped</span><span className="cv__pill cv__pill--skip">{skipped.length}</span>
            </div>
            {skipped.map(w => (
              <div key={w.label} className="cv__widget cv__widget--skip">
                <span className="cv__widget-icon">{w.icon}</span>
                <div className="cv__widget-info">
                  <span className="cv__widget-label">{w.label}</span>
                  <span className="cv__widget-why">{w.why}</span>
                </div>
                <span className="cv__widget-cross">✕</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3. Constraint → Decision ── */}
      <div className="cv__card">
        <div className="cv__card-header">
          <span className="cv__card-icon">⚖️</span>
          <div>
            <h3 className="cv__card-title">Constraints → Design decisions</h3>
            <p className="cv__card-desc">Each platform limitation became a deliberate UX choice, not a workaround.</p>
          </div>
        </div>

        <div className="cv__tradeoffs">
          {TRADEOFFS.map((t, i) => (
            <div key={i} className="cv__tradeoff">
              <div className="cv__tradeoff-side cv__tradeoff-limit" style={{ background: t.limitColor }}>
                <span className="cv__tradeoff-tag" style={{ color: t.limitText }}>Constraint</span>
                <p className="cv__tradeoff-text" style={{ color: t.limitText }}>{t.limit}</p>
              </div>
              <div className="cv__tradeoff-arrow">→</div>
              <div className="cv__tradeoff-side cv__tradeoff-response" style={{ background: t.responseColor }}>
                <span className="cv__tradeoff-tag" style={{ color: t.responseText }}>Decision</span>
                <p className="cv__tradeoff-text" style={{ color: t.responseText }}>{t.response}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
