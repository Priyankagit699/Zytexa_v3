import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import { Achievements, ClientStrip, Services, Process, WhyChoose, Industries, SingleRoof } from './components/Sections.jsx';
import Registrations from './components/Registrations.jsx';
import Testimonials from './components/Testimonials.jsx';
import AIInnovation from './components/AIInnovation.jsx';
import { FaqSection, ContactSection } from './components/FaqContact.jsx';
import { Cta, Footer } from './components/CtaFooter.jsx';
import { ScrollManager, useTitle } from './components/PageParts.jsx';
import { AboutPage, BlogPage, CareersPage, ContactPage, FaqPage, LegalPage, SitemapPage, HowWeWorkPage, IndustriesPage, IndustryDetail, NotFound, PortfolioPage, ServiceDetail, ServicesPage } from './pages/index.jsx';

// The existing single-page homepage, unchanged.
function Home() {
  useTitle('');
  return (
    <>
      <Hero />
      <Achievements />
      <ClientStrip />
      <Services />
      <Process />
      <WhyChoose />
      <Industries />
      <SingleRoof />
      <Registrations />
      <Testimonials />
      <AIInnovation />
      <FaqSection />
      <ContactSection />
      <Cta />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />
          <Route path="/how-we-work" element={<HowWeWorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/privacy-policy" element={<LegalPage kind="privacy-policy" />} />
          <Route path="/terms-and-conditions" element={<LegalPage kind="terms" />} />
          <Route path="/terms" element={<Navigate to="/terms-and-conditions" replace />} />
          <Route path="/refund-policy" element={<LegalPage kind="refund-policy" />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
