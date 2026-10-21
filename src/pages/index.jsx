import { Link, useParams } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { Tool } from '../components/Sections.jsx';
import { ContactSection, FaqSection } from '../components/FaqContact.jsx';
import { Crumbs, ImageHero, PageCta, PageHero, PageSection, useTitle } from '../components/PageParts.jsx';
import { splitTools } from '../data/toolLogos.js';
import { COMPANY_LINKS, EXTRA_FAQS, INDUSTRY_PAGES, LEGAL, LEGAL_DECISIONS, PROCESS, SERVICE_GROUPS, SERVICE_PAGES, industryBySlug, serviceBySlug } from '../data/pages.js';
import { SERVICE_CONTENT } from '../data/serviceContent.js';
import { FAQS } from '../data/services.js';
import { SITE } from '../data/site.js';

/* ---------------- Services ---------------- */
export function ServicesPage() {
  useTitle('Services');
  return (
    <>
      <PageHero eyebrow="Our services" title="Complete digital solutions for your business"
        intro="From websites and apps to marketing, automation and analytics, Zytexa brings 14 services together under one roof, so you can work with one team instead of many vendors.">
        <Link to="/contact" className="btn btn--primary">Get a Free Consultation <Icon name="arrow" size={16} /></Link>
      </PageHero>
      {SERVICE_GROUPS.map((g, gi) => (
        <PageSection key={g.name} eyebrow={g.name} tint={gi % 2 === 1}>
          <div className="grid grid--4 pgrid">
            {g.items.map((s, k) => (
              <Reveal as="article" key={s.slug} delay={k * 60} className="card pcard">
                <span className="ico"><Icon name={s.icon} size={20} /></span>
                <h3>{s.nav}</h3>
                <p>{s.short}</p>
                <Link to={s.path} className="link-arrow">Learn more <Icon name="arrow" size={14} /></Link>
              </Reveal>
            ))}
          </div>
        </PageSection>
      ))}
      <PageCta title="Not sure which service you need?" text="Describe your goal and we will suggest the right combination of services." />
    </>
  );
}

export function ServiceDetail() {
  const { slug } = useParams();
  const s = serviceBySlug(slug);
  useTitle(s?.nav);
  if (!s) return <NotFound />;
  const c = SERVICE_CONTENT[s.slug] || { offer: s.includes.map((t) => [t, '']), why: [], faqs: [] };
  const tools = splitTools(s.tools);
  const related = SERVICE_PAGES.filter((x) => x.group === s.group && x.slug !== s.slug);
  return (
    <>
      <ImageHero eyebrow={s.group} title={s.title} intro={s.intro} image={`/heroes/${s.slug}.webp`}>
        <Link to="/contact" className="btn btn--primary">Get a Free Consultation <Icon name="arrow" size={16} /></Link>
        <Link to="/services" className="btn btn--glass">Explore Our Services</Link>
      </ImageHero>
      <Crumbs items={[['Home', '/'], ['Services', '/services'], [s.nav]]} />
      <PageSection eyebrow="What we do" title={s.tagline}>
        <ul className="grid grid--3 pgrid offer">
          {c.offer.map(([t, d], k) => <Reveal as="li" key={t} delay={k * 50} className="card pcard"><span className="ico"><Icon name="check" size={18} stroke={2.5} /></span><h3>{t}</h3>{d && <p>{d}</p>}</Reveal>)}
        </ul>
      </PageSection>
      {tools.length > 0 && (
        <PageSection eyebrow="Tools & platforms" title="Technologies and tools used in this service" tint>
          <ul className="tools tools--page" aria-label={`${s.nav} tools and platforms`}>{tools.map((t) => <Tool key={t} name={t} />)}</ul>
          <p className="note">The exact tools are chosen around your requirements. Logos are shown only to identify the tools and do not imply partnership, endorsement or certification.</p>
        </PageSection>
      )}
      {c.why.length > 0 && (
        <PageSection eyebrow="Why Zytexa" title={`Why choose Zytexa for ${s.nav.toLowerCase()}?`}>
          <ul className="grid grid--3 pgrid">
            {c.why.map((w, k) => <Reveal as="li" key={w} delay={k * 60} className="card incl__item"><Icon name="check" size={16} stroke={3} /><span>{w}</span></Reveal>)}
          </ul>
        </PageSection>
      )}
      <PageSection eyebrow="Benefits" title="What this can mean for your business" tint>
        <div className="grid grid--3 pgrid">
          {s.benefits.map(([t, d], k) => <Reveal as="article" key={t} delay={k * 70} className="card pcard"><h3>{t}</h3><p>{d}</p></Reveal>)}
        </div>
        <p className="note">Outcomes depend on your market, content and goals. We do not promise specific rankings, sales or results.</p>
      </PageSection>
      <PageSection eyebrow="How we work" title="Our process">
        <ol className="grid grid--3 psteps">
          {PROCESS.map(([t, d], k) => <Reveal as="li" key={t} delay={k * 60} className="card pstep"><span className="pstep__n">{String(k + 1).padStart(2, '0')}</span><h3>{t}</h3><p>{d}</p></Reveal>)}
        </ol>
      </PageSection>
      {c.faqs.length > 0 && <FaqSection items={c.faqs.map(([q, a]) => ({ q, a }))} />}
      {related.length > 0 && (
        <PageSection eyebrow="Related services" tint>
          <ul className="related">{related.map((r) => <li key={r.slug}><Link to={r.path} className="card related__item"><Icon name={r.icon} size={18} /><span>{r.nav}</span><Icon name="arrow" size={14} /></Link></li>)}</ul>
        </PageSection>
      )}
      <PageCta title={`Interested in ${s.nav}?`} />
    </>
  );
}

/* ---------------- Industries ---------------- */
export function IndustriesPage() {
  useTitle('Industries');
  return (
    <>
      <PageHero eyebrow="Industries" title="Industries we serve"
        intro="We create digital solutions for a wide range of industries, helping businesses adapt, grow and stay ahead. Explore how our services can apply to your sector.">
        <Link to="/contact" className="btn btn--primary">Get a Free Consultation <Icon name="arrow" size={16} /></Link>
      </PageHero>
      <PageSection>
        <div className="grid grid--3 pgrid">
          {INDUSTRY_PAGES.map((i, k) => (
            <Reveal as="article" key={i.slug} delay={k * 60} className="card industry pcard pcard--img">
              <div className="industry__img"><img src={`/industries/${i.img}.webp`} alt="" width="800" height="432" decoding="async" /></div>
              <div className="pcard__body"><h3>{i.nav}</h3><p>{i.short}</p><Link to={i.path} className="link-arrow">Learn more <Icon name="arrow" size={14} /></Link></div>
            </Reveal>
          ))}
        </div>
      </PageSection>
      <PageCta title="Don't see your industry?" text="Our services apply across many sectors. Tell us about your business and we will explain how we can help." />
    </>
  );
}

export function IndustryDetail() {
  const { slug } = useParams();
  const i = industryBySlug(slug);
  useTitle(i?.nav);
  if (!i) return <NotFound />;
  const svcs = i.help.map(([slugs]) => serviceBySlug(slugs[0]));
  const tools = [...new Set(svcs.flatMap((sv) => splitTools(sv.tools)))].slice(0, 14);
  return (
    <>
      <ImageHero eyebrow="Industries" title={i.nav} intro={i.intro} image={`/heroes/industry-${i.slug}.webp`}>
        <Link to="/contact" className="btn btn--primary">Get a Free Consultation <Icon name="arrow" size={16} /></Link>
        <Link to="/industries" className="btn btn--glass">All industries</Link>
      </ImageHero>
      <Crumbs items={[['Home', '/'], ['Industries', '/industries'], [i.nav]]} />
      <PageSection eyebrow="Common challenges" title="What businesses in this sector often face">
        <ul className="grid grid--2 incl">{i.challenges.map((c, k) => <Reveal as="li" key={c} delay={k * 50} className="card incl__item"><Icon name="target" size={16} /><span>{c}</span></Reveal>)}</ul>
      </PageSection>
      <PageSection eyebrow="Relevant services" title="Services that may apply" tint>
        <div className="grid grid--4 pgrid">
          {i.help.map(([slugs, text], k) => {
            const sv = serviceBySlug(slugs[0]);
            return (
              <Reveal as="article" key={slugs[0]} delay={k * 60} className="card pcard">
                <span className="ico"><Icon name={sv.icon} size={20} /></span>
                <h3>{sv.nav}</h3><p>{text}</p>
                <Link to={sv.path} className="link-arrow">About this service <Icon name="arrow" size={14} /></Link>
              </Reveal>
            );
          })}
        </div>
        <p className="note">These are potential use cases, not results from past client projects.</p>
      </PageSection>
      {tools.length > 0 && (
        <PageSection eyebrow="Tools & platforms" title="Technologies that may be used">
          <ul className="tools tools--page" aria-label="Tools and platforms">{tools.map((t) => <Tool key={t} name={t} />)}</ul>
          <p className="note">Tools are selected per project. Logos identify the tools only and do not imply partnership or certification.</p>
        </PageSection>
      )}
      <PageSection eyebrow="Benefits" title="What a joined-up digital approach can offer" tint>
        <div className="grid grid--3 pgrid">
          {[['One team', 'Website, marketing and systems planned together instead of managed by separate vendors.'], ['Built around your sector', 'Solutions shaped by the challenges above, not a generic template.'], ['Support after launch', 'Maintenance, optimization and advice continue once the project is live.']].map(([t, d], k) => <Reveal as="article" key={t} delay={k * 70} className="card pcard"><h3>{t}</h3><p>{d}</p></Reveal>)}
        </div>
      </PageSection>
      <PageSection eyebrow="Other industries">
        <ul className="related">{INDUSTRY_PAGES.filter((x) => x.slug !== i.slug).map((x) => <li key={x.slug}><Link to={x.path} className="card related__item"><span>{x.nav}</span><Icon name="arrow" size={14} /></Link></li>)}</ul>
      </PageSection>
      <PageCta title={`Talk to us about ${i.nav.toLowerCase()}`} />
    </>
  );
}

/* ---------------- How We Work ---------------- */
export function HowWeWorkPage() {
  useTitle('How We Work');
  return (
    <>
      <PageHero eyebrow="How we work" title="A simple process. Powerful results."
        intro="Our structured approach turns your ideas into impactful digital solutions - from the first conversation to long after launch.">
        <Link to="/contact" className="btn btn--primary">Get a Free Consultation <Icon name="arrow" size={16} /></Link>
      </PageHero>
      <PageSection>
        <ol className="journey">
          {PROCESS.map(([t, d], k) => (
            <Reveal as="li" key={t} delay={k * 60} className="journey__step">
              <span className="journey__n">{String(k + 1).padStart(2, '0')}</span>
              <div><h3>{t}</h3><p>{d}</p></div>
            </Reveal>
          ))}
        </ol>
      </PageSection>
      <PageCta title="Ready to start with a conversation?" text="The first step is free: tell us about your goals and we will outline how we would approach them." />
    </>
  );
}

/* ---------------- Company ---------------- */
export function AboutPage() {
  useTitle('About Us');
  return (
    <>
      <PageHero eyebrow="Company" title="About Zytexa Technology LLP"
        intro="Zytexa Technology LLP is a Jaipur-based IT and digital solutions company, helping businesses build, grow and scale in the digital world." />
      <PageSection eyebrow="What we do" title="Technology, marketing and creativity, together"
        intro="We combine technology, marketing and creativity to deliver solutions that are practical, scalable and built around your goals.">
        <div className="grid grid--3 pgrid">
          {[['One team, 14 services', 'Websites, apps, marketing, e-commerce, CRM and ERP, analytics and AI, branding, automation and more, all in one place.'], ['Tailored to your goals', 'Strategies and solutions are shaped around your business rather than a fixed package.'], ['Focused on long-term growth', 'We support businesses beyond launch with maintenance, optimization and advice.']].map(([t, d], k) => (
            <Reveal as="article" key={t} delay={k * 70} className="card pcard"><h3>{t}</h3><p>{d}</p></Reveal>
          ))}
        </div>
      </PageSection>
      <PageSection eyebrow="Where we are" title="Based in Jaipur, Rajasthan" tint>
        <p className="muted">Office: {SITE.address}</p>
        <p className="muted">Registered office: {SITE.registeredAddress}</p>
        <div className="btn-row"><Link to="/contact" className="btn btn--primary">Contact us <Icon name="arrow" size={14} /></Link><Link to="/services" className="btn btn--ghost">Explore our services</Link></div>
      </PageSection>
      <PageSection>
        <p className="note">Content review note: company history, mission and vision, team and founder details are not shown because approved text has not been supplied. Zytexa should add these before launch.</p>
      </PageSection>
      <PageCta />
    </>
  );
}

export function PortfolioPage() {
  useTitle('Portfolio');
  return (
    <>
      <PageHero eyebrow="Company" title="Portfolio" intro="A selection of Zytexa's work and case studies will be published here." />
      <PageSection>
        <Reveal className="card empty">
          <span className="ico"><Icon name="layers" size={22} /></span>
          <h3>Case studies coming soon</h3>
          <p>We are preparing real project write-ups. Until they are published, we are happy to talk through relevant examples and how we would approach your project.</p>
          <Link to="/contact" className="btn btn--primary btn--sm">Ask about our work <Icon name="arrow" size={14} /></Link>
        </Reveal>
        <p className="note">Content placeholder: genuine projects, clients and results will be added here by the Zytexa team.</p>
      </PageSection>
    </>
  );
}

export function CareersPage() {
  useTitle('Careers');
  return (
    <>
      <PageHero eyebrow="Company" title="Careers at Zytexa" intro="We work across technology, marketing and creative disciplines. If that interests you, we would like to hear from you." />
      <PageSection eyebrow="Open positions" title="No vacancies are listed right now">
        <Reveal className="card empty">
          <span className="ico"><Icon name="team" size={22} /></span>
          <h3>Send us your details</h3>
          <p>We do not have any published openings at the moment, but you are welcome to introduce yourself. Tell us about your skills and the kind of role you are looking for.</p>
          <a className="btn btn--primary btn--sm" href={`mailto:${SITE.email}?subject=Career%20enquiry`}>Email {SITE.email} <Icon name="arrow" size={14} /></a>
        </Reveal>
      </PageSection>
    </>
  );
}

export function BlogPage() {
  useTitle('Blog');
  return (
    <>
      <PageHero eyebrow="Company" title="Blog" intro="Articles on technology, marketing and growth are on the way." />
      <PageSection>
        <Reveal className="card empty">
          <span className="ico"><Icon name="idea" size={22} /></span>
          <h3>Coming soon</h3>
          <p>We have not published any articles yet. In the meantime, explore our services or get in touch with a question.</p>
          <div className="btn-row" style={{ justifyContent: 'center', margin: 0 }}><Link to="/services" className="btn btn--primary btn--sm">Explore services</Link><Link to="/contact" className="btn btn--ghost btn--sm">Contact us</Link></div>
        </Reveal>
      </PageSection>
    </>
  );
}

/* ---------------- Contact / 404 ---------------- */
export function ContactPage() {
  useTitle('Contact');
  return <div className="contactpage"><h1 className="sr-only">Contact Zytexa Technology LLP</h1><ContactSection /></div>;
}

export function NotFound() {
  useTitle('Page not found');
  return (
    <PageHero eyebrow="404" title="We couldn't find that page" intro="The page may have moved, or the link may be incorrect.">
      <Link to="/" className="btn btn--primary">Back to home</Link>
      <Link to="/services" className="btn btn--ghost">View services</Link>
    </PageHero>
  );
}

/* ---------------- FAQ, legal, sitemap ---------------- */
export function FaqPage() {
  useTitle('FAQ');
  return (
    <>
      <PageHero eyebrow="Company" title="Frequently asked questions" intro="Quick answers about our services, how we work and how to get started." />
      <FaqSection items={[...FAQS, ...EXTRA_FAQS]} />
      <PageCta title="Still have a question?" text="Send us a message and our team will get back to you." />
    </>
  );
}

export function LegalPage({ kind }) {
  const page = LEGAL[kind];
  useTitle(page.title);
  return (
    <>
      <PageHero eyebrow="Legal" title={page.title} intro="Zytexa Technology LLP" />
      <PageSection>
        <div className="legal">
          <p className="legal__flag" role="note"><strong>Draft for company review.</strong> This page is an outline only. Sections marked &ldquo;Requires company confirmation&rdquo; must be completed and approved by Zytexa Technology LLP, ideally with a qualified legal adviser, before this page is treated as final. Nothing here is a final legal statement.</p>
          {page.sections.map(([h, t, confirm]) => (
            <Reveal as="section" key={h} className="legal__sec">
              <h2>{h}</h2>
              <p>{t}</p>
              {confirm && <p className="legal__tbc">Requires company confirmation.</p>}
            </Reveal>
          ))}
          <Reveal as="section" className="legal__sec"><h2>Decisions needed before this page is final</h2><ul className="legal__list">{LEGAL_DECISIONS.map((d) => <li key={d}>{d}</li>)}</ul></Reveal>
          <p className="legal__contact">Questions? <Link to="/contact">Contact us</Link> or email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
        </div>
      </PageSection>
    </>
  );
}

export function SitemapPage() {
  useTitle('Sitemap');
  const main = [['Home', '/'], ['Services', '/services'], ['Industries', '/industries'], ['How We Work', '/how-we-work'], ['Contact', '/contact']];
  const company = [...COMPANY_LINKS.map((c) => [c.label, c.to]), ['FAQ', '/faq']];
  const legal = [['Privacy Policy', '/privacy-policy'], ['Terms & Conditions', '/terms-and-conditions'], ['Refund Policy', '/refund-policy']];
  const List = ({ title, items }) => (
    <div className="smap__col"><h2>{title}</h2><ul>{items.map(([l, to]) => <li key={to}><Link to={to}>{l}</Link></li>)}</ul></div>
  );
  return (
    <>
      <PageHero eyebrow="Sitemap" title="Sitemap" intro="Every page on this website." />
      <PageSection>
        <div className="smap">
          <List title="Main" items={main} />
          {SERVICE_GROUPS.map((g) => <List key={g.name} title={`Services: ${g.name}`} items={g.items.map((s) => [s.nav, s.path])} />)}
          <List title="Industries" items={INDUSTRY_PAGES.map((i) => [i.nav, i.path])} />
          <List title="Company" items={company} />
          <List title="Legal" items={legal} />
        </div>
      </PageSection>
    </>
  );
}
