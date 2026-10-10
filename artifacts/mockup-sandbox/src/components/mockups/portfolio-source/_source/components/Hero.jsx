import React, { useEffect, useState } from 'react';
import { ChevronRight, ArrowDown } from 'lucide-react';

const ROLES = ['Full-Stack Developer', 'UI/UX Enthusiast', 'SE Student', 'Problem Solver'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = ROLES[roleIdx];
    let timeout;
    if (!deleting && displayed.length < role.length) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === role.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <div className="hero-badge">Full-Stack Developer</div>
          <h1 className="hero-title">
            Crafting<br />
            <span className="text-gradient-gold" style={{ fontStyle: 'italic' }}>Digital</span><br />
            Experiences.
          </h1>
          <p className="hero-subtitle">
            Hi, I'm <strong style={{ color: '#fff', fontWeight: 600 }}>Amna</strong> — a Software Engineering student and Web Developer building exceptional digital products that live on the internet.
          </p>
          <div style={{ marginBottom: '0.5rem', height: '2rem', color: '#f59e0b', fontWeight: 600, fontSize: '1rem', letterSpacing: '0.03em' }}>
            {displayed}<span style={{ borderRight: '2px solid #f59e0b', marginLeft: 2, animation: 'blink 0.75s step-end infinite' }}>&nbsp;</span>
          </div>
          <div className="hero-buttons" style={{ marginTop: '1.5rem' }}>
            <button className="btn-primary" onClick={() => scrollTo('projects')}>
              View My Work <ChevronRight size={18} />
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('contact')}>
              Get In Touch
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-glow" />
          <div className="hero-code-card">
            <div className="code-dots" style={{ marginTop: '1rem' }}>
              <span className="code-dot" style={{ background: '#ef4444' }} />
              <span className="code-dot" style={{ background: '#fbbf24' }} />
              <span className="code-dot" style={{ background: '#22c55e' }} />
            </div>
            <div style={{ fontFamily: "'Courier New', monospace", fontSize: '0.875rem', lineHeight: 2 }}>
              <div><span className="code-keyword">const</span> <span className="code-var">developer</span> = {'{'}</div>
              <div>&nbsp;&nbsp;<span className="code-fn">name</span>: <span className="code-string">"Amna Saleem"</span>,</div>
              <div>&nbsp;&nbsp;<span className="code-fn">role</span>: <span className="code-string">"Full-Stack Dev"</span>,</div>
              <div>&nbsp;&nbsp;<span className="code-fn">stack</span>: [</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"React"</span>, <span className="code-string">"Angular"</span>,</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"ASP.NET"</span>, <span className="code-string">"Node.js"</span></div>
              <div>&nbsp;&nbsp;],</div>
              <div>&nbsp;&nbsp;<span className="code-fn">available</span>: <span className="code-keyword">true</span>,</div>
              <div>&nbsp;&nbsp;<span className="code-fn">hire</span>: () <span className="code-keyword">=&gt;</span> <span className="code-string">"Let's talk!"</span></div>
              <div>{'}'}</div>
              <div style={{ marginTop: '0.5rem' }}><span className="code-comment">// Currently building awesome things ✨</span></div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', paddingBottom: '3rem', position: 'relative', zIndex: 1 }}>
        <button
          onClick={() => scrollTo('about')}
          style={{ background: 'none', border: 'none', color: '#4b5563', cursor: 'pointer', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
        >
          <span>Scroll</span>
          <ArrowDown size={18} style={{ animation: 'bounce 2s ease-in-out infinite' }} />
        </button>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
      `}</style>
    </section>
  );
}
