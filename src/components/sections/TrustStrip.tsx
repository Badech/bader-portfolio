import { Reveal } from "@/components/Reveal";
import { Target, Smartphone, Zap, Search, PhoneCall, CheckCircle } from "lucide-react";

const items = [
  { icon: Target, label: "Built for Lead Generation" },
  { icon: Smartphone, label: "Mobile-First Design" },
  { icon: Zap, label: "Performance-Optimized" },
  { icon: Search, label: "SEO-Ready from Day One" },
  { icon: PhoneCall, label: "Proven Conversion Approach" },
  { icon: CheckCircle, label: "Transparent Partnership" },
];

const TrustStrip = () => (
  <section className="border-y border-border/50 bg-section-alt">
    <div className="container-wide section-padding py-12 md:py-14">
      <Reveal>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5 text-[13px] font-semibold text-muted-foreground/90">
              <item.icon size={16} className="text-primary" strokeWidth={2.5} />
              {item.label}
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default TrustStrip;
