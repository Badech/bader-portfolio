import { Reveal } from "@/components/Reveal";
import { Thermometer, Droplets, Plug, Wrench, Building2 } from "lucide-react";

const niches = [
  { icon: Thermometer, title: "HVAC Companies", desc: "You need a website that pre-sells your expertise before the phone rings. I build sites that position you as the local authority and drive qualified service calls." },
  { icon: Droplets, title: "Plumbers", desc: "Your customers need help fast. Your website should make it effortless to contact you, whether it's an emergency repair or scheduled maintenance." },
  { icon: Plug, title: "Electricians", desc: "Homeowners and businesses choose electricians they trust. I create websites that communicate professionalism, safety, and expertise instantly." },
  { icon: Wrench, title: "Local Service Brands", desc: "If you're competing in a crowded market, your website needs to differentiate you immediately. I build strategic online presences that win business." },
  { icon: Building2, title: "Agency Partners", desc: "Need white-label web execution your clients will love? I deliver premium websites under your brand — no hiring, no overhead, just reliable partnership." },
];

const WhoIHelp = () => (
  <section className="section-padding section-gap">
    <div className="container-wide">
      <Reveal>
        <div className="section-header">
          <p className="text-[11px] font-bold text-primary/80 mb-4 uppercase tracking-[0.15em]">Niche Focus</p>
          <h2 className="text-[2.5rem] md:text-5xl lg:text-[3.25rem] font-extrabold mb-6 leading-[1.1] tracking-[-0.02em]">I partner with service businesses where your website is revenue-critical</h2>
          <p className="text-muted-foreground/90 text-base md:text-[1.0625rem] leading-[1.7] max-w-xl mx-auto">
            If you're an HVAC company, plumber, electrician, or local service brand, your website isn't a brochure — it's your #1 sales tool. I treat it that way.
          </p>
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {niches.map((n, i) => (
          <Reveal key={n.title} delay={i * 0.05}>
            <div className="group p-8 rounded-[14px] border border-border/60 bg-card hover:border-primary/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 ease-out">
              <div className="w-12 h-12 rounded-xl bg-primary/[0.04] flex items-center justify-center mb-6 group-hover:bg-primary/[0.08] transition-colors duration-300">
                <n.icon size={20} className="text-primary" strokeWidth={2.25} />
              </div>
              <h3 className="font-bold text-[1.0625rem] mb-3 tracking-tight">{n.title}</h3>
              <p className="text-[0.9375rem] text-muted-foreground/80 leading-[1.65]">{n.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhoIHelp;
