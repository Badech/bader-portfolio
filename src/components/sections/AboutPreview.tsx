import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/portrait.jpg";

const AboutPreview = () => (
  <section className="section-padding section-gap bg-section-alt">
    <div className="container-wide">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal>
          <div className="relative max-w-sm mx-auto md:mx-0">
            <div className="rounded-2xl overflow-hidden shadow-xl">
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
            <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">About</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-5">
              Design, code, and conversion — all in one person
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm Bader Echchalh — a freelance web designer, front-end developer, and conversion specialist.
              I combine premium visual design with strategic thinking to build websites that look incredible
              and actually grow businesses.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              My focus is U.S. service businesses — HVAC companies, plumbers, electricians, and local brands
              that need a website worthy of their reputation. No templates. No fluff. Just clean execution
              that drives measurable results.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default AboutPreview;
