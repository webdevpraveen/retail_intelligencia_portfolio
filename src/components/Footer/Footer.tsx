import { Scan } from 'lucide-react';
import { siteContent } from '../../content/siteContent';
import './Footer.css';

export function Footer() {
  const { footer, brand } = siteContent;

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__top">
          {/* Brand Col */}
          <div className="footer__brand-col">
            <a href="#" className="footer__logo" aria-label={`${brand.name} — home`}>
              <div className="footer__logo-icon" aria-hidden="true">
                <Scan size={18} strokeWidth={2.5} />
              </div>
              <span className="footer__logo-text">{brand.name}</span>
            </a>
            <p className="footer__tagline">{brand.tagline}</p>
          </div>

          {/* Links Cols */}
          <div className="footer__links-grid">
            {footer.columns.map(col => (
              <div key={col.title} className="footer__links-col">
                <h4 className="footer__col-title">{col.title}</h4>
                <ul className="footer__link-list">
                  {col.links.map(link => (
                    <li key={link.label}>
                      <a href={link.target} className="footer__link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">{footer.copyright}</p>
          <div className="footer__status">
            <span className="footer__status-dot" aria-hidden="true" />
            System Online
          </div>
        </div>
      </div>
    </footer>
  );
}
