import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Your inquiry has been sent. I'll get back to you within 24 hours.");
        e.currentTarget.reset();
      } else {
        toast.error("Something went wrong. Please try again or email me directly.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again or email me directly.");
    } finally {
      setSubmitting(false);
    }
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
                    Let's build a website that wins business
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Whether you need a new website, a redesign, or a free audit — fill out the form and I'll
                    get back to you within 24 hours with a strategic plan.
                  </p>

                  <div className="space-y-5 mb-8">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center">
                        <Mail size={16} className="text-primary" />
                      </div>
                      <a href="mailto:Bader.echchalh1@gmail.com" className="hover:text-foreground transition-colors">
                        Bader.echchalh1@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center">
                        <Clock size={16} className="text-primary" />
                      </div>
                      Response time: Under 24 hours
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-primary/[0.03] border border-primary/[0.08]">
                    <p className="text-sm font-semibold text-foreground mb-2">What happens next?</p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>I'll review your inquiry and respond within 24 hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>We'll discuss your project goals and challenges</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>I'll provide a strategic approach and clear next steps</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-xl border border-border bg-card shadow-sm">
                  {/* Web3Forms Configuration */}
                  <input type="hidden" name="access_key" value="5ab5d119-d807-4cc1-909d-3612217621a4" />
                  <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />
                  <input type="hidden" name="from_name" value="Bader Portfolio Contact Form" />
                  <input type="hidden" name="redirect" value="false" />
                  
                  {/* Honeypot Spam Protection */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="you@company.com" required />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" name="company" placeholder="Your company" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Current Website</Label>
                      <Input id="website" name="website" placeholder="www.yoursite.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">What do you need help with?</Label>
                    <select 
                      id="service" 
                      name="service" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select a service</option>
                      <option value="new-website">New Website Design</option>
                      <option value="redesign">Website Redesign</option>
                      <option value="landing-page">Landing Page</option>
                      <option value="audit">Website Audit</option>
                      <option value="white-label">White-Label Work</option>
                      <option value="other">Something Else</option>
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <select 
                        id="budget" 
                        name="budget" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select range</option>
                        <option value="2k-5k">$2,000 – $5,000</option>
                        <option value="5k-10k">$5,000 – $10,000</option>
                        <option value="10k-20k">$10,000 – $20,000</option>
                        <option value="20k+">$20,000+</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Timeline</Label>
                      <select 
                        id="timeline" 
                        name="timeline" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-2-months">1–2 months</option>
                        <option value="3-months">3+ months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea id="message" name="message" placeholder="Tell me about your project, goals, and any challenges you're facing..." rows={4} required />
                  </div>

                  <Button variant="hero" size="lg" type="submit" className="w-full shadow-lg hover:shadow-xl transition-all" disabled={submitting}>
                    {submitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        Sending Your Inquiry...
                      </span>
                    ) : (
                      "Send Inquiry"
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground/80 text-center leading-relaxed">
                    I'll review your inquiry personally and respond within 24 hours with next steps. No spam, no automated replies — just a real conversation about your project.
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
