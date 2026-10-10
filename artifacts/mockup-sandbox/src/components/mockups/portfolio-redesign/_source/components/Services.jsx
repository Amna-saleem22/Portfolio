import React, { useEffect, useRef } from 'react';
import { Code2, PenTool, Briefcase, LayoutTemplate, Server } from 'lucide-react';

const services = [
  {
    icon: <Code2 size={22} />,
    title: 'Frontend Development',
    desc: 'Responsive, pixel-perfect interfaces with React, Angular, HTML/CSS and modern design principles for optimal user experience.',
  },
  {
    icon: <Server size={22} />,
    title: 'Backend Development',
    desc: 'Robust server-side systems using C#, ASP.NET MVC, PHP, Laravel, and Node.js — scalable, secure, and high-performing.',
  },
  {
    icon: <Briefcase size={22} />,
    title: 'Full-Stack Development',
    desc: 'End-to-end web applications with seamless frontend-backend integration, authentication, and database management.',
  },
  {
    icon: <PenTool size={22} />,
    title: 'UI/UX Design',
    desc: 'Intuitive, engaging interfaces designed in Figma and Canva — beautiful, accessible, and user-centric.',
  },
  {
    icon: <Briefcase size={22} />,
    title: 'E-commerce Solutions',
    desc: 'Secure, feature-rich online stores with cart systems, authentication, product management, and dynamic data handling.',
  },
  {
    icon: <LayoutTemplate size={22} />,
    title: 'Business Websites',
    desc: 'Premium digital presences — portfolios, landing pages, and brand websites that communicate value and convert visitors.',
  },
];

export default function Services() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); } }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" className="section section-alt">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">What I Do</span>
          <h2 className="section-title">
            Areas of <span className="text-gradient-gold" style={{ fontStyle: 'italic' }}>Expertise</span>
          </h2>
          <p className="section-desc">
            End-to-end web solutions — from design and development to deployment — that drive results for businesses and individuals.
          </p>
        </div>

        <div className="services-grid reveal" ref={ref}>
          {services.map((s, i) => (
            <div key={i} className="service-card glass-panel">
              <div className="service-icon-wrap">{s.icon}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
