import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import WhoIHelp from "@/components/sections/WhoIHelp";
import AuditBreakdown from "@/components/sections/AuditBreakdown";
import FeaturedWork from "@/components/sections/FeaturedWork";
import ServicesSection from "@/components/sections/ServicesSection";
import WhatYouGet from "@/components/sections/WhatYouGet";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyChooseMe from "@/components/sections/WhyChooseMe";
import AboutPreview from "@/components/sections/AboutPreview";
import FinalCTA from "@/components/sections/FinalCTA";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <TrustStrip />
      <WhoIHelp />
      <AuditBreakdown />
      <FeaturedWork />
      <ServicesSection />
      <WhatYouGet />
      <ProcessSection />
      <WhyChooseMe />
      <AboutPreview />
      <FinalCTA />
    </main>
    <Footer />
  </>
);

export default Index;
