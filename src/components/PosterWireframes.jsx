import './PosterWireframes.css';

export default function PosterWireframes() {
  return (
    <div className="pw">
      <div className="pw__grid">

        {/* ── Surface 1: Author interface ── */}
        <div className="pw__surface">
          <div className="pw__surface-label">
            <span className="pw__surface-tag">Surface 1</span>
            <span className="pw__surface-title">Author Interface</span>
            <span className="pw__surface-sub">Web — pre-conference setup</span>
          </div>
          <div className="pw__frame pw__frame--desktop">
            {/* Browser chrome */}
            <div className="pw__browser-bar">
              <span className="pw__dot" />
              <span className="pw__dot" />
              <span className="pw__dot" />
              <div className="pw__url-bar" />
            </div>
            {/* Page content */}
            <div className="pw__page">
              {/* Page header */}
              <div className="pw__wf-header">
                <div className="pw__wf-block pw__wf-block--title" />
                <div className="pw__wf-block pw__wf-block--sub" />
              </div>
              {/* Step indicator */}
              <div className="pw__steps-row">
                {[1,2,3].map(n => (
                  <div key={n} className={`pw__step-dot ${n === 1 ? 'pw__step-dot--active' : ''}`}>{n}</div>
                ))}
              </div>
              {/* Form fields */}
              <div className="pw__form">
                <div className="pw__field">
                  <div className="pw__field-label" />
                  <div className="pw__field-input" />
                </div>
                <div className="pw__field">
                  <div className="pw__field-label" />
                  <div className="pw__field-input pw__field-input--tall" />
                </div>
                <div className="pw__field">
                  <div className="pw__field-label" />
                  <div className="pw__field-input pw__field-input--tall" />
                </div>
                <div className="pw__field pw__field--row">
                  <div className="pw__field-input pw__field-input--half" />
                  <div className="pw__wf-btn pw__wf-btn--ghost" />
                  <div className="pw__wf-btn pw__wf-btn--filled" />
                </div>
              </div>
            </div>
          </div>
          <p className="pw__caption">Researcher inputs paper title, abstract, methods and key findings. AI structures the output — the author reviews and adjusts before publishing.</p>
        </div>

        {/* ── Surface 2: Artifact ── */}
        <div className="pw__surface">
          <div className="pw__surface-label">
            <span className="pw__surface-tag">Surface 2</span>
            <span className="pw__surface-title">The Artifact</span>
            <span className="pw__surface-sub">Mobile — scanned at the session</span>
          </div>
          <div className="pw__frame pw__frame--mobile">
            {/* Phone notch */}
            <div className="pw__notch" />
            {/* Content */}
            <div className="pw__page pw__page--mobile">
              {/* Header chip */}
              <div className="pw__chip" />
              {/* Title block */}
              <div className="pw__wf-block pw__wf-block--title" style={{ marginBottom: 6 }} />
              <div className="pw__wf-block pw__wf-block--sub" />
              {/* Divider */}
              <div className="pw__divider" />
              {/* Summary section */}
              <div className="pw__section-head" />
              <div className="pw__wf-block pw__wf-block--line" />
              <div className="pw__wf-block pw__wf-block--line pw__wf-block--short" />
              <div className="pw__wf-block pw__wf-block--line" />
              {/* Term pill */}
              <div className="pw__term-row">
                <div className="pw__term-pill" />
                <div className="pw__term-pill" />
              </div>
              {/* Divider */}
              <div className="pw__divider" />
              {/* Key finding */}
              <div className="pw__section-head" />
              <div className="pw__wf-block pw__wf-block--line" />
              <div className="pw__wf-block pw__wf-block--line pw__wf-block--short" />
              {/* CTA */}
              <div className="pw__divider" />
              <div className="pw__wf-cta" />
            </div>
          </div>
          <p className="pw__caption">Attendee scans QR code and lands directly on this page. Plain-language summary, defined terms, key findings, and a link to the full paper.</p>
        </div>

      </div>

    </div>
  );
}
