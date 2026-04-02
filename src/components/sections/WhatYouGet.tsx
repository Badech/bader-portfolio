import { Reveal } from "@/components/Reveal";
import { FileCheck, Rocket, HeartHandshake } from "lucide-react";

const deliverables = [
  {
    icon: FileCheck,
    title: "What You Get",
    items: [
      "Custom website design (desktop, tablet, mobile)",
      "Conversion-optimized contact forms and CTAs",
      "Mobile-first responsive development",
      "Speed optimization and performance tuning",
      "SEO-ready structure and technical setup",
      "Professional copywriting support if needed",
      "Full source code and design files",
    ],
  },
  {
    icon: Rocket,
    title: "What You Launch With",
    items: [
      "A site ready to drive business from day one",
      "All pages tested across devices and browsers",
      "Analytics and tracking properly configured",
      "Clear documentation for updates",
      "Training on managing your content",
      "Post-launch support for 30 days",
    ],
  },
  {
    icon: HeartHandshake,
    title: "How We Work Together",
    items: [
      "Direct communication — no project managers",
      "Transparent timeline with clear milestones",
      "Honest feedback about what will work",
      "Flexible to your schedule and availability",
      "Revisions until you're fully confident",
      "Ongoing partnership after launch",
    ],
  },
];

const WhatYouGet = () => (
  <section className="section-padding section-gap bg-section-alt">
    <div className="container-wide">
      <Reveal>
        <div className="section-header">
          <p className="text-[11px] font-bold text-primary/80 mb-4 uppercase tracking-[0.15em]">Deliverables</p>
          <h2 className="text-[2.5rem] md:text-5xl lg:text-[3.25rem] font-extrabold mb-6 leading-[1.1] tracking-[-0.02em]">What working with me actually looks like</h2>
          <p className="text-muted-foreground/90 text-base md:text-[1.0625rem] leading-[1.7] max-w-2xl mx-auto">
            No surprises. No hidden costs. Here's exactly what you get when you partner with me to build or redesign your website.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {deliverables.map((section, i) => (
          <Reveal key={section.title} delay={i * 0.1}>
            <div className="p-7 rounded-xl border border-border/60 bg-card">
              <div className="w-12 h-12 rounded-xl bg-primary/[0.04] flex items-center justify-center mb-6">
                <section.icon size={20} className="text-primary" strokeWidth={2.25} />
              </div>
              <h3 className="font-bold text-[1.0625rem] mb-5 tracking-tight text-foreground">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.9375rem] text-muted-foreground/80 leading-[1.6]">
                    <span className="text-primary mt-1 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhatYouGet;
