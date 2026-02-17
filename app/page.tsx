import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import WorkflowSection from "./components/sections/WorkflowSection";
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
      <WorkflowSection />
      <IntegrationsSection />
      <CaseStudiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
