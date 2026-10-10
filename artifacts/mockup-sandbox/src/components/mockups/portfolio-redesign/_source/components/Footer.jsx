import React from 'react';
import { Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';

const NAV_LINKS = ['About', 'Skills', 'Services', 'Projects', 'Experience', 'Contact'];

const scrollTo = (id) => {
  const el = document.getElementById(id.toLowerCase());
  const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  if (el) el.scrollIntoView({ behavior });
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

      <div className="footer-socials">
        <a href="https://github.com/Amna-Saleem22" target="_blank" rel="noopener noreferrer"
          aria-label="GitHub">
          <GitHubIcon size={20} />
        </a>
        <a href="https://linkedin.com/in/amna-saleem-it/" target="_blank" rel="noopener noreferrer"
          aria-label="LinkedIn">
          <LinkedInIcon size={20} />
        </a>
        <a href="mailto:saleemamna431@gmail.com"
          aria-label="Email">
          <Mail size={20} />
        </a>
      </div>

      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Amna Saleem. All rights reserved.<br />
        Software Engineering student & Web Developer.
      </p>
    </footer>
  );
}
