import { Trees, Search, Shield, Zap, Microscope, ThumbsUp } from "lucide-react";

const reasons = [
  {
    icon: Search,
    title: "Exact Diagnosis",
    description: "We locate the exact spot of the break or root intrusion using sewer cameras and radio transmitters, so we only dig where necessary.",
  },
  {
    icon: Trees,
    title: "Root Specialists",
    description: "Modesto's beautiful trees are the #1 enemy of clay pipes. We have specific tools designed to clear roots without damaging the pipe further.",
  },
  {
    icon: Shield,
    title: "Permanent Fixes",
    description: "Snaking a drain just pokes a hole in the clog. Our relining and bursting methods create a permanent new pipe that roots cannot penetrate.",
  },
  {
    icon: Zap,
    title: "Fast Response",
    description: "A blocked sewer line is an emergency. We offer same-day service to get your drains flowing and prevent sewage backup into your home.",
  },
  {
    icon: Microscope,
    title: "Before & After",
    description: "We provide video footage of your sewer line before and after our work, so you can see with your own eyes that the problem is solved.",
  },
  {
    icon: ThumbsUp,
    title: "City Compliant",
    description: "We know Modesto's sewer codes and permitting process inside out, ensuring all repairs meet local regulations.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Local Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Why Choose Us for
              <span className="text-gradient-copper block">Clay Pipe Repair?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Clay pipes were built to last, but they have a weakness: joints.
              Over time, ground shifting and roots break these seals. We specialize
              in restoring these vintage systems for modern reliability.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">24/7</span>
                <span className="text-sm text-muted-foreground">Emergency Service</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">10yr</span>
                <span className="text-sm text-muted-foreground">Labor Warranty</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">5.0</span>
                <span className="text-sm text-muted-foreground">Star Rating</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-copper/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-copper/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-copper" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
