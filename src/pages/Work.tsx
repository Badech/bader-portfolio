import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/sections/FinalCTA";
import { Reveal } from "@/components/Reveal";
import ProjectDetailCard from "@/components/ProjectDetailCard";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Work = () => (
  <>
    <Navbar />
    <main className="pt-24 md:pt-32">
      {/* Header Section */}
      <section className="section-padding pb-16 md:pb-20">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-[11px] font-bold text-primary/80 mb-4 uppercase tracking-[0.15em]">Portfolio</p>
              <h1 className="text-[2.75rem] md:text-5xl lg:text-[3.5rem] font-extrabold mb-6 leading-[1.08] tracking-[-0.02em]">
                Portfolio concept websites
              </h1>
              <p className="text-[1.0625rem] text-muted-foreground/90 leading-[1.7] mb-8 max-w-3xl mx-auto">
                These concept websites were created to demonstrate my strategic approach to structure, UX, trust-building, and conversion for HVAC and local service businesses. Each represents the type of work I deliver for real clients.
              </p>

              {/* Trust/Honesty Note */}
              <Reveal delay={0.1}>
                <div className="mt-8 p-6 md:p-7 rounded-xl bg-primary/[0.03] border border-primary/[0.08] max-w-2xl mx-auto">
                  <p className="text-sm md:text-[0.9375rem] text-muted-foreground/90 leading-relaxed">
                    <span className="font-semibold text-foreground">Strategic portfolio work.</span> These are concept websites, not paid client projects. They showcase my approach to conversion-focused design, positioning strategy, and business-aware UX for the trades industry.
                  </p>
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="section-padding pt-0 pb-20 md:pb-32">
        <div className="container-wide">
          <div className="space-y-16 md:space-y-20">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.1}>
                <ProjectDetailCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="section-padding pt-0 pb-20 md:pb-32">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="p-8 md:p-10 rounded-[16px] bg-gradient-to-br from-primary/[0.04] to-primary/[0.08] border border-primary/10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight tracking-[-0.02em]">
                  Ready for a website that actually converts?
                </h2>
                <p className="text-base md:text-[1.0625rem] text-muted-foreground/90 leading-[1.7] mb-8">
                  If your business needs a website that looks more credible, converts more clearly, and supports real lead generation, let's talk.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-base">
                    <Link to="/contact">Request a Free Audit</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-base">
                    <a href="https://cal.com/baderechchalh" target="_blank" rel="noopener noreferrer">
                      Book a Call
                    </a>
                  </Button>
                </div>
              </div>
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
