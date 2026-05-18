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
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <button
          className="navbar-logo"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          AM<span>NA</span>
        </button>

        <ul className="navbar-links">
          {NAV_LINKS.map(l => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className={active === l.toLowerCase() ? 'active' : ''}
                onClick={e => { e.preventDefault(); scrollTo(l); }}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        // <button className="navbar-cta" onClick={() => scrollTo('Contact')}>
        //   Let's Talk
        // </button>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen
            ? <X size={22} color="#fff" />
            : <Menu size={22} color="#fff" />}
        </button>
      </div>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
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
    </nav>
  );
}
