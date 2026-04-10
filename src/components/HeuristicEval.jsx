import './HeuristicEval.css';

const FINDINGS = [
  { id: 1, heuristic: 'Feedback',       finding: 'Selected/deselected tracks do not refresh upon selection — confuses the user about whether their action registered.' },
  { id: 2, heuristic: 'Recognition',    finding: 'Hundreds of tool names displayed simultaneously — overwhelming, no way to understand which to use without prior knowledge.' },
  { id: 3, heuristic: 'Minimalism',     finding: 'Too many competing calls to action visible at once — no visual hierarchy between primary and secondary actions.' },
  { id: 4, heuristic: 'Visibility',     finding: 'No clear indication of which tracks are currently active — open vs. closed states are not visually distinguishable.' },
  { id: 5, heuristic: 'User control',   finding: 'Toggle system is inconsistent and hard to parse — users cannot easily reverse or compare track selections.' },
  { id: 6, heuristic: 'Help & context', finding: 'Sections have no labels or explanations — users with less domain knowledge have no anchor point for navigation.' },
];

const SEVERITY = [2, 3, 3, 2, 2, 3]; // 1=low 2=med 3=high

/* Fake tracks grid — recreates the dense, overwhelming tracks section */
function TracksGrid() {
  const groups = [
    { label: 'Mapping and Sequencing', count: 8 },
    { label: 'Genes and Gene Predictions', count: 10 },
    { label: 'Phenotype, Variant and Literature', count: 9 },
    { label: 'Variation', count: 7 },
    { label: 'Comparative Genomics', count: 8 },
    { label: 'Regulation', count: 6 },
    { label: 'RNA and Transcriptome', count: 8 },
    { label: 'Sequence', count: 5 },
  ];

  return (
    <div className="hev__tracks">
      {groups.map((g, gi) => (
        <div key={gi} className="hev__track-group">
          <div className="hev__track-heading">{g.label}</div>
          <div className="hev__track-rows">
            {Array.from({ length: g.count }, (_, i) => (
              <div key={i} className="hev__track-row">
                <span className={`hev__track-dot ${(gi + i) % 3 === 0 ? 'hev__track-dot--on' : ''}`} />
                <span className="hev__track-name">
                  {TRACK_NAMES[(gi * 8 + i) % TRACK_NAMES.length]}
                </span>
                <div className="hev__track-controls">
                  <span className="hev__track-btn">hide</span>
                  <span className="hev__track-btn">dense</span>
                  <span className="hev__track-btn">pack</span>
                  <span className="hev__track-btn">full</span>
                </div>
              </div>
            ))}
            <div className="hev__track-actions">
              <span className="hev__hide-all">hide all</span>
              <span className="hev__show-all">show all</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function HeuristicEval() {
  return (
    <div className="hev">
      <p className="hev__caption">Heuristic evaluation — UCSC Genome Browser (tracks section)</p>
      <div className="hev__layout">

        {/* Left — annotated interface */}
        <div className="hev__interface">
          <div className="hev__browser-chrome">
            <div className="hev__browser-bar">
              <span className="hev__browser-url">genome.ucsc.edu/cgi-bin/hgTracks</span>
              <div className="hev__browser-dots">
                <span /><span /><span />
              </div>
            </div>
            <div className="hev__viewport">
              {/* Mini genome track area */}
              <div className="hev__genome-strip">
                <div className="hev__genome-ruler" />
                <div className="hev__genome-track hev__genome-track--1" />
                <div className="hev__genome-track hev__genome-track--2" />
                <div className="hev__genome-track hev__genome-track--3" />
              </div>
              <TracksGrid />
            </div>
          </div>

          {/* Callout annotations */}
          <div className="hev__annotations">
            {[
              { n: 2, top: '18%', left: '62%', label: 'No indication of active state' },
              { n: 3, top: '34%', left: '4%',  label: 'Competing actions' },
              { n: 6, top: '52%', left: '58%', label: 'No section explanation' },
            ].map(a => (
              <div key={a.n} className="hev__ann" style={{ top: a.top, left: a.left }}>
                <span className="hev__ann-num">{a.n}</span>
                <span className="hev__ann-label">{a.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — findings panel */}
        <div className="hev__findings">
          <p className="hev__findings-heading">Observations — tracks section</p>
          <div className="hev__findings-list">
            {FINDINGS.map((f, i) => (
              <div key={f.id} className="hev__finding">
                <div className="hev__finding-top">
                  <span className="hev__finding-num">{f.id}</span>
                  <span className="hev__finding-heuristic">{f.heuristic}</span>
                  <SeverityDot level={SEVERITY[i]} />
                </div>
                <p className="hev__finding-text">{f.finding}</p>
              </div>
            ))}
          </div>
          <div className="hev__legend">
            <span className="hev__legend-item"><SeverityDot level={3} /> High</span>
            <span className="hev__legend-item"><SeverityDot level={2} /> Medium</span>
            <span className="hev__legend-item"><SeverityDot level={1} /> Low</span>
          </div>
        </div>

      </div>
    </div>
  );
}

function SeverityDot({ level }) {
  return (
    <span className={`hev__sev hev__sev--${level === 3 ? 'high' : level === 2 ? 'med' : 'low'}`}>
      {level === 3 ? 'High' : level === 2 ? 'Med' : 'Low'}
    </span>
  );
}

const TRACK_NAMES = [
  'RefSeq Genes','GENCODE v44','UniProt','ClinVar Variants','dbSNP 155',
  'GTEx eQTLs','ENCODE ATAC','RepeatMasker','PhyloP 100way','OMIM Alleles',
  'GnomAD v4','JASPAR TFBS','H3K27ac','CTCF Binding','SpliceAI','SegDups',
  'Conservation 100V','lncRNA Hub','miRNA Targets','GWAS Catalog',
  'Interrupted Rpts','Self Chain','Microsatellite','Simple Repeats',
];
