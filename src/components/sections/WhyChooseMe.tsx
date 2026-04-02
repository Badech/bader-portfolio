import { Reveal } from "@/components/Reveal";
import { Target, Users, Shield, Rocket, Heart } from "lucide-react";

const reasons = [
  { icon: Target, title: "Conversion, not just visuals", desc: "Every design decision is tied to a business goal — more calls, more leads, more trust." },
  { icon: Users, title: "I understand service businesses", desc: "I know your customers, your market, and what makes them choose you over the competition." },
  { icon: Shield, title: "Designed for trust & action", desc: "Clean positioning, clear CTAs, and trust signals that make visitors confident enough to reach out." },
  { icon: Rocket, title: "Clean, fast, premium code", desc: "Modern tech, fast load times, responsive on every device — no bloated page builders." },
  { icon: Heart, title: "I care about your results", desc: "This isn't template work. I invest in understanding your business because your growth is my reputation." },
];

const WhyChooseMe = () => (
  <section className="section-padding section-gap">
    <div className="container-wide">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Why Me</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Why clients choose to work with me</h2>
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reasons.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.06}>
            <div className="flex gap-4 items-start">
              <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center shrink-0 mt-0.5">
                <r.icon size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseMe;
