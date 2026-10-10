import React, { useEffect, useRef } from 'react';

const items = [
  {
    period: '2023 – Present',
    title: 'Software Engineering Diploma',
    org: 'Institute of Software Engineering',
    desc: 'Comprehensive program covering frontend and backend web development. Learned React, Angular, ASP.NET MVC, C#, PHP, Laravel, Node.js, MySQL, MongoDB, and modern software engineering principles.',
  },
  {
    period: '2024 – Present',
    title: 'CMA (Cost & Management Accounting)',
    org: 'Professional Studies',
    desc: 'Pursuing CMA alongside technical education to understand business processes, financial management, and decision-making — enabling more business-aligned web solutions.',
  },
  {
    period: '2024',
    title: 'Full-Stack Projects',
    org: 'Self-Directed & Academic',
    desc: 'Built multiple full-stack applications including an e-commerce platform in Angular, a Laundry Management System in ASP.NET MVC + Angular, and various React-based web apps with authentication and cart systems.',
  },
  {
    period: '2023',
    title: 'Frontend & UI/UX Practice',
    org: 'Freelance & Personal Projects',
    desc: 'Developed responsive websites, portfolio pages, and UI templates using HTML, CSS, JavaScript, React, Figma, and Canva. Focused on clean code, modern design, and great user experience.',
  },
];

export default function Experience() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); } }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" className="section section-alt">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Background</span>
          <h2 className="section-title">
            Education & <span className="text-gradient-gold" style={{ fontStyle: 'italic' }}>Experience</span>
          </h2>
          <p className="section-desc">
            A journey of continuous learning, building, and growing as a developer.
          </p>
        </div>

        <div className="reveal" ref={ref}>
          <div className="timeline">
            {items.map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-item-inner glass-panel">
                  <div className="timeline-period">{item.period}</div>
                  <div className="timeline-title">{item.title}</div>
                  <div className="timeline-org">{item.org}</div>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
