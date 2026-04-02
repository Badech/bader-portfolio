import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => (
  <section className="section-padding section-gap">
    <div className="container-narrow">
      <Reveal>
        <div className="relative rounded-2xl bg-foreground text-primary-foreground p-10 md:p-16 text-center overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
              Ready to turn your website into a better sales asset?
            </h2>
            <p className="text-lg opacity-80 max-w-lg mx-auto mb-8">
              Let's talk about how a premium, conversion-focused website can bring your business more calls, more leads, and more booked jobs.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="xl" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 shadow-lg" asChild>
                <Link to="/contact">
                  Book a Call <ArrowRight size={16} />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/contact">Request a Free Audit</Link>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default FinalCTA;
