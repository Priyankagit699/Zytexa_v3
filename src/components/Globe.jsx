import { useEffect, useId, useState } from 'react';
import Icon from './Icon.jsx';
import { LOGO } from '../data/site.js';

// Stage coordinates (viewBox 780 x 560). Sphere sits at the centre; positions were measured from the reference screenshot.
const W = 740, H = 470, CX = 337, CY = 245, R = 112;

const LABELS = [
  { t: 'Web/App Development', i: 'code', x: 205, y: 70 },
  { t: 'Performance Marketing', i: 'megaphone', x: 518, y: 105 },
  { t: 'CRM & ERP', i: 'crm', x: 117, y: 201 },
  { t: 'AI & Analytics', i: 'chart', x: 610, y: 208 },
  { t: 'E-Commerce', i: 'cart', x: 119, y: 346 },
  { t: 'Automation', i: 'bolt', x: 557, y: 341 },
  // Both confirmed in services.js / the services PDF: SEO (part of Digital Marketing) and Branding & Creative Production.
  { t: 'SEO & Organic Growth', i: 'target', x: 238, y: 421 },
  { t: 'Creative Design & Branding', i: 'brush', x: 450, y: 421 },
];

// Thin cyan orbit ellipses crossing the whole stage: [rx, ry, rotation, travelling dot duration (0 = none)]
const ORBITS = [
  [300, 96, -18, 22],
  [290, 128, 26, 30],
  [270, 84, 68, 0],
  [252, 150, -52, 26],
  [322, 66, 6, 0],
  [226, 172, 14, 0],
  [192, 112, -78, 0],
];

// Glowing nodes on orbit crossings (deterministic), re-centred from the 780x560 layout.
const NODES0 = [[104, 160, 3], [196, 128, 4], [298, 66, 3], [452, 36, 4], [560, 70, 3], [686, 150, 3.4], [716, 340, 3],
  [662, 500, 3], [540, 520, 4], [392, 538, 3], [250, 506, 4], [122, 470, 3], [72, 330, 3.4], [330, 214, 3], [470, 380, 3.4], [296, 380, 3]];
const NODES = NODES0.map(([x, y, r]) => [CX + (x - 390) * 0.88, CY + (y - 285) * 0.8, r * 0.9]);

const pct = (v, t) => `${(v / t) * 100}%`;

function useStill() {
  const [still, setStill] = useState(false);
  useEffect(() => { setStill(window.matchMedia('(prefers-reduced-motion: reduce)').matches); }, []);
  return still;
}

// Reusable. Default = the hero version (logo in the centre, scroll-down link). `centerText` swaps the logo for text
// (used in AI & Innovation); `showScroll={false}` drops the hero-only scroll link. SVG ids are unique per instance.
// Optional: showLabels={false} drops the floating service cards, showCenter={false} drops the centre logo/text (Hero uses both).
export default function Globe({ centerText = '', showScroll = true, showLabels = true, showCenter = true }) {
  const still = useStill();
  const u = useId().replace(/[^a-zA-Z0-9]/g, '');
  return (
    <div className={`globe ${showScroll ? '' : 'globe--plain'}`} role="img" aria-label={showLabels ? `Animated network globe with ${centerText ? 'AI at its centre' : 'the Zytexa logo'}, connecting Web and App Development, Performance Marketing, CRM and ERP, E-Commerce, AI and Analytics, Automation, SEO and Organic Growth, and Creative Design and Branding` : 'Animated network globe'}>
      <div className="globe__stage">
        <div className="globe__art">
          <svg viewBox={`0 0 ${W} ${H}`} className="globe__svg" aria-hidden="true">
            <defs>
              <radialGradient id={`${u}Halo`} cx="50%" cy="50%" r="50%">
                <stop offset="0" stopColor="#35c8f0" stopOpacity=".42" />
                <stop offset=".5" stopColor="#3b8be0" stopOpacity=".14" />
                <stop offset="1" stopColor="#0D47A1" stopOpacity="0" />
              </radialGradient>
              <radialGradient id={`${u}Sphere`} cx="50%" cy="46%" r="62%">
                <stop offset="0" stopColor="#1b5fd2" />
                <stop offset=".5" stopColor="#0c3a9c" />
                <stop offset=".85" stopColor="#052258" />
                <stop offset="1" stopColor="#031640" />
              </radialGradient>
              <radialGradient id={`${u}Inner`} cx="50%" cy="50%" r="50%">
                <stop offset=".72" stopColor="#00BCD4" stopOpacity="0" />
                <stop offset="1" stopColor="#4fe3f5" stopOpacity=".55" />
              </radialGradient>
              <clipPath id={`${u}Clip`}><circle cx={CX} cy={CY} r={R} /></clipPath>
              <filter id={`${u}Blur`} x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="12" /></filter>
              <filter id={`${u}Soft`} x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="3" /></filter>
            </defs>

            <ellipse cx={CX} cy={CY} rx="340" ry="228" fill={`url(#${u}Halo)`} className="g-pulse" />

            {/* orbit rings (full) */}
            {ORBITS.map(([rx, ry, rot], k) => (
              <ellipse key={k} cx={CX} cy={CY} rx={rx} ry={ry} fill="none" stroke="#4fc6ee" strokeOpacity={k % 2 ? 0.34 : 0.46} strokeWidth="1" transform={`rotate(${rot} ${CX} ${CY})`} />
            ))}

            {/* sphere: deep navy glass with luminous rim */}
            <circle cx={CX} cy={CY} r={R + 14} fill="#00BCD4" opacity=".4" filter={`url(#${u}Blur)`} />
            <circle cx={CX} cy={CY} r={R} fill={`url(#${u}Sphere)`} />
            <g clipPath={`url(#${u}Clip)`} fill="none">
              <circle cx={CX} cy={CY} r={R} fill={`url(#${u}Inner)`} />
              {[[-60, 0.28], [-20, 0.2], [30, 0.16], [75, 0.12]].map(([rot, op], k) => (
                <ellipse key={k} cx={CX} cy={CY} rx={R * 1.05} ry={R * (0.38 + k * 0.1)} stroke="#6fe4f7" strokeOpacity={op} strokeWidth="1.2" transform={`rotate(${rot} ${CX} ${CY})`} />
              ))}
              <ellipse cx={CX - 40} cy={CY - 70} rx="70" ry="30" fill="#7ff0ff" opacity=".08" transform={`rotate(-28 ${CX - 40} ${CY - 70})`} filter={`url(#${u}Soft)`} />
            </g>
            <circle cx={CX} cy={CY} r={R} fill="none" stroke="#4fe3f5" strokeWidth="3.4" opacity=".9" filter={`url(#${u}Soft)`} />
            <circle cx={CX} cy={CY} r={R - 2} fill="none" stroke="#9af3ff" strokeOpacity=".85" strokeWidth="1.4" />
            <circle cx={CX} cy={CY} r={R - 20} fill="none" stroke="#4fe3f5" strokeOpacity=".4" strokeWidth="1" />

            {/* front arcs of the orbits + travelling energy dots */}
            {ORBITS.map(([rx, ry, rot, dur], k) => {
              const full = `M${CX - rx} ${CY} a${rx} ${ry} 0 1 0 ${2 * rx} 0 a${rx} ${ry} 0 1 0 ${-2 * rx} 0`;
              return (
                <g key={k} transform={`rotate(${rot} ${CX} ${CY})`}>
                  <path d={`M${CX - rx} ${CY} A${rx} ${ry} 0 0 0 ${CX + rx} ${CY}`} fill="none" stroke="#7fe7f8" strokeOpacity=".5" strokeWidth="1.1" />
                  {dur > 0 && !still && (
                    <>
                      <circle r="9" fill="#4fe3f5" opacity=".4" filter={`url(#${u}Soft)`}><animateMotion dur={`${dur}s`} repeatCount="indefinite" path={full} /></circle>
                      <circle r="3.6" fill="#fff"><animateMotion dur={`${dur}s`} repeatCount="indefinite" path={full} /></circle>
                    </>
                  )}
                </g>
              );
            })}

            {/* glowing nodes */}
            {NODES.map(([x, y, r], k) => (
              <g key={k} className="g-node" style={{ animationDelay: `${(k % 6) * 0.55}s` }}>
                <circle cx={x} cy={y} r={r * 2.6} fill="#4fe3f5" opacity=".22" />
                <circle cx={x} cy={y} r={r} fill="#fff" stroke="#27b9e8" strokeWidth="1.6" />
              </g>
            ))}
          </svg>
          {showCenter && (centerText
            ? <span className="globe__ai" aria-hidden="true">{centerText}</span>
            : <img className="globe__logo" src={LOGO} alt="" width="150" height="79" />)}
        </div>
        {showLabels && <div className="globe__labels">
          {LABELS.map((l, k) => (
            <div key={l.t} className="globe__pin" style={{ left: pct(l.x, W), top: pct(l.y, H) }}>
              <div className="globe__label" style={{ animationDelay: `${k * 0.7}s` }}>
                <span className="globe__label-ico"><Icon name={l.i} size={20} /></span>
                <span className="globe__label-txt">{l.t}</span>
              </div>
            </div>
          ))}
        </div>}
      </div>
      {showScroll && <a className="globe__scroll" href="#services" aria-label="Scroll down to the next section"><span>Scroll Down</span><i aria-hidden="true" /></a>}
    </div>
  );
}
