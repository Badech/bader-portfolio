import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";
import projectHvac from "@/assets/project-hvac.jpg";
import projectElectrician from "@/assets/project-electrician.jpg";
import projectPlumbing from "@/assets/project-plumbing.jpg";

const projects = [
  {
    img: projectHvac,
    type: "Strategic Redesign Concept",
    title: "Summit Air Comfort",
    summary: "Concept redesign addressing a common HVAC challenge: outdated websites that lose quote requests to competitors. Strategic focus on trust signals, mobile-first UX, and conversion-optimized contact flow.",
    outcome: "Designed to improve quote-request conversion and local market positioning",
  },
  {
    img: projectElectrician,
    type: "Concept Case Study",
    title: "BrightWire Electrical",
    summary: "Demo website showcasing how to build authority for electrical contractors with minimal web presence. Prioritizes click-to-call functionality, service area targeting, and emergency call capture.",
    outcome: "Built to demonstrate effective local service conversion architecture",
  },
  {
    img: projectPlumbing,
    type: "Demo Build",
    title: "ClearFlow Plumbing",
    summary: "High-converting landing page concept for plumbing paid ad campaigns. Demonstrates campaign-aligned messaging, trust-building elements, and streamlined booking optimization for paid traffic.",
    outcome: "Designed to maximize paid advertising ROI through strategic UX",
  },
];

const FeaturedWork = () => (
  <section className="section-padding section-gap bg-section-alt">
    <div className="container-wide">
      <Reveal>
        <div className="section-header">
          <p className="text-[11px] font-bold text-primary/80 mb-4 uppercase tracking-[0.15em]">Featured Work</p>
          <h2 className="text-[2.5rem] md:text-5xl lg:text-[3.25rem] font-extrabold mb-6 leading-[1.1] tracking-[-0.02em]">Strategic work for HVAC and service businesses</h2>
          <p className="text-muted-foreground/90 text-base md:text-[1.0625rem] leading-[1.7] max-w-2xl mx-auto mb-3">
            These concept case studies demonstrate my strategic approach to designing conversion-focused websites for local service companies. Each project showcases how I think through real business challenges and build solutions that drive leads.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <Link to="/work" className="group block rounded-[14px] overflow-hidden bg-card border border-border/60 hover:border-primary/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 ease-out">
              <div className="overflow-hidden aspect-[3/2]">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={960}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-7">
                <p className="text-[10px] font-bold text-primary/90 uppercase tracking-[0.12em] mb-2.5">{p.type}</p>
                <h3 className="font-bold text-[1.0625rem] mb-3 flex items-center gap-1.5 tracking-tight">
                  {p.title}
                  <ArrowUpRight size={15} strokeWidth={2.5} className="text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </h3>
                <p className="text-[0.9375rem] text-muted-foreground/80 leading-[1.65] mb-4">{p.summary}</p>
                <p className="text-[11px] font-bold text-accent uppercase tracking-[0.08em]">{p.outcome}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedWork;
