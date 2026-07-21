import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import ProblemSection from "./components/sections/ProblemSection";
import WhatIDoSection from "./components/sections/WhatIDoSection";
import CaseStudySection from "./components/sections/CaseStudySection";
import WorkflowSection from "./components/sections/WorkflowSection";
import PlatformsSection from "./components/sections/PlatformsSection";
import HowItWorksSection from "./components/sections/HowItWorksSection";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <WhatIDoSection />
      <CaseStudySection />
      <WorkflowSection />
      <PlatformsSection />
      <HowItWorksSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
