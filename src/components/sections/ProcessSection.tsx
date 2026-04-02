import { Reveal } from "@/components/Reveal";

const steps = [
  { num: "01", title: "Free Website Audit", desc: "I analyze your current site (or competitor sites) to identify exactly where you're losing calls. You'll get honest feedback about trust gaps, mobile issues, and conversion problems — before we discuss any project." },
  { num: "02", title: "Strategy Session", desc: "We align on your business goals, not design preferences. I'll map out exactly how the new site will position you, differentiate you, and drive more calls. Clear scope, clear timeline, clear pricing." },
  { num: "03", title: "Design & Review", desc: "I create a custom design focused on trust, clarity, and conversion. You'll see exactly what you're getting before a single line of code is written. Revisions included until you're confident." },
  { num: "04", title: "Development & Testing", desc: "I build your site with modern, clean code — fast, mobile-optimized, and SEO-ready. Every page tested across devices and browsers before you see it." },
  { num: "05", title: "Launch & Ongoing Support", desc: "I launch when it's ready to drive business, not when it's 'good enough.' Post-launch, I monitor performance and make adjustments to maximize your results." },
];

const ProcessSection = () => (
  <section className="section-padding section-gap bg-section-alt">
    <div className="container-wide">
      <Reveal>
        <div className="section-header">
          <p className="text-[11px] font-bold text-primary/80 mb-4 uppercase tracking-[0.15em]">Process</p>
          <h2 className="text-[2.5rem] md:text-5xl lg:text-[3.25rem] font-extrabold mb-6 leading-[1.1] tracking-[-0.02em]">A clear, proven process that respects your time</h2>
          <p className="text-muted-foreground/90 text-base md:text-[1.0625rem] leading-[1.7] max-w-xl mx-auto">
            No surprises. No scope creep. No missed deadlines. Just a transparent partnership approach that keeps your project on track and delivers what we promise.
          </p>
        </div>
      </Reveal>

      <div className="max-w-3xl mx-auto space-y-0">
        {steps.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.06}>
            <div className="flex gap-7 items-start group">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border-2 border-border/80 bg-card flex items-center justify-center text-sm font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 ease-out shadow-sm">
                  {s.num}
                </div>
                {i < steps.length - 1 && <div className="w-px h-16 bg-border/60" />}
              </div>
              <div className="pb-14">
                <h3 className="font-bold text-[1.0625rem] mb-3 tracking-tight">{s.title}</h3>
                <p className="text-[0.9375rem] text-muted-foreground/80 leading-[1.65]">{s.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
