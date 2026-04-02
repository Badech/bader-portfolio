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
    summary: "A Texas HVAC company needed to compete with bigger competitors online. I rebuilt their site to establish local authority, improve mobile experience, and create a frictionless path from visitor to booked service call.",
    outcome: "Positioned to increase quote requests by 40%+ and own local search",
  },
  {
    img: projectElectrician,
    type: "Electrician Website",
    title: "BrightWire Electrical",
    summary: "An established electrical contractor was invisible online and losing business to competitors. I created a professional web presence that communicates expertise, captures emergency calls, and drives steady lead flow.",
    outcome: "Built to dominate local search and convert service inquiries",
  },
  {
    img: projectPlumbing,
    type: "White-Label Agency Build",
    title: "ClearFlow Plumbing",
    summary: "A marketing agency needed premium landing page execution for their plumbing client's paid ad campaigns. I delivered a conversion-focused experience that turns ad clicks into booked appointments.",
    outcome: "Engineered to maximize ROI from every advertising dollar",
  },
];

const FeaturedWork = () => (
  <section className="section-padding section-gap bg-section-alt">
    <div className="container-wide">
      <Reveal>
        <div className="section-header">
          <p className="text-[11px] font-bold text-primary/80 mb-4 uppercase tracking-[0.15em]">Featured Work</p>
          <h2 className="text-[2.5rem] md:text-5xl lg:text-[3.25rem] font-extrabold mb-6 leading-[1.1] tracking-[-0.02em]">Real HVAC and service businesses. Real results.</h2>
          <p className="text-muted-foreground/90 text-base md:text-[1.0625rem] leading-[1.7] max-w-xl mx-auto">
            Every website solves a specific business problem. Here's how I've helped local service companies strengthen their market position and drive revenue growth.
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
