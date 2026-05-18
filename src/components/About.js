import React, { useEffect, useRef } from 'react';
import { Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '15+', label: 'Projects Built' },
  { value: '10+', label: 'Technologies' },
  { value: '100%', label: 'Commitment' },
];

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="section section-alt">
      <div className="section-inner">
        <div className="about-grid reveal" ref={ref}>
          <div className="about-text">
            <span className="section-label">About Me</span>
            <h2>Engineering<br /><span className="text-gradient-gold" style={{ fontStyle: 'italic' }}>with purpose.</span></h2>
            <p>
              I'm a motivated Web Developer and Software Engineering diploma student with hands-on experience building responsive, user-friendly digital products. I turn ideas into clean, functional, and visually appealing solutions.
            </p>
            <p>
              I work across the full stack — from HTML, CSS, and React on the frontend, to C#, ASP.NET MVC, PHP, Laravel, and Node.js on the backend, with MySQL and MongoDB for data.
            </p>
            <p>
              Alongside my technical journey, I'm also pursuing CMA (Cost & Management Accounting), which gives me a business-grounded perspective that helps me deliver value-driven web solutions.
            </p>
            <div className="social-links">
              <a href="https://github.com/Amna-Saleem22" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <GitHubIcon size={20} />
              </a>
              <a href="https://linkedin.com/in/amna-saleem-it/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <LinkedInIcon size={20} />
              </a>
              <a href="mailto:saleemamna431@gmail.com" className="social-link" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="about-stats">
            {stats.map((s, i) => (
              <div key={i} className="stat-card glass-panel">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
