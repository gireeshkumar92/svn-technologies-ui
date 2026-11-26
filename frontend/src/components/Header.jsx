import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { siteConfig } from '../config/index.js';
import { useQuote } from './QuoteContext.jsx';

export function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo--light' : ''}`} aria-label={`${siteConfig.name} home`}>
      <svg viewBox="0 0 64 64" width="38" height="38" aria-hidden="true">
        <rect width="64" height="64" rx="12" fill="#0B1626" />
        <path d="M14 44 L32 14 L50 44" fill="none" stroke="#FF5B1F" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round" />
        <path d="M22 44h20" stroke="#C7D0DA" strokeWidth="5" strokeLinecap="round" />
      </svg>
      <span className="logo__text"><strong>{siteConfig.name}</strong></span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute('data-theme') || 'light');
  const { pathname } = useLocation();
  const { openQuote } = useQuote();

  useEffect(() => setOpen(false), [pathname]);

  // While the mobile menu is open: lock page scroll and close on Escape.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('svn-theme', next); } catch { /* storage unavailable */ }
  };

  const links = siteConfig.nav.map((n) => (
    <NavLink key={n.to} to={n.to} end={n.to === '/'} className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}>
      {({ isActive }) => (
        <>
          {n.label}
          {isActive && <motion.span layoutId="nav-underline" className="nav__bar" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
        </>
      )}
    </NavLink>
  ));

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header__inner">
        <Logo />
        <nav className="nav" aria-label="Primary">{links}</nav>
        <div className="header__actions">
          <button className="icon-btn" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button className="btn btn--primary btn--sm header__quote" onClick={() => openQuote()}>Request a quote</button>
          <button className="icon-btn header__burger" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}><Menu size={22} /></button>
        </div>
      </div>

      {/* Rendered in document.body: the header's backdrop-filter would otherwise trap a fixed-position menu inside the header. */}
      {createPortal(
      <AnimatePresence>
        {open && (
          <motion.div className="drawer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
            <motion.nav
              className="drawer__panel" aria-label="Mobile"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="icon-btn drawer__close" onClick={() => setOpen(false)} aria-label="Close menu"><X size={22} /></button>
              {siteConfig.nav.map((n, i) => (
                <motion.div key={n.to} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 + i * 0.05 }}>
                  <NavLink to={n.to} end={n.to === '/'} className={({ isActive }) => `drawer__link ${isActive ? 'is-active' : ''}`}>{n.label}</NavLink>
                </motion.div>
              ))}
              <button className="btn btn--primary" onClick={() => { setOpen(false); openQuote(); }}>Request a quote</button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
      )}
    </header>
  );
}
