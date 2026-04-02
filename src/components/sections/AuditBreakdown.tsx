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
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="p-6 rounded-xl bg-primary/[0.03] border border-primary/[0.08] mb-6">
            <p className="text-sm text-muted-foreground/90 leading-relaxed text-center">
              <span className="font-semibold text-foreground">Free website audit included with every inquiry.</span> I'll review your current site and show you exactly where you're losing calls and how to fix it. No obligation, no pressure — just clear, actionable feedback.
            </p>
          </div>
          
          <div className="p-7 rounded-xl bg-card border border-border/60">
            <h3 className="text-sm font-bold text-foreground mb-4 text-center">Example: What I look for in a typical audit</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-primary mt-0.5">→</span>
                <span className="text-muted-foreground/80">Homepage clarity: Can visitors understand your offer in 3 seconds?</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-0.5">→</span>
                <span className="text-muted-foreground/80">Mobile CTA visibility: Can someone call you in two taps?</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-0.5">→</span>
                <span className="text-muted-foreground/80">Trust signals: Reviews, certifications, guarantees visible?</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-0.5">→</span>
                <span className="text-muted-foreground/80">Service area clarity: Do visitors know if you serve them?</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-0.5">→</span>
                <span className="text-muted-foreground/80">Contact form friction: How many fields are blocking conversions?</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-0.5">→</span>
                <span className="text-muted-foreground/80">Page speed: Are mobile users bouncing before the page loads?</span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default AuditBreakdown;
