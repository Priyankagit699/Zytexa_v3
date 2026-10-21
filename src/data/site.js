// Central company/contact config.
export const LOGO = '/references/zytexa-logo-full.png';

export const SITE = {
  name: 'Zytexa Technology LLP',
  // VERIFIED against https://zytexa.com (footer/contact details, checked 2026-10-14).
  phones: ['+91 91667 20321', '+91 92169 20321'],
  email: 'contact@zytexa.com', // zytexa.com also lists Zytexatechnology@gmail.com as a second address
  address: '293A, Second Floor, Kamla Tower, Dhawas Road, Heerapura, Vaishali Nagar, Jaipur, Rajasthan, India, 302021',
  // Second address as published on zytexa.com (unlabelled there); provided by the owner as the Registered Office.
  registeredAddress: '18B, Deewan Colony, Bas Badanpura, Gangapol, Tripolia Bazar, Jaipur, Rajasthan, 302002',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('293A Kamla Tower Dhawas Road Heerapura Vaishali Nagar Jaipur 302021'),
  contactEndpoint: import.meta.env.VITE_CONTACT_ENDPOINT || '',

  tagline: 'Jaipur-based IT and digital solutions company.', // wording already used on this site
  // NOT VERIFIED: no business hours are published on zytexa.com. Leave empty to hide the row, or set e.g. 'Mon-Sat, 10:00 AM - 7:00 PM IST' once confirmed.
  hours: '',
  // NOT VERIFIED: no social profile links are published on zytexa.com. Add { name: 'LinkedIn', href: 'https://...' } entries when they exist.
  // Supported names: LinkedIn, Instagram, Facebook, X, YouTube. With no entries, the panel shows an email button only.
  // Footer + contact social links. Entries WITHOUT an href are not rendered. Add verified profile URLs here (names: Instagram, LinkedIn, Facebook, YouTube, WhatsApp).
  social: [
    { name: 'Instagram', href: '' },
    { name: 'LinkedIn', href: '' },
    { name: 'Facebook', href: '' },
    { name: 'YouTube', href: '' },
    { name: 'WhatsApp', href: '' },
  ],
};

// Optional budget bands for the "Budget" select. Left empty on purpose: with no bands the field is a free-text input.
// Add the ranges you actually quote, e.g. ['Under INR 50,000', ...].
export const BUDGETS = [];

export const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services', children: ['Website Development', 'Mobile App Development', 'Digital Marketing', 'E-Commerce Solutions', 'CRM & ERP Solutions'] },
  { label: 'Industries', href: '#industries', children: ['Retail & E-commerce', 'Healthcare', 'Education', 'Real Estate'] },
  { label: 'How We Work', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];
