import { Clock, DollarSign, PenTool, ShieldCheck, Zap, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "24/7 Response",
    description: "Storms don't follow business hours. We have crews ready to respond to Tulsa weatherhead emergencies day or night.",
  },
  {
    icon: PenTool,
    title: "Code Experts",
    description: "We understand Tulsa's specific electrical codes for service masts, ensuring your repair passes inspection without delays.",
  },
  {
    icon: DollarSign,
    title: "Insurance Support",
    description: "We work with your insurance provider, providing the photos and documentation needed to streamline your storm damage claim.",
  },
  {
    icon: ShieldCheck,
    title: "Structural Focus",
    description: "We don't just fix wires; we reinforce the physical mast and its attachment to your home to prevent future storm damage.",
  },
  {
    icon: Zap,
    title: "Power Coordination",
    description: "We handle the coordination with PSO or OG&E to ensure your power is disconnected and reconnected as quickly as possible.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted Locals",
    description: "As a local Tulsa business, we pride ourselves on protecting our neighbors' homes from Oklahoma's unpredictable weather.",
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
              Why Choose Tulsa's
              <span className="text-gradient-copper block">Weatherhead Experts?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              A damaged service mast is a structural and electrical hazard. We specialize in these complex repairs, ensuring your home is safe and your utility connection is secure.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">24/7</span>
                <span className="text-sm text-muted-foreground">Emergency Svc</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">1,500+</span>
                <span className="text-sm text-muted-foreground">Masts Repaired</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">A+</span>
                <span className="text-sm text-muted-foreground">Local Rating</span>
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
