import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import WebsiteSection from "./components/sections/WebsiteSection";
import WorkflowSection from "./components/sections/WorkflowSection";
import AIReceptionistSection from "./components/sections/AIReceptionistSection";
import IntegrationsSection from "./components/sections/IntegrationsSection";
import CaseStudiesSection from "./components/sections/CaseStudiesSection";
import ContactSection from "./components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-paper">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WebsiteSection />
      <WorkflowSection />
      <AIReceptionistSection />
      <IntegrationsSection />
      <CaseStudiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
