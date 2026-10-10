import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = ['About', 'Skills', 'Services', 'Projects', 'Experience', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = '';
      NAV_LINKS.forEach(l => {
        const el = document.getElementById(l.toLowerCase());
        if (el && window.scrollY >= el.offsetTop - 130) current = l.toLowerCase();
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    if (el) el.scrollIntoView({ behavior });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <button
          className="navbar-logo"
          aria-label="Amna Saleem — back to top"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })}
        >
          AM<span>NA</span>
        </button>

        <ul className="navbar-links">
          {NAV_LINKS.map(l => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className={active === l.toLowerCase() ? 'active' : ''}
                aria-current={active === l.toLowerCase() ? 'location' : undefined}
                onClick={e => { e.preventDefault(); scrollTo(l); }}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

       

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen
            ? <X size={22} color="#fff" />
            : <Menu size={22} color="#fff" />}
        </button>
      </div>

      <div id="mobile-navigation" className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(l => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            aria-current={active === l.toLowerCase() ? 'location' : undefined}
            onClick={e => { e.preventDefault(); scrollTo(l); }}
          >
            {l}
          </a>
        ))}
      </div>
    </nav>
  );
}
