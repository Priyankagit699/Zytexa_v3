import { useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';

// Background video: smaller VP9 WebM first, original H.264 MP4 as the fallback (public/videos/). Muted + looping + inline so it can autoplay everywhere.
// Falls back to the poster/gradient when the user prefers reduced motion or the video can't load/play.
export default function Hero() {
  const video = useRef(null);
  const [playing, setPlaying] = useState(true);
  const section = useRef(null);

  // Full-screen hero: expose the real (sticky) navbar height so CSS can size the hero to 100svh minus the navbar.
  useEffect(() => {
    const header = document.querySelector('header');
    if (!header || !section.current) return undefined;
    const set = () => section.current && section.current.style.setProperty('--nav-h', `${header.getBoundingClientRect().height}px`);
    set();
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(set) : null;
    ro?.observe(header);
    window.addEventListener('resize', set);
    return () => { ro?.disconnect(); window.removeEventListener('resize', set); };
  }, []);

  useEffect(() => {
    const v = video.current;
    if (!v) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { v.pause(); setPlaying(false); return undefined; }
    v.muted = true;
    const p = v.play();
    if (p && p.catch) p.catch(() => setPlaying(false)); // autoplay blocked -> show poster instead
    return undefined;
  }, []);

  return (
    <section id="home" ref={section} className="hero section">
      {playing && (
        <video ref={video} className="hero__video" autoPlay muted loop playsInline preload="auto"
          poster="/videos/zytexa-hero-poster.jpg" aria-hidden="true" tabIndex={-1} onError={() => setPlaying(false)}>
          <source src="/videos/zytexa-hero.webm" type="video/webm" />
          <source src="/videos/zytexa-hero.mp4" type="video/mp4" />
        </video>
      )}
      {!playing && <div className="hero__poster" aria-hidden="true" />}
      <div className="hero__shade" aria-hidden="true" />
      {/* Visually hidden page heading (the visible Hero shows only the video and the two CTAs); text is the site's existing Hero headline. */}
      <h1 className="sr-only">End-to-End Digital Solutions for Modern Businesses</h1>
      <div className="hero__scroll" aria-hidden="true"><span>Scroll</span><i /></div>
      <div className="container hero__cta">
        <a href="#contact" className="btn btn--primary">Get a Free Consultation <Icon name="arrow" size={16} /></a>
        <a href="#services" className="btn btn--ghost">Explore Our Services</a>
      </div>
    </section>
  );
}
