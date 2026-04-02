import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="container-wide section-padding py-12 md:py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <Link to="/" className="font-heading font-bold text-lg text-foreground">
            Bader<span className="text-primary">.</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Conversion-focused web design for U.S. service businesses.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3 text-foreground">Pages</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Work", to: "/work" },
              { label: "Services", to: "/services" },
              { label: "Process", to: "/process" },
              { label: "About", to: "/about" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3 text-foreground">Services</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span>Website Design</span>
            <span>Website Redesign</span>
            <span>Landing Pages</span>
            <span>White-Label Work</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3 text-foreground">Get in Touch</h4>
          <p className="text-sm text-muted-foreground">hello@baderechchalh.com</p>
          <Link to="/contact" className="inline-block mt-3 text-sm font-medium text-primary hover:underline">
            Book a Call →
          </Link>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Bader Echchalh. All rights reserved.</p>
        <p className="text-xs text-muted-foreground">Designed & built with precision.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
