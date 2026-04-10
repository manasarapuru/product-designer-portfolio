import { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IntroContext, ThemeContext } from '../App';
import './Navbar.css';
import './Footer.css';

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const { replayIntro } = useContext(IntroContext);
  const { dark, toggleDark } = useContext(ThemeContext);

  function close() { setOpen(false); }


  return (
    <header className="navbar">
      <div className="navbar__brand">
        <button className="navbar__avatar" onClick={replayIntro} title="Replay intro">
          <svg width="28" height="46" viewBox="0 0 36 60" aria-hidden="true">
            {/* Hair back */}
            <ellipse cx="18" cy="10" rx="10" ry="11" fill="#3d2314" />
            <rect x="8" y="10" width="4" height="20" rx="2" fill="#3d2314" />
            <rect x="24" y="10" width="4" height="20" rx="2" fill="#3d2314" />
            {/* Face */}
            <ellipse cx="18" cy="11" rx="8" ry="9" fill="#f5c5a3" />
            {/* Hair top */}
            <ellipse cx="18" cy="4" rx="8" ry="5" fill="#3d2314" />
            <ellipse cx="13" cy="4" rx="3.5" ry="4" fill="#3d2314" />
            <ellipse cx="23" cy="4" rx="3.5" ry="4" fill="#3d2314" />
            {/* Eyes */}
            <ellipse cx="14.5" cy="11" rx="1.8" ry="2" fill="#fff" />
            <ellipse cx="21.5" cy="11" rx="1.8" ry="2" fill="#fff" />
            <ellipse cx="14.8" cy="11.2" rx="1.1" ry="1.3" fill="#3d2314" />
            <ellipse cx="21.8" cy="11.2" rx="1.1" ry="1.3" fill="#3d2314" />
            <circle cx="15.2" cy="10.5" r="0.4" fill="#fff" />
            <circle cx="22.2" cy="10.5" r="0.4" fill="#fff" />
            {/* Blush */}
            <ellipse cx="12" cy="13.5" rx="2" ry="1.2" fill="#f4a0a0" opacity="0.6" />
            <ellipse cx="24" cy="13.5" rx="2" ry="1.2" fill="#f4a0a0" opacity="0.6" />
            {/* Smile */}
            <path d="M15 15.5 Q18 17.5 21 15.5" stroke="#c06060" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            {/* Neck */}
            <rect x="16" y="19" width="4" height="3" rx="1" fill="#f5c5a3" />
            {/* Shirt */}
            <rect x="10" y="22" width="16" height="14" rx="5" fill="#b5222a" />
            <path d="M16 22 Q18 25 20 22" stroke="#f5c5a3" strokeWidth="1.5" fill="none" />
            <circle cx="14" cy="27" r="1.2" fill="#fff" opacity="0.8" />
            <circle cx="22" cy="26" r="1" fill="#ffcdd2" opacity="0.9" />
            <circle cx="18" cy="29" r="1" fill="#ffcdd2" opacity="0.9" />
            {/* Arms */}
            <rect x="8" y="23" width="3" height="9" rx="1.5" fill="#f5c5a3" />
            <rect x="25" y="23" width="3" height="9" rx="1.5" fill="#f5c5a3" />
            <rect x="8" y="30" width="3" height="2" rx="1" fill="#b5222a" />
            <rect x="25" y="30" width="3" height="2" rx="1" fill="#b5222a" />
            {/* Jeans */}
            <rect x="11" y="35" width="14" height="16" rx="4" fill="#3a5f8a" />
            <rect x="17" y="35" width="2" height="4" rx="1" fill="#2e4f75" />
            <rect x="12" y="39" width="5" height="10" rx="3" fill="#4a72a0" />
            <rect x="19" y="39" width="5" height="10" rx="3" fill="#4a72a0" />
            {/* Shoes */}
            <ellipse cx="15" cy="52" rx="5" ry="3" fill="#2a1f1a" />
            <ellipse cx="21" cy="52" rx="5" ry="3" fill="#2a1f1a" />
            <ellipse cx="14" cy="51" rx="3" ry="1.5" fill="#3d2e28" />
            <ellipse cx="20" cy="51" rx="3" ry="1.5" fill="#3d2e28" />
          </svg>
        </button>
        <div className="navbar__name-group">
          <Link to="/" className="navbar__name" onClick={close}>Manasa Rapuru</Link>
          <span className="navbar__subtitle">product designer & developer</span>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="navbar__links">
        <Link to="/projects" className={`navbar__link ${pathname === '/projects' ? 'navbar__link--active' : ''}`}>Projects</Link>
        <Link to="/about" className={`navbar__link ${pathname === '/about' ? 'navbar__link--active' : ''}`}>About Me</Link>
        <a href="https://www.linkedin.com/in/manasa-rapuru-b10914126/recent-activity/all/" target="_blank" rel="noopener noreferrer" className="navbar__link" aria-label="Articles (coming soon)">Articles</a>
        <a href="https://www.linkedin.com/in/manasa-rapuru-b10914126" target="_blank" rel="noopener noreferrer" className="navbar__linkedin-btn">
          Connect on LinkedIn
        </a>
        <button className="navbar__theme-toggle" onClick={toggleDark} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
          {dark ? <IconSun /> : <IconMoon />}
        </button>
      </nav>

      {/* Mobile hamburger */}
      <button
        className={`navbar__burger${open ? ' navbar__burger--open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <span /><span /><span />
      </button>

      {/* Mobile drawer */}
      {open && (
        <div className="navbar__drawer" role="dialog" aria-modal="true">
          <Link to="/projects" className="navbar__drawer-link" onClick={close}>Projects</Link>
          <Link to="/about" className="navbar__drawer-link" onClick={close}>About Me</Link>
          <a href="#" className="navbar__drawer-link" onClick={close}>Articles</a>
          <a href="https://linkedin.com/in/manasarapuru" target="_blank" rel="noopener noreferrer" className="navbar__drawer-link" onClick={close}>Connect on LinkedIn</a>
        </div>
      )}
    </header>
  );
}

function IconSun() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function IconMoon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
    </svg>
  );
}
