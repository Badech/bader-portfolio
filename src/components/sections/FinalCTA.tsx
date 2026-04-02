import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => (
  <section className="section-padding py-24 md:py-32 lg:py-36">
    <div className="container-wide">
      <Reveal>
        <div className="relative rounded-2xl bg-foreground text-primary-foreground px-8 py-16 md:px-16 md:py-24 lg:px-20 lg:py-28 text-center overflow-hidden shadow-[0_20px_70px_-12px_rgba(0,0,0,0.25)]">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-[2.25rem] md:text-[2.75rem] lg:text-5xl xl:text-[3.5rem] font-extrabold mb-8 leading-[1.08] tracking-[-0.02em] text-white">
              Ready to stop losing business to your competitors' websites?
            </h2>
            <p className="text-base md:text-[1.0625rem] lg:text-[1.125rem] max-w-2xl mx-auto mb-12 leading-[1.65] text-white/95 font-medium">
              If you're an HVAC company, plumber, or electrician, your website isn't optional — it's your 24/7 salesperson. Let's build one that earns trust, drives calls, and wins business while you sleep.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="xl" className="bg-white text-foreground hover:bg-white/95 shadow-xl hover:shadow-2xl font-semibold transition-all duration-300" asChild>
                <Link to="/contact">
                  Request a Free Audit <ArrowRight size={16} strokeWidth={2.5} />
                </Link>
              </Button>
              <Button size="xl" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-foreground font-semibold shadow-xl hover:shadow-2xl transition-all duration-300" asChild>
                <Link to="/contact">Book a Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default FinalCTA;
