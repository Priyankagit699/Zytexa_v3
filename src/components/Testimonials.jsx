import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import { TESTIMONIALS } from '../data/testimonials.js';

// Two cards at a time on desktop (the second is hidden by CSS on small screens, so mobile shows one).
// The pair is a sliding window over the list: with n reviews the pairs are (0,1), (1,2) ... (n-1,0), so an odd
// number of reviews loops cleanly. Auto-advance steps by one review; arrows/dots do the same manually.
function Card({ t }) {
  return (
    <figure className="rv__card">
      <span className="rv__q" aria-hidden="true">&ldquo;</span>
      <blockquote>{t.quote}</blockquote>
      <span className="rv__avatar" aria-hidden="true"><Icon name="team" size={22} stroke={1.5} /></span>
      <figcaption>
        <span className="rv__who">— {!t.placeholder && <>{t.name}, </>}{t.role}</span>
        <small>{t.place}</small>
        {t.placeholder && <em className="badge">Sample review</em>}
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = TESTIMONIALS.length;
  const go = (d) => setI((v) => (v + d + n) % n);

  useEffect(() => {
    if (paused || n < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const t = setInterval(() => setI((v) => (v + 1) % n), 6500);
    return () => clearInterval(t);
  }, [paused, n]);

  const pair = n > 1 ? [TESTIMONIALS[i], TESTIMONIALS[(i + 1) % n]] : [TESTIMONIALS[0]];
  return (
    <section className="section rv">
      <div className="container split split--reviews">
        <Reveal>
          <p className="eyebrow eyebrow--sm">Client Reviews</p>
          <h2>What Our Clients Say</h2>
          <p className="muted">We value long-term partnerships and take pride in the trust our clients place in us.</p>
        </Reveal>
        <Reveal className="reviews" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
          <div className="rv__row" role="group" aria-roledescription="carousel" aria-label="Client reviews">
            <button className="arrow-btn" aria-label="Previous reviews" onClick={() => go(-1)}><Icon name="left" size={15} /></button>
            <div className="rv__pair" key={i} aria-live="off">
              {pair.map((t, k) => <Card key={`${i}-${k}`} t={t} />)}
            </div>
            <button className="arrow-btn" aria-label="Next reviews" onClick={() => go(1)}><Icon name="right" size={15} /></button>
          </div>
          <div className="dots" role="tablist" aria-label="Choose review">
            {TESTIMONIALS.map((_, k) => (
              <button key={k} role="tab" aria-selected={k === i} aria-label={`Show review ${k + 1}`} className={k === i ? 'is-on' : ''} onClick={() => setI(k)} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
