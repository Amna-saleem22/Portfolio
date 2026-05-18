import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { GitHubIcon } from './SocialIcons';

const projects = [
  {
    title: 'Electronic Shop',
    desc: 'A comprehensive Angular-based e-commerce platform with dynamic product routing, category filtering, cart management, and responsive design.',
    tech: ['Angular', 'TypeScript', 'SCSS'],
    gradient: 'linear-gradient(135deg, rgba(59,130,246,0.25), rgba(147,51,234,0.25))',
    live: 'https://project-angular-flax.vercel.app/',
    github: 'https://github.com/Amna-saleem22/Project-angular/',
  },
  {
    title: 'Laundry Management App',
    desc: 'Full-stack enterprise solution with ASP.NET MVC backend and Angular frontend. Features customer management, delivery tracking, and invoice generation.',
    tech: ['ASP.NET MVC', 'Angular', 'SQL Server'],
    gradient: 'linear-gradient(135deg, rgba(20,184,166,0.25), rgba(16,185,129,0.25))',
    live: null,
    github: 'https://github.com/Amna-saleem22/Laundry-Management-System/tree/main/eproject/eproject',
  },
  {
    title: 'Web App with Auth & Cart',
    desc: 'Secure profile-based web application with custom authentication flows, protected routes, and a feature-rich shopping cart system.',
    tech: ['React', 'JavaScript', 'CSS'],
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.25), rgba(239,68,68,0.25))',
    live: 'https://profile-navy-gamma.vercel.app/',
    github: 'https://github.com/Amna-saleem22/Profile',
  },
  {
    title: 'Portfolio Website',
    desc: 'A fully responsive personal portfolio built with React and CSS, featuring modern UI design, smooth transitions, and interactive elements.',
    tech: ['React', 'CSS', 'JavaScript'],
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.25), rgba(239,68,68,0.25))',
    live: 'https://seed-inov-eaqm.vercel.app/',
    github: 'https://github.com/Amna-saleem22/seedInov',
  },
  {
    title: 'Dynamic E-Commerce',
    desc: 'Modern online store focusing on core shopping functionality, dynamic product data handling, and clean reusable component architecture.',
    tech: ['React', 'JavaScript', 'CSS'],
    gradient: 'linear-gradient(135deg, rgba(99,102,241,0.25), rgba(168,85,247,0.25))',
    live: null,
    github: 'https://github.com/Amna-saleem22/ecommerce-site',
  },
];

export default function Projects() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); } }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Selected <span className="text-gradient-gold" style={{ fontStyle: 'italic' }}>Works</span>
          </h2>
          <p className="section-desc">
            A showcase of recent projects demonstrating technical depth and design sensibility across the full stack.
          </p>
        </div>

        <div className="projects-grid reveal" ref={ref}>
          {projects.map((p, i) => (
            <div key={i} className="project-card glass-panel">
              <div className="project-card-gradient" style={{ background: p.gradient }} />
              <div className="project-card-content">
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
                <div>
                  <div className="project-tech-tags">
                    {p.tech.map((t, j) => (
                      <span key={j} className="project-tech-tag">{t}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="project-link">
                        Live Demo <ExternalLink size={16} />
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        GitHub <GitHubIcon size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
