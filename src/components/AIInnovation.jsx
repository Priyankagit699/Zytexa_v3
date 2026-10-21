import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import Globe from './Globe.jsx';

// Capabilities kept from the previous version of this section (all tied to Zytexa's AI, analytics and automation services).
const CAPS = ['AI-Powered Automation', 'Data Visualization', 'CRM Workflows', 'Lead Follow-ups', 'Recommendation Systems', 'Connected Applications'];

// The visual is the same Globe component as the hero (same animation and floating service cards); only the centre
// differs: "AI" instead of the logo.
export default function AIInnovation() {
  return (
    <section id="ai" className="section section--ruled aisec">
      <div className="container split split--ai">
        <Reveal className="aisec__copy">
          <p className="eyebrow eyebrow--sm">AI & Innovation</p>
          <h2 className="aix__h">Smarter Systems. Better Decisions.</h2>
          <p className="muted">We use AI, data and automation to help you work smarter, understand your customers and drive growth.</p>
          <ul className="aisec__caps">
            {CAPS.map((c) => <li key={c}><Icon name="check" size={14} stroke={3} />{c}</li>)}
          </ul>
          <a href="#contact" className="btn btn--primary btn--sm">Explore Our Solutions <Icon name="arrow" size={14} /></a>
        </Reveal>
        <Reveal delay={100}><Globe centerText="AI" showScroll={false} /></Reveal>
      </div>
    </section>
  );
}
