import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";
import projectHvac from "@/assets/project-hvac.jpg";
import projectElectrician from "@/assets/project-electrician.jpg";
import projectPlumbing from "@/assets/project-plumbing.jpg";

const projects = [
  {
    img: projectHvac,
    type: "HVAC Website Redesign",
    title: "Summit Air Comfort",
    summary: "Full website redesign for a residential HVAC company in Texas. Focused on trust signals, clear service pages, and a conversion-optimized contact flow.",
    outcome: "Designed to increase quote requests by 40%+",
  },
  {
    img: projectElectrician,
    type: "Electrician Lead-Gen Site",
    title: "BrightWire Electrical",
    summary: "Built a lead-generation focused website for an electrical contractor. Mobile-first design with click-to-call, service area targeting, and speed optimization.",
    outcome: "Built for local search dominance",
  },
  {
    img: projectPlumbing,
    type: "Service Landing Page",
    title: "ClearFlow Plumbing",
    summary: "High-converting landing page for a plumbing company's Google Ads campaigns. Clean layout, strong trust indicators, and streamlined booking form.",
    outcome: "Conversion rate engineered for paid traffic",
  },
];

const FeaturedWork = () => (
  <section className="section-padding section-gap bg-section-alt">
    <div className="container-wide">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Featured Work</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Strategic builds, not random projects</h2>
          <p className="text-muted-foreground text-lg">
            Every project is treated as a business growth tool — designed for trust, speed, and conversion.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <Link to="/work" className="group block rounded-xl overflow-hidden bg-card border border-border hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
              <div className="overflow-hidden aspect-[3/2]">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={960}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{p.type}</p>
                <h3 className="font-bold text-lg mb-2 flex items-center gap-1.5">
                  {p.title}
                  <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{p.summary}</p>
                <p className="text-xs font-semibold text-accent">{p.outcome}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedWork;
