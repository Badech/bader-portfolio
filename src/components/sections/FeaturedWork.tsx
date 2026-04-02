import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { FileText, Target, Zap } from "lucide-react";

const placeholders = [
  {
    icon: FileText,
    label: "Case Study Coming Soon",
    desc: "HVAC website redesign with conversion strategy breakdown",
  },
  {
    icon: Target,
    label: "Strategic Breakdown Coming Soon",
    desc: "Local plumber lead capture optimization walkthrough",
  },
  {
    icon: Zap,
    label: "Selected Work Coming Soon",
    desc: "Electrician landing page with UX decision analysis",
  },
];

const FeaturedWork = () => (
  <section className="section-padding section-gap bg-section-alt">
    <div className="container-wide">
      <Reveal>
        <div className="section-header">
          <p className="text-[11px] font-bold text-primary/80 mb-4 uppercase tracking-[0.15em]">Selected Work</p>
          <h2 className="text-[2.5rem] md:text-5xl lg:text-[3.25rem] font-extrabold mb-6 leading-[1.1] tracking-[-0.02em]">Client case studies coming soon</h2>
          <p className="text-muted-foreground/90 text-base md:text-[1.0625rem] leading-[1.7] max-w-2xl mx-auto">
            Selected case studies will be added here showcasing strategy, UX decisions, and conversion improvements for HVAC and local service businesses.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-5">
        {placeholders.map((p, i) => (
          <Reveal key={p.label} delay={i * 0.08}>
            <div className="rounded-[14px] bg-card border border-dashed border-border/60 p-8 text-center h-full flex flex-col items-center justify-center min-h-[280px]">
              <div className="w-14 h-14 rounded-xl bg-primary/[0.04] flex items-center justify-center mb-5">
                <p.icon size={22} className="text-primary/60" strokeWidth={2} />
              </div>
              <p className="text-[11px] font-bold text-primary/70 uppercase tracking-[0.12em] mb-3">{p.label}</p>
              <p className="text-[0.9375rem] text-muted-foreground/70 leading-[1.65] max-w-[220px]">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedWork;
