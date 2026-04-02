import { Reveal } from "@/components/Reveal";
import { Target, Smartphone, Zap, Search, PhoneCall, CheckCircle } from "lucide-react";

const items = [
  { icon: Target, label: "Conversion-focused" },
  { icon: Smartphone, label: "Mobile-first" },
  { icon: Zap, label: "Fast-loading" },
  { icon: Search, label: "SEO-ready" },
  { icon: PhoneCall, label: "Built for leads" },
  { icon: CheckCircle, label: "Clear process" },
];

const TrustStrip = () => (
  <section className="border-y border-border bg-section-alt">
    <div className="container-wide section-padding py-8 md:py-10">
      <Reveal>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <item.icon size={16} className="text-primary" />
              {item.label}
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default TrustStrip;
