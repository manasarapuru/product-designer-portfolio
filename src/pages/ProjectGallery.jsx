import { useParams, useNavigate, Link } from 'react-router-dom';
import { getProjectsByCategory, getCategoryById } from '../data/projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ProjectGallery.css';

export default function ProjectGallery() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const category = getCategoryById(categoryId);
  const projects = getProjectsByCategory(categoryId);

  if (!category) {
    return (
      <div className="gallery">
        <Navbar />
        <div className="gallery__empty">
          <p>Category not found.</p>
          <Link to="/" className="gallery__back">← Back home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="gallery">
      <Navbar />

      {/* Mobile-only chapter banner */}
      <div
        className="gallery__mobile-banner"
        style={{ '--cat-color': category.color, '--cat-soft': category.softColor }}
      >
        <button className="gallery__mobile-back" onClick={() => navigate('/')}>← All</button>
        <div className="gallery__mobile-banner-body">
          <span className="gallery__mobile-label">{category.label}</span>
          <p className="gallery__mobile-desc">{category.description}</p>
        </div>
        <span className="gallery__mobile-count" style={{ background: category.color }}>
          {projects.length}
        </span>
      </div>

      <main className="gallery__main">
        {/* Desktop sidebar */}
        <aside className="gallery__sidebar">
          <button className="gallery__back-btn" onClick={() => navigate('/')} aria-label="Back to home">
            ← All categories
          </button>
          <div className="gallery__category-card" style={{ '--cat-color': category.color }}>
            <div className="gallery__category-card-bar" />
            <h1 className="gallery__category-name serif">{category.label}</h1>
            <hr className="gallery__divider" />
            <p className="gallery__category-desc">{category.description}</p>
          </div>
        </aside>

        {/* Project list */}
        <section className="gallery__list-col">
          <p className="gallery__list-heading">
            Projects
            <span className="gallery__count" style={{ background: category.softColor, color: category.color }}>
              {projects.length}
            </span>
          </p>

          {projects.length === 0 ? (
            <p className="gallery__no-projects">No projects in this category yet.</p>
          ) : (
            <ul className="gallery__list" role="list">
              {projects.map((project) => (
                <li key={project.id}>
                  <ProjectCard
                    project={project}
                    categoryColor={category.color}
                    onClick={() => navigate(`/case-study/${project.id}`, { state: { fromCategory: categoryId } })}
                  />
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ProjectCard({ project, categoryColor, onClick }) {
  const impacts = project.caseStudy?.impactHeadline?.filter(h => h.stat) ?? [];
  const isComingSoon = project.comingSoon;
  return (
    <button
      className={`project-card${isComingSoon ? ' project-card--coming-soon' : ''}`}
      onClick={isComingSoon ? undefined : onClick}
      aria-label={isComingSoon ? project.title : `View case study: ${project.title}`}
      style={{ '--cat-color': categoryColor }}
      disabled={isComingSoon}
    >
      <div className="project-card__accent" aria-hidden="true" />

      <div className="project-card__body">
        {/* Top: meta row */}
        <div className="project-card__meta-row">
          <span className="project-card__year">{project.year}</span>
          {project.company && (
            <>
              <span className="project-card__sep" aria-hidden="true">·</span>
              <span className="project-card__company">{project.company}</span>
            </>
          )}
          {project.maturity && (
            <>
              <span className="project-card__sep" aria-hidden="true">·</span>
              <span className="project-card__maturity">{project.maturity}</span>
            </>
          )}
          {!isComingSoon && (
            <span className="project-card__cta">
              View case study <ArrowRight />
            </span>
          )}
        </div>

        {/* Title + tagline + role */}
        <h2 className="project-card__title serif">{project.title}</h2>
        {project.tagline && <p className="project-card__tagline">{project.tagline}</p>}
        <p className="project-card__role">{project.role}</p>

        {/* Impact zone */}
        {impacts.length > 0 && (
          <div className="project-card__impact-zone">
            <span className="project-card__impact-label">Impact</span>
            <div className="project-card__impacts">
              {impacts.map((h, i) => (
                <div key={i} className="project-card__impact">
                  <span className="project-card__impact-stat">{h.stat}</span>
                  {h.context && <span className="project-card__impact-ctx">{h.context}</span>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </button>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
