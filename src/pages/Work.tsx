import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/sections/FinalCTA";
import { Reveal } from "@/components/Reveal";
import { FileText, Target, Zap } from "lucide-react";

const Work = () => (
  <>
    <Navbar />
    <main className="pt-24 md:pt-32">
      <section className="section-padding pb-20 md:pb-32">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[11px] font-bold text-primary/80 mb-4 uppercase tracking-[0.15em]">Portfolio</p>
              <h1 className="text-[2.75rem] md:text-5xl lg:text-[3.5rem] font-extrabold mb-6 leading-[1.08] tracking-[-0.02em]">Client case studies coming soon</h1>
              <p className="text-[1.0625rem] text-muted-foreground/90 leading-[1.7] mb-8">
                Selected case studies will be added here as projects are completed. Each will showcase strategy, conversion decisions, and measurable improvements for HVAC and local service businesses.
              </p>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Reveal delay={0.1}>
                  <div className="p-8 rounded-[14px] border border-dashed border-border/60 bg-card text-center">
                    <div className="w-14 h-14 rounded-xl bg-primary/[0.04] flex items-center justify-center mb-5 mx-auto">
                      <FileText size={22} className="text-primary/60" strokeWidth={2} />
                    </div>
                    <p className="text-[11px] font-bold text-primary/70 uppercase tracking-[0.12em] mb-3">Case Study Coming Soon</p>
                    <p className="text-[0.9375rem] text-muted-foreground/70 leading-[1.65]">
                      HVAC website redesign with full conversion strategy breakdown
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.15}>
                  <div className="p-8 rounded-[14px] border border-dashed border-border/60 bg-card text-center">
                    <div className="w-14 h-14 rounded-xl bg-primary/[0.04] flex items-center justify-center mb-5 mx-auto">
                      <Target size={22} className="text-primary/60" strokeWidth={2} />
                    </div>
                    <p className="text-[11px] font-bold text-primary/70 uppercase tracking-[0.12em] mb-3">Strategic Breakdown Coming Soon</p>
                    <p className="text-[0.9375rem] text-muted-foreground/70 leading-[1.65]">
                      Local service lead capture optimization walkthrough
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="p-8 rounded-[14px] border border-dashed border-border/60 bg-card text-center">
                    <div className="w-14 h-14 rounded-xl bg-primary/[0.04] flex items-center justify-center mb-5 mx-auto">
                      <Zap size={22} className="text-primary/60" strokeWidth={2} />
                    </div>
                    <p className="text-[11px] font-bold text-primary/70 uppercase tracking-[0.12em] mb-3">Selected Work Coming Soon</p>
                    <p className="text-[0.9375rem] text-muted-foreground/70 leading-[1.65]">
                      Landing page with detailed UX decision analysis
                    </p>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.25}>
                <div className="mt-12 p-6 rounded-xl bg-primary/[0.03] border border-primary/[0.08] max-w-2xl mx-auto">
                  <p className="text-sm text-muted-foreground/90 leading-relaxed">
                    <span className="font-semibold text-foreground">Currently accepting new projects.</span> If you're an HVAC company, plumber, or electrician looking to improve your website, I'd be happy to review your current site and discuss how we can work together.
                  </p>
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </main>
    <Footer />
  </>
);

export default Work;
