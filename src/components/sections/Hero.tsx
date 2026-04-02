import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Zap } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";

const Hero = () => (
  <section className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24 section-padding">
    <div className="container-wide">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="max-w-xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-semibold mb-6">
              <Zap size={14} />
              Conversion-focused web design
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.1] font-extrabold mb-5">
              Premium websites that turn visitors into{" "}
              <span className="text-gradient">calls & leads</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
              I help U.S. service businesses — HVAC, plumbing, electrical — build
              websites that look premium, load fast, and convert traffic into booked
              jobs.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Book a Call <ArrowRight size={16} />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/contact">Get a Free Audit</Link>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border/50">
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
