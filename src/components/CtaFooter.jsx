import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import { LOGO, SITE } from '../data/site.js';

export function Cta() {
  return (
    <section className="section section--cta">
      <div className="container">
        <Reveal className="cta">
          <div className="cta__bg" aria-hidden="true"><i /><i /></div>
          <div>
            <p className="eyebrow eyebrow--light">Ready to get started?</p>
            <h2>Let's Build What's Next for Your Business.</h2>
            <p>Discuss your ideas, explore possibilities and take the next step with Zytexa.</p>
          </div>
          <a href="#contact" className="btn btn--white">Start a Conversation <Icon name="arrow" size={14} /></a>
        </Reveal>
      </div>
    </section>
  );
}

const QUICK = [['Home', '/'], ['Services', '/services'], ['Industries', '/industries'], ['How We Work', '/how-we-work'], ['About Us', '/about'], ['Contact', '/contact']];
const FOOT_SERVICES = [['Website Development', 'website-development'], ['Mobile App Development', 'mobile-app-development'], ['Digital Marketing', 'digital-marketing'], ['E-Commerce Solutions', 'e-commerce-solutions'], ['CRM & ERP Solutions', 'crm-erp-solutions']];
const COMPANY = [['Portfolio', '/portfolio'], ['Careers', '/careers'], ['FAQ', '/faq'], ['Privacy Policy', '/privacy-policy'], ['Terms & Conditions', '/terms-and-conditions'], ['Refund Policy', '/refund-policy']];

export function Footer() {
  const socials = SITE.social.filter((x) => x.href); // only verified profile URLs are rendered
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" aria-label="ZYTEXA Technology LLP — home"><img src={LOGO} alt="ZYTEXA Technology LLP" width="140" height="74" /></Link>
          <p>We build digital solutions, powerful marketing strategies and intelligent automation to help your business grow. 14 services, one team, based in Jaipur.</p>
          <p className="footer__tag">Build · Grow · Automate</p>
          {socials.length > 0 && (
            <ul className="footer__social" aria-label="Social media">
              {socials.map((x) => <li key={x.name}><a href={x.href} target="_blank" rel="noopener noreferrer">{x.name}</a></li>)}
            </ul>
          )}
        </div>
        <nav aria-label="Quick links">
          <h4>Quick Links</h4>
          <ul>{QUICK.map(([l, to]) => <li key={l}><Link to={to}>{l}</Link></li>)}</ul>
        </nav>
        <nav aria-label="Our services">
          <h4>Our Services</h4>
          <ul>
            {FOOT_SERVICES.map(([l, slug]) => <li key={slug}><Link to={`/services/${slug}`}>{l}</Link></li>)}
            <li><Link to="/services" className="strong">View all 14 services →</Link></li>
          </ul>
        </nav>
        <nav aria-label="Company">
          <h4>Company</h4>
          <ul>{COMPANY.map(([l, to]) => <li key={l}><Link to={to}>{l}</Link></li>)}</ul>
        </nav>
        <div className="footer__connect">
          <h4>Connect With Us</h4>
          <dl>
            <dt>Call</dt>
            <dd>{SITE.phones.map((ph) => <a key={ph} href={`tel:${ph.replace(/\s/g, '')}`}>{ph}</a>)}</dd>
            <dt>Email</dt>
            <dd><a href={`mailto:${SITE.email}`}>{SITE.email}</a></dd>
            <dt>Office</dt>
            <dd>{SITE.address}<a className="strong" href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">View on map →</a></dd>
            <dt>Registered Office</dt>
            <dd>{SITE.registeredAddress}</dd>
          </dl>
        </div>
      </div>
      <div className="container footer__bar">
        <small>© {new Date().getFullYear()} Zytexa Technology LLP. All rights reserved.</small>
        <ul aria-label="Legal">
          <li><Link to="/privacy-policy">Privacy</Link></li>
          <li><Link to="/terms-and-conditions">Terms</Link></li>
          <li><Link to="/sitemap">Sitemap</Link></li>
        </ul>
      </div>
    </footer>
  );
}
