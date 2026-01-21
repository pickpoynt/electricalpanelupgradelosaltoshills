import { Clock, DollarSign, PenTool, ShieldCheck, Zap, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "24/7 Response",
    description: "Electrical emergencies don't wait for business hours. We have a technician on call 24/7 for Henderson mobile home parks.",
  },
  {
    icon: PenTool,
    title: "HUD Code Experts",
    description: "Manufactured homes have different electrical codes (HUD Title 24) than stick-built homes. We know the difference and ensure you stay compliant.",
  },
  {
    icon: DollarSign,
    title: "Flat Rate Pricing",
    description: "No hourly billing surprises. We give you a flat upfront price for the repair before we pick up a tool.",
  },
  {
    icon: ShieldCheck,
    title: "Aluminum Safe",
    description: "We are certified in aluminum wiring remediation. We don't just 'tighten' loose wires; we permanently fix the connection hazard.",
  },
  {
    icon: Zap,
    title: "Park Pedestal Specialist",
    description: "We work directly with park management and NV Energy to coordinate power restoration at your meter pedestal.",
  },
  {
    icon: HeartHandshake,
    title: "Senior Discounts",
    description: "We proudly offer discounts to our senior community members in local 55+ mobile home parks.",
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
              Why Choose Us for Your
              <span className="text-gradient-copper block">Mobile Home?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Standard electricians often refuse mobile home work because of the cramped spaces and unique wiring.
              We embrace it. We are dedicated to keeping Henderson's manufactured communities safe.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">24/7</span>
                <span className="text-sm text-muted-foreground">Emergency Svc</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">500+</span>
                <span className="text-sm text-muted-foreground">Parks Served</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">A+</span>
                <span className="text-sm text-muted-foreground">BBB Rating</span>
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
