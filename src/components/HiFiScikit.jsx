import { useState, useEffect, useRef } from 'react';
import './HiFiScikit.css';

const GOAL_TEXT = "I want to predict which customers are likely to cancel their subscription";

const PHASES = [
  'typing',      // 0 — user types their goal
  'typed',       // 1 — goal complete, button ready
  'match',       // 2 — model recommendation appears
  'intro',       // 3 — ML explainer + how this helps
  'familiar',    // 4 — familiarity toggles animate in
  'walkthrough', // 5 — step-by-step
  'code',        // 6 — end state
];

const STEPS = [
  { label: 'Understand your data',  done: true  },
  { label: 'Prepare features',      done: true  },
  { label: 'Train the model',       done: false, active: true },
  { label: 'Evaluate results',      done: false },
  { label: 'Get your code',         done: false },
];

export default function HiFiScikit() {
  const [phase, setPhase] = useState(0);
  const [typed, setTyped]   = useState('');
  const [skFam, setSkFam]   = useState(null);   // null | 'yes' | 'no'
  const [mlFam, setMlFam]   = useState(null);
  const timerRef = useRef(null);

  const clear = () => clearTimeout(timerRef.current);
  const after = (ms, fn) => { clear(); timerRef.current = setTimeout(fn, ms); };

  // Phase driver
  useEffect(() => {
    const p = PHASES[phase];

    if (p === 'intro')   after(5000, () => setPhase(4));
    if (p === 'typed')   after(1800, () => setPhase(2));
    if (p === 'match')   after(4500, () => setPhase(3));
    if (p === 'code')    after(7000, () => { setPhase(0); setTyped(''); setSkFam(null); setMlFam(null); });

    return clear;
  }, [phase]);

  // Typewriter
  useEffect(() => {
    if (PHASES[phase] !== 'typing') return;
    if (typed.length < GOAL_TEXT.length) {
      const speed = 65 + Math.random() * 45;
      timerRef.current = setTimeout(() => setTyped(GOAL_TEXT.slice(0, typed.length + 1)), speed);
    } else {
      after(900, () => setPhase(1));
    }
    return clear;
  }, [phase, typed]);

  // Familiarity auto-advance
  useEffect(() => {
    if (PHASES[phase] !== 'familiar') return;
    if (skFam === null) { after(1400, () => setSkFam('no'));  return; }
    if (mlFam === null) { after(1100, () => setMlFam('no'));  return; }
    after(2000, () => setPhase(5));
    return clear;
  }, [phase, skFam, mlFam]);

  const pName = PHASES[phase];

  return (
    <div className="sk">
      <div className="sk__app">

        {/* ── Header ── */}
        <div className="sk__header">
          <div className="sk__header-brand">
            <SkIcon />
            <span className="sk__header-title">Scikit-Learn Learning Lab</span>
          </div>
          <ProgressDots phase={phase} total={PHASES.length} />
        </div>

        {/* ── Content area ── */}
        <div className="sk__body">

          {/* PHASE 0 — Intro */}
          {pName === 'intro' && (
            <div className="sk__scene sk__scene--intro sk__scene--enter">
              <span className="sk__intro-eyebrow">Before we start</span>
              <h3 className="sk__intro-heading">Machine learning, in plain English</h3>
              <p className="sk__intro-body">
                Machine learning lets a program <strong>learn patterns from examples</strong> instead of following rules you write by hand. You show it data, it figures out what predicts what.
              </p>
              <div className="sk__intro-divider" />
              <p className="sk__intro-sub">
                <strong>Scikit-Learn</strong> is a Python library that gives you ready-to-use models — so you don't build the math from scratch.
              </p>
              <div className="sk__intro-how">
                <span className="sk__intro-how-label">This app will</span>
                <ul className="sk__intro-list">
                  <li><CheckDot />Ask what you want to build in plain language</li>
                  <li><CheckDot />Recommend the right model for your goal</li>
                  <li><CheckDot />Walk you through using it, step by step</li>
                  <li><CheckDot />Give you starter code you can run immediately</li>
                </ul>
              </div>
              <div className="sk__auto-hint">Starting in a moment…</div>
            </div>
          )}

          {/* PHASE 1–2 — Goal input */}
          {(pName === 'typing' || pName === 'typed') && (
            <div className="sk__scene sk__scene--enter">
              <p className="sk__prompt">What are you trying to build?</p>
              <p className="sk__subprompt">Describe your goal — no ML vocabulary needed.</p>
              <div className="sk__textarea">
                <span className="sk__textarea-text">{typed}</span>
                <span className="sk__cursor" />
              </div>
              <div className="sk__chips-row">
                <span className="sk__chips-label">Browse by goal</span>
                <div className="sk__chips">
                  <span className="sk__chip sk__chip--active">Predict something</span>
                  <span className="sk__chip">Group similar things</span>
                  <span className="sk__chip">Detect anomalies</span>
                </div>
              </div>
              <button className={`sk__btn sk__btn--primary${pName === 'typed' ? ' sk__btn--ready' : ' sk__btn--dim'}`}>
                Find my model →
              </button>
            </div>
          )}

          {/* PHASE 3 — Model match */}
          {pName === 'match' && (
            <div className="sk__scene sk__scene--enter">
              <div className="sk__match-badge-row">
                <span className="sk__badge">Best match for your goal</span>
              </div>
              <p className="sk__model-name">RandomForestClassifier</p>
              <p className="sk__model-why">
                Handles mixed data types well and is reliable on prediction tasks without heavy tuning — a strong starting point for customer churn.
              </p>
              <div className="sk__match-divider" />
              <p className="sk__match-q">Would you like me to walk through how to use it?</p>
              <div className="sk__match-ctas">
                <button className="sk__btn sk__btn--primary sk__btn--anim">Yes please!</button>
                <button className="sk__btn sk__btn--ghost">No thanks, I got it</button>
              </div>
            </div>
          )}

          {/* PHASE 4 — Familiarity */}
          {pName === 'familiar' && (
            <div className="sk__scene sk__scene--enter">
              <p className="sk__prompt sk__prompt--sm">Before we continue — how familiar are you with:</p>
              <div className="sk__fam-rows">
                <div className="sk__fam-row">
                  <span className="sk__fam-label">Scikit-Learn</span>
                  <div className="sk__toggle-pair">
                    <button className={`sk__toggle ${skFam === 'yes' ? 'sk__toggle--on' : ''}`}>Familiar</button>
                    <button className={`sk__toggle ${skFam === 'no'  ? 'sk__toggle--on' : ''}`}>Not familiar</button>
                  </div>
                </div>
                <div className="sk__fam-row">
                  <span className="sk__fam-label">Machine Learning</span>
                  <div className="sk__toggle-pair">
                    <button className={`sk__toggle ${mlFam === 'yes' ? 'sk__toggle--on' : ''}`}>Familiar</button>
                    <button className={`sk__toggle ${mlFam === 'no'  ? 'sk__toggle--on' : ''}`}>Not familiar</button>
                  </div>
                </div>
              </div>
              {mlFam && (
                <div className="sk__fam-response sk__scene--enter">
                  <span className="sk__fam-ack">
                    Got it — I'll explain each step from the ground up.
                  </span>
                </div>
              )}
            </div>
          )}

          {/* PHASE 5 — Walkthrough */}
          {pName === 'walkthrough' && (
            <div className="sk__scene sk__scene--walk sk__scene--enter">
              <div className="sk__walk-rail">
                {STEPS.map((s, i) => (
                  <div key={i} className="sk__rail-item">
                    <div className={`sk__rail-dot ${s.done ? 'sk__rail-dot--done' : s.active ? 'sk__rail-dot--active' : ''}`}>
                      {s.done
                        ? <svg width="8" height="8" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2 6 5 9 10 3"/></svg>
                        : i + 1}
                    </div>
                    {i < STEPS.length - 1 && <div className={`sk__rail-line ${s.done ? 'sk__rail-line--done' : ''}`} />}
                  </div>
                ))}
              </div>
              <div className="sk__walk-content">
                <span className="sk__step-chip">Step 3 of 5 · Train the model</span>
                <p className="sk__walk-title">Training fits the model to your data</p>
                <p className="sk__walk-body">
                  When you call <code>.fit()</code>, the Random Forest builds multiple decision trees, each learning slightly different patterns. Together they vote — which reduces mistakes.
                </p>
                <div className="sk__why-card">
                  <span className="sk__why-label">Why this model for customer churn?</span>
                  <p className="sk__why-body">Churn data has messy mixed features — plan type, account age, support tickets. Random Forest handles this without requiring you to clean everything perfectly first.</p>
                </div>
                <div className="sk__code-peek">
                  <div className="sk__code-bar">What this looks like</div>
                  <div className="sk__code-block">
                    <span className="sk__kw">from</span> sklearn.ensemble <span className="sk__kw">import</span> RandomForestClassifier{'\n'}
                    {'\n'}model.<span className="sk__fn">fit</span>(X_train, y_train)
                  </div>
                </div>
                <button className="sk__btn sk__btn--primary" onClick={() => setPhase(6)}>
                  Evaluate results →
                </button>
              </div>
            </div>
          )}

          {/* PHASE 6 — End state */}
          {pName === 'code' && (
            <div className="sk__scene sk__scene--enter">
              <div className="sk__end-top">
                <div className="sk__end-check"><CheckSvg /></div>
                <div>
                  <p className="sk__end-title">You're ready to build</p>
                  <p className="sk__end-model">RandomForestClassifier · churn prediction</p>
                </div>
              </div>
              <div className="sk__final-code">
                <div className="sk__code-bar sk__code-bar--dark">
                  <span>starter_churn.py</span>
                  <span className="sk__copy-hint">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                    Copy
                  </span>
                </div>
                <div className="sk__code-block sk__code-block--full">
                  <span className="sk__kw">from</span> sklearn.ensemble <span className="sk__kw">import</span> RandomForestClassifier{'\n'}
                  <span className="sk__kw">from</span> sklearn.model_selection <span className="sk__kw">import</span> train_test_split{'\n'}
                  <span className="sk__kw">from</span> sklearn.metrics <span className="sk__kw">import</span> classification_report{'\n\n'}
                  X_train, X_test, y_train, y_test = train_test_split({'\n'}
                  {'  '}X, y, <span className="sk__param">test_size</span>=<span className="sk__num">0.2</span>, <span className="sk__param">random_state</span>=<span className="sk__num">42</span>){'\n\n'}
                  model = RandomForestClassifier(<span className="sk__param">n_estimators</span>=<span className="sk__num">100</span>){'\n'}
                  model.<span className="sk__fn">fit</span>(X_train, y_train){'\n\n'}
                  <span className="sk__fn">print</span>(classification_report(y_test, model.<span className="sk__fn">predict</span>(X_test)))
                </div>
              </div>
              <div className="sk__end-actions">
                <button className="sk__btn sk__btn--primary">Copy code</button>
                <button className="sk__btn sk__btn--ghost">Open Scikit-Learn docs →</button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

function ProgressDots({ phase, total }) {
  return (
    <div className="sk__dots">
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={`sk__dot ${i < phase ? 'sk__dot--done' : i === phase ? 'sk__dot--active' : ''}`} />
      ))}
    </div>
  );
}

function CheckDot() {
  return (
    <span className="sk__list-dot">
      <svg width="8" height="8" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2 6 5 9 10 3"/></svg>
    </span>
  );
}

function CheckSvg() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2 8 6 12 14 4"/></svg>
  );
}

function SkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#1A1409"/>
      <path d="M8 24L16 8l8 16H8z" fill="#E5A23A" opacity="0.9"/>
    </svg>
  );
}
