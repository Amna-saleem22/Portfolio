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
  title: 'Hotel Booking Management System',
  desc: 'A full-stack hotel booking management system developed as a semester-end project, featuring room management, booking workflows, customer management, and booking data handling.',
  tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Material UI'],
  gradient: 'linear-gradient(135deg, rgba(30,64,175,0.25), rgba(15,23,42,0.25))',
  live: null,
  github: 'https://github.com/Amna-saleem22/new-vision',
},
{
  title: 'Photographer Portfolio',
  desc: 'A modern photographer portfolio designed to showcase photography work through an elegant, responsive interface, with an AI-powered feature to enhance the overall user experience.',
  tech: ['React', 'JavaScript', 'CSS', 'AI Integration'],
  gradient: 'linear-gradient(135deg, rgba(219,39,119,0.22), rgba(124,58,237,0.25))',
  live: 'https://photographer-portfolio-alpha-henna.vercel.app/',
  github: 'https://github.com/Amna-saleem22/photographer-portfolio',
},

{
  title: 'R Language Business Dashboard',
  desc: 'An interactive business dashboard developed as a semester-end project using R, focused on data analysis, business metrics, and visual reporting to support data-driven insights.',
  tech: ['R', 'Data Analysis', 'Data Visualization', 'Shiny'],
  gradient: 'linear-gradient(135deg, rgba(16,185,129,0.22), rgba(6,78,59,0.25))',
  live: null,
  github: 'https://github.com/Amna-saleem22/eproject_06',
},
  
  {
   title: 'LUXE Couture – Fashion E-Commerce',
desc: 'Premium South Asian fashion e-commerce website featuring men’s and women’s collections, bridal couture, product filtering, promotional offers, customer reviews, and an interactive shopping cart.',
tech: ['React', 'JavaScript', 'CSS'],
gradient: 'linear-gradient(135deg, rgba(192,132,252,0.25), rgba(244,114,182,0.25))',
    live: 'https://addtocart-cyan.vercel.app/',
    github: 'https://github.com/Amna-saleem22/Profile',
  },
  {
    title: 'Portfolio Website',
    desc: 'A fully responsive personal portfolio built with React and CSS, featuring modern UI design, smooth transitions, and interactive elements.',
    tech: ['React', 'CSS', 'JavaScript'],
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.25), rgba(239,68,68,0.25))',
    live: 'https://seed-inov-eaqm.vercel.app/',
    github: 'https://github.com/Amna-saleem22/seedInov',
  }
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
