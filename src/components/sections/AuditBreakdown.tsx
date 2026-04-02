import { Reveal } from "@/components/Reveal";
import { CheckCircle2 } from "lucide-react";

const auditAreas = [
  {
    category: "Trust & Credibility",
    items: [
      "First impression and visual professionalism",
      "Trust signals (reviews, certifications, guarantees)",
      "Service area clarity and local authority",
      "Brand consistency and messaging strength",
    ],
  },
  {
    category: "Mobile Experience",
    items: [
      "Mobile-first design and touch targets",
      "Speed and performance on mobile devices",
      "Click-to-call accessibility",
      "Form usability on smaller screens",
    ],
  },
  {
    category: "Conversion Flow",
    items: [
      "CTA placement, clarity, and prominence",
      "Contact form optimization and friction points",
      "Service page structure and persuasion",
      "Lead capture opportunities and paths",
    ],
  },
  {
    category: "Technical Foundation",
    items: [
      "Page speed and Core Web Vitals",
      "SEO basics and local search optimization",
      "Responsive design implementation",
      "Code quality and maintenance readiness",
    ],
  },
];

const AuditBreakdown = () => (
  <section className="section-padding section-gap">
    <div className="container-wide">
      <Reveal>
        <div className="section-header">
          <p className="text-[11px] font-bold text-primary/80 mb-4 uppercase tracking-[0.15em]">What I Review</p>
          <h2 className="text-[2.5rem] md:text-5xl lg:text-[3.25rem] font-extrabold mb-6 leading-[1.1] tracking-[-0.02em]">What I audit on every HVAC and service business website</h2>
          <p className="text-muted-foreground/90 text-base md:text-[1.0625rem] leading-[1.7] max-w-2xl mx-auto">
            Most service business websites fail in predictable ways. Here's what I evaluate to identify where you're losing calls, trust, and revenue — and how to fix it.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {auditAreas.map((area, i) => (
          <Reveal key={area.category} delay={i * 0.08}>
            <div className="p-7 rounded-xl border border-border/60 bg-card">
              <h3 className="font-bold text-[1.0625rem] mb-5 tracking-tight text-foreground">{area.category}</h3>
              <ul className="space-y-3">
                {area.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.9375rem] text-muted-foreground/80 leading-[1.65]">
                    <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" strokeWidth={2.25} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <div className="mt-12 max-w-3xl mx-auto p-6 rounded-xl bg-primary/[0.03] border border-primary/[0.08]">
          <p className="text-sm text-muted-foreground/90 leading-relaxed text-center">
            <span className="font-semibold text-foreground">Free website audit included.</span> Before we discuss any project, I'll review your current site (or your competitor's) and show you exactly where the opportunities are. No obligation, no pressure — just honest feedback.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

export default AuditBreakdown;
