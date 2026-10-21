import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import { LOGO } from '../data/site.js';

function useStill() {
  const [still, setStill] = useState(false);
  useEffect(() => { setStill(window.matchMedia('(prefers-reduced-motion: reduce)').matches); }, []);
  return still;
}

// Connected-system stage: a focal centre, cards positioned in % of the stage, thin circuit lines with
// node dots from each card to the centre, and light packets travelling along them.
// On narrow screens the stage reflows: centre on top, cards in a grid, lines hidden.
function Stage({ ratio, nodes, center, rings, label, variant, endPoint }) {
  const still = useStill();
  const [on, setOn] = useState(-1);
  const H = 100 / ratio;
  const cy = H / 2;
  const lines = nodes.map((n) => {
    const side = n.x < 50 ? 1 : -1;
    const top = n.edge === 'top';
    const sx = top ? n.x : n.x + side * n.hw, sy = (n.y * H) / 100 - (top ? 3.4 : 0);
    const [ex, ey] = endPoint(n, sx, sy, cy);
    const mx = (sx + ex) / 2;
    return { d: `M${sx} ${sy} C${mx} ${sy} ${mx} ${ey} ${ex} ${ey}`, sx, sy, ex, ey };
  });
  return (
    <div className={`eco eco--${variant}`} style={{ '--ratio': ratio }} role="group" aria-label={label}>
      <div className="eco__glow" aria-hidden="true" />
      <svg className="eco__lines" viewBox={`0 0 100 ${H}`} aria-hidden="true">
        {rings && rings({ cx: 50, cy, still })}
        {lines.map((l, k) => (
          <g key={nodes[k].title} className={on === k ? 'is-on' : ''}>
            <path d={l.d} className="eco__spoke" fill="none" />
            <circle cx={l.sx} cy={l.sy} r=".5" className="eco__end" />
            <circle cx={l.ex} cy={l.ey} r=".6" className="eco__end" />
            {!still && (
              <circle r=".5" className="eco__packet">
                <animateMotion dur={`${3.4 + (k % 3) * 0.8}s`} begin={`${k * 0.5}s`} repeatCount="indefinite" path={l.d} />
              </circle>
            )}
          </g>
        ))}
      </svg>
      <div className="eco__center">{center}</div>
      <ul className="eco__nodes">
        {nodes.map((n, k) => (
          <li key={n.title} className="eco__pin" style={{ left: `${n.x}%`, top: `${n.y}%` }}
            onMouseEnter={() => setOn(k)} onMouseLeave={() => setOn(-1)} onFocus={() => setOn(k)} onBlur={() => setOn(-1)} tabIndex={0}>
            <span className="eco__chip" style={{ animationDelay: `${k * 0.5}s` }}>
              <span className="eco__ico"><Icon name={n.icon} size={18} /></span>
              <span className="eco__txt">{n.title}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- One Roof: circular Zytexa hub with ringed nodes and service cards in arcs on both sides ---------- */
const RATIO = 2.78;
const RING_R = 17;
const ROOF = [
  { icon: 'code', title: 'Website & App', x: 22.5, y: 14 },
  { icon: 'headset', title: 'Consultancy & Support', x: 14.8, y: 45 },
  { icon: 'cart', title: 'E-Commerce', x: 16, y: 80 },
  { icon: 'megaphone', title: 'Marketing', x: 76.7, y: 14 },
  { icon: 'chart', title: 'AI & Analytics', x: 85.5, y: 45 },
  { icon: 'bolt', title: 'Automation', x: 79, y: 80 },
].map((n) => ({ ...n, hw: 10.5 }));

function RoofRings({ cx, cy, still }) {
  const dots = [-90, -45, 0, 45, 90, 135, 180, 225];
  const ring = `M${cx - RING_R} ${cy} a${RING_R} ${RING_R} 0 1 0 ${2 * RING_R} 0 a${RING_R} ${RING_R} 0 1 0 ${-2 * RING_R} 0`;
  return (
    <g>
      <defs><radialGradient id="roofGlow"><stop offset="0" stopColor="#00BCD4" stopOpacity=".3" /><stop offset="1" stopColor="#00BCD4" stopOpacity="0" /></radialGradient></defs>
      <circle cx={cx} cy={cy} r="21" fill="url(#roofGlow)" />
      <circle cx={cx} cy={cy} r={RING_R} fill="none" stroke="#38bde6" strokeOpacity=".7" strokeWidth=".28" />
      <circle cx={cx} cy={cy} r={RING_R - 2.6} fill="none" stroke="#38bde6" strokeOpacity=".25" strokeWidth=".22" />
      {dots.map((a) => {
        const r = (a * Math.PI) / 180;
        return <circle key={a} cx={cx + RING_R * Math.cos(r)} cy={cy + RING_R * Math.sin(r)} r=".5" fill="#fff" stroke="#27b9e8" strokeWidth=".22" />;
      })}
      {!still && <circle r=".65" fill="#00BCD4"><animateMotion dur="24s" repeatCount="indefinite" path={ring} /></circle>}
    </g>
  );
}

function RoofCore() {
  return (
    <div className="core">
      <div className="core__disc"><img src={LOGO} alt="" width="130" height="68" /></div>
    </div>
  );
}

export function RoofEcosystem() {
  return (
    <Stage variant="orbit" ratio={RATIO} nodes={ROOF} center={<RoofCore />} rings={RoofRings}
      endPoint={(n, sx, sy, cy) => {
        const dx = 50 - sx, dy = cy - sy, d = Math.hypot(dx, dy);
        return [50 - (dx / d) * RING_R, cy - (dy / d) * RING_R];
      }}
      label="Zytexa at the centre of website and app, marketing, AI and analytics, automation, consultancy and support, and e-commerce services" />
  );
}
