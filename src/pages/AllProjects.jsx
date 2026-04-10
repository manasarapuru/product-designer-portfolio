import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllProjects, CATEGORIES } from '../data/projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './AllProjects.css';
import './ProjectGallery.css';

const PURPOSE_FILTERS = [
  { id: 'all',           label: 'All' },
  { id: 'data-retrieval',label: 'Data Retrieval' },
  { id: 'exploration',   label: 'Exploration' },
  { id: 'learning',      label: 'Learning' },
];

const LOCATION_FILTERS = [
  { id: 'all',                    label: 'All' },
  { id: 'Thermo Fisher Scientific', label: 'Thermo Fisher' },
  { id: 'Boston University',       label: 'Boston University' },
  { id: 'Independent',             label: 'Independent' },
];

const CATEGORY_COLOR = Object.fromEntries(CATEGORIES.map(c => [c.id, c.color]));

export default function AllProjects() {
  const navigate = useNavigate();
  const allProjects = getAllProjects();

  const [purpose,      setPurpose]  = useState('all');
  const [location,     setLocation] = useState('all');
  const [selectedTools, setSelectedTools] = useState([]);
  const [toolsOpen,    setToolsOpen] = useState(false);

  // Collect all unique tools across projects
  const allTools = useMemo(() => {
    const set = new Set();
    allProjects.forEach(p => p.tools?.forEach(t => set.add(t)));
    return Array.from(set).sort();
  }, [allProjects]);

  function toggleTool(t) {
    setSelectedTools(prev =>
      prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]
    );
  }

  const filtered = useMemo(() => {
    return allProjects.filter(p => {
      const matchPurpose  = purpose  === 'all' || p.categories?.includes(purpose);
      const matchLocation = location === 'all' || p.company === location;
      const matchTool     = selectedTools.length === 0 || selectedTools.some(t => p.tools?.includes(t));
      return matchPurpose && matchLocation && matchTool;
    });
  }, [allProjects, purpose, location, selectedTools]);

  const primaryColor = (p) => CATEGORY_COLOR[p.categories?.[0]] ?? '#4ecdc4';

  return (
    <div className="ap">
      <Navbar />

      <main className="ap__main">
        <div className="ap__header">
          <h1 className="ap__title serif">All Projects</h1>
          <span className="ap__count">{filtered.length} project{filtered.length !== 1 ? 's' : ''}</span>
        </div>

        {/* ── Filters ── */}
        <div className="ap__filters">
          <FilterDropdown
            label="Purpose"
            options={PURPOSE_FILTERS}
            value={purpose}
            onChange={setPurpose}
          />
          <ToolsMultiSelect
            tools={allTools}
            selected={selectedTools}
            onToggle={toggleTool}
            open={toolsOpen}
            setOpen={setToolsOpen}
            onClear={() => setSelectedTools([])}
          />
          <FilterDropdown
            label="Location"
            options={LOCATION_FILTERS}
            value={location}
            onChange={setLocation}
          />
          {(purpose !== 'all' || selectedTools.length > 0 || location !== 'all') && (
            <button className="ap__filter-clear" onClick={() => { setPurpose('all'); setSelectedTools([]); setLocation('all'); }}>
              Clear filters
            </button>
          )}
        </div>

        {/* ── Project list ── */}
        {filtered.length === 0 ? (
          <p className="gallery__no-projects">No projects match these filters.</p>
        ) : (
          <ul className="gallery__list" role="list">
            {filtered.map(project => (
              <li key={project.id}>
                <ProjectCard
                  project={project}
                  categoryColor={primaryColor(project)}
                  onClick={() => navigate(`/case-study/${project.id}`, { state: { fromCategory: project.categories?.[0] } })}
                />
              </li>
            ))}
          </ul>
        )}
      </main>

      <Footer />
    </div>
  );
}

function FilterDropdown({ label, options, value, onChange }) {
  return (
    <div className="ap__dropdown-wrap">
      <label className="ap__dropdown-label">{label}</label>
      <select
        className="ap__dropdown"
        value={value}
        onChange={e => onChange(e.target.value)}
        aria-label={label}
      >
        {options.map(opt => (
          <option key={opt.id} value={opt.id}>{opt.label}</option>
        ))}
      </select>
      <ChevronIcon />
    </div>
  );
}

function ProjectCard({ project, categoryColor, onClick }) {
  const impacts = project.caseStudy?.impactHeadline?.filter(h => h.stat) ?? [];
  return (
    <button
      className="project-card"
      onClick={onClick}
      aria-label={`View case study: ${project.title}`}
      style={{ '--cat-color': categoryColor }}
    >
      <div className="project-card__accent" aria-hidden="true" />
      <div className="project-card__body">
        <div className="project-card__meta-row">
          <span className="project-card__year">{project.year}</span>
          {project.maturity && (
            <>
              <span className="project-card__sep">·</span>
              <span className="project-card__maturity">{project.maturity}</span>
            </>
          )}
          <span className="project-card__cta">View case study <ArrowRight /></span>
        </div>
        <h2 className="project-card__title serif">{project.title}</h2>
        <p className="project-card__role">{project.role}</p>
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

function ToolsMultiSelect({ tools, selected, onToggle, open, setOpen, onClear }) {
  const label = selected.length === 0 ? 'All' : selected.length === 1 ? selected[0] : `${selected.length} tools`;
  return (
    <div className="ap__dropdown-wrap" style={{ position: 'relative' }}>
      <label className="ap__dropdown-label">Tools</label>
      <button
        className={`ap__dropdown ap__dropdown--multi${open ? ' ap__dropdown--open' : ''}`}
        onClick={() => setOpen(o => !o)}
        type="button"
      >
        <span className={selected.length > 0 ? 'ap__dropdown-val--active' : ''}>{label}</span>
        <ChevronIcon />
      </button>
      {open && (
        <>
          <div className="ap__tools-backdrop" onClick={() => setOpen(false)} />
          <div className="ap__tools-panel">
            <ul className="ap__tools-list" role="listbox" aria-multiselectable="true">
              {tools.map(t => {
                const checked = selected.includes(t);
                return (
                  <li key={t}>
                    <label className={`ap__tools-item${checked ? ' ap__tools-item--on' : ''}`}>
                      <input
                        type="checkbox"
                        className="ap__tools-checkbox"
                        checked={checked}
                        onChange={() => onToggle(t)}
                      />
                      <span className="ap__tools-checkmark" aria-hidden="true">
                        {checked && <CheckIcon />}
                      </span>
                      {t}
                    </label>
                  </li>
                );
              })}
            </ul>
            {selected.length > 0 && (
              <button className="ap__tools-clear" onClick={() => { onClear(); }} type="button">
                Clear all
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <polyline points="2 6 5 9 10 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg className="ap__dropdown-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  );
}

