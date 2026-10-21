import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';

// Sets the document title for a route.
export function useTitle(title) {
  useEffect(() => { document.title = title ? `${title} — Zytexa Technology LLP` : 'Zytexa Technology LLP — End-to-End Digital Solutions'; }, [title]);
}

// Scroll to top on route change, or to the #hash target on the same page.
export function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}

export function PageHero({ eyebrow, title, intro, children, image, imageAlt }) {
  return (
    <section className="phero">
      <div className={`container phero__grid ${image ? 'phero__grid--img' : ''}`}>
        <Reveal className="phero__copy">
          {eyebrow && <p className="eyebrow eyebrow--sm">{eyebrow}</p>}
          <h1>{title}</h1>
          {intro && <p className="phero__intro">{intro}</p>}
          {children && <div className="btn-row phero__actions">{children}</div>}
        </Reveal>
        {image && <Reveal className="phero__img" delay={100}><img src={image} alt={imageAlt || ''} width="800" height="432" decoding="async" /></Reveal>}
      </div>
    </section>
  );
}

// Full-width landing hero: background photo, dark overlay, H1, description and two CTAs.
export function ImageHero({ eyebrow, title, intro, image, children }) {
  return (
    <section className="ihero">
      <img className="ihero__bg" src={image} alt="" width="1600" height="560" fetchPriority="high" decoding="async" />
      <div className="ihero__shade" aria-hidden="true" />
      <div className="container ihero__in">
        {eyebrow && <p className="ihero__eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {intro && <p className="ihero__intro">{intro}</p>}
        {children && <div className="btn-row ihero__actions">{children}</div>}
      </div>
    </section>
  );
}

export function Crumbs({ items }) {
  return (
    <nav className="crumbs container" aria-label="Breadcrumb">
      <ol>{items.map(([label, to], k) => <li key={label}>{to && k < items.length - 1 ? <Link to={to}>{label}</Link> : <span aria-current="page">{label}</span>}</li>)}</ol>
    </nav>
  );
}

export function PageSection({ eyebrow, title, intro, tint, children }) {
  return (
    <section className={`section psec ${tint ? 'psec--tint' : ''}`}>
      <div className="container">
        {(title || eyebrow) && (
          <Reveal className="psec__head">
            {eyebrow && <p className="eyebrow eyebrow--sm">{eyebrow}</p>}
            {title && <h2>{title}</h2>}
            {intro && <p className="muted">{intro}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

export function PageCta({ title = 'Ready to talk about your project?', text = 'Tell us what you need and our team will get back to you with the right solution.' }) {
  return (
    <section className="section pcta">
      <div className="container">
        <Reveal className="pcta__box">
          <div><h2>{title}</h2><p>{text}</p></div>
          <Link to="/contact" className="btn btn--white">Get a Free Consultation <Icon name="arrow" size={14} /></Link>
        </Reveal>
      </div>
    </section>
  );
}
