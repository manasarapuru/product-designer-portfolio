import { useState, useEffect, useRef, useCallback } from 'react';
import './TeamsChatAnimation.css';

// Each message: { id, from, name, role, time, text, attachment, dayBreak }
const MESSAGES = [
  {
    id: 1, from: 'alex', name: 'Alex M.', role: 'customer team',
    time: 'Day 1  ·  11:14 AM',
    text: 'Hi Sam! Could you process this request for me please?',
    attachment: 'customers_request.xlsx',
  },
  {
    id: 2, from: 'sam', name: 'Sam R.', role: 'supporting team',
    time: 'Day 1  ·  2:42 PM',
    text: 'On it! I actually do not have the data readily available. I will get it over to you once I have generated it.',
  },
  {
    id: 3, from: 'sam', name: 'Sam R.', role: 'supporting team',
    time: 'Day 2  ·  10:12 AM',
    text: 'Hi Alex, here is the data you have requested.',
    attachment: 'request_results.xlsx',
  },
  {
    id: 4, from: 'alex', name: 'Alex M.', role: 'customer team',
    time: 'Day 2  ·  11:01 AM',
    text: 'Hey Sam, Customer would like you to add the following information as well. Sorry for the trouble!',
    dayBreak: 'Next morning',
    attachment: 'customer_request_updated.xlsx',
  },
  {
    id: 5, from: 'sam', name: 'Sam R.', role: 'supporting team',
    time: 'Day 2  ·  11:38 AM',
    text: 'Sure thing, I will add this to the file and get it back to you.',
  },
  {
    id: 6, from: 'sam', name: 'Sam R.', role: 'supporting team',
    time: 'Day 2  ·  3:17 PM',
    text: 'Here\'s the corrected file — sorry for the delay!',
    attachment: 'request_results_updated.xlsx',
  },
  {
    id: 7, from: 'alex', name: 'Alex M.', role: 'customer team',
    time: 'Day 2  ·  3:44 PM',
    text: 'Thank you! ',
  },
];

// When each message appears (ms into the loop)
const APPEAR_AT = [500, 2200, 4000, 5800, 7200, 9000, 10800];
const TOTAL_MS  = 13500; // loop duration

const MAX_SHOWN = 4; // sliding window of messages

export default function TeamsChatAnimation() {
  const [loopKey, setLoopKey]     = useState(0);
  const [visible, setVisible]     = useState(new Set());
  const [typing, setTyping]       = useState(null);
  const [showBadge, setShowBadge] = useState(false);
  const [playing, setPlaying]     = useState(false);
  const rootRef  = useRef(null);
  const timersRef = useRef([]);

  const startLoop = useCallback(() => {
    setVisible(new Set());
    setTyping(null);
    setShowBadge(false);

    const t = MESSAGES.flatMap((msg, i) => [
      setTimeout(() => setTyping(msg.id), APPEAR_AT[i] - 700),
      setTimeout(() => {
        setTyping(null);
        setVisible(v => new Set([...v, msg.id]));
      }, APPEAR_AT[i]),
    ]);
    t.push(setTimeout(() => setShowBadge(true), APPEAR_AT[APPEAR_AT.length - 1] + 1000));
    t.push(setTimeout(() => setLoopKey(k => k + 1), TOTAL_MS));
    timersRef.current = t;
  }, []);

  const stopLoop = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  // IntersectionObserver — play when ≥50% visible
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setPlaying(entry.isIntersecting),
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Start/stop based on playing
  useEffect(() => {
    if (playing) {
      startLoop();
    } else {
      stopLoop();
    }
    return stopLoop;
  }, [playing, loopKey, startLoop, stopLoop]); // eslint-disable-line react-hooks/exhaustive-deps

  // Sliding window: only render last MAX_SHOWN visible + currently typing
  const visibleArr = MESSAGES.filter(m => visible.has(m.id));
  const windowedIds = new Set(visibleArr.slice(-MAX_SHOWN).map(m => m.id));
  if (typing) windowedIds.add(typing);

  return (
    <div className="tca" ref={rootRef} key={loopKey}>
      {/* Laptop frame */}
      <div className="tca__laptop">
        <div className="tca__screen">

          {/* Teams sidebar */}
          <aside className="tca__sidebar">
            <div className="tca__sidebar-logo">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
                <path d="M20.5 6.5a3 3 0 100-6 3 3 0 000 6zM15 8h1.5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-.07A6 6 0 009 21H6a3 3 0 01-3-3v-6c0-2.21 1.79-4 4-4h8zM9.5 7a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"/>
              </svg>
            </div>
            <nav className="tca__nav">
              {[
                <IcoActivity key="a"/>,
                <IcoChat key="c"/>,
                <IcoTeams key="t"/>,
                <IcoCal key="cal"/>,
                <IcoFiles key="f"/>,
              ].map((ico, i) => (
                <div key={i} className={`tca__nav-btn${i === 1 ? ' tca__nav-btn--active' : ''}`}>
                  {ico}
                </div>
              ))}
            </nav>
          </aside>

          {/* Channel list */}
          <div className="tca__channels">
            <p className="tca__channels-heading">Direct messages</p>
            {[
              { name: 'Alex M.', preview: 'Hi Sam!', unread: true, person: 'alex' },
              { name: 'Priya K.', preview: 'Where are the files for', unread: false, person: 'priya' },
              { name: 'Jordan B.', preview: 'Sure, that time works!', unread: false, person: 'jordan' },
            ].map(ch => (
              <div key={ch.name} className={`tca__channel${ch.unread ? ' tca__channel--active' : ''}`}>
                <MiniAvatar person={ch.person} />
                <div className="tca__channel-text">
                  <span className="tca__channel-name">{ch.name}</span>
                  <span className="tca__channel-preview">{ch.preview}</span>
                </div>
                {ch.unread && <span className="tca__channel-badge" />}
              </div>
            ))}
          </div>

          {/* Chat pane */}
          <div className="tca__chat">
            <header className="tca__chat-header">
              <CartoonAvatar person="alex" size={34} />
              <div>
                <p className="tca__chat-name">Alex M.</p>
                <p className="tca__chat-status">● Customer Facing Team Member · Online</p>
              </div>
            </header>

            <div className="tca__messages">
              {MESSAGES.filter(msg => windowedIds.has(msg.id)).map((msg) => (
                <div key={msg.id}>
                  {msg.dayBreak && visible.has(msg.id) && (
                    <div className="tca__day-break tca__day-break--show">
                      <span>{msg.dayBreak}</span>
                    </div>
                  )}
                  <div className={`tca__msg tca__msg--${msg.from}${visible.has(msg.id) ? ' tca__msg--show' : ''}`}>
                    <CartoonAvatar person={msg.from} size={32} />
                    <div className="tca__msg-body">
                      <div className="tca__msg-meta">
                        <span className="tca__msg-name">{msg.name}</span>
                        <span className="tca__msg-time">{msg.time}</span>
                      </div>
                      <div className="tca__msg-bubble">
                        <p>{msg.text}</p>
                        {msg.attachment && (
                          <div className="tca__attachment">
                            <span className="tca__attachment-icon">
                              <IcoExcel />
                            </span>
                            <div className="tca__attachment-info">
                              <span className="tca__attachment-name">{msg.attachment}</span>
                              <span className="tca__attachment-size">Excel · 48 KB</span>
                            </div>
                            <span className="tca__attachment-dl">↓</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <div className="tca__typing">
                  <CartoonAvatar person={MESSAGES.find(m => m.id === typing)?.from} size={24} />
                  <div className="tca__typing-bubble">
                    <span /><span /><span />
                  </div>
                </div>
              )}

            </div>

            {/* Duration badge */}
            <div className={`tca__badge${showBadge ? ' tca__badge--show' : ''}`}>
              ⏱ 2 days · back-and-forths
            </div>
          </div>
        </div>
        {/* Laptop base */}
        <div className="tca__laptop-base">
          <div className="tca__laptop-hinge" />
        </div>
      </div>
    </div>
  );
}

/* ── Cartoon avatars ─────────────────────────────────────── */
function CartoonAvatar({ person, size }) {
  const cfg = AVATAR_CFG[person] ?? AVATAR_CFG.sam;
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className="tca__avatar" aria-hidden="true">
      {/* bg circle */}
      <circle cx="24" cy="24" r="24" fill={cfg.bg} />
      {/* neck */}
      <rect x="20" y="30" width="8" height="5" fill={cfg.skin} />
      {/* body */}
      <ellipse cx="24" cy="44" rx="14" ry="10" fill={cfg.shirt} />
      {/* head */}
      <ellipse cx="24" cy="22" rx="10" ry="11" fill={cfg.skin} />
      {/* hair */}
      {cfg.hair}
      {/* eyes */}
      <ellipse cx="21" cy="20" rx="1.8" ry="2" fill="#1a1a1a" />
      <ellipse cx="27" cy="20" rx="1.8" ry="2" fill="#1a1a1a" />
      {/* eye shine */}
      <circle cx="22" cy="19" r="0.7" fill="white" />
      <circle cx="28" cy="19" r="0.7" fill="white" />
      {/* glasses for sam */}
      {cfg.glasses}
      {/* mouth */}
      {cfg.mouth}
      {/* blush */}
      <ellipse cx="17" cy="24" rx="2.5" ry="1.5" fill={cfg.blush} opacity="0.5" />
      <ellipse cx="31" cy="24" rx="2.5" ry="1.5" fill={cfg.blush} opacity="0.5" />
    </svg>
  );
}

const AVATAR_CFG = {
  alex: {
    bg: '#29b6f6', skin: '#fddcae', shirt: '#1976d2', blush: '#f48fb1',
    hair: (
      <g fill="#4e342e">
        <ellipse cx="24" cy="12" rx="10" ry="5" />
        <rect x="14" y="11" width="4" height="8" rx="2" />
        <rect x="30" y="11" width="4" height="8" rx="2" />
        <rect x="14" y="10" width="20" height="4" />
      </g>
    ),
    mouth: <path d="M20 26 Q24 30 28 26" stroke="#c0714a" strokeWidth="1.5" fill="none" strokeLinecap="round" />,
    glasses: null,
  },
  sam: {
    bg: '#ffb74d', skin: '#fddcae', shirt: '#5c6bc0', blush: '#ffcc80',
    hair: (
      <g fill="#212121">
        <ellipse cx="24" cy="12" rx="10" ry="5" />
        <rect x="14" y="11" width="3" height="12" rx="1.5" />
        <rect x="31" y="11" width="3" height="12" rx="1.5" />
        <rect x="14" y="10" width="20" height="4" />
      </g>
    ),
    mouth: <path d="M21 26 Q24 28.5 27 26" stroke="#c0714a" strokeWidth="1.5" fill="none" strokeLinecap="round" />,
    glasses: (
      <g stroke="#555" strokeWidth="1.2" fill="none">
        <rect x="17.5" y="17.5" width="7" height="5" rx="2" />
        <rect x="23.5" y="17.5" width="7" height="5" rx="2" />
        <line x1="14" y1="20" x2="17.5" y2="20" />
        <line x1="30.5" y1="20" x2="34" y2="20" />
        <line x1="24.5" y1="20" x2="23.5" y2="20" />
      </g>
    ),
  },
  priya: {
    bg: '#9575cd', skin: '#d7a87b', shirt: '#7b1fa2', blush: '#f48fb1',
    hair: (
      <g fill="#1a1a1a">
        <ellipse cx="24" cy="11" rx="11" ry="5" />
        <rect x="13" y="11" width="3" height="15" rx="1.5" />
        <rect x="32" y="11" width="3" height="15" rx="1.5" />
      </g>
    ),
    mouth: <path d="M21 26 Q24 29 27 26" stroke="#c0714a" strokeWidth="1.5" fill="none" strokeLinecap="round" />,
    glasses: null,
  },
  jordan: {
    bg: '#66bb6a', skin: '#fddcae', shirt: '#388e3c', blush: '#ffcc80',
    hair: (
      <g fill="#795548">
        <ellipse cx="24" cy="12" rx="10" ry="5" />
        <rect x="14" y="11" width="3" height="6" rx="1.5" />
        <rect x="31" y="11" width="3" height="6" rx="1.5" />
      </g>
    ),
    mouth: <path d="M21 26 Q24 29 27 26" stroke="#c0714a" strokeWidth="1.5" fill="none" strokeLinecap="round" />,
    glasses: null,
  },
};

function MiniAvatar({ person }) {
  const cfg = AVATAR_CFG[person] ?? AVATAR_CFG.sam;
  return (
    <svg width="26" height="26" viewBox="0 0 48 48" className="tca__avatar" aria-hidden="true">
      <circle cx="24" cy="24" r="24" fill={cfg.bg} />
      <ellipse cx="24" cy="22" rx="10" ry="11" fill={cfg.skin} />
      {cfg.hair}
      <ellipse cx="24" cy="44" rx="14" ry="10" fill={cfg.shirt} />
    </svg>
  );
}

/* ── Icons ───────────────────────────────────────────────── */
function IcoActivity() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>;
}
function IcoChat() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>;
}
function IcoTeams() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>;
}
function IcoCal() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
}
function IcoFiles() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>;
}
function IcoExcel() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="4" fill="#1d6f42"/>
      <path d="M8 8l5 8-5 8h4l3-5 3 5h4l-5-8 5-8h-4l-3 5-3-5z" fill="white" opacity="0.9"/>
    </svg>
  );
}
