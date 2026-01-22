import { Clock, DollarSign, PenTool, ShieldCheck, Zap, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Same Day Service",
    description: "Beeping detector driving you crazy? We offer same-day service in Evanston to replace failing units and restore your peace and quiet.",
  },
  {
    icon: PenTool,
    title: "Code Compliance",
    description: "We stay up-to-date with Evanston's specific fire safety ordinances, ensuring your installation meets all legal and safety requirements.",
  },
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    description: "We provide clear, flat-rate pricing for detector replacement. No hidden fees or 'consultation' surprises.",
  },
  {
    icon: ShieldCheck,
    title: "10-Year Warranty",
    description: "We only install premium, long-life detectors backed by a 10-year manufacturer warranty and our own 1-year labor guarantee.",
  },
  {
    icon: Zap,
    title: "Expert Wiring",
    description: "Connecting traveler wires correctly is essential for system-wide alerts. Our licensed electricians ensure your network is perfectly synced.",
  },
  {
    icon: HeartHandshake,
    title: "Evanston Local",
    description: "We are your neighbors. We've been protecting Evanston families from fire hazards for over a decade with trusted, local service.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Peace of Mind
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Why Choose Evanston's
              <span className="text-gradient-copper block">Smoke Detection Experts?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Smoke detectors are the most critical safety device in your home. We specialize exclusively in the installation, wiring, and synchronization of these life-saving systems.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">1,200+</span>
                <span className="text-sm text-muted-foreground">Homes Secured</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">10+</span>
                <span className="text-sm text-muted-foreground">Years Local</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">A+</span>
                <span className="text-sm text-muted-foreground">Safety Rating</span>
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
