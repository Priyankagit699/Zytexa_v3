// Decorative laptop-with-dashboard illustration for the "Have a unique requirement?" panel.
export default function EnquiryArt() {
  const tile = (x, y, fill, glyph) => (
    <g key={`${x}-${y}`} className="enq-float" style={{ animationDelay: `${(x + y) % 7 * 0.4}s` }}>
      <rect x={x} y={y} width="30" height="30" rx="8" fill="#fff" stroke="#d6e6f8" />
      {glyph(x + 15, y + 15, fill)}
    </g>
  );
  return (
    <svg viewBox="0 0 380 190" className="enq-art" preserveAspectRatio="xMaxYMid meet">
      <defs>
        <linearGradient id="enqScr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#1f56c2" /><stop offset="1" stopColor="#0a2a6b" /></linearGradient>
        <linearGradient id="enqBase" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#dbe7f5" /><stop offset="1" stopColor="#aebfd6" /></linearGradient>
        <radialGradient id="enqGlow"><stop offset="0" stopColor="#4fc3f7" stopOpacity=".45" /><stop offset="1" stopColor="#4fc3f7" stopOpacity="0" /></radialGradient>
      </defs>
      <ellipse cx="215" cy="150" rx="150" ry="30" fill="url(#enqGlow)" />
      {/* screen */}
      <rect x="120" y="22" width="190" height="118" rx="9" fill="#0d2f78" />
      <rect x="126" y="28" width="178" height="106" rx="5" fill="url(#enqScr)" />
      <rect x="132" y="34" width="26" height="94" rx="3" fill="#fff" opacity=".1" />
      {[44, 58, 72].map((y) => <rect key={y} x="137" y={y} width="16" height="5" rx="2.5" fill="#7fd9f3" opacity=".8" />)}
      <rect x="166" y="36" width="130" height="10" rx="3" fill="#fff" opacity=".14" />
      <rect x="166" y="52" width="60" height="38" rx="4" fill="#fff" opacity=".12" />
      <rect x="234" y="52" width="62" height="38" rx="4" fill="#fff" opacity=".12" />
      {[0, 1, 2, 3, 4].map((k) => <rect key={k} x={172 + k * 11} y={84 - [10, 18, 12, 24, 30][k]} width="7" height={[10, 18, 12, 24, 30][k]} rx="1.5" fill="#4fdcf0" />)}
      <path d="M240 82 L252 72 L264 78 L276 62 L290 66" fill="none" stroke="#9af3ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="166" y="98" width="130" height="5" rx="2.5" fill="#fff" opacity=".18" />
      <rect x="166" y="108" width="90" height="5" rx="2.5" fill="#fff" opacity=".12" />
      {/* base */}
      <polygon points="104,140 326,140 344,156 86,156" fill="url(#enqBase)" />
      <rect x="196" y="140" width="38" height="4" rx="2" fill="#8fa6c4" opacity=".7" />
      {/* floating app tiles */}
      {tile(70, 30, '#1e88e5', (cx, cy, f) => <circle cx={cx} cy={cy} r="7" fill="none" stroke={f} strokeWidth="2.4" />)}
      {tile(324, 18, '#00BCD4', (cx, cy, f) => <path d={`M${cx - 7} ${cy - 5} h14 v9 h-6 l-4 4 v-4 h-4z`} fill={f} />)}
      {tile(342, 70, '#0D47A1', (cx, cy, f) => <g fill={f}><rect x={cx - 7} y={cy} width="3.6" height="7" /><rect x={cx - 1.8} y={cy - 5} width="3.6" height="12" /><rect x={cx + 3.4} y={cy - 8} width="3.6" height="15" /></g>)}
      {tile(66, 96, '#00BCD4', (cx, cy, f) => <path d={`M${cx - 6} ${cy + 5} l5 -6 l4 4 l6 -8`} fill="none" stroke={f} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />)}
      {tile(30, 62, '#3b82f6', (cx, cy, f) => <rect x={cx - 6} y={cy - 6} width="12" height="12" rx="3" fill={f} />)}
    </svg>
  );
}
