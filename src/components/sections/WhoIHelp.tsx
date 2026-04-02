import { Reveal } from "@/components/Reveal";
import { Thermometer, Droplets, Plug, Wrench, Building2 } from "lucide-react";

const niches = [
  { icon: Thermometer, title: "HVAC Companies", desc: "Heating, cooling, and air quality businesses looking for more service calls." },
  { icon: Droplets, title: "Plumbers", desc: "Plumbing companies that want a professional online presence that drives leads." },
  { icon: Plug, title: "Electricians", desc: "Electrical contractors ready to stand out and capture more local customers." },
  { icon: Wrench, title: "Service Businesses", desc: "Any home or commercial service company that needs a website that actually works." },
  { icon: Building2, title: "Agencies", desc: "Marketing agencies needing premium white-label web design and development." },
];

const WhoIHelp = () => (
  <section className="section-padding section-gap">
    <div className="container-wide">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Niche Focus</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Built for service businesses that need results</h2>
          <p className="text-muted-foreground text-lg">
            I specialize in websites for local service companies — the kind of businesses where every missed call is lost revenue.
          </p>
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {niches.map((n, i) => (
          <Reveal key={n.title} delay={i * 0.05}>
            <div className="group p-6 rounded-xl border border-border bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <n.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">{n.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{n.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhoIHelp;
