import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/sections/FinalCTA";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import projectHvac from "@/assets/project-hvac.jpg";
import projectElectrician from "@/assets/project-electrician.jpg";
import projectPlumbing from "@/assets/project-plumbing.jpg";

const projects = [
  {
    img: projectHvac,
    type: "HVAC Website Redesign",
    title: "Summit Air Comfort",
    challenge: "Outdated website with poor mobile experience and minimal organic lead generation. Losing quote requests to competitors with stronger online presence.",
    approach: "Complete strategic redesign prioritizing trust signals, service page clarity, mobile-first UX, and conversion-optimized contact flow. Built with speed and local SEO foundations.",
    result: "Built to improve trust, mobile clarity, and quote requests by 40%+",
  },
  {
    img: projectElectrician,
    type: "Electrician Website",
    title: "BrightWire Electrical",
    challenge: "Minimal web presence limiting growth in competitive local market. No effective way to capture emergency service calls or showcase service areas.",
    approach: "Lead-generation website engineered for local service conversion. Prioritized click-to-call functionality, service area targeting, mobile speed, and clear CTA structure.",
    result: "Structured for local service conversion and clear CTA flow",
  },
  {
    img: projectPlumbing,
    type: "White-Label Agency Build",
    title: "ClearFlow Plumbing",
    challenge: "Marketing agency needed premium landing page execution for plumbing client's paid ad campaigns. Existing pages converting below 2%.",
    approach: "High-converting landing page with campaign-aligned messaging, trust-building elements, streamlined booking form, and speed optimization for paid traffic.",
    result: "Premium front-end execution for a service-business client",
  },
];

const Work = () => (
  <>
    <Navbar />
    <main className="pt-24 md:pt-32">
      <section className="section-padding pb-20 md:pb-24">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold text-primary/80 mb-4 uppercase tracking-[0.15em]">Portfolio</p>
              <h1 className="text-[2.75rem] md:text-5xl lg:text-[3.5rem] font-extrabold mb-6 leading-[1.08] tracking-[-0.02em]">Selected work</h1>
              <p className="text-[1.0625rem] text-muted-foreground/90 leading-[1.7]">
                Real projects. Real results. Each one designed to solve a specific business challenge and built to deliver measurable outcomes.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding pb-24 md:pb-32">
        <div className="container-wide space-y-28 md:space-y-32">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className={`rounded-2xl overflow-hidden border border-border/60 shadow-[0_20px_70px_-12px_rgba(0,0,0,0.15)] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img src={p.img} alt={p.title} loading="lazy" width={960} height={640} className="w-full h-auto" />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="text-[10px] font-bold text-primary/90 uppercase tracking-[0.12em] mb-3">{p.type}</p>
                  <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold mb-6 leading-[1.2] tracking-tight">{p.title}</h2>
                  <div className="space-y-5">
                    <div>
                      <h3 className="text-[0.875rem] font-bold text-foreground mb-2 tracking-tight">Challenge</h3>
                      <p className="text-[0.9375rem] leading-[1.65] text-muted-foreground/80">{p.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-[0.875rem] font-bold text-foreground mb-2 tracking-tight">Approach</h3>
                      <p className="text-[0.9375rem] leading-[1.65] text-muted-foreground/80">{p.approach}</p>
                    </div>
                    <div>
                      <h3 className="text-[0.875rem] font-bold text-foreground mb-2 tracking-tight">Result</h3>
                      <p className="text-[0.9375rem] font-bold text-accent leading-[1.5]">{p.result}</p>
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

export default Work;
