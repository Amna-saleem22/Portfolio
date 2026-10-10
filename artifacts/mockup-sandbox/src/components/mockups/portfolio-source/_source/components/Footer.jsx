import React from 'react';
import { Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';

const NAV_LINKS = ['About', 'Skills', 'Services', 'Projects', 'Experience', 'Contact'];

const scrollTo = (id) => {
  const el = document.getElementById(id.toLowerCase());
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">AM<span>NA</span></div>

      <div className="footer-links">
        {NAV_LINKS.map(l => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            onClick={e => { e.preventDefault(); scrollTo(l); }}
          >
            {l}
          </a>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <a href="https://github.com/Amna-Saleem22" target="_blank" rel="noopener noreferrer"
          style={{ color: '#4b5563', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#f59e0b'}
          onMouseLeave={e => e.currentTarget.style.color = '#4b5563'}
          aria-label="GitHub">
          <GitHubIcon size={20} />
        </a>
        <a href="https://linkedin.com/in/amna-saleem-it/" target="_blank" rel="noopener noreferrer"
          style={{ color: '#4b5563', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#f59e0b'}
          onMouseLeave={e => e.currentTarget.style.color = '#4b5563'}
          aria-label="LinkedIn">
          <LinkedInIcon size={20} />
        </a>
        <a href="mailto:saleemamna431@gmail.com"
          style={{ color: '#4b5563', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#f59e0b'}
          onMouseLeave={e => e.currentTarget.style.color = '#4b5563'}
          aria-label="Email">
          <Mail size={20} />
        </a>
      </div>

      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Amna Saleem. All rights reserved.<br />
        Designed with elegance. Coded with passion.
      </p>
    </footer>
  );
}
