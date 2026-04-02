import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "Process", to: "/process" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/60">
      <nav className="container-wide section-padding flex items-center justify-between h-[70px] md:h-20">
        <Link to="/" className="font-heading text-[1.125rem] tracking-[-0.01em] text-foreground hover:text-primary transition-colors duration-300">
          <span className="font-bold">Bader</span> <span className="font-semibold text-foreground/70 tracking-[-0.005em]">Echchalh</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 text-[0.9375rem] font-medium rounded-lg transition-all duration-200 ${
                location.pathname === link.to
                  ? "text-primary bg-primary/[0.06]"
                  : "text-muted-foreground/90 hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button variant="hero" size="default" asChild className="shadow-md hover:shadow-lg">
            <Link to="/contact">Book a Call</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground hover:bg-secondary/80 rounded-lg transition-colors" aria-label="Menu">
          {open ? <X size={22} strokeWidth={2.25} /> : <Menu size={22} strokeWidth={2.25} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border/60 section-padding pb-6 animate-fade-in">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 text-[0.9375rem] font-medium rounded-lg transition-all ${
                  location.pathname === link.to
                    ? "text-primary bg-primary/[0.06]"
                    : "text-muted-foreground/90 hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="hero" size="lg" className="mt-4 shadow-md" asChild>
              <Link to="/contact" onClick={() => setOpen(false)}>Book a Call</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
