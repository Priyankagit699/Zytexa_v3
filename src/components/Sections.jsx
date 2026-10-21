import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import { RoofEcosystem } from './Ecosystem.jsx';
import EnquiryArt from './EnquiryArt.jsx';
import { CLIENTS, CLIENTS_LABEL } from '../data/clients.js';
import { SERVICES } from '../data/services.js';
import { splitTools, toolLogos } from '../data/toolLogos.js';

const ACH_STATS = [['120+', 'Projects'], ['80+', 'Clients'], ['5yr+', 'Experience'], ['14', 'Services']];

// Achievements strap (figures supplied by the client; not independently verified).
export function Achievements() {
  return (
    <section className="section ach" aria-label="Achievements">
      <div className="container">
        <Reveal>
          <ul className="ach__stats">
            {ACH_STATS.map(([n, l]) => <li key={l}><strong>{n}</strong><span>{l}</span></li>)}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function ClientStrip() {
  const ref = useRef(null);
  const scroll = (d) => ref.current?.scrollBy({ left: d * 280, behavior: 'smooth' });
  return (
    <section className="clients" aria-label="Clients">
      <div className="container">
        <p className="clients__label">{CLIENTS_LABEL}</p>
        <div className="clients__row">
          <button className="arrow-btn" aria-label="Previous clients" onClick={() => scroll(-1)}><Icon name="left" size={16} /></button>
          <ul className="clients__list" ref={ref}>
            {CLIENTS.map((c) => (
              <li key={c.file}>
                <span className="clients__tile">
                  <img src={`/client/${encodeURIComponent(c.file)}`} alt={`${c.name} logo`} width={c.w} height={c.h} loading="lazy" decoding="async"
                    onError={(e) => { e.currentTarget.closest('li').hidden = true; }} />
                </span>
              </li>
            ))}
          </ul>
          <button className="arrow-btn" aria-label="Next clients" onClick={() => scroll(1)}><Icon name="right" size={16} /></button>
        </div>
      </div>
    </section>
  );
}

// A single tool: genuine brand mark(s) when one exists, otherwise a neutral text chip with a generic icon (never a look-alike).
function Mark({ l }) {
  const svg = useRef(null);
  // Crop each brand icon to its own bounds so wide marks (PHP, MySQL, WooCommerce...) are as legible as square ones.
  useLayoutEffect(() => {
    const el = svg.current;
    const path = el?.querySelector('path');
    if (!path || !path.getBBox) return;
    const bb = path.getBBox();
    if (!bb.width || !bb.height) return;
    el.setAttribute('viewBox', `${bb.x} ${bb.y} ${bb.width} ${bb.height}`);
    el.style.width = `${Math.min(46, Math.max(14, (22 * bb.width) / bb.height))}px`;
  }, [l]);
  if (l.src) return <img src={l.src} alt={`${l.title} logo`} height="22" loading="lazy" decoding="async" />;
  return (
    <svg ref={svg} viewBox="0 0 24 24" role="img" aria-label={`${l.title} logo`} focusable="false">
      <title>{l.title}</title>
      <path d={l.path} fill={`#${l.hex === '000000' ? '1f2937' : l.hex}`} />
    </svg>
  );
}

export function Tool({ name }) {
  const logos = toolLogos(name);
  if (!logos) return <li className="tool tool--text" title={name}><Icon name="layers" size={12} />{name}</li>;
  return (
    <li className="tool" title={name}>
      {logos.map((l) => <Mark key={l.slug} l={l} />)}
    </li>
  );
}

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <Reveal className="section__head section__head--row">
          <div>
            <p className="eyebrow eyebrow--sm">Our Services</p>
            <h2>Complete Digital Solutions for Your Business</h2>
          </div>
          <a href="#services" className="link-arrow">View All Services <Icon name="arrow" size={14} /></a>
        </Reveal>
        <div className="grid grid--4 services">
          {SERVICES.map((s, k) => (
            <Reveal as="article" key={s.id} delay={(k % 4) * 70} className="card service">
              <header className="service__top">
                <span className="ico"><Icon name={s.icon} size={20} /></span>
                <span className="service__num">{String(s.id).padStart(2, '0')}</span>
              </header>
              <h3>{s.title}</h3>
              <p>{s.short}</p>
              {s.tools && (
                <ul className="tools" aria-label={`${s.title} tools and platforms`}>
                  {splitTools(s.tools).map((t) => <Tool key={t} name={t} />)}
                </ul>
              )}
            </Reveal>
          ))}
          <Reveal className="card enquiry">
            <div>
              <h3>Have a unique requirement?</h3>
              <p>We're here to help you find the right solution.</p>
              <a href="#contact" className="btn btn--primary btn--sm">Discuss Your Project <Icon name="arrow" size={14} /></a>
            </div>
            <div className="enquiry__art" aria-hidden="true"><EnquiryArt /></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  ['Discover', 'Understand your business & goals.', 'target'],
  ['Strategize', 'Define scope & right solution.', 'compass'],
  ['Design', 'Plan experience & user journey.', 'brush'],
  ['Build', 'Develop & integrate the solution.', 'code'],
  ['Launch', 'Test, deploy & go live.', 'bolt'],
  ['Optimize', 'Monitor & improve performance.', 'chart'],
];

const usePrefersReducedMotion = () => {
  const [still, setStill] = useState(false);
  useEffect(() => { setStill(window.matchMedia('(prefers-reduced-motion: reduce)').matches); }, []);
  return still;
};

// Original timeline layout. A progress line fills forward from step 1 to the active step with a light shimmer
// travelling along it; finished steps stay lit, upcoming ones are muted. After step 6 it resets and starts again.
// Reduced motion: no autoplay, no fill, every step shown normally.
export function Process() {
  const n = STEPS.length;
  const still = usePrefersReducedMotion();
  const [tick, setTick] = useState(0);
  const [paused, setPaused] = useState(false);
  const [geo, setGeo] = useState({ pos: [], vertical: false });
  const list = useRef(null);
  const active = still ? -1 : tick % n;

  useEffect(() => {
    if (paused || still) return undefined;
    const t = setInterval(() => setTick((v) => v + 1), 2400);
    return () => clearInterval(t);
  }, [paused, still]);

  // Measure the centre of each step's circle along the timeline's axis (x on desktop, y when stacked on mobile).
  const measure = useCallback(() => {
    const el = list.current;
    if (!el) return;
    const vertical = getComputedStyle(el).gridTemplateColumns.trim().split(/\s+/).length === 1;
    const pos = [...el.querySelectorAll('.step')].map((li) => {
      const d = li.querySelector('.step__dot');
      return vertical ? li.offsetTop + d.offsetTop + d.offsetHeight / 2 : li.offsetLeft + d.offsetLeft + d.offsetWidth / 2;
    });
    setGeo({ pos, vertical });
  }, []);
  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  const start = geo.pos[0] || 0;
  const len = active > 0 && geo.pos[active] != null ? geo.pos[active] - start : 0;

  return (
    <section id="process" className="section">
      <div className="container split split--process">
        <Reveal>
          <p className="eyebrow eyebrow--sm">How We Work</p>
          <h2>A Simple Process. Powerful Results.</h2>
          <p className="muted">Our structured approach ensures your ideas turn into impactful digital solutions.</p>
          <a href="#contact" className="btn btn--primary btn--sm">Learn More <Icon name="arrow" size={14} /></a>
        </Reveal>
        <ol ref={list} className={`timeline ${still ? '' : 'is-running'}`} style={{ '--fs': `${start}px`, '--fl': `${len}px` }}
          onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <li className={`timeline__fill ${active === 0 ? 'is-reset' : ''}`} aria-hidden="true" />
          {STEPS.map(([t, d, ico], k) => (
            <Reveal as="li" key={t} delay={k * 80} className={`step ${k === active ? 'is-active' : ''} ${k < active ? 'is-done' : ''}`} aria-current={k === active ? 'step' : undefined}>
              <span className="step__dot"><Icon name={ico} size={22} stroke={1.8} /></span>
              <div className="step__body"><span className="step__num">{String(k + 1).padStart(2, '0')}</span><h3>{t}</h3><p>{d}</p></div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

// Comparison rows: [feature, Zytexa tag (optional), Typical Agency, Freelancer]. Cell = ['yes'|'no'|'part'|'dimyes', label?]
const WHY_ROWS = [
  ['All services under one roof', '14 services', ['no'], ['no']],
  ['Website + Marketing + CRM together', '', ['part', 'Partial'], ['no']],
  ['AI & automation capability', '', ['part', 'Rare'], ['no']],
  ['Business strategy & consulting', '', ['no'], ['no']],
  ['Transparent pricing', '', ['no'], ['part', 'Varies']],
  ['Dedicated point of contact', '', ['part', 'Sometimes'], ['dimyes']],
  ['Ongoing support after delivery', '', ['part', 'Paid extra'], ['no']],
  ['E-commerce marketplace setup', '', ['part', 'Rare'], ['no']],
];

function WhyCell({ c: [kind, label] }) {
  if (kind === 'part') return <span className="why-part">~ {label}</span>;
  if (kind === 'no') return <span className="why-no" aria-label="No">✕</span>;
  return <span className={`why-yes ${kind === 'dimyes' ? 'why-yes--dim' : ''}`} aria-label="Yes">✓</span>;
}

export function WhyChoose() {
  return (
    <section id="about" className="section why" aria-labelledby="why-title">
      <div className="container">
        <Reveal className="why__head">
          <p className="eyebrow eyebrow--sm">Why choose Zytexa</p>
          <h2 id="why-title">What sets us apart from <span className="accent">other agencies.</span></h2>
          <p className="muted">See exactly what you get with Zytexa — and what you miss out on elsewhere.</p>
        </Reveal>
        <p className="why-hint" aria-hidden="true">Scroll to compare →</p>
        <Reveal className="why-table-wrap">
          <table className="why-table">
            <thead>
              <tr>
                <th className="why-th-feat" scope="col">Feature</th>
                <th className="why-th-us" scope="col"><span className="why-us-badge">✦ Zytexa</span></th>
                <th className="why-th-them" scope="col">Typical Agency</th>
                <th className="why-th-them" scope="col">Freelancer</th>
              </tr>
            </thead>
            <tbody>
              {WHY_ROWS.map(([feat, tag, agency, free]) => (
                <tr key={feat}>
                  <th className="why-feat" scope="row">{feat}</th>
                  <td className="why-us"><WhyCell c={['yes']} />{tag && <span className="why-tag">{tag}</span>}</td>
                  <td className="why-them"><WhyCell c={agency} /></td>
                  <td className="why-them"><WhyCell c={free} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <Reveal className="why-cta">
          <a className="btn btn--primary" href="#contact">Start your project with Zytexa →</a>
          <p className="why-cta-note">Free consultation. No commitment.</p>
        </Reveal>
      </div>
    </section>
  );
}

// Original four industries first; the rest extend the list in line with Zytexa's services
// (websites, e-commerce, marketing, CRM, local SEO/GMB). Photos: public/industries/*.webp (CC0, see CREDITS.md there). Loaded eagerly (~360 KB total) so carousel cards are never blank.
const INDUSTRIES = [
  ['retail', 'Retail & E-commerce', 'Online stores & marketplaces', 'Woman shopping online on a laptop with a store bag beside her'],
  ['healthcare', 'Healthcare', 'Patient-focused digital solutions', 'Doctor and nurses reviewing a patient chart together'],
  ['education', 'Education', 'E-learning platforms & academic solutions', 'Smiling graduate in a graduation cap'],
  ['real-estate', 'Real Estate', 'Property websites & lead generation', 'Modern apartment building with balconies'],
  ['startups', 'Startups & SaaS', 'Product websites, apps & growth marketing', 'Startup team collaborating around a table with laptops'],
  ['local-business', 'Local Businesses', 'Google Business Profile, local SEO & websites', 'Neighbourhood bakery storefront with an open sign'],
  ['hospitality', 'Hospitality & Travel', 'Booking-ready sites & online visibility', 'Resort swimming pool with loungers and umbrellas'],
  ['manufacturing', 'Manufacturing & B2B', 'Catalogue sites, CRM & lead automation', 'Industrial manufacturing hall with production machinery'],
  ['professional-services', 'Professional Services', 'Brand, website & client-enquiry automation', 'Two business professionals in a client meeting with a laptop'],
];

export function Industries() {
  const track = useRef(null);
  const [pos, setPos] = useState({ i: 0, max: 0 });

  const measure = useCallback(() => {
    const el = track.current;
    if (!el || !el.firstElementChild) return;
    const step = el.firstElementChild.getBoundingClientRect().width + (parseFloat(getComputedStyle(el).columnGap) || 0);
    const max = Math.max(0, Math.round((el.scrollWidth - el.clientWidth) / step));
    setPos({ i: Math.min(max, Math.round(el.scrollLeft / step)), max, step });
  }, []);

  // Re-measure whenever the track or its cards change size (first layout, stylesheet/fonts arriving, resize).
  useEffect(() => {
    measure();
    const el = track.current;
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measure) : null;
    if (ro && el) { ro.observe(el); [...el.children].forEach((c) => ro.observe(c)); }
    window.addEventListener('resize', measure);
    return () => { ro?.disconnect(); window.removeEventListener('resize', measure); };
  }, [measure]);

  const go = (dir) => track.current?.scrollBy({ left: dir * (pos.step || 240), behavior: 'smooth' });
  const goIndex = (k) => track.current?.scrollTo({ left: k * (pos.step || 240), behavior: 'smooth' });
  const onKey = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
  };

  return (
    <section id="industries" className="section section--ruled">
      <div className="container ind">
        <Reveal className="ind__copy">
          <p className="eyebrow eyebrow--sm">Industries</p>
          <h2>Industries We Serve</h2>
          <p className="muted">We create digital solutions for a wide range of industries, helping businesses adapt, grow and stay ahead.</p>
          <a href="#contact" className="btn btn--primary btn--sm">Explore All Industries <Icon name="arrow" size={14} /></a>
        </Reveal>
        <div className="ind__wrap" role="region" aria-roledescription="carousel" aria-label="Industries we serve">
          <div className="ind__track" ref={track} tabIndex={0} onScroll={measure} onKeyDown={onKey}>
            {INDUSTRIES.map(([img, t, d, alt]) => (
              <article key={t} className="card industry">
                <div className="industry__img"><img src={`/industries/${img}.webp`} alt={alt} width="800" height="432" decoding="async" /></div>
                <div className="industry__body"><h3>{t}</h3><p>{d}</p></div>
              </article>
            ))}
          </div>
          <div className="ind__ctrl">
            <button type="button" className="arrow-btn" aria-label="Previous industries" disabled={pos.i <= 0} onClick={() => go(-1)}><Icon name="left" size={16} /></button>
            <div className="dots" aria-hidden="true">
              {Array.from({ length: pos.max + 1 }).map((_, k) => (
                <button key={k} type="button" tabIndex={-1} className={k === pos.i ? 'is-on' : ''} onClick={() => goIndex(k)} />
              ))}
            </div>
            <button type="button" className="arrow-btn" aria-label="Next industries" disabled={pos.i >= pos.max} onClick={() => go(1)}><Icon name="right" size={16} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SingleRoof() {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="panel roof">
          <Reveal className="roof__copy">
            <p className="eyebrow eyebrow--sm">One Roof. Endless Possibilities.</p>
            <h2>Your Complete Business Solution</h2>
            <p className="muted">From website and app development to marketing, e-commerce, CRM, AI and more — everything your business needs, under one roof.</p>
            <a href="#services" className="btn btn--primary btn--sm">Explore Our Services <Icon name="arrow" size={14} /></a>
          </Reveal>
          <Reveal><RoofEcosystem /></Reveal>
        </div>
      </div>
    </section>
  );
}
