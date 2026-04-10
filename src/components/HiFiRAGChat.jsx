import { useState, useEffect } from 'react';
import './HiFiRAGChat.css';

const CONVERSATION = [
  { role: 'bot', text: 'Welcome! How can I help you today?' },
  { role: 'user', text: 'What datasets are available?' },
  {
    role: 'bot',
    text: 'I found 3 relevant datasets in the knowledge base. Here\'s a quick summary:',
    sources: ['Dataset A', 'Dataset B', 'Dataset C'],
  },
  { role: 'user', text: 'Tell me more about Dataset A.' },
  {
    role: 'bot',
    text: 'Dataset A contains records from 2019–2023 across 12 categories. It\'s best suited for time-series analysis.',
    sources: ['Dataset A · metadata', 'Schema v2'],
  },
];

// Delays (ms) before each message appears
const DELAYS = [400, 1600, 2800, 4600, 5800];
const TYPING_BEFORE = [2, 4]; // indices of bot messages that show a typing indicator first

export default function HiFiRAGChat() {
  const [visible, setVisible] = useState([]);
  const [typing, setTyping] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [phase, setPhase] = useState(0); // which user message is "being typed"

  useEffect(() => {
    const timers = [];

    CONVERSATION.forEach((msg, i) => {
      const isBotWithTyping = msg.role === 'bot' && TYPING_BEFORE.includes(i);

      if (isBotWithTyping) {
        // Show typing indicator 900ms before the bubble
        timers.push(
          setTimeout(() => setTyping(true), DELAYS[i] - 900)
        );
      }

      timers.push(
        setTimeout(() => {
          setTyping(false);
          setVisible(prev => [...prev, i]);

          // Advance the input phase after user messages appear
          if (msg.role === 'user') {
            setPhase(p => p + 1);
            setInputVal('');
          }
        }, DELAYS[i])
      );

      // For user messages, prefill input a bit before it "sends"
      if (msg.role === 'user') {
        timers.push(
          setTimeout(() => setInputVal(msg.text), DELAYS[i] - 600)
        );
      }
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="rag-chat">
      {/* Top bar */}
      <div className="rag-chat__topbar">
        <div className="rag-chat__avatar">
          <BotIcon />
        </div>
        <div className="rag-chat__topbar-info">
          <div className="rag-chat__topbar-name">AI Assistant</div>
          <div className="rag-chat__topbar-status">Connected to knowledge base</div>
        </div>
        <div className="rag-chat__topbar-dot" />
      </div>

      {/* Messages */}
      <div className="rag-chat__messages">
        {CONVERSATION.map((msg, i) => (
          <div
            key={i}
            className={`rag-chat__msg rag-chat__msg--${msg.role}${visible.includes(i) ? ' rag-chat__msg--visible' : ''}`}
          >
            {msg.role === 'bot' && (
              <div className="rag-chat__msg-icon"><BotIconSm /></div>
            )}
            <div className="rag-chat__bubble">
              {msg.text}
              {msg.sources && (
                <div className="rag-chat__sources">
                  {msg.sources.map((s, j) => (
                    <span key={j} className="rag-chat__source-pill">{s}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        <div className={`rag-chat__typing${typing ? ' rag-chat__typing--visible' : ''}`}>
          <div className="rag-chat__msg-icon"><BotIconSm /></div>
          <div className="rag-chat__typing-bubble">
            <div className="rag-chat__typing-dot" />
            <div className="rag-chat__typing-dot" />
            <div className="rag-chat__typing-dot" />
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="rag-chat__input-row">
        <input
          className="rag-chat__input"
          type="text"
          placeholder="Ask about your data…"
          value={inputVal}
          onChange={() => {}}
          readOnly
        />
        <button className="rag-chat__send" aria-label="Send">
          <SendIcon />
        </button>
      </div>
    </div>
  );
}

function BotIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2"/>
      <path d="M12 11V7"/>
      <circle cx="12" cy="5" r="2"/>
      <path d="M8 15h.01M16 15h.01"/>
    </svg>
  );
}

function BotIconSm() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9d8ee0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2"/>
      <path d="M12 11V7"/>
      <circle cx="12" cy="5" r="2"/>
      <path d="M8 15h.01M16 15h.01"/>
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  );
}
