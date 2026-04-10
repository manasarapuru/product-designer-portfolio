import { useState, createContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

export const IntroContext = createContext(null);
export const ThemeContext = createContext(null);
import Landing from './pages/Landing';
import ProjectGallery from './pages/ProjectGallery';
import AllProjects from './pages/AllProjects';
import CaseStudy from './pages/CaseStudy';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Intro from './components/Intro';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div key={location.pathname} className="page-fade">
      <Routes location={location}>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/projects/:categoryId" element={<ProjectGallery />} />
        <Route path="/case-study/:projectId" element={<CaseStudy />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default function App() {
  const [showIntro, setShowIntro] = useState(
    () => !sessionStorage.getItem('intro-seen')
  );

  const [dark, setDark] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  function handleIntroDone() {
    sessionStorage.setItem('intro-seen', '1');
    setShowIntro(false);
  }

  function handleIntroReplay() {
    sessionStorage.removeItem('intro-seen');
    setShowIntro(true);
  }

  return (
    <ThemeContext.Provider value={{ dark, toggleDark: () => setDark(d => !d) }}>
      <IntroContext.Provider value={{ replayIntro: handleIntroReplay }}>
        <BrowserRouter basename="/product-designer-portfolio/">
          {showIntro && <Intro onDone={handleIntroDone} />}
          <AnimatedRoutes />
        </BrowserRouter>
      </IntroContext.Provider>
    </ThemeContext.Provider>
  );
}
