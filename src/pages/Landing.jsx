import { useNavigate } from 'react-router-dom';
import { getProjectById, getProjectsByCategory, CATEGORIES } from '../data/projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Landing.css';

const FEATURED_IDS = ['project-alpha', 'project-gamma', 'project-eta'];

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
              3+ years building interfaces in Bioinformatics to enrich user's {' '}
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
                {project.maturity && (
                  <span className={`fw-card__maturity fw-maturity--${
                    project.maturity === 'Shipped Product' ? 'green' :
                    project.maturity === 'Interactive Prototype' ? 'amber' :
                    project.maturity === 'Design Exploration' ? 'purple' : 'slate'
                  }`}>
                    <span className="fw-card__dot" />
                    {project.maturity.toUpperCase()}
                  </span>
                )}
              </div>

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

