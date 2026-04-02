import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Your inquiry has been sent. I'll get back to you within 24 hours.");
    }, 1200);
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32">
        <section className="section-padding pb-20">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              <Reveal>
                <div>
                  <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Contact</p>
                  <h1 className="text-4xl md:text-5xl font-extrabold mb-5">
                    Let's talk about your project
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Whether you need a new website, a redesign, or a strategic audit — fill out the form and I'll
                    get back to you within 24 hours with next steps.
                  </p>

                  <div className="space-y-5">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center">
                        <Mail size={16} className="text-primary" />
                      </div>
                      hello@baderechchalh.com
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center">
                        <Clock size={16} className="text-primary" />
                      </div>
                      Typical response time: under 24 hours
                    </div>
                  </div>

                  {/* Calendar embed placeholder */}
                  <div className="mt-8 p-6 rounded-xl border border-dashed border-border bg-section-alt text-center">
                    <p className="text-sm text-muted-foreground">Calendar booking widget can be embedded here</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-xl border border-border bg-card shadow-sm">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="you@company.com" required />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Your company" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Current Website</Label>
                      <Input id="website" placeholder="www.yoursite.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="help">What do you need help with?</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new-website">New Website Design</SelectItem>
                        <SelectItem value="redesign">Website Redesign</SelectItem>
                        <SelectItem value="landing-page">Landing Page</SelectItem>
                        <SelectItem value="audit">Website Audit</SelectItem>
                        <SelectItem value="white-label">White-Label Work</SelectItem>
                        <SelectItem value="other">Something Else</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Budget Range</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2k-5k">$2,000 – $5,000</SelectItem>
                          <SelectItem value="5k-10k">$5,000 – $10,000</SelectItem>
                          <SelectItem value="10k-20k">$10,000 – $20,000</SelectItem>
                          <SelectItem value="20k+">$20,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Timeline</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-2-months">1–2 months</SelectItem>
                          <SelectItem value="3-months">3+ months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea id="message" placeholder="Tell me about your project, goals, and any challenges you're facing..." rows={4} />
                  </div>

                  <Button variant="hero" size="lg" type="submit" className="w-full" disabled={submitting}>
                    {submitting ? "Sending..." : "Send Inquiry"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    No spam. No obligation. Just a conversation about how I can help your business grow.
                  </p>
                </form>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
