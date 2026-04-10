import { useNavigate } from 'react-router-dom';
import { getProjectById, getProjectsByCategory, CATEGORIES } from '../data/projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Landing.css';

const FEATURED_IDS = ['self-service-analysis-platform', 'apoe-associated-gene-expression-explorer','ai-generated-short-form-visual-companion-for-scientific-posters'];

const CATEGORY_COLOR = Object.fromEntries(CATEGORIES.map(c => [c.id, c.color]));

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <Navbar />

      <main className="landing__main">

        {/* ── Row 1: Hero ── */}
        <section className="hero">
     
          <br/>
          <div className="hero__inner">
            <h1 className="hero__headline">
              3 years building interfaces in Bioinformatics to enrich user's {' '}
              <button className="hero__cat-link" style={{ '--cat-color': '#7c4dbd' }} data-count={`${getProjectsByCategory('data-retrieval').length} projects`} onClick={() => navigate('/projects/data-retrieval')}>
                data retrieval
              </button>
              ,{' '}
              <button className="hero__cat-link" style={{ '--cat-color': '#2e8c6e' }} data-count={`${getProjectsByCategory('exploration').length} projects`} onClick={() => navigate('/projects/exploration')}>
                exploration
              </button>
              {' '}or{' '}
              <button className="hero__cat-link" style={{ '--cat-color': '#e8612a' }} data-count={`${getProjectsByCategory('learning').length} projects`} onClick={() => navigate('/projects/learning')}>
                learning
              </button>
               {' '} experiences.
            </h1>

          </div>
        </section>

        {/* ── Row 2: Featured works ── */}
        <FeaturedWork navigate={navigate} />

      </main>

      <Footer />
    </div>
  );
}

/* ── Category grid ───────────────────────────────────────── */
/* ── Featured work ──────────────────────────────────────── */
function FeaturedWork({ navigate }) {
  const projects = FEATURED_IDS.map(id => getProjectById(id)).filter(Boolean);

  return (
    <div className="featured">
      <div className="featured__header">
        <span className="featured__eyebrow">Selected works</span>
        <p className="featured__sub"> </p>
      </div>

      <div className="featured__grid">
        {projects.map((project, i) => {
          const color = CATEGORY_COLOR[project.categories?.[0]] ?? '#4ecdc4';
          const cs    = project.caseStudy;
          const headlines = Array.isArray(cs.impactHeadline)
            ? cs.impactHeadline
            : cs.impactHeadline ? [cs.impactHeadline] : [];

          return (
            <button
              key={project.id}
              className="fw-card"
              style={{ '--fw-color': color }}
              onClick={() => navigate(`/case-study/${project.id}`)}
              aria-label={`View case study: ${project.title}`}
            >
              <div className="fw-card__wash" aria-hidden="true" />

              <div className="fw-card__top">
                <span className="fw-card__index">0{i + 1}</span>
                <span className="fw-card__company">{project.company} · {project.year}</span>
              </div>
              {(project.maturity || project.evidence) && (
                <FwBadge maturity={project.maturity} evidence={project.evidence} />
              )}

              <h2 className="fw-card__title serif">{project.title}</h2>
              <p className="fw-card__tagline">{project.tagline}</p>

              {headlines.length > 0 && (
                <div className="fw-card__stats">
                  {headlines.map((hl, j) => (
                    <div key={j} className="fw-card__stat">
                      <span className="fw-card__stat-num">{hl.stat}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="fw-card__footer">
                <div className="fw-card__tools">
                  {project.tools?.slice(0, 3).map(t => (
                    <span key={t} className="fw-card__tool">{t}</span>
                  ))}
                </div>
                <span className="fw-card__cta">
                  Read case study
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

const FW_MATURITY_META = {
  'Deployed Solution':   { dotClass: 'fw-dot--green', tip: 'Built, launched and in use' },
  'Prototyped Solution': { dotClass: 'fw-dot--amber', tip: 'Functionality tested by users' },
  'Concept Exploration': { dotClass: 'fw-dot--teal',  tip: 'Idea turned into a design concept' },
};

const FW_EVIDENCE_META = {
  'Validated Impact': 'Used by real teams with measurable outcomes',
  'Observed Impact':  'Known to be in use, but no hard metrics captured',
  'Tested Concept':   'Concept validated through user feedback',
  'Untested Concept': 'Prototype with no feedback yet',
};

function FwBadge({ maturity, evidence }) {
  const m = FW_MATURITY_META[maturity] ?? { dotClass: 'fw-dot--slate', tip: '' };
  return (
    <span className="fw-badge">
      <span className={`fw-badge__dot ${m.dotClass}`} />
      <span className="fw-badge__maturity">{maturity}</span>
      {evidence && (
        <>
          <span className="fw-badge__sep">·</span>
          <span className="fw-badge__evidence">{evidence}</span>
        </>
      )}
      <span className="fw-badge__info" aria-hidden="true">
        ?
        <span className="fw-badge__tooltip">
          <strong>{maturity}</strong><br />{m.tip}
          {evidence && <><br /><br /><strong>{evidence}</strong><br />{FW_EVIDENCE_META[evidence]}</>}
        </span>
      </span>
    </span>
  );
}

