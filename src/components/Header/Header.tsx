import { useState, useEffect, useCallback } from 'react';
import { Scan, Menu, X } from 'lucide-react';
import { siteContent } from '../../content/siteContent';
import './Header.css';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const handleNavClick = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  const { nav, brand } = siteContent;

  return (
    <header
      className={`header ${isScrolled ? 'header--scrolled' : ''}`}
      role="banner"
    >
      <div className="header__inner">
        {/* Logo */}
        <a href="#" className="header__logo" aria-label={`${brand.name} — home`}>
          <div className="header__logo-icon" aria-hidden="true">
            <Scan size={18} strokeWidth={2.5} />
          </div>
          <span className="header__logo-text">{brand.name}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="header__nav" role="navigation" aria-label="Primary navigation">
          {nav.items.map((item) => (
            <a
              key={item.target}
              href={item.target}
              className="header__nav-link"
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
          <a
            href={nav.cta.target}
            className="btn btn--primary btn--sm header__cta"
            onClick={handleNavClick}
          >
            {nav.cta.label}
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="header__mobile-toggle"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`header__mobile-drawer ${isMobileOpen ? 'header__mobile-drawer--open' : ''}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        {nav.items.map((item) => (
          <a
            key={item.target}
            href={item.target}
            className="header__mobile-link"
            onClick={handleNavClick}
          >
            {item.label}
          </a>
        ))}
        <a
          href={nav.cta.target}
          className="btn btn--primary header__mobile-cta"
          onClick={handleNavClick}
        >
          {nav.cta.label}
        </a>
      </div>
    </header>
  );
}
