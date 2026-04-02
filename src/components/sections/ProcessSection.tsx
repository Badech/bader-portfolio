import { Reveal } from "@/components/Reveal";

const steps = [
  { num: "01", title: "Audit", desc: "I review your current site, competitors, and market positioning to find what's working and what's costing you leads." },
  { num: "02", title: "Strategy", desc: "Together we define the goals, messaging, and conversion approach that will drive real business results." },
  { num: "03", title: "Design", desc: "I create a custom UI/UX direction — premium, clean, and purpose-built for trust and action." },
  { num: "04", title: "Build", desc: "I develop a fast, responsive, SEO-ready website using modern tools — no bloated templates." },
  { num: "05", title: "Launch & Optimize", desc: "We launch with confidence and continue refining based on real performance data." },
];

const ProcessSection = () => (
  <section className="section-padding section-gap bg-section-alt">
    <div className="container-wide">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Process</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">A clear path from first call to launch</h2>
          <p className="text-muted-foreground text-lg">
            No guesswork, no scope creep. A structured process that keeps things smooth, fast, and focused.
          </p>
        </div>
      </Reveal>

      <div className="max-w-3xl mx-auto space-y-0">
        {steps.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.06}>
            <div className="flex gap-6 items-start group">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border-2 border-primary/20 bg-card flex items-center justify-center text-sm font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  {s.num}
                </div>
                {i < steps.length - 1 && <div className="w-px h-12 bg-border" />}
              </div>
              <div className="pb-10">
                <h3 className="font-bold text-lg mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
