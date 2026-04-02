import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Palette, RefreshCw, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Premium Websites for HVAC & Local Services",
    desc: "Your website should be your best salesperson. I build custom sites that establish authority, build trust instantly, and turn visitors into customers — not just browsers.",
    points: ["Strategic positioning that differentiates you", "Conversion-focused UX and messaging", "Mobile-first, speed-optimized build", "Built to rank and convert locally"],
  },
  {
    icon: RefreshCw,
    title: "Website Redesign & Repositioning",
    desc: "Your current site is costing you business. I'll transform it into a premium lead-generation asset that reflects your quality and captures opportunities you're missing today.",
    points: ["Complete strategic repositioning", "Modern UX that drives action", "Performance overhaul for speed", "Trust signals that convert skeptics"],
  },
  {
    icon: BarChart3,
    title: "Landing Pages That Convert",
    desc: "If you're running ads or campaigns, generic pages waste your budget. I create dedicated landing experiences engineered to convert traffic into revenue.",
    points: ["Campaign-specific strategy", "Optimized for your exact offer", "Built for speed and conversion", "A/B test ready from day one"],
  },
];

const ServicesSection = () => (
  <section className="section-padding section-gap">
    <div className="container-wide">
      <Reveal>
        <div className="section-header">
          <p className="text-[11px] font-bold text-primary/80 mb-4 uppercase tracking-[0.15em]">Services</p>
          <h2 className="text-[2.5rem] md:text-5xl lg:text-[3.25rem] font-extrabold mb-6 leading-[1.1] tracking-[-0.02em]">Premium web solutions for HVAC and local service businesses</h2>
          <p className="text-muted-foreground/90 text-base md:text-[1.0625rem] leading-[1.7] max-w-xl mx-auto">
            Every service is designed to solve a specific business problem and deliver measurable ROI for local service companies.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.07}>
            <div className="group p-8 rounded-[14px] border border-border/60 bg-card hover:border-primary/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 ease-out h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-primary/[0.04] flex items-center justify-center mb-6 group-hover:bg-primary/[0.08] transition-colors duration-300">
                <s.icon size={21} className="text-primary" strokeWidth={2.25} />
              </div>
              <h3 className="font-bold text-[1.125rem] mb-3.5 tracking-tight leading-[1.3]">{s.title}</h3>
              <p className="text-[0.9375rem] text-muted-foreground/80 leading-[1.65] mb-7">{s.desc}</p>
              <ul className="mt-auto space-y-2.5">
                {s.points.map((p) => (
                  <li key={p} className="text-[0.875rem] text-muted-foreground/75 flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" />
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
