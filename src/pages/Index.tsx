import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import WhoIHelp from "@/components/sections/WhoIHelp";
import FeaturedWork from "@/components/sections/FeaturedWork";
import ServicesSection from "@/components/sections/ServicesSection";
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
      <FeaturedWork />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseMe />
      <AboutPreview />
      <FinalCTA />
    </main>
    <Footer />
  </>
);

export default Index;
