import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/portrait.jpg";

const AboutPreview = () => (
  <section className="section-padding section-gap bg-section-alt">
    <div className="container-wide">
      <div className="grid lg:grid-cols-[0.95fr,1.05fr] gap-16 lg:gap-20 items-center">
        <Reveal>
          <div className="relative max-w-md mx-auto md:mx-0">
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_70px_-12px_rgba(0,0,0,0.15)] border border-border/60">
              <img
                src={portrait}
                alt="Bader Echchalh — web designer and conversion specialist"
                loading="lazy"
                width={640}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <h2 className="text-[2.25rem] md:text-[2.75rem] lg:text-5xl font-extrabold mb-6 leading-[1.12] tracking-[-0.02em]">
              Independent web partner for HVAC and local service businesses
            </h2>
            <p className="text-muted-foreground/80 leading-[1.7] mb-5 text-[0.9375rem]">
              I'm Bader Echchalh — I help HVAC companies, plumbers, and electricians compete and win online. I approach your website as a strategic business asset, not a creative project.
            </p>
            <p className="text-muted-foreground/80 leading-[1.7] mb-8 text-[0.9375rem]">
              I work with local service business owners who understand that your website is your most important sales tool. My work focuses on positioning, trust, conversion, and lead generation — because beautiful design means nothing if it doesn't drive revenue.
            </p>
            <Button variant="default" size="lg" asChild className="shadow-md hover:shadow-lg transition-shadow">
              <Link to="/about">More About Me →</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default AboutPreview;
