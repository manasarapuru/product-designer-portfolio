import { useEffect, useState } from 'react';
import './PosterContextAnimation.css';

const POSTER = {
  title: 'Epigenetic Regulation of FOXP3+ Regulatory T Cells in Tumour Microenvironments',
  authors: 'Zhang et al.',
  tags: ['DNMT3A', 'Treg suppression', 'scRNA-seq', 'CpG methylation'],
};

const THOUGHTS = [
  { text: 'What does FOXP3 mean?',         delay: 800  },
  { text: 'I don\'t know where to start…', delay: 2200 },
  { text: 'Is this relevant to me?',        delay: 3600 },
  { text: 'Too dense. Moving on.',          delay: 5000 },
];

const PEOPLE = [
  { x: 12,  y: 58, dir: 1,  speed: 0.55, size: 1.0  },
  { x: 34,  y: 70, dir: -1, speed: 0.40, size: 0.9  },
  { x: 58,  y: 62, dir: 1,  speed: 0.65, size: 1.05 },
  { x: 76,  y: 55, dir: -1, speed: 0.35, size: 0.95 },
  { x: 22,  y: 75, dir: 1,  speed: 0.50, size: 0.85 },
  { x: 88,  y: 68, dir: -1, speed: 0.60, size: 1.0  },
  { x: 46,  y: 80, dir: 1,  speed: 0.45, size: 0.9  },
];

export default function PosterContextAnimation() {
  const [visibleThoughts, setVisibleThoughts] = useState([]);
  const [glitchIdx, setGlitchIdx] = useState(null);
  const [peoplePos, setPeoplePos] = useState(PEOPLE.map(p => p.x));

  // Stagger thought bubbles, then reset and replay
  useEffect(() => {
    const run = () => {
      setVisibleThoughts([]);
      THOUGHTS.forEach((th, i) => {
        setTimeout(() => setVisibleThoughts(prev => [...prev, i]), th.delay);
      });
    };
    run();
    const loop = setInterval(run, 7500);
    return () => clearInterval(loop);
  }, []);

  // Random glitch highlight on jargon tags
  useEffect(() => {
    const t = setInterval(() => {
      setGlitchIdx(Math.floor(Math.random() * POSTER.tags.length));
      setTimeout(() => setGlitchIdx(null), 400);
    }, 1100);
    return () => clearInterval(t);
  }, []);

  // Animate people walking
  useEffect(() => {
    let raf;
    const tick = () => {
      setPeoplePos(prev =>
        prev.map((x, i) => {
          const p = PEOPLE[i];
          let next = x + p.dir * p.speed;
          if (next > 105) next = -8;
          if (next < -8)  next = 105;
          return next;
        })
      );
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="pca">
      <p className="pca__eyebrow">The environment</p>

      {/* ── Walking crowd ── */}
      <div className="pca__hall">
        <div className="pca__hall-label">Poster session hall — ~200 attendees, 90 minutes</div>
        <div className="pca__crowd">
          {PEOPLE.map((p, i) => (
            <div
              key={i}
              className="pca__person"
              style={{
                left: `${peoplePos[i]}%`,
                top: `${p.y}%`,
                transform: `scale(${p.dir === -1 ? -p.size : p.size}, ${p.size})`,
              }}
            >
              <svg width="14" height="22" viewBox="0 0 14 22" fill="none" aria-hidden="true">
                <circle cx="7" cy="4" r="3" fill="currentColor" opacity="0.7" />
                <rect x="4" y="7" width="6" height="7" rx="1.5" fill="currentColor" opacity="0.6" />
                <line x1="5" y1="14" x2="4" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                <line x1="9" y1="14" x2="10" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
              </svg>
            </div>
          ))}
          <div className="pca__boards">
            <div className="pca__board" />
            <div className="pca__board" />
            <div className="pca__board" />
            <div className="pca__board" />
          </div>
        </div>
      </div>

      {/* ── Active poster being read ── */}
      <div className="pca__reader-scene">

        {/* The poster */}
        <div className="pca__poster">
          <div className="pca__poster-header">
            <p className="pca__poster-title">{POSTER.title}</p>
            <span className="pca__poster-authors">{POSTER.authors}</span>
          </div>
          <div className="pca__poster-body">
            <div className="pca__text-blocks">
              {[85, 100, 72, 90, 60, 78, 95, 65].map((w, i) => (
                <div key={i} className="pca__text-line" style={{ width: `${w}%` }} />
              ))}
            </div>
            <div className="pca__jargon-row">
              {POSTER.tags.map((tag, i) => (
                <span
                  key={tag}
                  className={`pca__jargon${glitchIdx === i ? ' pca__jargon--glitch' : ''}`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="pca__figure">
              <div className="pca__figure-box" />
              <span className="pca__figure-caption">Fig 3B — UMAP clustering of CD4+ subpopulations (n=14,280 cells)</span>
            </div>
          </div>
        </div>

        {/* Reader + thought bubbles */}
        <div className="pca__reader-col">
          <div className="pca__reader">
            <svg width="28" height="44" viewBox="0 0 14 22" fill="none" aria-hidden="true">
              <circle cx="7" cy="4" r="3" fill="#374151" />
              <rect x="4" y="7" width="6" height="7" rx="1.5" fill="#374151" />
              <line x1="5" y1="14" x2="4" y2="21" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
              <line x1="9" y1="14" x2="10" y2="21" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="pca__thoughts">
            {THOUGHTS.map((th, i) => (
              <div
                key={i}
                className={`pca__thought${visibleThoughts.includes(i) ? ' pca__thought--visible' : ''}${i === 3 ? ' pca__thought--leave' : ''}`}
              >
                {th.text}
              </div>
            ))}
          </div>
        </div>

      </div>

      <p className="pca__caption">Dense posters + unfamiliar jargon + crowded halls = disengagement before the conversation starts.</p>
    </div>
  );
}
