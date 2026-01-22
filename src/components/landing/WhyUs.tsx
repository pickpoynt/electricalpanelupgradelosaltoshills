import { Clock, DollarSign, PenTool, ShieldCheck, Zap, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Fast Local Service",
    description: "Cypress weather is unpredictable. We prioritize interlock installations so you're ready before the next storm system moves in.",
  },
  {
    icon: PenTool,
    title: "Mechanical Precision",
    description: "Every electrical panel is different. We stock interlocks for Square D, Eaton, Siemens, and GE panels for a perfect, safe fit.",
  },
  {
    icon: DollarSign,
    title: "Affordable Backup",
    description: "A standby generator costs $10k-$15k. Our interlock kits provide whole-home backup access for a tiny fraction of that cost.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Safety",
    description: "We verify that your panel is grounded and bonded correctly during every installation to ensure your generator runs safely.",
  },
  {
    icon: Zap,
    title: "Step-by-Step Training",
    description: "We don't just install it and leave. We walk you through the exact sequence of turning on your generator power safely.",
  },
  {
    icon: HeartHandshake,
    title: "Cypress Neighbors",
    description: "Our licensed electricians live and work in Cypress. We know the local codes and the importance of reliable backup power in Texas.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Cypress Strong
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Why Choose Cypress's
              <span className="text-gradient-copper block">Generator Connection Experts?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              In South Texas, power isn't just a luxury—it's safety. We specialize in making your existing portable generator a seamless whole-home power solution.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">850+</span>
                <span className="text-sm text-muted-foreground">Kits Installed</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">5.0</span>
                <span className="text-sm text-muted-foreground">Top Rated</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">24hr</span>
                <span className="text-sm text-muted-foreground">Storm Support</span>
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
