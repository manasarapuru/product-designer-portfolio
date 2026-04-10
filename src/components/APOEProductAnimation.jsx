import { useState, useEffect, useRef } from 'react';
import './APOEProductAnimation.css';

const GENE_TEXT = 'HOMER3';

const PHASES = [
  'idle',       // 0 blank form
  'typing',     // 1 typing gene name
  'typed',      // 2 gene done
  'analysis',   // 3 analysis card selected
  'dataset',    // 4 dataset dropdown open + selected
  'additional options', // 5 additional parameters selected
  'submitting', // 6 submit pulse
  'results',    // 7 graph + table appear
];

// Simple bar chart data
const BAR_DATA = [0.4, 0.75, 0.55, 0.9, 0.35, 0.65, 0.82, 0.48, 0.7, 0.6];
const GENE_ROWS = [
  { gene: 'HOMER3',  e4: 2.31, e3: 1.04, fold: '+2.2×', sig: true  },
  { gene: 'APOE',    e4: 4.87, e3: 1.92, fold: '+2.5×', sig: true  },
  { gene: 'TREM2',   e4: 1.56, e3: 1.48, fold: '+1.1×', sig: false },
  { gene: 'CLU',     e4: 3.12, e3: 1.71, fold: '+1.8×', sig: true  },
  { gene: 'BIN1',    e4: 0.89, e3: 1.03, fold: '−0.9×', sig: false },
];

export default function APOEProductAnimation() {
  const [phase, setPhase]   = useState(0);
  const [typed, setTyped]   = useState('');
  const [barsVis, setBarsVis] = useState(false);
  const [rowsVis, setRowsVis] = useState(false);
  const timer = useRef(null);

  const clear = () => clearTimeout(timer.current);
  const after = (ms, fn) => { clear(); timer.current = setTimeout(fn, ms); };

  // Phase driver
  useEffect(() => {
    const p = PHASES[phase];
    if (p === 'idle')       after(1200, () => setPhase(1));
    if (p === 'typed')      after(700,  () => setPhase(3));
    if (p === 'analysis')   after(1400, () => setPhase(4));
    if (p === 'dataset')    after(1600, () => setPhase(5));
    if (p === 'additional options')  after(1200, () => setPhase(6));
    if (p === 'submitting') after(900,  () => { setPhase(7); after(100, () => { setBarsVis(true); after(400, () => setRowsVis(true)); }); });
    if (p === 'results')    after(6000, () => { setPhase(0); setTyped(''); setBarsVis(false); setRowsVis(false); });
    return clear;
  }, [phase]);

  // Typewriter
  useEffect(() => {
    if (PHASES[phase] !== 'typing') return;
    if (typed.length < GENE_TEXT.length) {
      timer.current = setTimeout(
        () => setTyped(GENE_TEXT.slice(0, typed.length + 1)),
        80 + Math.random() * 60
      );
    } else {
      after(500, () => setPhase(2));
    }
    return clear;
  }, [phase, typed]);

  const p = PHASES[phase];
  const isResults = p === 'results';

  return (
    <div className="apoe-anim">
      <p className="apoe-anim__caption">Interactive prototype — Gene Expression Explorer</p>

      <div className="apoe-anim__app">
        {/* ── Tool header ── */}
        <div className="apoe-anim__tool-header">
          <span className="apoe-anim__tool-title">Gene Expression Explorer</span>
          <button className="apoe-anim__help">?</button>
        </div>

        {!isResults ? (
          /* ── Screen 1: filters + analysis cards ── */
          <div className="apoe-anim__screen1">
            <div className="apoe-anim__filter-bar">

              {/* Gene name input */}
              <div className={`apoe-anim__gene-input ${p !== 'idle' ? 'apoe-anim__gene-input--active' : ''}`}>
                {typed || <span className="apoe-anim__placeholder">Gene Name</span>}
                {(p === 'typing') && <span className="apoe-anim__cursor" />}
                {(p !== 'idle' && p !== 'typing') && typed && (
                  <span className="apoe-anim__gene-chip">{typed}</span>
                )}
              </div>

              {/* Analysis Type */}
              <div className={`apoe-anim__dropdown ${p === 'analysis' || p === 'dataset' || p === 'additional options' || p === 'submitting' ? 'apoe-anim__dropdown--set' : ''}`}>
                {p === 'analysis' || p === 'dataset' || p === 'additional options' || p === 'submitting'
                  ? 'Analysis 1'
                  : <>Analysis Type <span className="apoe-anim__caret">∨</span></>}
              </div>

              {/* Dataset Type */}
              <div className={`apoe-anim__dropdown ${p === 'dataset' || p === 'additional options' || p === 'submitting' ? 'apoe-anim__dropdown--set' : ''}`}>
                {p === 'dataset' || p === 'additional options' || p === 'submitting'
                  ? 'Set X'
                  : <>Dataset Type <span className="apoe-anim__caret">∨</span></>}
              </div>

              {/* Phenotype */}
              <div className={`apoe-anim__dropdown ${p === 'additional options' || p === 'submitting' ? 'apoe-anim__dropdown--set' : ''}`}>
                {p === 'additional options' || p === 'submitting'
                  ? 'Option1'
                  : <>Additional Options <span className="apoe-anim__caret">∨</span></>}
              </div>

            </div>

            {/* Analysis cards */}
            <div className="apoe-anim__cards">
              {[
                { id: 1, name: 'Analysis 1', desc: 'Analysis 1 description' },
                { id: 2, name: 'Analysis 2', desc: 'Analysis 2 description' },
                { id: 3, name: 'Analysis 3', desc: 'Analysis 3 description' },
              ].map(card => {
                const selected = card.id === 1 && (p === 'analysis' || p === 'dataset' || p === 'additional options' || p === 'submitting');
                return (
                  <div key={card.id} className={`apoe-anim__card ${selected ? 'apoe-anim__card--selected' : ''}`}>
                    <span className="apoe-anim__card-name">{card.name}</span>
                    <span className="apoe-anim__card-desc">{card.desc}</span>
                  </div>
                );
              })}
            </div>

            <button className={`apoe-anim__submit ${p === 'submitting' ? 'apoe-anim__submit--pulse' : ''} ${p === 'additional options' || p === 'submitting' ? '' : 'apoe-anim__submit--dim'}`}>
              Submit
            </button>
          </div>

        ) : (
          /* ── Screen 2: results ── */
          <div className="apoe-anim__screen2">
            <div className="apoe-anim__results-context">
              <span className="apoe-anim__result-chip">HOMER3</span>
              <span className="apoe-anim__result-sep">·</span>
              <span className="apoe-anim__result-chip apoe-anim__result-chip--analysis">Analysis 1</span>
              <span className="apoe-anim__result-sep">·</span>
              <span className="apoe-anim__result-chip">Set X</span>
              <span className="apoe-anim__result-sep">·</span>
              <span className="apoe-anim__result-chip">Option1</span>
            </div>

            <div className="apoe-anim__results-grid">

              {/* Graph panel */}
              <div className="apoe-anim__panel">
                <span className="apoe-anim__panel-label">Expression by Condition</span>
                <div className="apoe-anim__chart">
                  <div className="apoe-anim__chart-bars">
                    {BAR_DATA.map((h, i) => (
                      <div key={i} className="apoe-anim__bar-wrap">
                        <div
                          className={`apoe-anim__bar ${i % 2 === 0 ? 'apoe-anim__bar--e4' : 'apoe-anim__bar--e3'}`}
                          style={{ '--bar-h': h, animationDelay: `${i * 60}ms` }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="apoe-anim__chart-baseline" />
                  <div className="apoe-anim__chart-legend">
                    <span className="apoe-anim__legend-dot apoe-anim__legend-dot--e4" />Option 1
                    <span className="apoe-anim__legend-dot apoe-anim__legend-dot--e3" style={{ marginLeft: 10 }} />Standard
                  </div>
                </div>
              </div>

              {/* Table panel */}
              <div className="apoe-anim__panel">
                <span className="apoe-anim__panel-label">Differential Expression Table</span>
                <div className="apoe-anim__table">
                  <div className="apoe-anim__table-head">
                    <span>Gene</span>
                    <span>ε4/ε4</span>
                    <span>ε3/ε3</span>
                    <span>Fold</span>
                  </div>
                  {GENE_ROWS.map((row, i) => (
                    <div
                      key={row.gene}
                      className={`apoe-anim__table-row ${row.sig ? 'apoe-anim__table-row--sig' : ''} ${row.gene === 'HOMER3' ? 'apoe-anim__table-row--highlight' : ''}`}
                      style={{ animationDelay: `${i * 80 + 200}ms` }}
                    >
                      <span className="apoe-anim__gene-name">{row.gene}</span>
                      <span>{row.e4}</span>
                      <span>{row.e3}</span>
                      <span className={`apoe-anim__fold ${row.fold.startsWith('+') ? 'apoe-anim__fold--up' : 'apoe-anim__fold--dn'}`}>{row.fold}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}
