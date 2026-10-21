import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import { FAQS } from '../data/services.js';
import { SERVICES } from '../data/services.js';
import { SITE, BUDGETS } from '../data/site.js';

export function FaqSection({ items = FAQS }) {
  const [open, setOpen] = useState(0);
  const base = useId();
  return (
    <section id="faq" className="section faqsec">
      <div className="container faqs">
        <Reveal className="faqs__head">
          <p className="eyebrow eyebrow--sm">FAQ</p>
          <h2>Frequently Asked Questions</h2>
          <p className="muted">Quick answers about our services, how we work and how to get started.</p>
        </Reveal>
        <Reveal as="ul" className="faq" delay={80}>
          {items.map((f, k) => {
            const on = open === k;
            return (
              <li key={f.q} className={`faq__item ${on ? 'is-open' : ''}`}>
                <h3>
                  <button id={`${base}-b${k}`} aria-expanded={on} aria-controls={`${base}-p${k}`} onClick={() => setOpen(on ? -1 : k)}>
                    {f.q}<span className="faq__plus"><Icon name="plus" size={16} /></span>
                  </button>
                </h3>
                <div id={`${base}-p${k}`} role="region" aria-labelledby={`${base}-b${k}`} hidden={!on}><p>{f.a}</p></div>
              </li>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

const EMPTY = { name: '', email: '', phone: '', company: '', service: '', budget: '', message: '', agree: false };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Please enter your full name.';
  if (!/^[+\d][\d\s-]{7,14}$/.test(v.phone.trim())) e.phone = 'Enter a valid phone number.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Enter a valid email address.';
  if (!v.service) e.service = 'Select a service.';
  if (v.message.trim().length < 10) e.message = 'Tell us a little more (10+ characters).';
  if (!v.agree) e.agree = 'Please accept the Privacy Policy.';
  return e;
}

// Defined at module level so inputs keep focus while typing.
function Field({ id, label, required, error, children }) {
  return (
    <div className={`field ${error ? 'has-err' : ''}`}>
      <label htmlFor={id}>{label}{required ? <span aria-hidden="true"> *</span> : <span className="cx__opt"> (optional)</span>}</label>
      {children}
      {error && <small id={`${id}-e`} role="alert">{error}</small>}
    </div>
  );
}

const SOCIAL_GLYPH = { LinkedIn: 'in', Instagram: 'ig', Facebook: 'f', X: 'X', YouTube: '▶' };

const Clock = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
  </svg>
);

function InfoRow({ icon, label, children }) {
  return (
    <li className="cx__row">
      <span className="cx__ico">{icon}</span>
      <span className="cx__rowtxt"><small>{label}</small>{children}</span>
    </li>
  );
}

export function ContactSection() {
  const [v, setV] = useState(EMPTY);
  const [err, setErr] = useState({});
  const [status, setStatus] = useState({ kind: 'idle', msg: '' });
  const socials = SITE.social.filter((s) => s.href);
  const set = (k) => (e) => setV({ ...v, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  const aria = (id) => ({ 'aria-invalid': !!err[id], 'aria-describedby': err[id] ? `${id}-e` : undefined });

  const submit = async (e) => {
    e.preventDefault();
    const errs = validate(v);
    setErr(errs);
    if (Object.keys(errs).length) { setStatus({ kind: 'error', msg: 'Please fix the highlighted fields.' }); return; }
    if (!SITE.contactEndpoint) {
      setStatus({ kind: 'error', fallback: true, msg: 'Your details are valid, but this form is not connected to a mail service yet, so nothing was sent.' });
      return;
    }
    setStatus({ kind: 'sending', msg: 'Sending…' });
    try {
      const res = await fetch(SITE.contactEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(v) });
      if (!res.ok) throw new Error(String(res.status));
      setStatus({ kind: 'ok', msg: 'Thank you! Your enquiry has been sent. We will get back to you shortly.' });
      setV(EMPTY);
    } catch {
      setStatus({ kind: 'error', msg: 'Sorry, the message could not be sent. Please try again or contact us directly.' });
    }
  };

  return (
    <section id="contact" className="section cx">
      <div className="container cx__in">
        <Reveal className="cx__head">
          <p className="cx__eyebrow">Get in Touch</p>
          <h2>Let's Build <span className="cx__accent">Something Great</span></h2>
          <p className="muted">Tell us about your project and our team will get back to you with the right solutions.</p>
        </Reveal>

        <div className="cx__grid">
          <Reveal className="cx__info">
            <div className="cx__top">
              <h3>{SITE.name}</h3>
              <p>{SITE.tagline}</p>
              <ul className="cx__list">
                <InfoRow icon={<Icon name="phone" size={20} />} label="Phone">
                  {SITE.phones.map((p) => <a key={p} href={`tel:${p.replace(/\s/g, '')}`}>{p}</a>)}
                </InfoRow>
                <InfoRow icon={<Icon name="mail" size={20} />} label="Email"><a href={`mailto:${SITE.email}`}>{SITE.email}</a></InfoRow>
                <InfoRow icon={<Icon name="pin" size={20} />} label="Registered Office Address">
                  <span>{SITE.registeredAddress}</span>
                </InfoRow>
                <InfoRow icon={<Icon name="pin" size={20} />} label="Office Address">
                  <span>{SITE.address}</span>
                  <a className="cx__dir" href={SITE.mapsUrl} target="_blank" rel="noreferrer">Get Directions <Icon name="arrow" size={12} /></a>
                </InfoRow>
                {SITE.hours && <InfoRow icon={<Clock />} label="Business Hours"><span>{SITE.hours}</span></InfoRow>}
              </ul>
            </div>
            <div className="cx__follow">
              <small>{socials.length ? 'Follow Us' : 'Write to Us'}</small>
              <div className="cx__social">
                {socials.map((s) => (
                  <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}>{SOCIAL_GLYPH[s.name] || s.name[0]}</a>
                ))}
                <a href={`mailto:${SITE.email}`} aria-label="Email us"><Icon name="mail" size={16} /></a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form className="cx__form" onSubmit={submit} noValidate>
              <div className="cx__row2">
                <Field id="name" label="Name" required error={err.name}><input id="name" value={v.name} onChange={set('name')} placeholder="Your full name" autoComplete="name" {...aria('name')} /></Field>
                <Field id="email" label="Email" required error={err.email}><input id="email" type="email" value={v.email} onChange={set('email')} placeholder="you@company.com" autoComplete="email" {...aria('email')} /></Field>
                <Field id="phone" label="Phone" required error={err.phone}><input id="phone" type="tel" value={v.phone} onChange={set('phone')} placeholder="Your phone number" autoComplete="tel" {...aria('phone')} /></Field>
                <Field id="company" label="Company"><input id="company" value={v.company} onChange={set('company')} placeholder="Your company name" autoComplete="organization" /></Field>
                <Field id="service" label="Service" required error={err.service}>
                  <select id="service" value={v.service} onChange={set('service')} {...aria('service')}>
                    <option value="">Select a service</option>
                    {SERVICES.map((s) => <option key={s.id}>{s.title}</option>)}
                  </select>
                </Field>
                <Field id="budget" label="Budget">
                  {BUDGETS.length ? (
                    <select id="budget" value={v.budget} onChange={set('budget')}>
                      <option value="">Select range</option>
                      {BUDGETS.map((b) => <option key={b}>{b}</option>)}
                    </select>
                  ) : (
                    <input id="budget" value={v.budget} onChange={set('budget')} placeholder="Your estimated budget" />
                  )}
                </Field>
              </div>
              <Field id="message" label="Project Description" required error={err.message}>
                <textarea id="message" rows="5" value={v.message} onChange={set('message')} placeholder="Tell us about your project, goals and any specific requirements…" {...aria('message')} />
              </Field>
              <div className={`check ${err.agree ? 'has-err' : ''}`}>
                <input id="agree" type="checkbox" checked={v.agree} onChange={set('agree')} {...aria('agree')} />
                <label htmlFor="agree">I agree to the <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link></label>
                {err.agree && <small id="agree-e" role="alert">{err.agree}</small>}
              </div>
              <button className="btn btn--block cx__submit" disabled={status.kind === 'sending'}>Request a Consultation <Icon name="arrow" size={16} /></button>
              <p className={`form__status form__status--${status.kind}`} role="status" aria-live="polite">
                {status.msg}
                {status.fallback && <> Please email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call {SITE.phones[0]}.</>}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
