import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/60 bg-background">
    <div className="container-wide section-padding py-16 md:py-20">
      <div className="grid md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <Link to="/" className="font-heading text-[1.0625rem] text-foreground hover:text-primary transition-colors">
            <span className="font-bold">Bader</span> <span className="font-semibold text-foreground/70">Echchalh</span>
          </Link>
          <p className="mt-4 text-[0.9375rem] text-muted-foreground/80 leading-[1.7]">
            Premium web design for HVAC and local service businesses.
          </p>
        </div>

        <div>
          <h4 className="text-[0.9375rem] font-semibold mb-4 text-foreground tracking-tight">Pages</h4>
          <div className="flex flex-col gap-2.5">
            {[
              { label: "Work", to: "/work" },
              { label: "Services", to: "/services" },
              { label: "Process", to: "/process" },
              { label: "About", to: "/about" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-[0.9375rem] text-muted-foreground/80 hover:text-foreground transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[0.9375rem] font-semibold mb-4 text-foreground tracking-tight">Services</h4>
          <div className="flex flex-col gap-2.5 text-[0.9375rem] text-muted-foreground/80">
            <span>Website Design</span>
            <span>Website Redesign</span>
            <span>Landing Pages</span>
            <span>White-Label Work</span>
          </div>
        </div>

        <div>
          <h4 className="text-[0.9375rem] font-semibold mb-4 text-foreground tracking-tight">Get in Touch</h4>
          <div className="space-y-2.5">
            <p className="text-[0.9375rem] text-muted-foreground/80">
              <a href="mailto:Bader.echchalh1@gmail.com" className="hover:text-foreground transition-colors">
                Bader.echchalh1@gmail.com
              </a>
            </p>
            <p className="text-[0.9375rem] text-muted-foreground/80">
              <a 
                href="https://www.linkedin.com/in/bader-ech-chalh/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors inline-flex items-center gap-1.5"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </p>
          </div>
          <Link to="/contact" className="inline-block mt-4 text-[0.9375rem] font-semibold text-primary hover:underline">
            Book a Call →
          </Link>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-border/60 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[0.8125rem] text-muted-foreground/70">© {new Date().getFullYear()} Bader Echchalh. All rights reserved.</p>
        <p className="text-[0.8125rem] text-muted-foreground/70">Designed & built with precision.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
