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
                <div className="rounded-2xl overflow-hidden shadow-xl max-w-md">
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
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6">I build websites that grow businesses</h1>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    I'm Bader Echchalh — a freelance web designer, front-end developer, and conversion specialist.
                    I help U.S. service businesses build websites that look premium and perform in the real world.
                  </p>
                  <p>
                    I got into this work because I saw too many great businesses — HVAC companies, plumbers, electricians —
                    losing customers to competitors with better websites. Not better services. Better websites.
                  </p>
                  <p>
                    That didn't sit right with me. So I focused my career on bridging that gap: combining premium design,
                    clean development, and conversion strategy to help service businesses compete and win online.
                  </p>

                  <h2 className="text-xl font-bold text-foreground pt-4">My approach</h2>
                  <p>
                    I don't start with colors and fonts. I start with your business — who your customers are, what makes
                    them trust you, and what's stopping them from picking up the phone. Then I design around those insights.
                  </p>

                  <h2 className="text-xl font-bold text-foreground pt-4">Design philosophy</h2>
                  <p>
                    Clean over clever. Premium over flashy. Every element earns its place on the page. I believe the best
                    design is the one your customers don't notice — because it just works. They feel trust, they see clarity,
                    and they take action.
                  </p>

                  <h2 className="text-xl font-bold text-foreground pt-4">What I value in client work</h2>
                  <ul className="space-y-2">
                    {[
                      "Clear communication and honest expectations",
                      "Strategy before aesthetics",
                      "Results you can measure, not just admire",
                      "Respect for your time and your customers' experience",
                      "Long-term partnerships over one-off transactions",
                    ].map((v) => (
                      <li key={v} className="flex items-start gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {v}
                      </li>
                    ))}
                  </ul>

                  <h2 className="text-xl font-bold text-foreground pt-4">Who I work best with</h2>
                  <p>
                    Business owners who take their brand seriously. Companies that understand a website is a business
                    asset — not an expense. Teams that value quality, clarity, and results. If that sounds like you,
                    we'll get along great.
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
