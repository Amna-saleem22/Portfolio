import React, { useEffect, useRef } from 'react';
import { LayoutTemplate, Code2, PenTool, Database } from 'lucide-react';

const categories = [
  {
    icon: <LayoutTemplate size={32} />,
    title: 'Frontend',
    skills: ['HTML / CSS', 'JavaScript', 'React', 'Angular', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    icon: <Code2 size={32} />,
    title: 'Backend',
    skills: ['C#', 'ASP.NET MVC', 'PHP', 'Laravel', 'Node.js'],
  },
  {
    icon: <Database size={32} />,
    title: 'Database & Tools',
    skills: ['MySQL', 'MongoDB', 'Git & GitHub', 'Authentication', 'REST APIs'],
  },
  {
    icon: <PenTool size={32} />,
    title: 'Design & Workflow',
    skills: ['UI/UX Design', 'Figma', 'Canva'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Expertise</span>
          <h2 className="section-title">
            Technical <span className="text-gradient-gold" style={{ fontStyle: 'italic' }}>Arsenal</span>
          </h2>
          <p className="section-desc">
            A comprehensive toolkit spanning the full stack — from pixel-perfect UIs to robust backend architectures.
          </p>
        </div>

        <div className="skills-grid reveal" ref={ref}>
          {categories.map((cat, i) => (
            <div key={i} className="skill-card glass-panel">
              <div className="skill-card-icon">{cat.icon}</div>
              <h3>{cat.title}</h3>
              <div className="skill-tags">
                {cat.skills.map((s, j) => (
                  <span key={j} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
