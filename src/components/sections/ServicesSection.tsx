import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Palette, RefreshCw, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Conversion-Focused Website Design",
    desc: "A premium website built from the ground up to position your business as the trusted choice — and turn visitors into paying customers.",
    points: ["Custom design & development", "Conversion-optimized layout", "Mobile-first responsive build", "SEO-ready structure"],
  },
  {
    icon: RefreshCw,
    title: "Website Redesign for Service Businesses",
    desc: "Your current site isn't generating leads. I'll redesign it with strategic positioning, cleaner UX, and clear calls to action that drive results.",
    points: ["Full UX/UI overhaul", "Improved trust signals", "Faster load times", "Better lead capture"],
  },
  {
    icon: BarChart3,
    title: "Landing Pages & Lead Generation",
    desc: "Purpose-built landing pages designed for paid traffic, local SEO, or specific campaigns — engineered to maximize every click.",
    points: ["Campaign-specific pages", "A/B ready structure", "Form & CTA optimization", "Speed-optimized delivery"],
  },
];

const ServicesSection = () => (
  <section className="section-padding section-gap">
    <div className="container-wide">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Services</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">What I build for you</h2>
          <p className="text-muted-foreground text-lg">
            Every service is designed around one outcome: more leads, more calls, more booked jobs.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.07}>
            <div className="group p-7 rounded-xl border border-border bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full flex flex-col">
              <div className="w-11 h-11 rounded-lg bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <s.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
              <ul className="mt-auto space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="text-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </Reveal>
    </div>
  </section>
);

export default ServicesSection;
