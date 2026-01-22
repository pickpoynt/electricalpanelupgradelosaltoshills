import { Clock, DollarSign, PenTool, ShieldCheck, Zap, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "60-Min Riverside Response",
    description: "Partial power is an emergency. We prioritize Riverside calls to ensure your home's phase balance is restored within the hour.",
  },
  {
    icon: PenTool,
    title: "Complex Troubleshooting",
    description: "Partial outages aren't simple fixes. Our Master Electricians excel at diagnosing deep-rooted panel and service mast failures.",
  },
  {
    icon: DollarSign,
    title: "Upfront Diagnostic Fee",
    description: "No guessing games. We provide a flat-rate diagnostic fee to find the exact cause of your power loss before any work begins.",
  },
  {
    icon: ShieldCheck,
    title: "Equipment Protection",
    description: "We don't just fix the lights; we verify that the partial outage didn't create a 'floating neutral' that could fry your appliances.",
  },
  {
    icon: Zap,
    title: "Phase Restoration Experts",
    description: "Specialized in restoring 120/240V equilibrium. We have the tools to pinpoint utility-side vs. customer-side failures.",
  },
  {
    icon: HeartHandshake,
    title: "Austin Born & Bred",
    description: "Proudly serving the Riverside community. We understand the unique electrical infrastructure of Austin's established neighborhoods.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              ATX Emergency Pros
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              The Riverside Choice for
              <span className="text-gradient-copper block">Rapid Power Restoration.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              A partial outage is more than an inconvenience—it's a threat to your home's electronic safety. We provide the technical precision required to restore balance.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">1,500+</span>
                <span className="text-sm text-muted-foreground">Emergencies Resolved</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">4.9</span>
                <span className="text-sm text-muted-foreground">Star Service</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">24/7</span>
                <span className="text-sm text-muted-foreground">Austin Dispatch</span>
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
