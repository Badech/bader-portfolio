import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  showCaseStudyLink?: boolean;
}

const ProjectCard = ({ project, showCaseStudyLink = true }: ProjectCardProps) => {
  const categoryColors = {
    HVAC: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
    Plumbing: "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20",
    Electrical: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
  };

  return (
    <div className="group rounded-[14px] border border-border/60 bg-card overflow-hidden hover:border-border transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      {/* Project Preview Area - Elegant mockup container ready for screenshots */}
      <div className="aspect-[16/10] bg-gradient-to-br from-primary/[0.03] to-primary/[0.08] relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 flex items-center justify-center p-8">
          {/* Browser Mockup Frame */}
          <div className="w-full h-full bg-background rounded-lg shadow-2xl border border-border/60 overflow-hidden">
            {/* Browser Chrome */}
            <div className="h-8 bg-muted/40 border-b border-border/40 flex items-center px-3 gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="text-[10px] text-muted-foreground/50 font-medium px-3 py-0.5 bg-muted/30 rounded">
                  {project.liveUrl.replace('https://', '').replace('/', '')}
                </div>
              </div>
            </div>
            
            {/* Content Area - Website Preview */}
            <div className="h-[calc(100%-2rem)] bg-gradient-to-br from-muted/20 to-muted/40 relative overflow-hidden">
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
                    <div className="text-center space-y-3 p-6 relative z-10">
                      <div className="text-[2.5rem] font-black text-primary/[0.15] tracking-tight leading-none">
                        {project.title.split(" ")[0]}
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`${categoryColors[project.category]} text-[9px] font-bold uppercase tracking-wider`}
                      >
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Decorative grid pattern */}
                  <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: 'linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }} />
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/[0.02] transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-7 flex flex-col flex-grow">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1.5 leading-tight">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground font-medium">
                {project.niche}
              </p>
            </div>
            <Badge 
              variant="secondary" 
              className="text-[10px] font-bold uppercase tracking-wider whitespace-nowrap shrink-0 bg-primary/[0.06] text-primary/80 border-primary/10"
            >
              {project.conceptLabel}
            </Badge>
          </div>
        </div>

        {/* Summary */}
        <p className="text-[0.9375rem] text-muted-foreground/90 leading-[1.7] mb-6 flex-grow">
          {project.summary}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          {showCaseStudyLink && (
            <Button 
              asChild 
              variant="default" 
              className="flex-1 group/btn"
            >
              <Link to={`/work#${project.id}`}>
                View Details
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
          )}
          
          <Button 
            asChild 
            variant="outline" 
            className="flex-1 group/btn"
          >
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Visit Live Site
              <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
