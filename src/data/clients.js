import FILES from 'virtual:client-logos';

// Every image in public/client is shown automatically (see vite.config.js). Names below are used for alt text only and
// were checked against the logo artwork. A file with no name here (or an unconfirmed one) gets a neutral "Client logo N".
const NAMES = {
  'BR-Logo.webp': 'B.R. Enterprise',
  'Orbit Ad 1 (1).png': 'Orbit Chemicals',
  'Untitled-design-20.webp': 'RR Bangles',
  'Wedding India English.png': 'MelodiaPelle', // artwork reads "MELODIAPELLE - Handcrafted Leather Footwear"
  'euoinia ads 1 .png': 'Euonia',
  'murlit post  (1).png': 'Murlit Enterprises',
  'Mahi Bangels  (1) (1).png': 'Mahi Bangles', // artwork spells "Bangles"
  'Shri Ganraj post .png': 'Shri Ganraj Group',
  'WhatsApp Image 2026-10-21 at 9.36.30 AM.jpeg': 'Fashion Mart India', // artwork reads "FMI - Fashion Mart India"
  'WhatsApp Image 2026-10-21 at 9.36.53 AM.jpeg': 'Wedding Wings', // artwork reads "Wedding Wings - By Jitesh"
  'artisankart tag (2).pdf.png': 'Artisanekart',
  'hos videoooooooooooooooooooooooooooo.png': 'House of Sukrit', // artwork reads "House Of SUKRIT"
  'mainlogo-1-e1780054321933.png': 'Italian Velvet',
  // 'pixination.png' is intentionally unnamed: the script artwork reads "PIXIE NATIONN", which does not clearly match the filename.
};
// Cropped derivatives (originals stay untouched in public/client).
const DERIVED = { 'hos videoooooooooooooooooooooooooooo.png': '/client-derived/house-of-sukrit-cropped.png' };
export const CLIENTS_LABEL = 'Trusted by forward-thinking brands';
export const CLIENTS = FILES.map((file, i) => ({ file, name: NAMES[file] || `Client logo ${i + 1}`, src: DERIVED[file] || `/client/${encodeURIComponent(file)}` }));
