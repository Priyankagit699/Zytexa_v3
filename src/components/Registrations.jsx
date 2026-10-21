import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import { REGISTRATIONS } from '../data/registrations.js';
import './registrations.css';

const Rupee = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <rect x="4" y="3" width="16" height="18" rx="3" /><path d="M9 8h6M9 11h6M9 8c3.5 0 3.5 5 0 5H8l5 4" />
  </svg>
);
const Sun = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true" focusable="false">
    <circle cx="12" cy="12" r="3.2" /><path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8" />
  </svg>
);
const ICONS = { gst: <Rupee />, llp: <Icon name="team" size={30} stroke={1.6} />, msme: <Sun />, iso: <Icon name="check" size={28} stroke={1.8} /> };

export default function Registrations() {
  return (
    <section className="reg" aria-labelledby="reg-title">
      <div className="container reg__in">
        <Reveal className="reg__head">
          <span className="reg__pill"><i aria-hidden="true" />Registrations &amp; Certifications</span>
          <h2 id="reg-title">Trusted by Law,<br /><span>Backed by Registrations</span></h2>
          <p>The registrations and certifications behind Zytexa Technology LLP, with the issuing authority for each.</p>
        </Reveal>
        <ul className="reg__grid">
          {REGISTRATIONS.map((r, k) => (
            <Reveal as="li" key={r.key} delay={k * 80} className={`reg__card ${r.primary ? 'reg__card--primary' : ''}`}>
              {r.primary && <span className="reg__primary">Primary</span>}
              <span className="reg__ico" aria-hidden="true">{ICONS[r.key]}</span>
              {r.number && <p className="reg__num">{r.numberLabel} {r.number}</p>}
              <h3>{r.title}</h3>
              <span className="reg__rule" aria-hidden="true" />
              {(r.authority.length > 0 || r.standard) && (
                <p className="reg__auth">
                  {r.standard && <span>{r.standard}</span>}
                  {r.authority.map((a) => <span key={a}>{a}</span>)}
                </p>
              )}
              {r.status && <span className="reg__status"><i aria-hidden="true" />{r.status}</span>}
              {!r.confirmed && <span className="reg__status reg__status--tbc">{r.pendingLabel || 'To be confirmed'}</span>}
              {r.since && <p className="reg__since">Since {r.since}</p>}
              {r.documentUrl && r.confirmed
                ? <a className="reg__link" href={r.documentUrl} target="_blank" rel="noopener noreferrer">{r.linkLabel} <span aria-hidden="true">&rarr;</span><span className="sr-only"> (opens in a new tab)</span></a>
                : <span className="reg__link reg__link--soon" aria-disabled="true">{r.soonText || 'Certificate link coming soon'}</span>}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
