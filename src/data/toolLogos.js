// Brand logos: genuine marks from the `simple-icons` package (CC0) plus SVGs saved locally in /public/logos
// (from the open gilbarbara/logos collection). Every tool listed in services.js must have an entry here - a missing one
// would fall back to a text chip, and scripts/svc-audit.mjs fails if any chip appears. Matching is on the lower-cased, parenthesis-stripped tool name from services.js.
import {
  siReact, siNextdotjs, siNodedotjs, siSpring, siPython, siPhp, siMysql, siMongodb, siKotlin, siSwift, siFlutter,
  siIonic, siGoogleads, siMeta, siZoho, siHubspot, siOdoo, siSap, siTensorflow, siZapier,
  siMake, siN8n, siWhatsapp, siGooglemaps, siErpnext, siFacebook, siInstagram, siYoutube, siMailchimp, siWordpress,
  siShopify, siWoocommerce, siAndroid, siPostgresql, siGooglebigquery, siGoogleanalytics, siExpo, siBigcommerce,
  siRazorpay, siStripe, siPaypal, siZendesk, siDialogflow, siFigma, siBlender, siSketch, siFramer, siMiro, siWebflow,
  siCloudflare, siLetsencrypt, siOwasp, siNginx, siDocker, siKubernetes, siGithub, siGooglecloud, siNotion, siTrello,
  siAsana, siGooglesheets, siGooglesearchconsole, siGoogletagmanager, siDavinciresolve,
} from 'simple-icons';

const local = (file, title) => ({ src: `/logos/${file}.svg`, title, slug: file });

const JAVA = local('java', 'Java');
const L = {
  'react.js': siReact, 'next.js': siNextdotjs, 'node.js': siNodedotjs, 'java': JAVA, 'spring boot': siSpring,
  'python': siPython, 'php': siPhp, 'mysql': siMysql, 'mongodb': siMongodb, 'kotlin': siKotlin, 'swift': siSwift,
  'flutter': siFlutter, 'ionic': siIonic, 'firebase': local('firebase-icon', 'Firebase'), 'android': siAndroid,
  'google ads': siGoogleads, 'meta ads': siMeta, 'facebook': siFacebook, 'instagram': siInstagram, 'youtube': siYoutube,
  'whatsapp': siWhatsapp, 'whatsapp api': siWhatsapp, 'mailchimp': siMailchimp,
  'wordpress': siWordpress, 'shopify': siShopify, 'woocommerce': siWoocommerce,
  'salesforce': local('salesforce', 'Salesforce'), 'zoho': siZoho, 'hubspot': siHubspot, 'odoo': siOdoo,
  'erpnext': siErpnext, 'sap business one': siSap,
  'power bi': local('microsoft-power-bi', 'Microsoft Power BI'), 'tableau': local('tableau-icon', 'Tableau'),
  'google data studio': local('google-data-studio', 'Google Data Studio'), 'tensorflow': siTensorflow, 'openai apis': local('openai-icon', 'OpenAI'),
  'postgresql': siPostgresql, 'google bigquery': siGooglebigquery, 'google analytics': siGoogleanalytics,
  'zapier': siZapier, 'make': siMake, 'n8n': siN8n, 'twilio': local('twilio-icon', 'Twilio'),
  'google maps': siGooglemaps, 'expo': siExpo, 'bigcommerce': siBigcommerce, 'razorpay': siRazorpay, 'stripe': siStripe,
  'paypal': siPaypal, 'zendesk': siZendesk, 'dialogflow': siDialogflow, 'figma': siFigma, 'blender': siBlender,
  'sketch': siSketch, 'framer': siFramer, 'miro': siMiro, 'webflow': siWebflow, 'cloudflare': siCloudflare,
  "let's encrypt": siLetsencrypt, 'owasp': siOwasp, 'nginx': siNginx, 'docker': siDocker, 'kubernetes': siKubernetes,
  'github': siGithub, 'google cloud': siGooglecloud, 'notion': siNotion, 'trello': siTrello, 'asana': siAsana,
  'google sheets': siGooglesheets, 'google search console': siGooglesearchconsole,
  'google tag manager': siGoogletagmanager, 'davinci resolve': siDavinciresolve,
  'adobe illustrator': local('adobe-illustrator', 'Adobe Illustrator'), 'adobe photoshop': local('adobe-photoshop', 'Adobe Photoshop'),
  'adobe after effects': local('adobe-after-effects', 'Adobe After Effects'), 'adobe premiere pro': local('adobe-premiere', 'Adobe Premiere Pro'),
  'adobe lightroom': local('adobe-lightroom', 'Adobe Lightroom'), 'adobe xd': local('adobe-xd', 'Adobe XD'),
  'slack': local('slack-icon', 'Slack'), 'aws': local('aws', 'Amazon Web Services'), 'microsoft azure': local('microsoft-azure', 'Microsoft Azure'),
};
// "Java (Spring Boot)" shows both marks; "Python (Django/Flask)" shows the Python mark.
const EXTRA = { 'java (spring boot)': [JAVA, siSpring], 'python (django/flask)': [siPython] };

export function toolLogos(token) {
  const raw = token.trim().toLowerCase();
  if (EXTRA[raw]) return EXTRA[raw];
  const key = raw.replace(/\s*\(.*\)/, '');
  return L[key] ? [L[key]] : null;
}

export const splitTools = (s) => (s ? s.split(/,(?![^(]*\))/).map((t) => t.trim()).filter(Boolean) : []);
