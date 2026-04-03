import { Reveal } from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const FeaturedWork = () => (
  <section className="section-padding section-gap bg-section-alt">
    <div className="container-wide">
      <Reveal>
        <div className="section-header">
          <p className="text-[11px] font-bold text-primary/80 mb-4 uppercase tracking-[0.15em]">Selected Work</p>
          <h2 className="text-[2.5rem] md:text-5xl lg:text-[3.25rem] font-extrabold mb-6 leading-[1.1] tracking-[-0.02em]">Portfolio concept websites</h2>
          <p className="text-muted-foreground/90 text-base md:text-[1.0625rem] leading-[1.7] max-w-2xl mx-auto">
            Concept websites created to demonstrate my strategic approach to structure, conversion design, and trust-building for HVAC and local service businesses.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.1}>
            <ProjectCard project={project} showCaseStudyLink={true} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedWork;
