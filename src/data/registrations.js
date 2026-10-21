// Legal registrations & certifications shown in the homepage "Registrations" section.
// IMPORTANT: every detail below is deliberately EMPTY. Nothing is displayed for a field until a VERIFIED value is entered
// (number / status / since). Do not copy values from the design reference - they were sample data, not Zytexa's.
// `documentUrl`: the genuine certificate/document or official verification page for the card (https://...). While it is empty the card
// shows a non-clickable "Certificate link coming soon" label; once set, `linkLabel` becomes a link that opens in a new tab.
// (For ISO the link is only shown when `confirmed` is true.) Never point several cards at one generic page.
// `confirmed: false` marks a card whose existence is not yet evidenced; it shows a visible "To be confirmed" pill.
export const REGISTRATIONS = [
  { key: 'gst', title: 'GST Registration', authority: ['Goods & Services Tax', 'Government of India'], numberLabel: 'Reg. No.', number: '', status: '', since: '', confirmed: true, soonText: 'Details to be added', documentUrl: '', linkLabel: 'View Registration' },
  { key: 'llp', title: 'LLP Incorporated', authority: ['Ministry of Corporate Affairs', 'Government of India'], numberLabel: 'LLPIN', number: 'ACM-1085', status: '', since: '19 Feb 2025', confirmed: true, primary: true, soonText: 'Official copy not published online', documentUrl: '', linkLabel: 'View Incorporation Certificate' },
  { key: 'msme', title: 'MSME / Udyam Registration', authority: ['Ministry of MSME', 'Government of India'], numberLabel: 'Udyam No.', number: 'UDYAM-RJ-17-0655070', status: '', since: '30 Jun 2026', confirmed: true, soonText: 'Official copy not published online', documentUrl: '', linkLabel: 'View Registration' },
  // ISO: no certificate exists in the project. Keep confirmed:false (and the title neutral) until a valid certificate is supplied;
  // then set standard (e.g. 'ISO 9001:2015'), number, status and confirmed:true.
  { key: 'iso', title: 'ISO Certification', authority: [], standard: '', numberLabel: 'Cert. No.', number: '', status: '', since: '', confirmed: false, pendingLabel: 'Coming Soon', soonText: 'Not yet available', documentUrl: '', linkLabel: 'View Certificate' },
];

// Document notes (checked against the files supplied):
// - msme: the Udyam certificate (documents-private/) matches Zytexa Technology LLP and has no PAN/TAN, but it prints a Gmail address and mobile
//   number. It is kept OUT of public/ until the company approves publishing them; then copy it to public/ and set documentUrl.
// - llp: the supplied FiLLiP file is Form 16, a genuine Certificate of Incorporation (LLPIN ACM-1085, dated 19 Feb 2025). It prints the
//   LLP's PAN and TAN, so it is kept OUT of public/ (see documents-private/). Add a link only once a version without PAN/TAN is approved.
// - gst: the GST certificate supplied (documents-private/) is for MURLIT ENTERPRISES (Santosh Devi Rawat), NOT Zytexa Technology LLP.
//   It must not be shown on this card. Supply Zytexa's own GST certificate, then enter its number here.
