import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/sections/FinalCTA";
import { Reveal } from "@/components/Reveal";
import { Palette, RefreshCw, BarChart3, Layers, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Palette,
    title: "Website Design",
    who: "Service businesses launching or upgrading their online presence.",
    problem: "You need a website that positions you as the trusted choice in your market — not just a pretty page.",
    includes: ["Custom UI/UX design", "Responsive development", "Conversion-optimized layout", "SEO-ready structure", "Contact form & CTA integration"],
    outcome: "A premium website that builds trust and generates leads from day one.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    who: "Businesses with an outdated or underperforming website.",
    problem: "Your current site doesn't reflect the quality of your work and it's costing you customers.",
    includes: ["Full UX/UI audit", "Strategic redesign", "Content restructuring", "Speed optimization", "Mobile-first rebuild"],
    outcome: "A modern, conversion-ready website that matches your business reputation.",
  },
  {
    icon: BarChart3,
    title: "Landing Pages",
    who: "Companies running paid ads or campaigns that need dedicated landing experiences.",
    problem: "Generic pages waste ad spend. You need pages engineered for specific campaigns and audiences.",
    includes: ["Campaign-specific design", "A/B testing ready", "Form optimization", "Speed-optimized delivery", "Analytics integration"],
    outcome: "Higher conversion rates from every dollar you spend on advertising.",
  },
  {
    icon: Layers,
    title: "Lead Capture Optimization",
    who: "Businesses with traffic but low conversion rates.",
    problem: "Visitors land on your site but leave without taking action. Something is broken in the experience.",
    includes: ["Conversion audit", "CTA redesign", "Form UX improvement", "Trust signal enhancement", "Mobile experience fixes"],
    outcome: "More leads from the same amount of traffic — without spending more on ads.",
  },
  {
    icon: Building2,
    title: "White-Label Web Design",
    who: "Marketing agencies that need premium web design without hiring in-house.",
    problem: "Your clients expect high-quality websites but your team's capacity or skillset doesn't cover it.",
    includes: ["Full white-label delivery", "Agency-branded process", "Direct client collaboration optional", "Scalable partnership", "Reliable timelines"],
    outcome: "Premium web design your agency can deliver under your own brand — on time, every time.",
  },
];

const Services = () => (
  <>
    <Navbar />
    <main className="pt-24 md:pt-32">
      <section className="section-padding pb-20 md:pb-24">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold text-primary/80 mb-4 uppercase tracking-[0.15em]">Services</p>
              <h1 className="text-[2.75rem] md:text-5xl lg:text-[3.5rem] font-extrabold mb-6 leading-[1.08] tracking-[-0.02em]">What I offer</h1>
              <p className="text-[1.0625rem] text-muted-foreground/90 leading-[1.7]">
                Focused services designed to help HVAC and local service businesses generate more leads, earn more trust, and convert better.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding pb-20">
        <div className="container-wide space-y-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="p-8 md:p-10 rounded-[14px] border border-border/60 bg-card hover:border-primary/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 ease-out">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/[0.04] flex items-center justify-center shrink-0">
                    <s.icon size={21} className="text-primary" strokeWidth={2.25} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-[1.5rem] md:text-[1.75rem] font-bold mb-5 tracking-tight leading-[1.25]">{s.title}</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4 text-[0.9375rem] text-muted-foreground/80 leading-[1.7]">
                        <div>
                          <p className="font-semibold text-foreground mb-1">Who it's for</p>
                          <p>{s.who}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground mb-1">The problem</p>
                          <p>{s.problem}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-accent mb-1">The outcome</p>
                          <p>{s.outcome}</p>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-2 text-sm">What's included</p>
                        <ul className="space-y-2">
                          {s.includes.map((item) => (
                            <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA />
    </main>
    <Footer />
  </>
);

export default Services;
