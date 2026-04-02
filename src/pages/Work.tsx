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
    challenge: "Outdated website with low mobile engagement and nearly zero organic leads.",
    approach: "Full strategic redesign focused on trust signals, clear service hierarchy, mobile-first UX, and conversion-optimized contact flow.",
    result: "Designed to increase quote requests by 40%+ and reduce bounce rate significantly.",
  },
  {
    img: projectElectrician,
    type: "Electrician Lead-Gen Site",
    title: "BrightWire Electrical",
    challenge: "No web presence beyond a basic directory listing. Losing customers to competitors with modern sites.",
    approach: "Built a lead-generation focused website with click-to-call, service area targeting, and speed optimization for mobile users.",
    result: "Built for local search dominance and same-day service call conversion.",
  },
  {
    img: projectPlumbing,
    type: "Service Landing Page",
    title: "ClearFlow Plumbing",
    challenge: "Paid ad traffic was converting below 2%. Needed a dedicated landing experience for Google Ads campaigns.",
    approach: "High-converting landing page with clean layout, strong trust indicators, streamlined booking form, and page speed optimization.",
    result: "Conversion rate engineered for paid traffic — targeting 8%+ conversion from ad clicks.",
  },
];

const Work = () => (
  <>
    <Navbar />
    <main className="pt-24 md:pt-32">
      <section className="section-padding pb-16">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Portfolio</p>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-5">Strategic work that drives business results</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each project is a business growth tool — not a gallery piece. Here's how I've helped service businesses improve their online presence and lead generation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding pb-20">
        <div className="container-wide space-y-16">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className={`rounded-xl overflow-hidden border border-border shadow-lg ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <img src={p.img} alt={p.title} loading="lazy" width={960} height={640} className="w-full h-auto" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{p.type}</p>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{p.title}</h2>
                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                    <div>
                      <p className="font-semibold text-foreground mb-1">Challenge</p>
                      <p>{p.challenge}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Approach</p>
                      <p>{p.approach}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Expected Outcome</p>
                      <p className="text-accent font-medium">{p.result}</p>
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
