// Service-page content that goes beyond pages.js: what we do (one item per supported offering from the services PDF),
// service-specific reasons to choose Zytexa, and FAQs. Wording is descriptive only: no rankings, sales, lead, revenue,
// security or performance guarantees, and no client, certification or partnership claims. Items marked `confirm` in the
// report must be confirmed by Zytexa before launch.
export const SERVICE_CONTENT = {
  'website-development': {
    offer: [
      ['Business, portfolio & informational websites', 'Clear, professional sites that explain who you are, what you offer and how to get in touch.'],
      ['E-commerce websites', 'Online stores built on Shopify, WooCommerce or custom PHP, depending on what suits your catalogue and budget.'],
      ['CMS-based websites', 'WordPress or Wix sites your own team can edit without writing code.'],
      ['Static & dynamic websites', 'Fast brochure-style pages, or dynamic sites with forms, databases and logins, built with the stack that fits the job.'],
    ],
    why: ['Marketing, SEO, Google Business Profile and maintenance are available from the same team, so the site is not left on its own after launch.', 'The platform (CMS, store or custom code) is chosen around your requirements instead of a single fixed approach.', 'You deal with one team from design through to go-live and later updates.'],
    faqs: [['Which platforms can you build on?', 'Our website work covers WordPress, Wix, Shopify, WooCommerce and custom-coded sites. The best choice depends on your content, budget and how often you need to update the site.'], ['Can I update the website myself later?', 'If the site is built on a CMS such as WordPress or Wix, your team can usually edit pages and content without a developer. We can explain what is editable during planning.']],
  },
  'mobile-app-development': {
    offer: [
      ['Android, iOS, cross-platform & hybrid apps', 'We help you choose between native, cross-platform and hybrid approaches, then build the app.'],
      ['Mobile app UI/UX design', 'App screens and user journeys are designed before development so the flow is clear and easy to use.'],
      ['App deployment & maintenance', 'Help with getting the app released and with updates and fixes afterwards.'],
      ['API integration', 'Connecting the app to your website, CRM or other back-end systems so data stays in sync.'],
    ],
    why: ['Design, development and API integration sit with one team, so the app and your existing systems are planned together.', 'We support releases and maintenance, not only the first build.', 'Web, marketing and automation work can follow from the same relationship when you need it.'],
    faqs: [['Do you build for both Android and iOS?', 'Yes. Our mobile work covers Android, iOS, and cross-platform or hybrid approaches that target both. We can discuss which suits your audience and budget.'], ['Can the app connect to my existing systems?', 'API integration is part of the service, so an app can be linked to your website, CRM or other tools. The details depend on the systems you use.']],
  },
  'ui-ux-web-design': {
    offer: [
      ['UI/UX for websites & apps', 'Interfaces designed around how people will actually use your product.'],
      ['Wireframes & prototypes', 'Early layouts and clickable prototypes so you can review the flow before development.'],
      ['Responsive & accessible design', 'Layouts that work across screen sizes, with accessibility considered from the start.'],
      ['Design system creation', 'Reusable colours, type and components so every page and product feels consistent.'],
      ['A/B testing of UI variations', 'Comparing alternative layouts so design decisions can rest on evidence.'],
    ],
    why: ['Design can lead straight into website or app development with the same team, which avoids hand-off gaps.', 'Wireframes and prototypes are reviewed with you before build work begins.', 'Speed-focused layouts and accessibility are part of the brief rather than an afterthought.'],
    faqs: [['Do I need wireframes before design?', 'They are strongly recommended. Wireframes and prototypes let you check structure and flow cheaply before visual design and development.'], ['Can you design for both web and mobile apps?', 'Yes. UI/UX design is offered for websites and for mobile apps.']],
  },
  'e-commerce-solutions': {
    offer: [
      ['Store setup on major marketplaces', 'Setting up your seller presence on Amazon, Flipkart, Jiomart and Meesho.'],
      ['Product listing & optimization', 'Titles, descriptions and images prepared so products are clear and easy to find.'],
      ['Brand registry & A+ content design', 'Brand registry support and enhanced product-page content where the platform provides it.'],
      ['Sales analytics & ad campaign strategy', 'Reviewing sales data and planning marketplace advertising.'],
      ['Listing without a GST number', 'Guidance for selling on marketplaces where a GST number is not available.'],
    ],
    why: ['Marketplace selling and your own online store can be planned together, with website, photography and marketing from the same team.', 'Product content, creative and advertising are handled in one place.', 'Analytics review means listings can be improved over time instead of set once and forgotten.'],
    faqs: [['Which marketplaces do you work with?', 'Our e-commerce service covers Amazon, Flipkart, Jiomart and Meesho. Marketplace rules change, so we confirm current requirements for each listing.'], ['Can I sell without a GST number?', 'Zytexa offers listing support for sellers without a GST number. Eligibility depends on each marketplace\'s current policy, which we can review with you.']],
  },
  'digital-marketing': {
    offer: [
      ['SEO & SMO', 'Search engine optimization and social media optimization to improve how you are found and presented.'],
      ['Meta Ads & Google Ads', 'Planned and managed paid campaigns on Meta and Google.'],
      ['Email & WhatsApp marketing', 'Direct campaigns to customers and leads through email and WhatsApp.'],
      ['Content, funnel & ABM strategy', 'Content planning, conversion funnels and account-based marketing for business audiences.'],
      ['OTT, newspaper & influencer tie-ups', 'Offline-to-online reach through OTT, newspapers (Rajasthan) and influencer partnerships.'],
    ],
    why: ['Organic, paid and messaging channels are planned as one approach instead of separate projects.', 'Your website, Google Business Profile and creative work are available from the same team, so campaigns have somewhere strong to land.', 'Regional options such as Rajasthan newspaper placements sit alongside digital channels.'],
    faqs: [['Do you guarantee rankings or leads?', 'No. Search rankings and ad results depend on many factors outside anyone\'s control. We plan and run the work carefully and report on what is happening.'], ['Which channels do you cover?', 'SEO and social media optimization, Meta and Google ads, email and WhatsApp marketing, content and funnel strategy, plus OTT, newspaper and influencer tie-ups.']],
  },
  'google-my-business': {
    offer: [
      ['Business Profile creation & setup', 'Creating or claiming your Google Business Profile and completing the details properly.'],
      ['Google reviews strategy', 'A simple, genuine process for asking customers for reviews and responding to them.'],
      ['GMB boost & local SEO', 'Improving how the profile appears for nearby searches.'],
      ['Google Maps optimization', 'Helping customers find the right location, hours and contact details on Maps.'],
    ],
    why: ['Local profile work can be combined with your website and local SEO in a single plan.', 'A reviews process is set up so feedback is requested and answered consistently.', 'It suits both single-location and multi-location businesses that depend on local customers.'],
    faqs: [['Can you guarantee a top position on Google Maps?', 'No. Local rankings are decided by Google. We make sure your profile is complete, accurate and actively managed, which is within our control.'], ['Can you help if I already have a profile?', 'Yes. We can review and improve an existing profile as well as create a new one.']],
  },
  'branding-creative': {
    offer: [
      ['Logo, identity & stationery', 'A logo and visual identity applied consistently to stationery and everyday materials.'],
      ['Packaging & business cards', 'Packaging and print designs that carry your brand.'],
      ['Product reels & motion graphics', 'Short video and animated content for social media and advertising.'],
      ['Ad videos & company profiles', 'Promotional videos and company profile films that explain your business.'],
      ['Social media creatives', 'Ready-to-post graphics and creative content for your channels.'],
    ],
    why: ['Identity design, video, photography and social creatives can be produced together, so everything looks like one brand.', 'The creative work connects directly with your website and marketing campaigns.', 'You review concepts and refine the chosen direction with us.'],
    faqs: [['What do I receive at the end of a branding project?', 'The final design files for the agreed items, for example logo, stationery and packaging designs, along with guidance on how to use them. The exact deliverables are agreed at the start.'], ['Can you also produce videos for my brand?', 'Yes. Product reels, motion graphics, ad videos and company profile films are part of this service.']],
  },
  'photography-videography': {
    offer: [
      ['Product shoots for e-commerce', 'Clean, consistent product images for marketplaces and online stores.'],
      ['Commercial & ad photography', 'Photography prepared for advertising and brand use.'],
      ['Reels & cinematic ad shoots', 'Short-form and cinematic video for social channels and campaigns.'],
      ['Professional photo & video editing', 'Retouching, colour work and editing so the final files are ready to publish.'],
    ],
    why: ['Shoots can be planned alongside your e-commerce listings, website and social media so images are made for where they will be used.', 'Editing is part of the service, so you receive finished files and not raw footage.', 'Branding and marketing teams are available to brief shoots when you need them.'],
    faqs: [['Do you shoot products for marketplaces?', 'Yes. Product shoots for e-commerce are part of the service, and images are prepared to suit marketplace listings.'], ['Do you also edit the photos and videos?', 'Yes. Professional editing and retouching are included in the scope of this service.']],
  },
  'crm-erp-solutions': {
    offer: [
      ['CRM setup & customization', 'Configuring a CRM around your sales stages, fields and team.'],
      ['ERP implementation for SMEs', 'Setting up ERP systems for small and medium businesses.'],
      ['Workflow & sales automation', 'Automating follow-ups, assignments and routine steps.'],
      ['Data migration between CRMs', 'Moving your contacts and history from one CRM to another.'],
      ['Dashboards & reports', 'Reports and dashboards that put your key numbers in one place.'],
    ],
    why: ['CRM, automation, analytics and your website can be connected by one team, so leads move from enquiry to follow-up smoothly.', 'Customization is based on your process and not a fixed template.', 'Data migration is available if you are changing systems.'],
    faqs: [['Which CRM and ERP systems do you work with?', 'Our work covers tools such as Salesforce, Zoho, HubSpot, Odoo, ERPNext and SAP Business One. We recommend what fits your size and process.'], ['Can you move my data from my current CRM?', 'Yes. Data migration between CRMs is part of the service.']],
  },
  'data-analytics-ai': {
    offer: [
      ['BI dashboards', 'Dashboards that bring data from different sources into a clear view.'],
      ['Sales, marketing & finance analytics', 'Analysis of performance across the areas that drive the business.'],
      ['Predictive & prescriptive analytics', 'Models that look ahead and suggest what to do next.'],
      ['AI-based automation & recommendations', 'Applying AI to well-defined tasks such as automation and recommendations.'],
    ],
    why: ['Analytics can be connected to your CRM, marketing and automation work from the same team.', 'AI is applied to specific tasks and described plainly, without exaggerated claims.', 'Dashboards are designed with the people who will use them.'],
    faqs: [['Which analytics and AI tools do you use?', 'Examples include Power BI, Tableau, Google Data Studio, Python, TensorFlow and OpenAI APIs. The right toolset depends on your data and goals.'], ['Do I need a lot of data to start?', 'Not necessarily. We can begin with the data you already have and a clear question to answer, and build from there.']],
  },
  'business-automation': {
    offer: [
      ['Lead generation automation', 'Capturing leads and routing them automatically.'],
      ['WhatsApp & email drip campaigns', 'Scheduled message sequences that keep leads and customers informed.'],
      ['Invoice, payroll & HRMS automation', 'Automating routine finance and HR administration.'],
      ['Lead auto-assignment & automatic reports', 'Leads assigned to the right person and reports generated without manual work.'],
      ['Multi-platform chatbot integration', 'Chatbots that answer common questions across messaging platforms.'],
    ],
    why: ['Automation is built around your CRM, website and messaging so the pieces actually connect.', 'We map the process before building, so only worthwhile tasks are automated.', 'Chatbots, drips and reports can be set up together.'],
    faqs: [['Which tools do you use for automation?', 'Examples include Zapier, Make, n8n, the WhatsApp API, Twilio, Mailchimp and Dialogflow. We choose based on your existing tools.'], ['Can automation replace my team?', 'Automation takes over repetitive steps such as reminders, assignments and reports, so your team has more time for work that needs a person.']],
  },
  'cybersecurity-maintenance': {
    offer: [
      ['Security audit & vulnerability scan', 'A review of your site and setup to identify weaknesses.'],
      ['SSL, firewall & WAF/CDN', 'Encrypted connections and protective layers in front of your site.'],
      ['Backups & disaster recovery', 'Regular backups and a plan for getting back online quickly.'],
      ['Website maintenance & monitoring', 'Ongoing updates, fixes and monitoring after launch.'],
      ['GDPR & Indian IT Act compliance', 'Support in considering the requirements that apply to your website.'],
    ],
    why: ['Maintenance can sit alongside the original build, marketing and hosting-related work with one team.', 'Backups and recovery planning are treated as part of the service and not an extra.', 'Compliance questions are raised early so they can be considered with your own advisers.'],
    faqs: [['Can you guarantee my website cannot be hacked?', 'No one can guarantee that. Security work reduces risk through audits, protection layers, backups and monitoring, but cannot remove it entirely.'], ['Do you provide legal compliance advice?', 'We support technical measures related to GDPR and the Indian IT Act. Legal compliance decisions should be confirmed with a qualified legal adviser.']],
  },
  'business-growth-strategy': {
    offer: [
      ['Startup launch guidance', 'Practical help planning and launching a new business.'],
      ['Business process setup', 'Putting simple, repeatable processes in place.'],
      ['Cost & ROI planning', 'Planning budgets and thinking through expected returns.'],
      ['Team building & delegation', 'Structuring roles so work can be shared and scaled.'],
      ['Scaling online & offline', 'Guidance on growing across digital and physical channels.'],
    ],
    why: ['Advice can be turned into action, because websites, marketing, CRM and automation are available from the same team.', 'Guidance is practical and tailored to your stage of business.', 'It suits both new startups and established businesses planning their next phase.'],
    faqs: [['Is this only for startups?', 'No. Startup launch guidance is one part. Process setup, ROI planning, delegation and scaling are useful for established businesses as well.'], ['Do you guarantee growth?', 'No. We give practical guidance and support implementation, but business outcomes depend on many factors, including your market and execution.']],
  },
  'it-consultancy-support': {
    offer: [
      ['Project-based technical consultancy', 'Expert advice for a specific project, from scoping to technical decisions.'],
      ['Launch planning for startups', 'Planning what to build, in what order, before you spend.'],
      ['Tech stack suggestions', 'Recommendations on tools and technologies that suit your needs.'],
      ['Security, performance & scalability audits', 'Reviewing an existing system and identifying areas to improve.'],
    ],
    why: ['Recommendations come from a team that also builds, so advice is grounded in practical delivery.', 'Advice is project-based, so you can ask for help only where you need it.', 'Findings are documented clearly with next steps.'],
    faqs: [['Can I hire you just for advice?', 'Yes. Consultancy can be project-based, so you can use us for advice and audits without commissioning a full build.'], ['Do you review existing systems?', 'Yes. Security, performance and scalability audits are part of the service.']],
  },
};
