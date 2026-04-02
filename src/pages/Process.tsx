import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/sections/FinalCTA";
import { Reveal } from "@/components/Reveal";

const steps = [
  {
    num: "01",
    title: "Discovery & Audit",
    desc: "We start with a deep dive into your business, market, and current online presence. I audit your existing website (if you have one), study your competitors, and understand your ideal customer.",
    details: ["Current website audit", "Competitor analysis", "Target audience profiling", "Goal alignment"],
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Based on the audit, we define a clear strategy — the messaging, positioning, content structure, and conversion approach that will drive real results for your specific business.",
    details: ["Content strategy", "Conversion mapping", "Sitemap & wireframes", "Messaging direction"],
  },
  {
    num: "03",
    title: "UI/UX Design",
    desc: "I design every page with intention — premium visuals, intuitive navigation, clear trust signals, and strategic CTAs. You'll see and approve designs before any code is written.",
    details: ["Custom visual direction", "Mobile-first layouts", "Interactive prototypes", "Client review & revision"],
  },
  {
    num: "04",
    title: "Development",
    desc: "Clean, modern, fast code. I build your site with responsive design, optimized performance, SEO best practices, and professional-grade architecture.",
    details: ["Responsive development", "Speed optimization", "SEO implementation", "Cross-browser testing"],
  },
  {
    num: "05",
    title: "Launch & Refinement",
    desc: "We launch with confidence. After go-live, I monitor performance and make refinements to ensure everything runs smoothly and converts as expected.",
    details: ["Quality assurance", "Launch support", "Performance monitoring", "Post-launch optimization"],
  },
];

const Process = () => (
  <>
    <Navbar />
    <main className="pt-24 md:pt-32">
      <section className="section-padding pb-16">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Process</p>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-5">How we go from first call to launch</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A structured, transparent process designed to make working with me smooth, predictable, and results-driven. No surprises, no scope creep — just clear execution.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding pb-20">
        <div className="container-wide max-w-3xl">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.06}>
              <div className="flex gap-6 items-start group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-2 border-primary/20 bg-card flex items-center justify-center text-sm font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    {s.num}
                  </div>
                  {i < steps.length - 1 && <div className="w-px h-full min-h-[100px] bg-border" />}
                </div>
                <div className="pb-12">
                  <h2 className="text-xl md:text-2xl font-bold mb-3">{s.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.details.map((d) => (
                      <span key={d} className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                        {d}
                      </span>
                    ))}
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

export default Process;
