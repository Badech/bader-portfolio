import { Reveal } from "@/components/Reveal";
import { Target, Users, Shield, Zap, MessageSquare, Repeat } from "lucide-react";

const reasons = [
  { icon: Users, title: "Deep Industry Focus", desc: "I only work with HVAC and service businesses. I understand your market dynamics, customer behavior, and what actually drives calls — not theory, but reality." },
  { icon: Target, title: "Business-First Approach", desc: "I'm not a designer who codes — I'm a business partner who builds websites. Every decision maps back to revenue impact, not creative preference." },
  { icon: Zap, title: "Performance = Revenue", desc: "Slow sites lose customers before they even load. I build for speed because every second of load time directly impacts your bottom line." },
  { icon: MessageSquare, title: "Straight Talk", desc: "No agency BS or freelancer flakiness. You get honest timelines, clear priorities, and direct communication about what will move your business forward." },
  { icon: Shield, title: "Launch-Ready Quality", desc: "When I hand over your site, it's ready to drive business — not 'good enough.' Tested, optimized, and built to perform from day one." },
  { icon: Repeat, title: "Ongoing Partnership", desc: "I don't build and bail. Your market changes, your competitors evolve — I'm here to help you stay ahead, not disappear after launch." },
];

const WhyChooseMe = () => (
  <section className="section-padding section-gap">
    <div className="container-wide">
      <Reveal>
        <div className="section-header">
          <p className="text-[11px] font-bold text-primary/80 mb-4 uppercase tracking-[0.15em]">Why Me</p>
          <h2 className="text-[2.5rem] md:text-5xl lg:text-[3.25rem] font-extrabold mb-6 leading-[1.1] tracking-[-0.02em]">Why service businesses partner with me</h2>
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 max-w-6xl mx-auto">
        {reasons.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.06}>
            <div className="flex gap-4 items-start">
              <div className="w-11 h-11 rounded-xl bg-primary/[0.04] flex items-center justify-center shrink-0 mt-0.5">
                <r.icon size={19} className="text-primary" strokeWidth={2.25} />
              </div>
              <div>
                <h3 className="font-bold mb-2.5 text-[1rem] tracking-tight">{r.title}</h3>
                <p className="text-[0.9375rem] text-muted-foreground/80 leading-[1.65]">{r.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseMe;
