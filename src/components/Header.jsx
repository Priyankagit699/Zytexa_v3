import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from './Icon.jsx';
import { LOGO } from '../data/site.js';
import { COMPANY_LINKS, INDUSTRY_PAGES, SERVICE_GROUPS } from '../data/pages.js';

const isDesktop = () => window.matchMedia('(min-width: 861px)').matches;

// A top-level item that is itself a page link plus a chevron button that opens its dropdown.
function Menu({ id, label, to, active, open, setOpen, wide, children }) {
  const isOpen = open === id;
  return (
    <li className={`nav__item ${wide ? 'nav__item--mega' : ''}`}
      onMouseEnter={() => isDesktop() && setOpen(id)} onMouseLeave={() => isDesktop() && setOpen(null)}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setOpen((o) => (o === id ? null : o)); }}>
      <div className="nav__split">
        <NavLink to={to} className={`nav__link ${active ? 'is-active' : ''}`}>{label}</NavLink>
        <button type="button" className="nav__chev" aria-label={`${label} menu`} aria-expanded={isOpen} aria-controls={`menu-${id}`}
          onClick={() => setOpen(isOpen ? null : id)}><Icon name="chevron" size={14} /></button>
      </div>
      <div id={`menu-${id}`} className={`menu ${wide ? 'menu--mega' : ''} ${isOpen ? 'is-open' : ''}`}>{children}</div>
    </li>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const burger = useRef(null);
  const starts = (p) => pathname === p || pathname.startsWith(`${p}/`);

  useEffect(() => { setOpen(null); setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(null); setMenuOpen(false); } };
    const onClick = (e) => { if (!e.target.closest('.nav__item')) setOpen(null); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('keydown', onKey); document.removeEventListener('click', onClick); };
  }, []);

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header__bar">
        <Link to="/" className="brand" aria-label="Zytexa Technology LLP — home">
          <img src={LOGO} alt="Zytexa Technology LLP" width="160" height="84" />
        </Link>
        <button ref={burger} className="burger" aria-label="Toggle menu" aria-expanded={menuOpen} aria-controls="nav" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
        <nav id="nav" className={`nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
          <ul>
            <li className="nav__item"><NavLink to="/" end className="nav__link">Home</NavLink></li>

            <Menu id="services" label="Services" to="/services" active={starts('/services')} open={open} setOpen={setOpen} wide>
              <div className="mega">
                {SERVICE_GROUPS.map((g) => (
                  <div key={g.name} className="mega__col">
                    <p className="mega__h">{g.name}</p>
                    <ul>{g.items.map((s) => <li key={s.slug}><NavLink to={s.path}>{s.nav}</NavLink></li>)}</ul>
                  </div>
                ))}
              </div>
              <div className="mega__foot">
                <Link to="/contact">Unique requirement? <b>Talk to us</b></Link>
                <Link to="/services" className="mega__all">View all services <Icon name="arrow" size={14} /></Link>
              </div>
            </Menu>

            <Menu id="industries" label="Industries" to="/industries" active={starts('/industries')} open={open} setOpen={setOpen}>
              <ul>{INDUSTRY_PAGES.map((i) => <li key={i.slug}><NavLink to={i.path}>{i.nav}</NavLink></li>)}</ul>
              <div className="menu__foot"><Link to="/industries" className="mega__all">View all industries <Icon name="arrow" size={14} /></Link></div>
            </Menu>

            <li className="nav__item"><NavLink to="/how-we-work" className="nav__link">How We Work</NavLink></li>

            <li className="nav__item" onMouseEnter={() => isDesktop() && setOpen('company')} onMouseLeave={() => isDesktop() && setOpen(null)}
              onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setOpen((o) => (o === 'company' ? null : o)); }}>
              <div className="nav__split">
                <button type="button" className={`nav__link ${['/about', '/portfolio', '/careers', '/blog'].some(starts) ? 'is-active' : ''}`}
                  aria-expanded={open === 'company'} aria-controls="menu-company" onClick={() => setOpen(open === 'company' ? null : 'company')}>
                  Company <Icon name="chevron" size={14} />
                </button>
              </div>
              <div id="menu-company" className={`menu ${open === 'company' ? 'is-open' : ''}`}>
                <ul>{COMPANY_LINKS.map((c) => (
                  <li key={c.to}><NavLink to={c.to}>{c.label}{c.badge && <em className="menu__badge">{c.badge}</em>}</NavLink></li>
                ))}</ul>
              </div>
            </li>

            <li className="nav__item"><NavLink to="/contact" className="nav__link">Contact</NavLink></li>
          </ul>
          <Link to="/contact" className="btn btn--primary btn--sm nav__cta">Get a Free Consultation <Icon name="arrow" size={13} /></Link>
        </nav>
      </div>
    </header>
  );
}
