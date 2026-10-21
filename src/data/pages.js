// Navigation structure + content for the service and industry pages.
// Service facts ("includes") come from the Zytexa services PDF (see services.js). Benefits/process text is descriptive
// guidance only - no results, statistics, clients or certifications are claimed anywhere in this file.
import { SERVICES } from './services.js';

// id -> slug, label shown in the header dropdown (per the header reference), group, content
const S = (id, slug, nav, group, d) => ({ id, slug, nav, group, ...d });

export const SERVICE_PAGES = [
  S(1, 'website-development', 'Website Development', 'Build', {
    includes: ['Business, portfolio and informational websites', 'E-commerce sites (Shopify, WooCommerce, custom PHP)', 'CMS-based sites (WordPress, Wix)', 'Static and dynamic websites'],
    intro: 'A website is usually the first place a customer meets your business. We design and build fast, responsive sites that explain what you do clearly and make it easy to get in touch or buy.',
    benefits: [['Built for your goal', 'Whether it is enquiries, bookings or online sales, the structure and content follow the outcome you need.'], ['Easy to manage', 'Where it fits, we use a CMS so your team can update pages without needing a developer.'], ['Ready to grow', 'Clean, modern code and common frameworks make later features and integrations simpler to add.']],
    process: [['Brief', 'We agree the purpose, pages, content and platform.'], ['Design', 'Layouts and visual direction are shared for your feedback.'], ['Build', 'Pages are developed, connected and tested on common devices.'], ['Launch & support', 'We go live and stay available for updates and maintenance.']],
  }),
  S(2, 'mobile-app-development', 'Mobile App Development', 'Build', {
    includes: ['Android, iOS, cross-platform and hybrid apps', 'UI/UX design for mobile apps', 'App deployment and maintenance', 'API integration'],
    intro: 'We build mobile apps that work smoothly with your existing systems, from the first screen design through release and ongoing maintenance.',
    benefits: [['Right approach for your budget', 'Native, cross-platform or hybrid - we help you choose the option that suits your audience and timeline.'], ['Connected to your business', 'API integration links the app to your website, CRM or other back-end systems.'], ['Supported after release', 'Deployment help and maintenance keep the app working as devices and platforms change.']],
    process: [['Scope', 'We define features, platforms and the user journey.'], ['Design', 'App screens and flows are prototyped before development.'], ['Develop & test', 'The app is built, integrated with your systems and tested.'], ['Release & maintain', 'We help publish it and look after updates.']],
  }),
  S(9, 'ui-ux-web-design', 'UI/UX & Web Design', 'Build', {
    includes: ['UI/UX design for websites and apps', 'Wireframes and prototypes', 'Responsive and accessible design', 'Design system creation', 'A/B testing of UI variations'],
    intro: 'Good design makes a product easy to understand and use. We plan the experience first, then craft interfaces that are consistent, accessible and speed-conscious.',
    benefits: [['Clear user journeys', 'Wireframes and prototypes let you see and test the flow before development starts.'], ['Consistent look and feel', 'A design system keeps colours, type and components consistent across pages and products.'], ['Evidence-based refinement', 'A/B testing helps compare layout variations rather than guessing.']],
    process: [['Understand', 'We learn about your users, goals and constraints.'], ['Wireframe', 'Structure and flows are sketched and reviewed.'], ['Design & prototype', 'Visual design and clickable prototypes are produced.'], ['Hand-off', 'Design files and guidelines are prepared for development.']],
  }),
  S(4, 'e-commerce-solutions', 'E-Commerce Solutions', 'Build', {
    includes: ['Store setup on Amazon, Flipkart, Jiomart and Meesho', 'Product listing and optimization', 'Brand registry and A+ content design', 'Sales analytics and ad campaign strategy', 'Listing without a GST number'],
    intro: 'We help you start and run an online store - on your own website, on marketplaces, or both - with listings, content and campaigns set up to be found and to convert.',
    benefits: [['Marketplace-ready listings', 'Titles, images and descriptions are prepared to follow each marketplace\'s requirements.'], ['Stronger product pages', 'Brand registry and A+ content help your products stand out where the platform allows it.'], ['Informed decisions', 'Sales analytics shows what is working so advertising spend can be directed sensibly.']],
    process: [['Plan', 'We choose channels and prepare product information.'], ['Set up', 'Stores, listings and brand content are created.'], ['Promote', 'Ad campaigns are planned and launched.'], ['Review', 'Sales data is analysed and listings refined.']],
  }),
  S(3, 'digital-marketing', 'Digital Marketing', 'Grow', {
    includes: ['SEO and SMO (social media optimization)', 'Meta Ads and Google Ads', 'Email and WhatsApp marketing', 'Content, funnel and account-based marketing strategy', 'OTT, newspaper (Rajasthan) and influencer tie-ups'],
    intro: 'We plan and run digital marketing that connects the right message to the right audience - from organic search and social media to paid campaigns and messaging.',
    benefits: [['Joined-up channels', 'Search, social, email and ads are planned together so they support each other.'], ['Measurable activity', 'Campaigns are tracked so you can see what is generating enquiries.'], ['Local and digital reach', 'Alongside online channels, we can arrange OTT, newspaper and influencer tie-ups.']],
    process: [['Audit & goals', 'We review your presence, audience and objectives.'], ['Strategy', 'A channel and content plan is agreed.'], ['Execute', 'Campaigns and content go live.'], ['Report & improve', 'Results are reviewed and the plan is adjusted.']],
  }),
  S(12, 'google-my-business', 'Google My Business', 'Grow', {
    includes: ['Google Business Profile creation and setup', 'Google reviews strategy', 'GMB boost and local SEO ranking', 'Google Maps optimization and visibility'],
    intro: 'When people search for a service near them, your Google Business Profile is often what they see first. We set it up properly and keep it working for you.',
    benefits: [['Found locally', 'Complete, accurate profiles help your business appear for nearby searches.'], ['Trust through reviews', 'A simple reviews strategy encourages genuine customer feedback.'], ['Visible on Maps', 'Optimization helps customers find directions, hours and contact details easily.']],
    process: [['Claim & verify', 'We create or claim the profile and complete verification.'], ['Optimize', 'Categories, details, photos and posts are prepared.'], ['Reviews', 'A process for requesting and answering reviews is set up.'], ['Maintain', 'The profile is kept current and monitored.']],
  }),
  S(7, 'branding-creative', 'Branding & Creative', 'Grow', {
    includes: ['Logo, identity and stationery', 'Packaging and business cards', 'Product reels and motion graphics', 'Ad videos and company profiles', 'Social media creatives'],
    intro: 'A recognisable brand makes every other effort work harder. We create identities and creative content that look consistent wherever your customers meet you.',
    benefits: [['One consistent identity', 'Logo, colours, stationery and packaging are designed to work together.'], ['Content for every channel', 'Reels, motion graphics and social creatives are produced in formats ready for use.'], ['Clear company story', 'Company profiles and ad videos help explain what you do quickly.']],
    process: [['Discover', 'We learn about your business, audience and tone.'], ['Concepts', 'Design directions are presented for feedback.'], ['Refine', 'The chosen direction is developed across formats.'], ['Deliver', 'Final files and usage guidance are handed over.']],
  }),
  S(11, 'photography-videography', 'Photography & Videography', 'Grow', {
    includes: ['Product shoots for e-commerce', 'Commercial and ad photography', 'Reels and cinematic ad shoots', 'Professional video and photo editing'],
    intro: 'Strong visuals are central to how products and brands are judged online. We handle shooting and editing so your photos and videos look professional and consistent.',
    benefits: [['Marketplace and web ready', 'Product images are prepared for e-commerce listings and websites.'], ['Short-form video', 'Reels and cinematic ads are shot for social and advertising use.'], ['Polished finish', 'Professional editing and colour work bring shoots to a consistent standard.']],
    process: [['Brief', 'We agree the products, style and deliverables.'], ['Shoot', 'Photography or video is captured on location or in-studio.'], ['Edit', 'Images and footage are retouched and edited.'], ['Deliver', 'Final files are provided in the formats you need.']],
  }),
  S(5, 'crm-erp-solutions', 'CRM & ERP Solutions', 'Automate & Analyze', {
    includes: ['CRM setup and customization', 'ERP implementation for SMEs', 'Workflow and sales automation', 'Data migration between CRMs', 'Dashboards and reports'],
    intro: 'We set up CRM and ERP systems around the way your team actually works, then automate the routine steps so leads and operations are easier to manage.',
    benefits: [['Fits your process', 'Customization means the system follows your sales and operations, not the other way round.'], ['Less manual work', 'Workflow and sales automation reduce repetitive follow-ups and data entry.'], ['Clearer visibility', 'Dashboards and reports put key numbers in one place.']],
    process: [['Assess', 'We map your current process and data.'], ['Configure', 'The CRM or ERP is set up and customized.'], ['Migrate & train', 'Existing data is moved and your team is shown how to use it.'], ['Support', 'We help with adjustments as your process evolves.']],
  }),
  S(6, 'data-analytics-ai', 'Data Analytics & AI', 'Automate & Analyze', {
    includes: ['BI dashboards', 'Sales, marketing and finance analytics', 'Predictive and prescriptive analytics', 'AI-based automation and recommendations'],
    intro: 'We turn scattered business data into dashboards and insights, and apply AI where it genuinely helps - for example automating tasks or suggesting next steps.',
    benefits: [['Decisions from data', 'Dashboards bring sales, marketing and finance figures together.'], ['Looking ahead', 'Predictive and prescriptive analytics help you plan rather than only report.'], ['Practical AI', 'AI-based automation and recommendations are applied to specific, well-defined tasks.']],
    process: [['Define questions', 'We agree what you need to know and which data you have.'], ['Prepare data', 'Sources are connected and cleaned.'], ['Build', 'Dashboards, models or automations are created.'], ['Review', 'Outputs are checked with your team and refined.']],
  }),
  S(8, 'business-automation', 'Business Automation', 'Automate & Analyze', {
    includes: ['Lead generation automation', 'WhatsApp and email drip campaigns', 'Invoice, payroll and HRMS automation', 'Auto-assignment of leads and automatic reports', 'Multi-platform chatbot integration'],
    intro: 'Repetitive tasks take time that could go into serving customers. We connect your tools and automate follow-ups, reporting and admin so work moves on its own.',
    benefits: [['Faster follow-up', 'Leads can be captured, assigned and followed up automatically.'], ['Fewer manual errors', 'Invoices, payroll and reports are generated from the same data.'], ['Always-on responses', 'Chatbots can answer common questions across messaging platforms.']],
    process: [['Find the repetition', 'We list the tasks that are slow or error-prone.'], ['Design flows', 'Automations are mapped before anything is built.'], ['Build & connect', 'Tools are integrated and workflows tested.'], ['Monitor', 'We check that automations keep working as things change.']],
  }),
  S(10, 'cybersecurity-maintenance', 'Cybersecurity & Maintenance', 'Support & Strategy', {
    includes: ['Security audit and vulnerability scan', 'SSL, firewall and WAF/CDN', 'Backups and disaster recovery', 'Website maintenance and monitoring', 'GDPR and Indian IT Act compliance'],
    intro: 'A website needs looking after after launch. We help protect it, keep it updated and make sure you can recover quickly if something goes wrong.',
    benefits: [['Known risks first', 'A security audit and vulnerability scan identifies weaknesses to fix.'], ['Layers of protection', 'SSL, a firewall and WAF/CDN protect traffic and the site itself.'], ['Recovery planning', 'Regular backups and a recovery plan limit disruption.']],
    process: [['Audit', 'We scan the site and review its setup.'], ['Harden', 'Protection such as SSL and firewall rules is put in place.'], ['Back up', 'Backups and recovery steps are arranged.'], ['Monitor', 'Ongoing maintenance and monitoring keep it current.']],
  }),
  S(13, 'business-growth-strategy', 'Business Growth Strategy', 'Support & Strategy', {
    includes: ['Startup launch guidance', 'Business process setup', 'Cost and ROI planning', 'Team building and delegation', 'Scaling online and offline'],
    intro: 'Sometimes the next step for a business is a decision rather than a tool. We offer practical guidance on launching, organising and scaling - online and offline.',
    benefits: [['Clear priorities', 'We help you decide what to do first and what can wait.'], ['Sensible budgets', 'Cost and ROI planning ties spending to expected outcomes.'], ['Structure to scale', 'Process setup and delegation make growth easier to manage.']],
    process: [['Conversation', 'We understand where the business is and where you want it to go.'], ['Plan', 'Priorities, budgets and responsibilities are outlined.'], ['Set up', 'Processes and tools are put in place.'], ['Review', 'We revisit progress and adjust.']],
  }),
  S(14, 'it-consultancy-support', 'IT Consultancy & Support', 'Support & Strategy', {
    includes: ['Project-based technical consultancy', 'Launch planning for startups', 'Tech stack suggestions', 'Security, performance and scalability audits'],
    intro: 'Need an experienced view before you build or buy? We provide project-based technical advice and audits, so technology decisions suit your business.',
    benefits: [['Independent advice', 'Tech stack suggestions are based on your requirements rather than a fixed offering.'], ['Plan before you spend', 'Launch planning helps startups avoid costly rework.'], ['Health checks', 'Security, performance and scalability audits show what to improve.']],
    process: [['Understand', 'We review your goals, systems and constraints.'], ['Assess', 'Options or the current setup are evaluated.'], ['Recommend', 'Clear recommendations and next steps are documented.'], ['Support', 'We remain available as the project moves ahead.']],
  }),
].map((s) => {
  const base = SERVICES.find((x) => x.id === s.id);
  return { ...s, icon: base.icon, title: base.title, tagline: base.tagline, short: base.short, tools: base.tools, path: `/services/${s.slug}` };
});

export const SERVICE_GROUPS = ['Build', 'Grow', 'Automate & Analyze', 'Support & Strategy'].map((g) => ({ name: g, items: SERVICE_PAGES.filter((s) => s.group === g) }));
export const serviceBySlug = (slug) => SERVICE_PAGES.find((s) => s.slug === slug);

// slug -> service slugs referenced by industry pages
const sv = (...slugs) => slugs;
const I = (slug, nav, img, d) => ({ slug, nav, img, path: `/industries/${slug}`, ...d });

export const INDUSTRY_PAGES = [
  I('retail-ecommerce', 'Retail & E-commerce', 'retail', {
    short: 'Online stores and marketplace selling.',
    intro: 'Retail businesses compete for attention online and on marketplaces. Zytexa can help with the websites, listings, marketing and systems behind selling to customers.',
    challenges: ['Standing out among many similar online sellers', 'Keeping product listings and content accurate across channels', 'Turning visitors into repeat customers', 'Managing orders, enquiries and follow-ups efficiently'],
    help: [[sv('e-commerce-solutions'), 'Set up and optimize your own store and marketplace listings.'], [sv('digital-marketing'), 'Reach shoppers through search, social, email and ads.'], [sv('photography-videography'), 'Product photography and video that suits online listings.'], [sv('crm-erp-solutions'), 'Keep customer and order information organized.']],
  }),
  I('healthcare', 'Healthcare', 'healthcare', {
    short: 'Patient-focused digital solutions.',
    intro: 'Healthcare providers need to be easy to find and easy to contact. Zytexa can help build clear, patient-friendly digital experiences and the processes behind them.',
    challenges: ['Being found when people search for nearby care', 'Presenting services and information clearly and responsibly', 'Handling appointment enquiries and follow-ups', 'Protecting a site and the information it handles'],
    help: [[sv('website-development'), 'Clear, accessible websites for clinics and practices.'], [sv('google-my-business'), 'Local visibility, directions and reviews on Google.'], [sv('business-automation'), 'Automate enquiry replies and appointment reminders.'], [sv('cybersecurity-maintenance'), 'Protect and maintain your website.']],
  }),
  I('education', 'Education', 'education', {
    short: 'E-learning platforms and academic solutions.',
    intro: 'Schools, institutes and training providers are moving more of their work online. Zytexa can help with websites, enquiry handling, content and learning-focused solutions.',
    challenges: ['Reaching prospective students and parents online', 'Handling a high volume of admission enquiries', 'Presenting courses and information clearly', 'Delivering content and communication digitally'],
    help: [[sv('website-development'), 'Websites and portals for courses and information.'], [sv('digital-marketing'), 'Promote programmes and admissions campaigns.'], [sv('crm-erp-solutions'), 'Track and follow up admission enquiries.'], [sv('business-automation'), 'Automate messages, reminders and routine reporting.']],
  }),
  I('real-estate', 'Real Estate', 'real-estate', {
    short: 'Property websites and lead generation.',
    intro: 'Property businesses depend on enquiries and trust. Zytexa can help present listings well and make sure every lead is captured and followed up.',
    challenges: ['Showcasing properties with strong visuals', 'Capturing and following up every enquiry', 'Building trust in a competitive local market', 'Keeping sales teams organized'],
    help: [[sv('website-development'), 'Property-focused websites with clear listings.'], [sv('photography-videography'), 'Photos and videos for properties and projects.'], [sv('digital-marketing'), 'Lead-generation campaigns across search and social.'], [sv('crm-erp-solutions'), 'Track leads and site visits in one place.']],
  }),
  I('manufacturing-exports', 'Manufacturing & Exports', 'manufacturing', {
    short: 'Catalogues, CRM and lead automation.',
    intro: 'Manufacturers and exporters need to present their capabilities to buyers clearly. Zytexa can help with catalogue websites, lead handling and the systems behind operations.',
    challenges: ['Presenting products and capabilities to business buyers', 'Managing long enquiry and quotation cycles', 'Keeping operations and records organized', 'Reaching buyers in new markets'],
    help: [[sv('website-development'), 'Catalogue and company websites for buyers.'], [sv('crm-erp-solutions'), 'CRM and ERP to manage enquiries and operations.'], [sv('business-automation'), 'Automate lead capture, follow-ups and reports.'], [sv('digital-marketing'), 'Reach buyers through search and targeted campaigns.']],
  }),
  I('hospitality-travel', 'Hospitality & Travel', 'hospitality', {
    short: 'Booking-ready sites and online visibility.',
    intro: 'Hotels, restaurants and travel businesses rely on visibility and easy booking. Zytexa can help with websites, local presence and campaigns that bring enquiries.',
    challenges: ['Being discovered by travellers and local guests', 'Making booking or enquiry simple', 'Building trust through reviews and visuals', 'Responding quickly to messages across platforms'],
    help: [[sv('website-development'), 'Websites that make booking or enquiring simple.'], [sv('google-my-business'), 'Maps visibility and review management.'], [sv('photography-videography'), 'Visuals of rooms, food and experiences.'], [sv('business-automation'), 'Chatbots and automated replies on messaging apps.']],
  }),
];
export const industryBySlug = (slug) => INDUSTRY_PAGES.find((i) => i.slug === slug);

export const PROCESS = [
  ['Discover', 'We start by listening: your business, customers, goals and any systems already in place. Requirements are written down so everyone shares the same picture.'],
  ['Strategize', 'We define the scope and choose the right solution, with priorities, a timeline and a clear idea of what success looks like for you.'],
  ['Design', 'The experience and user journey are planned and shared for your feedback before development begins.'],
  ['Build', 'The solution is developed and integrated with your other tools. We test it as we go and check it across devices.'],
  ['Launch', 'We run final testing, deploy and go live, and walk your team through how everything works.'],
  ['Optimize', 'After launch we monitor performance, support your team and make improvements, so the solution keeps serving your goals.'],
];

export const COMPANY_LINKS = [
  { label: 'About Us', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Careers', to: '/careers' },
  { label: 'Blog', to: '/blog', badge: 'Coming soon' },
];

// FAQ page: the homepage FAQs plus a few more grounded in the services and contact details already on this site.
export const EXTRA_FAQS = [
  { q: 'Where is Zytexa based?', a: 'Zytexa Technology LLP is a Jaipur-based IT and digital solutions company. Our office and registered office addresses are listed on the Contact page and in the footer.' },
  { q: 'How do I get in touch?', a: 'Use the form on the Contact page, email contact@zytexa.com, or call +91 91667 20321 or +91 92169 20321.' },
  { q: 'Can you work on just one service, or only on bundles?', a: 'Either. You can start with a single service, such as a website or a Google Business Profile, and add others later as your needs grow.' },
  { q: 'Do you help with marketing after a website is built?', a: 'Yes. Digital Marketing, SEO, Google My Business and automation are available alongside or after website development.' },
  { q: 'Can you integrate a CRM with my website or other tools?', a: 'Yes. CRM and ERP setup, data migration, workflow automation and API integration are part of our services. The details depend on the tools you use.' },
];

// Legal pages. These are DRAFT outlines only: no commitments, periods or guarantees are stated.
// Every item flagged `confirm` must be confirmed or replaced by Zytexa (ideally reviewed by a legal adviser) before publication.
export const LEGAL = {
  'privacy-policy': { title: 'Privacy Policy', sections: [
    ['Who we are', 'This site is operated by Zytexa Technology LLP, Jaipur, Rajasthan. You can contact us using the details on the Contact page.'],
    ['Information you give us', 'When you send an enquiry through the contact form, you may provide your name, email, phone number, company, the service you are interested in and a project description.'],
    ['Data controller / responsible person', 'Which legal entity and which named contact is responsible for personal data collected through this site.', true],
    ['How information may be used', 'Enquiry details are used to understand and respond to your request. Any other purpose must be stated here.', true],
    ['Where enquiries are stored and who can access them', 'The mail or form service that receives enquiries, and who inside the company can see them.', true],
    ['Retention and deletion', 'How long enquiry information is kept and how it is deleted.', true],
    ['Third parties and processors', 'Any email, hosting, CRM, messaging or other providers that handle your information.', true],
    ['Cookies and analytics', 'Whether this site uses cookies or analytics tools, and for what purpose. Nothing is stated here until the company confirms it.', true],
    ['Your rights and how to exercise them', 'How you can ask to see, correct or delete your information, and the response time.', true],
    ['Security', 'The measures used to protect information. No claims are made until confirmed.', true],
    ['Changes to this policy', 'How and when this policy may be updated.', true],
  ] },
  'terms': { title: 'Terms & Conditions', sections: [
    ['About these terms', 'These terms describe the basis on which this website is provided by Zytexa Technology LLP.'],
    ['Use of the website', 'The content on this website is provided for general information about Zytexa and its services.'],
    ['Services and proposals', 'Scope, deliverables, timelines and pricing for any project are agreed separately in a written proposal or agreement.', true],
    ['Payment terms', 'Advance, milestone and final payment terms, taxes and late payment.', true],
    ['Cancellation and refunds', 'See the Refund Policy for the company approved position.', true],
    ['Intellectual property and ownership', 'Ownership and licensing of designs, code, content and third-party materials on a project.', true],
    ['Client responsibilities', 'Content, approvals and access the client needs to provide.', true],
    ['Third-party tools and services', 'Responsibility for third-party platforms, licences and subscriptions used in a project.', true],
    ['Limitation of liability', 'Limits on the liability of Zytexa Technology LLP.', true],
    ['Governing law and dispute resolution', 'Which law applies and where or how disputes are resolved.', true],
    ['Changes to these terms', 'How and when these terms may be updated.', true],
  ] },
  'refund-policy': { title: 'Refund Policy', sections: [
    ['Overview', 'Zytexa provides project-based and ongoing services. Refund and cancellation terms depend on the nature of the work.'],
    ['Eligibility and refund periods', 'Which payments, if any, are refundable and within what period.', true],
    ['Work already started or delivered', 'How completed work, third-party costs and non-refundable items are treated.', true],
    ['Cancellation of a project or subscription', 'Notice periods and what happens to payments and work completed.', true],
    ['How to request a refund', 'The process for raising a request and expected processing time.', true],
    ['Payment method and timing of refunds', 'How refunds are returned and how long they take.', true],
  ] },
};

// Decisions the company must make before the legal pages can be finalised (shown at the foot of each draft).
export const LEGAL_DECISIONS = [
  'Who is the data controller and the named contact for privacy requests?',
  'Where are enquiries stored, who can access them, and how long are they kept?',
  'Does the site use cookies or analytics? Which providers, and for what purpose?',
  'Which third parties (email, hosting, CRM, payment, messaging) handle customer data?',
  'Payment terms, cancellation rules and refund eligibility for each service type.',
  'Ownership of delivered designs and code, and limits of liability.',
  'Governing law, jurisdiction and dispute-resolution method.',
];
