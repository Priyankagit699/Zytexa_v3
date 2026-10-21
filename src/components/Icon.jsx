const P = {
  code: 'M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16',
  mobile: 'M8 2h8a1 1 0 011 1v18a1 1 0 01-1 1H8a1 1 0 01-1-1V3a1 1 0 011-1zM11 18h2',
  megaphone: 'M3 11v2a1 1 0 001 1h2l7 4V6L6 10H4a1 1 0 00-1 1zM17 9a4 4 0 010 6M19.5 6.5a8 8 0 010 11',
  cart: 'M3 4h2l2.4 11h10.2L20 8H6M9 20a1 1 0 100-2 1 1 0 000 2zM17 20a1 1 0 100-2 1 1 0 000 2z',
  crm: 'M16 11a3 3 0 100-6 3 3 0 000 6zM8 12a3 3 0 100-6 3 3 0 000 6zM2 20c0-3 3-5 6-5s6 2 6 5M14 15c1-.6 2-.8 3-.8 3 0 5 2 5 5.8',
  chart: 'M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6M20 16v-9',
  brush: 'M18 3l3 3-9 9-3-3 9-9zM9 12c-3 0-5 2-5 5 0 2 1 3 3 3 3 0 5-2 5-5',
  bolt: 'M13 2L4 14h7l-1 8 9-12h-7l1-8z',
  layout: 'M3 4h18v16H3zM3 9h18M9 9v11',
  shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4',
  camera: 'M4 8h3l2-3h6l2 3h3v12H4zM12 17a4 4 0 100-8 4 4 0 000 8z',
  pin: 'M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12zM12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z',
  compass: 'M12 21a9 9 0 100-18 9 9 0 000 18zM15.5 8.5l-2 5-5 2 2-5 5-2z',
  headset: 'M4 14v-2a8 8 0 0116 0v2M4 14h3v5H5a1 1 0 01-1-1v-4zM20 14h-3v5h2a1 1 0 001-1v-4zM17 19c0 1.5-2 2-5 2',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  plus: 'M12 5v14M5 12h14',
  chevron: 'M6 9l6 6 6-6',
  left: 'M15 6l-6 6 6 6',
  right: 'M9 6l6 6-6 6',
  check: 'M5 12l5 5 9-10',
  tailor: 'M12 3l2.5 5 5.5.8-4 3.9 1 5.5-5-2.7-5 2.7 1-5.5-4-3.9 5.5-.8L12 3z',
  team: 'M9 11a3 3 0 100-6 3 3 0 000 6zM17 11a2.5 2.5 0 100-5M3 20c0-3 2.5-5 6-5s6 2 6 5M17 15c2.5 0 4 1.7 4 5',
  target: 'M12 21a9 9 0 100-18 9 9 0 000 18zM12 16a4 4 0 100-8 4 4 0 000 8zM12 12h.01',
  idea: 'M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0012 3z',
  phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z',
  mail: 'M3 6h18v12H3zM3 7l9 7 9-7',
  home: 'M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10',
  heart: 'M12 20s-8-5-8-11a4.5 4.5 0 018-2.5A4.5 4.5 0 0120 9c0 6-8 11-8 11z',
  school: 'M2 9l10-5 10 5-10 5L2 9zM6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5',
  building: 'M5 21V4h9v17M14 9h5v12M8 8h3M8 12h3M8 16h3M3 21h18',
  quote: 'M7 17c-2 0-3-1.5-3-3.5C4 10 6 8 9 7M17 17c-2 0-3-1.5-3-3.5 0-3.5 2-5.5 5-6.5',
  link: 'M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3A4 4 0 0011 18.7l1-1',
  ai: 'M12 8v8M8 12h8M5 5l2 2M17 7l2-2M5 19l2-2M17 17l2 2',
  db: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6',
  layers: 'M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17l9 5 9-5',
};

export default function Icon({ name, size = 22, stroke = 1.7, className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d={P[name] || P.code} />
    </svg>
  );
}
