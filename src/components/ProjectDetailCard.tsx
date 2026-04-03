import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/data/projects";
import { Reveal } from "@/components/Reveal";

interface ProjectDetailCardProps {
  project: Project;
}

const ProjectDetailCard = ({ project }: ProjectDetailCardProps) => {
  const categoryColors = {
    HVAC: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
    Plumbing: "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20",
    Electrical: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
  };

  return (
    <div id={project.id} className="scroll-mt-32">
      <div className="rounded-[16px] border border-border/60 bg-card overflow-hidden">
        {/* Header Section with Visual Preview */}
        <div className="bg-gradient-to-br from-primary/[0.04] to-primary/[0.08] p-8 md:p-10 border-b border-border/40">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <Badge 
                  variant="outline" 
                  className={`${categoryColors[project.category]} text-[10px] font-bold uppercase tracking-wider mb-4`}
                >
                  {project.category}
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-3 leading-tight tracking-[-0.02em]">
                  {project.title}
                </h2>
                <p className="text-lg text-muted-foreground font-medium mb-2">
                  {project.niche}
                </p>
              </div>
              <Badge 
                variant="secondary" 
                className="text-[11px] font-bold uppercase tracking-wider shrink-0 bg-primary/[0.08] text-primary/80 border-primary/10 self-start"
              >
                {project.conceptLabel}
              </Badge>
            </div>
            <p className="text-base md:text-[1.0625rem] text-muted-foreground/90 leading-[1.7] max-w-3xl mb-8">
              {project.summary}
            </p>
            
            {/* Desktop Preview Mockup - Ready for screenshot */}
            <div className="aspect-[16/9] max-w-5xl mx-auto bg-gradient-to-br from-background/60 to-background/40 rounded-xl border border-border/60 shadow-2xl overflow-hidden">
              {/* Browser Chrome */}
              <div className="h-10 bg-muted/60 border-b border-border/50 flex items-center px-4 gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-xs text-muted-foreground/60 font-medium px-4 py-1 bg-background/60 rounded border border-border/40">
                    {project.liveUrl.replace('https://', '').replace('/', '')}
                  </div>
                </div>
              </div>
              
              {/* Content Area - Website Preview */}
              <div className="h-[calc(100%-2.5rem)] bg-gradient-to-br from-muted/30 to-muted/50 relative overflow-hidden">
                {project.previewImage ? (
                  <iframe
                    src={project.previewImage}
                    title={`${project.title} live preview`}
                    className="w-full h-full border-0 pointer-events-none scale-[0.5] origin-top-left"
                    style={{ width: '200%', height: '200%' }}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                ) : (
                  <>
                    {/* Fallback placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4 p-8 relative z-10">
                        <div className="text-[3.5rem] md:text-[4.5rem] font-black text-primary/[0.12] tracking-tight leading-none">
                          {project.title.split(" ")[0]}
                        </div>
                        <p className="text-sm text-muted-foreground/50 font-medium max-w-md mx-auto">
                          Screenshot placeholder — ready for live site capture
                        </p>
                      </div>
                    </div>
                    
                    {/* Decorative grid pattern */}
                    <div className="absolute inset-0 opacity-[0.02]" style={{
                      backgroundImage: 'linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)',
                      backgroundSize: '32px 32px'
                    }} />
                  </>
                )}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Content Sections */}
        <div className="p-8 md:p-10 space-y-10">
          {/* Overview */}
          <Reveal delay={0.1}>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 flex items-center">
                <span className="w-1.5 h-7 bg-primary rounded-full mr-3" />
                Overview
              </h3>
              <p className="text-[0.9375rem] md:text-base text-muted-foreground/90 leading-[1.75] pl-[22px]">
                {project.overview}
              </p>
            </div>
          </Reveal>

          {/* Strategic Focus */}
          <Reveal delay={0.15}>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 flex items-center">
                <span className="w-1.5 h-7 bg-primary rounded-full mr-3" />
                Strategic Focus
              </h3>
              <ul className="space-y-3 pl-[22px]">
                {project.strategicFocus.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[0.9375rem] md:text-base text-muted-foreground/90 leading-[1.75]">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/60 mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* UX & Conversion Decisions */}
          <Reveal delay={0.2}>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 flex items-center">
                <span className="w-1.5 h-7 bg-primary rounded-full mr-3" />
                Key UX & Conversion Decisions
              </h3>
              <ul className="space-y-3 pl-[22px]">
                {project.uxDecisions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[0.9375rem] md:text-base text-muted-foreground/90 leading-[1.75]">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/60 mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Visual Direction & Brand Feel */}
          <Reveal delay={0.25}>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 flex items-center">
                  <span className="w-1.5 h-7 bg-primary rounded-full mr-3" />
                  Visual Direction
                </h3>
                <p className="text-[0.9375rem] md:text-base text-muted-foreground/90 leading-[1.75] pl-[22px]">
                  {project.visualDirection}
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 flex items-center">
                  <span className="w-1.5 h-7 bg-primary rounded-full mr-3" />
                  Brand Feel
                </h3>
                <div className="flex flex-wrap gap-2 pl-[22px]">
                  {project.brandFeel.map((feel, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary"
                      className="bg-primary/[0.06] text-primary/90 border-primary/10 text-xs font-medium"
                    >
                      {feel}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Designed to Improve */}
          <Reveal delay={0.3}>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 flex items-center">
                <span className="w-1.5 h-7 bg-primary rounded-full mr-3" />
                Designed to Improve
              </h3>
              <ul className="space-y-3 pl-[22px]">
                {project.designedToImprove.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[0.9375rem] md:text-base text-muted-foreground/90 leading-[1.75]">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/60 mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal delay={0.35}>
            <div className="pt-6 border-t border-border/40">
              <Button 
                asChild 
                size="lg"
                className="w-full sm:w-auto group"
              >
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Visit Live Website
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailCard;
