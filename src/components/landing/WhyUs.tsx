import { Clock, DollarSign, PenTool, ShieldCheck, Zap, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Fast Skykomish Response",
    description: "Mold spreads rapidly in damp environments. We prioritize Skykomish calls to ensure remediation begins before the damage worsens.",
  },
  {
    icon: PenTool,
    title: "Eco-Friendly Solutions",
    description: "We use non-toxic, plant-based antimicrobials that are tough on mold but safe for your family and the Skykomish environment.",
  },
  {
    icon: DollarSign,
    title: "Insurance Assistance",
    description: "Dealing with insurance can be stressful. We provide detailed documentation and work directly with adjusters to simplify your claim.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Technicians",
    description: "Our team is IICRC S520 certified, ensuring that every remediation project follows the highest national safety standards.",
  },
  {
    icon: Zap,
    title: "Advanced Technology",
    description: "From infrared moisture detection to industrial-grade HEPA scrubbers, we use the best tech to ensure 100% mold removal.",
  },
  {
    icon: HeartHandshake,
    title: "Locally Owned",
    description: "We are part of the Skykomish community. We understand the unique challenges of PNW moisture and structural mold issues.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Skykomish Remediation Pros
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              The Skykomish Choice for
              <span className="text-gradient-copper block">Permanent Mold Removal.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Black mold is a serious threat to your home's integrity and your health. We provide the expertise and technology to eliminate it at the source.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">850+</span>
                <span className="text-sm text-muted-foreground">Homes Restored</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">5.0</span>
                <span className="text-sm text-muted-foreground">Star Service</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">24/7</span>
                <span className="text-sm text-muted-foreground">Skykomish Support</span>
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
