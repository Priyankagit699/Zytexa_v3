// Legal registrations & certifications shown in the homepage "Registrations" section.
// IMPORTANT: every detail below is deliberately EMPTY. Nothing is displayed for a field until a VERIFIED value is entered
// (number / status / since). Do not copy values from the design reference - they were sample data, not Zytexa's.
// `documentUrl`: the genuine certificate/document or official verification page for the card (https://...). While it is empty the card
// shows a non-clickable "Certificate link coming soon" label; once set, `linkLabel` becomes a link that opens in a new tab.
// (For ISO the link is only shown when `confirmed` is true.) Never point several cards at one generic page.
// `confirmed: false` marks a card whose existence is not yet evidenced; it shows a visible "To be confirmed" pill.
export const REGISTRATIONS = [
  { key: 'gst', title: 'GST Registration', authority: ['Goods & Services Tax', 'Government of India'], numberLabel: 'Reg. No.', number: '', status: '', since: '', confirmed: true, documentUrl: '', linkLabel: 'View Registration' },
  { key: 'llp', title: 'LLP Incorporated', authority: ['Ministry of Corporate Affairs', 'Government of India'], numberLabel: 'LLP ID', number: '', status: '', since: '', confirmed: true, primary: true, documentUrl: '', linkLabel: 'View Incorporation Certificate' },
  { key: 'msme', title: 'MSME Udyam', authority: ['Ministry of MSME', 'Government of India'], numberLabel: 'Udyam No.', number: '', status: '', since: '', confirmed: true, documentUrl: '', linkLabel: 'View Udyam Certificate' },
  // ISO: no certificate exists in the project. Keep confirmed:false (and the title neutral) until a valid certificate is supplied;
  // then set standard (e.g. 'ISO 9001:2015'), number, status and confirmed:true.
  { key: 'iso', title: 'ISO Certification', authority: [], standard: '', numberLabel: 'Cert. No.', number: '', status: '', since: '', confirmed: false, documentUrl: '', linkLabel: 'View Certificate' },
];
