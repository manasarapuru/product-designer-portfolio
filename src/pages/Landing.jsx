import { useNavigate } from 'react-router-dom';
import { getProjectById } from '../data/projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Landing.css';

const FEATURED_IDS = [
  'self-service-analysis-platform',
  'visualization-platform-for-alzheimers-disease-research',
  'ai-generated-short-form-visual-companion-for-scientific-posters',
];

const CATEGORY_COLOR = {
  'data-retrieval': '#7c4dbd',
  'exploration':    '#2e8c6e',
  'learning':       '#e8612a',
};

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <Navbar />
      <main className="landing__main">

        <section className="hero">
          <h1 className="hero__headline">
            I make dense, technical biological information easier to{' '}
            <button className="hero__cat-pill" style={{ '--cat-color': '#7c4dbd' }} onClick={() => navigate('/projects/data-retrieval')}>retrieve</button>,{' '}
            <button className="hero__cat-pill" style={{ '--cat-color': '#2e8c6e' }} onClick={() => navigate('/projects/exploration')}>explore</button>, and{' '}
            <button className="hero__cat-pill" style={{ '--cat-color': '#e8612a' }} onClick={() => navigate('/projects/learning')}>communicate</button>.
          </h1>
          <p className="hero__sub">
            My work spans bioinformatics, web tool development, and science communication,
            applied across molecular diagnostics, neurodegeneration research, and microbiology.
          </p>
          <div className="hero__open">
            <span className="hero__open-dot" />
            Open to work
          </div>
        </section>

        <FeaturedWork navigate={navigate} />

      </main>
      <Footer />
    </div>
  );
}

function FeaturedWork({ navigate }) {
  const projects = FEATURED_IDS.map(id => getProjectById(id)).filter(Boolean);

  return (
    <section className="featured">
      <div className="featured__header">
        <span className="featured__label">Selected work</span>
        <button className="featured__all" onClick={() => navigate('/projects')}>
          All projects <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className="featured__list">
        {projects.map((project, i) => {
          const color = CATEGORY_COLOR[project.categories?.[0]] ?? '#4ecdc4';
          const cs    = project.caseStudy;

          return (
            <button
              key={project.id}
              className="fw-card"
              style={{ '--fw-color': color, '--i': i }}
              onClick={() => navigate(`/case-study/${project.id}`)}
              aria-label={`View case study: ${project.title}`}
            >
              <div className="fw-card__accent" aria-hidden="true" />

              <div className="fw-card__body">
                <div className="fw-card__meta">
                  <span className="fw-card__company">{project.company}</span>
                  <span className="fw-card__year">{project.year}</span>
                </div>
                <h2 className="fw-card__title">{project.title}</h2>
                <p className="fw-card__tagline">{project.tagline || cs?.product}</p>
                <div className="fw-card__footer">
                  <div className="fw-card__tags">
                    {project.tools?.slice(0, 4).map(t => (
                      <span key={t} className="fw-card__tag">{t}</span>
                    ))}
                  </div>
                  {project.maturity && (
                    <FwBadge maturity={project.maturity} color={color} />
                  )}
                </div>
              </div>

              <span className="fw-card__arrow" aria-hidden="true">→</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

const FW_MATURITY_META = {
  'Deployed Solution':   { dot: '#22c55e' },
  'Prototyped Solution': { dot: '#f59e0b' },
  'Concept Exploration': { dot: '#06b6d4' },
};

function FwBadge({ maturity, color }) {
  const m = FW_MATURITY_META[maturity] ?? { dot: '#94a3b8' };
  return (
    <span className="fw-badge">
      <span className="fw-badge__dot" style={{ background: m.dot }} />
      <span className="fw-badge__label" style={{ color }}>{maturity}</span>
    </span>
  );
}
