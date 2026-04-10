import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Resume.css';

const TABS = ['Who I Am', 'Experience', 'Education', 'Skills'];

export default function AboutMe() {
  const [tab, setTab] = useState('Who I Am');

  return (
    <div className="resume">
      <Navbar />
      <main className="resume__main">

        <div className="resume__header">
          <div className="resume__header-text">
            <h1 className="resume__name serif">Manasa Rapuru</h1>
            <p className="resume__title">Product Designer · Developer · Bioinformatician</p>
          </div>
          <a href="#" className="resume__download" aria-label="Download resume PDF">
            <DownloadIcon />
            Download Resume
          </a>
        </div>

        <div className="resume__summary">
          <p className="resume__summary-text">
            3+ years designing data-heavy, decision-critical tools. Background in bioinformatics — I understand the domain, not just the interface. I code what I design.
          </p>
        </div>

        <div className="resume__tabs" role="tablist">
          {TABS.map(t => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              className={`resume__tab${tab === t ? ' resume__tab--active' : ''}`}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="resume__panel" role="tabpanel">
          {tab === 'Who I Am'   && <WhoIAm />}
          {tab === 'Experience' && <Experience />}
          {tab === 'Education'  && <Education />}
          {tab === 'Skills'     && <Skills />}
        </div>

      </main>
      <Footer />
    </div>
  );
}

/* ── Who I Am ───────────────────────────────────────────── */
function WhoIAm() {
  return (
    <div className="whoiam">

      <div className="whoiam__intro-row">
        <img src="/avatar.png" alt="Manasa Rapuru" className="whoiam__photo" />
        <div>
          <span className="whoiam__label"></span>
          <p className="whoiam__lead serif">
            I combine cognitive science principles with UX to design complex systems that align with mental models and minimize cognitive load.
          </p>
          <p className="whoiam__body">
            I'm driven by designing products that turn complexity into clarity. Working in bioinformatics exposed me to tools that were technically powerful but hard to use — showing me how even the best systems can fall short without thoughtful design. That experience shaped my approach: designing products that match users' mental models, reduce cognitive load, and make complex systems intuitive, efficient, and impactful.
          </p>
          <p className="whoiam__body">
            I believe great design isn't decoration. It's structure. My work strips away noise, surfaces what matters, and guides people to confident action without friction.
          </p>
        </div>
      </div>

  

      <div className="whoiam__section">
        <span className="whoiam__label">How I Work</span>
        <p className="whoiam__lead serif">A loop, not a line.</p>
        <p className="whoiam__body">
          From user flows to high-fidelity, through prototyping and real feedback — I work in cycles that keep improving until the design earns its place. Each pass asks: does this solve the right thing for the right person?
        </p>
        <div className="whoiam__process-svg-wrap">
          <svg className="whoiam__process-svg" viewBox="0 0 340 340" aria-label="Design process loop">
            <defs>
              <marker id="pa" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0.5,1 L5,3 L0.5,5" fill="none" stroke="#C8C3B8" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </marker>
            </defs>
            <circle cx="170" cy="170" r="105" fill="none" stroke="#E8E4DC" strokeWidth="1.2" strokeDasharray="5 4"/>
            <line x1="184" y1="72"  x2="238" y2="97"  stroke="#C8C3B8" strokeWidth="1.2" markerEnd="url(#pa)"/>
            <line x1="256" y1="120" x2="268" y2="177" stroke="#C8C3B8" strokeWidth="1.2" markerEnd="url(#pa)"/>
            <line x1="262" y1="206" x2="225" y2="252" stroke="#C8C3B8" strokeWidth="1.2" markerEnd="url(#pa)"/>
            <line x1="199" y1="264" x2="141" y2="264" stroke="#C8C3B8" strokeWidth="1.2" markerEnd="url(#pa)"/>
            <line x1="115" y1="252" x2="78"  y2="206" stroke="#C8C3B8" strokeWidth="1.2" markerEnd="url(#pa)"/>
            <line x1="72"  y1="177" x2="84"  y2="120" stroke="#C8C3B8" strokeWidth="1.2" markerEnd="url(#pa)"/>
            <line x1="102" y1="97"  x2="156" y2="72"  stroke="#C8C3B8" strokeWidth="1.2" markerEnd="url(#pa)"/>
            <circle cx="170" cy="65"  r="16" fill="#fff0f0" stroke="#ff6b6b" strokeWidth="1.5"/>
            <text x="170" y="70"  textAnchor="middle" fontSize="10" fontWeight="700" fill="#ff6b6b">1</text>
            <circle cx="252" cy="104" r="16" fill="#d4f5f3" stroke="#4ecdc4" strokeWidth="1.5"/>
            <text x="252" y="109" textAnchor="middle" fontSize="10" fontWeight="700" fill="#4ecdc4">2</text>
            <circle cx="272" cy="193" r="16" fill="#F0EBE0" stroke="#8A857E" strokeWidth="1.5"/>
            <text x="272" y="198" textAnchor="middle" fontSize="10" fontWeight="700" fill="#3A3530">3</text>
            <circle cx="215" cy="265" r="16" fill="#fffce0" stroke="#c8a800" strokeWidth="1.5"/>
            <text x="215" y="270" textAnchor="middle" fontSize="10" fontWeight="700" fill="#c8a800">4</text>
            <circle cx="125" cy="265" r="16" fill="#fff0f0" stroke="#ff6b6b" strokeWidth="1.5"/>
            <text x="125" y="270" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ff6b6b">5</text>
            <circle cx="68"  cy="193" r="16" fill="#d4f5f3" stroke="#4ecdc4" strokeWidth="1.5"/>
            <text x="68"  y="198" textAnchor="middle" fontSize="10" fontWeight="700" fill="#4ecdc4">6</text>
            <circle cx="88"  cy="104" r="16" fill="#F0EBE0" stroke="#8A857E" strokeWidth="1.5"/>
            <text x="88"  y="109" textAnchor="middle" fontSize="10" fontWeight="700" fill="#3A3530">7</text>
            <text x="170" y="36"  textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#1A1512">User Flows</text>
            <text x="170" y="47"  textAnchor="middle" fontSize="6"   fill="#8A857E">Define logic</text>
            <text x="272" y="83"  textAnchor="start"  fontSize="7.5" fontWeight="700" fill="#1A1512">Wireframes</text>
            <text x="272" y="94"  textAnchor="start"  fontSize="6"   fill="#8A857E">Structure experience</text>
            <text x="272" y="162" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#1A1512">Vibe Coding</text>
            <text x="272" y="173" textAnchor="middle" fontSize="6"   fill="#8A857E">Explore &amp; validate</text>
            <text x="215" y="294" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#1A1512">High-Fidelity UI</text>
            <text x="215" y="305" textAnchor="middle" fontSize="6"   fill="#8A857E">Refine &amp; hierarchy</text>
            <text x="125" y="294" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#1A1512">Prototype</text>
            <text x="125" y="305" textAnchor="middle" fontSize="6"   fill="#8A857E">Test usability</text>
            <text x="48"  y="190" textAnchor="end"    fontSize="7.5" fontWeight="700" fill="#1A1512">Handoff &amp; Ship</text>
            <text x="48"  y="201" textAnchor="end"    fontSize="6"   fill="#8A857E">Enable build</text>
            <text x="68"  y="83"  textAnchor="end"    fontSize="7.5" fontWeight="700" fill="#1A1512">Feedback &amp;</text>
            <text x="68"  y="93"  textAnchor="end"    fontSize="7.5" fontWeight="700" fill="#1A1512">Iteration</text>
            <text x="68"  y="104" textAnchor="end"    fontSize="6"   fill="#8A857E">Prioritize improvements</text>
            <text x="170" y="166" textAnchor="middle" fontSize="8" fontWeight="700" letterSpacing="1.5" fill="#3A3530">DESIGN</text>
            <text x="170" y="178" textAnchor="middle" fontSize="8" fontWeight="700" letterSpacing="1.5" fill="#3A3530">LOOP</text>
          </svg>
        </div>
      </div>

      <div className="whoiam__divider" />


    </div>
  );
}

/* ── Experience ─────────────────────────────────────────── */
const EXPERIENCE = [
  {
    role: 'Scientific Product Designer & Bioinformatics Scientist',
    org: 'Thermo Fisher Scientific',
    period: 'Apr 2024 – Nov 2025',
    bullets: [
      'Developed and implemented internal tools and process improvements that streamlined data processing, reduced turnaround time, increased scalability, and supported revenue growth',
      'Partnered with cross-functional stakeholders to define requirements and test prototypes',
      'Developed a conversational AI chatbot leveraging NLP and RAG to explore low-effort ways to improve accessibility to internal application data',
      'Supported revenue-generating genomics service by delivering custom bioinformatics assay designs for molecular diagnostics and targeted genomic analysis',
    ],
  },
  {
    role: 'Bioinformatics Specialist: Analyst & Developer Roles',
    org: 'Massachusetts General Hospital',
    period: 'Mar 2021 – Aug 2023',
    bullets: [
      'Developed a Python-based analytical pipeline (Pandas, NumPy, Matplotlib, Scikit-Learn) to model cell morphology metrics derived from IncuCyte imaging.',
      'Conducted transcriptomic analysis of RNA-Seq, Single-cell RNA-Seq, and Tandem Repeat genomic datasets to investigate disease-associated gene expression patterns in Huntington\'s disease using DESeq2 and ggplot2.',
    ],
  },
  {
    role: 'Bioinformatics Master\'s Student: Analyst and Product Roles',
    org: 'Boston University',
    period: 'Sept 2021 – May 2023',
    bullets: [
      'Contributed to a group product development project to design and build a data exploration platform for Alzheimer\'s transcriptomic datasets',
      'Served as project lead/manager, coordinating team efforts, defining scope, and aligning development with user needs',
      'Owned the frontend design and development, creating interactive visualizations for gene expression exploration',
      'Translated complex multi-dimensional data into an intuitive, exploratory interface using HTML, CSS, JavaScript, Python, and SQL',
    ],
  },
  {
    role: 'Bioinformatics Intern',
    org: 'Sandia National Laboratories',
    period: 'Jun 2020 – Aug 2020',
    bullets: [
      'Conducted computational genomics analyses supporting Phage Therapy research, identified integrative genetic elements in bacterial genomes through phylogenetic and comparative analyses.',
    ],
  },
  {
    role: 'Undergraduate Bioinformatics Research Student',
    org: 'San Jose State University',
    period: 'Jan 2019 – Dec 2020',
    bullets: [
      'Conducted phylogenetic and protein visualization analyses to understand evolutionary relationships of Candidatus Saccharibacteria in the oral microbiome.',
    ],
  },
];

function Experience() {
  return (
    <div className="resume__timeline">
      {EXPERIENCE.map((job, i) => (
        <div key={i} className="resume__job">
          <div className="resume__job-left">
            <span className="resume__job-period">{job.period}</span>
          </div>
          <div className="resume__job-line">
            <div className="resume__job-dot" />
            {i < EXPERIENCE.length - 1 && <div className="resume__job-connector" />}
          </div>
          <div className="resume__job-right">
            <p className="resume__job-role">{job.role}</p>
            <p className="resume__job-org">{job.org}</p>
            <ul className="resume__job-bullets">
              {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Education ──────────────────────────────────────────── */
const EDUCATION = [
  { degree: 'User Experience Research And Design', institution: 'Coursera', period: 'In Progress' },
  { degree: 'AI Developer Certification',          institution: 'Coursera', period: 'Oct 2025 – Jan 2026' },
  { degree: 'Full Stack Developer Certification',  institution: 'Coursera', period: 'Nov 2023 – Apr 2024' },
  { degree: 'M.S. Bioinformatics',                 institution: 'Boston University', period: '2021 – 2023' },
  { degree: 'B.S. Microbiology & Chemistry Minor', institution: 'San Jose State University', period: '2016 – 2020' },
];

function Education() {
  return (
    <div className="resume__timeline">
      {EDUCATION.map((edu, i) => (
        <div key={i} className="resume__job">
          <div className="resume__job-left">
            <span className="resume__job-period">{edu.period}</span>
          </div>
          <div className="resume__job-line">
            <div className="resume__job-dot" style={{ background: '#4ecdc4', borderColor: '#4ecdc4' }} />
            {i < EDUCATION.length - 1 && <div className="resume__job-connector" />}
          </div>
          <div className="resume__job-right">
            <p className="resume__job-role">{edu.degree}</p>
            <p className="resume__job-org">{edu.institution}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Skills ─────────────────────────────────────────────── */
const SKILL_GROUPS = [
  { label: 'Design',          color: '#ff6b6b', soft: '#fff0f0', skills: ['Figma', 'Prototyping', 'Design Systems', 'User Flows', 'Wireframing', 'High-Fidelity UI', 'UX Research'] },
  { label: 'Development',     color: '#4ecdc4', soft: '#d4f5f3', skills: ['React', 'JavaScript', 'HTML & CSS', 'Python', 'R', 'HPC', 'Git'] },
  { label: 'Domain',          color: '#c8a800', soft: '#fffce0', skills: ['Bioinformatics', 'Genomics',  'Multi-omics', 'Research Methods'] },
  // { label: 'Tools & Process', color: '#1a535c', soft: '#d4eced', skills: ['AI-assisted design', 'Notion', 'Linear', 'Handoff & Specs', 'Agile / Scrum'] },
];

function Skills() {
  return (
    <div className="resume__skills">
      {SKILL_GROUPS.map(group => (
        <div key={group.label} className="resume__skill-group">
          <h3 className="resume__skill-heading" style={{ color: group.color }}>{group.label}</h3>
          <div className="resume__skill-chips">
            {group.skills.map(s => (
              <span key={s} className="resume__chip" style={{ background: group.soft, color: group.color }}>{s}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 2v8M5 7l3 3 3-3M2 11v1a2 2 0 002 2h8a2 2 0 002-2v-1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
