import React, { useEffect, useRef } from 'react';
import { Mail, Phone } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';

export default function Contact() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <div className="contact-section reveal" ref={ref}>
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            Let's create something<br />
            <span className="text-gradient-gold" style={{ fontStyle: 'italic' }}>extraordinary.</span>
          </h2>
          <p className="section-desc" style={{ marginBottom: '2.5rem' }}>
            Currently available for freelance projects, internships, and entry-level opportunities. Reach out — let's discuss your idea.
          </p>

          <a href="mailto:saleemamna431@gmail.com" className="contact-email-btn">
            <Mail size={22} />
            saleemamna431@gmail.com
          </a>

          <div className="contact-cards">
            <div className="contact-card glass-panel">
              <h3>Connect</h3>
              <a href="https://github.com/Amna-Saleem22" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <div className="contact-link-icon"><GitHubIcon size={18} /></div>
                <span>github.com/Amna-Saleem22</span>
              </a>
              <a href="https://linkedin.com/in/amna-saleem-it/" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <div className="contact-link-icon"><LinkedInIcon size={18} /></div>
                <span>linkedin.com/in/amna-saleem-it</span>
              </a>
              <a href="mailto:amnasaleemrao@gmail.com" className="contact-link-item">
                <div className="contact-link-icon"><Mail size={18} /></div>
                <span>amnasaleemrao@gmail.com</span>
              </a>
            </div>

            <div className="contact-card glass-panel">
              <h3>Details</h3>
              <div className="contact-detail">
                <div className="contact-detail-label">Role</div>
                <div className="contact-detail-value">Software Engineering Student & Web Developer</div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-label">Phone</div>
                <div className="contact-detail-value">
                  <Phone size={14} style={{ color: '#f59e0b' }} />
                  +92 335 3784278
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-label">Location</div>
                <div className="contact-detail-value">Pakistan · Remote Worldwide</div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-label">Availability</div>
                <div className="contact-detail-value">
                  <span className="available-dot" />
                  Available for hire
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
