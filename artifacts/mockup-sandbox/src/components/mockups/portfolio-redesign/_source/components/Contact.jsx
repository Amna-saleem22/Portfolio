import React, { useEffect, useRef, useState } from 'react';
import { Check, Copy, Mail, Phone, Send } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';

const PRIMARY_EMAIL = 'saleemamna431@gmail.com';

export default function Contact() {
  const ref = useRef(null);
  const [copyMessage, setCopyMessage] = useState('');

  const copyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(PRIMARY_EMAIL);
      } else {
        const field = document.createElement('textarea');
        field.value = PRIMARY_EMAIL;
        field.setAttribute('readonly', '');
        field.style.position = 'fixed';
        field.style.opacity = '0';
        document.body.appendChild(field);
        field.select();
        const copied = document.execCommand('copy');
        document.body.removeChild(field);
        if (!copied) throw new Error('Clipboard unavailable');
      }
      setCopyMessage('Email address copied.');
    } catch {
      setCopyMessage('Copy unavailable. Select the email address above.');
    }
  };

  const openMailDraft = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get('name').trim();
    const email = form.get('email').trim();
    const subject = form.get('subject').trim();
    const message = form.get('message').trim();
    const body = `${message}\n\n— ${name}\n${email}`;
    window.location.href = `mailto:${PRIMARY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

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

          <div className="contact-actions">
            <a href={`mailto:${PRIMARY_EMAIL}`} className="contact-email-btn">
              <Mail size={19} />
              {PRIMARY_EMAIL}
            </a>
            <button className="copy-email-btn" type="button" onClick={copyEmail}>
              {copyMessage === 'Email address copied.' ? <Check size={16} /> : <Copy size={16} />}
              {copyMessage === 'Email address copied.' ? 'Copied' : 'Copy email'}
            </button>
            <span className="sr-only" aria-live="polite">{copyMessage}</span>
          </div>

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
                  <Phone size={14} className="phone-icon" />
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

          <form className="composer glass-panel" onSubmit={openMailDraft}>
            <div className="composer-heading">
              <h3>Write a note</h3>
              <p>Fill this in to open a draft addressed to {PRIMARY_EMAIL} in your email app.</p>
            </div>
            <div className="composer-grid">
              <div className="composer-field">
                <label htmlFor="contact-name">Your name</label>
                <input id="contact-name" name="name" autoComplete="name" required />
              </div>
              <div className="composer-field">
                <label htmlFor="contact-email">Your email</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="composer-field full">
                <label htmlFor="contact-subject">Subject</label>
                <input id="contact-subject" name="subject" required />
              </div>
              <div className="composer-field full">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" required />
              </div>
            </div>
            <button className="btn-primary composer-submit" type="submit">
              Open email draft <Send size={15} />
            </button>
            <p className="composer-note">This opens your email app with a draft. Nothing is sent from this page.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
