import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Zap } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";

const Hero = () => (
  <section className="relative overflow-hidden pt-32 md:pt-40 lg:pt-44 pb-20 md:pb-28 lg:pb-32 section-padding">
    <div className="container-wide">
      <div className="grid lg:grid-cols-[1.1fr,1fr] gap-16 lg:gap-20 items-center">
        <div className="max-w-2xl lg:max-w-none">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-primary/[0.03] border border-primary/[0.08] text-primary text-[13px] font-semibold mb-8 backdrop-blur-sm">
              <Zap size={13} strokeWidth={2.5} />
              Independent Web Partner for HVAC &amp; Local Service Businesses
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-[2.75rem] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.06] font-extrabold mb-7 tracking-[-0.02em]">
              Premium websites for HVAC and local service businesses that need{" "}
              <span className="text-gradient">more calls, more trust, and better leads</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-[1.0625rem] leading-[1.7] text-muted-foreground mb-10 max-w-xl">
              I design and build conversion-focused websites for U.S. HVAC companies, plumbers, and electricians — with stronger messaging, cleaner UX, and better lead flow from the first click to the contact form.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild className="shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30">
                <Link to="/contact">
                  Request a Free Audit <ArrowRight size={16} strokeWidth={2.5} />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/contact">Book a Call</Link>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative lg:-mr-8 xl:-mr-12">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_70px_-12px_rgba(0,0,0,0.15)] border border-border/60">
            <img
              src={heroMockup}
              alt="Premium HVAC website design mockup on laptop and mobile devices"
              width={1280}
              height={832}
              className="w-full h-auto"
            />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Hero;
