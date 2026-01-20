import { DollarSign, Shield, Home, Ruler, BadgeCheck, Wrench } from "lucide-react";

const reasons = [
  {
    icon: DollarSign,
    title: "Prevent Costly Repairs",
    description: "Without a cleanout, clearing clogs requires cutting into walls or floors. A $500 cleanout saves you $3,000+ in future emergency repairs.",
  },
  {
    icon: Shield,
    title: "Code Compliant",
    description: "We install cleanouts that meet current Plano plumbing codes, including proper depth, location, and cap specifications.",
  },
  {
    icon: Home,
    title: "Preserve Your Home",
    description: "Exterior cleanouts mean plumbers never need to enter your house to clear main line clogs. Protect your floors and landscaping.",
  },
  {
    icon: Ruler,
    title: "Strategic Placement",
    description: "We locate cleanouts at optimal access points—near property lines, at direction changes, and before the city connection.",
  },
  {
    icon: BadgeCheck,
    title: "Licensed & Insured",
    description: "All work performed by Texas-licensed master plumbers. We pull permits and schedule inspections when required.",
  },
  {
    icon: Wrench,
    title: "Quality Materials",
    description: "We use schedule 40 PVC or ABS with commercial-grade caps that won't crack, corrode, or leak over time.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Why Install a Cleanout?
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Plano's Choice for
              <span className="text-gradient-copper block">Sewer Access Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Many older Plano homes don't have exterior cleanouts. When main line clogs happen,
              plumbers have to access your sewer through toilets or cut into your foundation. Installing
              a cleanout now is a smart investment.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">300+</span>
                <span className="text-sm text-muted-foreground">Cleanouts Installed</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">100%</span>
                <span className="text-sm text-muted-foreground">Code Pass Rate</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">5★</span>
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
