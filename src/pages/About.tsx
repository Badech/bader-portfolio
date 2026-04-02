import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/sections/FinalCTA";
import { Reveal } from "@/components/Reveal";
import portrait from "@/assets/portrait.jpg";

const About = () => (
  <>
    <Navbar />
    <main className="pt-24 md:pt-32">
      <section className="section-padding pb-20">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <Reveal>
              <div className="sticky top-28">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border/50 max-w-md">
                  <img
                    src={portrait}
                    alt="Bader Echchalh"
                    loading="lazy"
                    width={640}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">About</p>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Independent web partner for HVAC and local service business growth</h1>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    I'm Bader Echchalh — I help HVAC companies, plumbers, and electricians win more business online. I'm your strategic web partner who treats your website as the revenue-critical business asset it is.
                  </p>
                  <p>
                    I started specializing in local service businesses because I kept seeing the same pattern: excellent companies losing opportunities to competitors with better websites. Not better service. Not better pricing. Just better online presence.
                  </p>
                  <p>
                    That became my mission. I build websites that position you as the obvious choice in your market, communicate your expertise instantly, and convert visitors into paying customers — not just traffic.
                  </p>

                  <h2 className="text-xl font-bold text-foreground pt-4">How I work</h2>
                  <p>
                    I don't start with color palettes or design trends. I start with your business — who's calling you, what they need to see to trust you, and what's stopping them from picking up the phone. Design decisions flow from that understanding, not creative preference.
                  </p>

                  <h2 className="text-xl font-bold text-foreground pt-4">My philosophy</h2>
                  <p>
                    Your website has one job: drive revenue. Everything else is secondary. I build for clarity over cleverness, conversion over aesthetics, and business results over award-worthy design. If it doesn't help you win business, it doesn't belong on your site.
                  </p>

                  <h2 className="text-xl font-bold text-foreground pt-4">What drives every decision I make</h2>
                  <ul className="space-y-2">
                    {[
                      "Revenue impact first — aesthetics second",
                      "Speed isn't optional. Every second costs you money.",
                      "Your customers don't care about your services — they care about their problems",
                      "Conversion isn't luck. It's strategic design.",
                      "I build for years, not just launch day",
                    ].map((v) => (
                      <li key={v} className="flex items-start gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {v}
                      </li>
                    ))}
                  </ul>

                  <h2 className="text-xl font-bold text-foreground pt-4">Who I partner with</h2>
                  <p>
                    HVAC companies, plumbers, and electricians who treat their website as a competitive advantage, not a necessary evil. Business owners who understand that cheap websites cost more in lost revenue than they save upfront. Teams ready to invest in work that drives real results. If that's you, let's talk.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
    <Footer />
  </>
);

export default About;
