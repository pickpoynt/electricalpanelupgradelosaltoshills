import { Clock, DollarSign, PenTool, ShieldCheck, Zap, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Late Night Response",
    description: "Plumbing emergencies don't wait for business hours. We prioritize late-night Westfield calls to prevent morning flooding.",
  },
  {
    icon: PenTool,
    title: "Frost-Proof Specialists",
    description: "We install the highest grade frost-proof hose bibs, ensuring your outdoor plumbing can survive Indiana's coldest nights.",
  },
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    description: "No hidden fees, even for late-night service. We provide clear, honest estimates before any repair work begins.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Our plumbing technicians are fully licensed and insured, giving you peace of mind that your home is in expert hands.",
  },
  {
    icon: Zap,
    title: "Rapid Part Stocking",
    description: "Our service vans are fully stocked with various hose bib brands and sizes, allowing us to finish most repairs in one visit.",
  },
  {
    icon: HeartHandshake,
    title: "Westfield Local",
    description: "We are proud to serve the Westfield community. We understand the specific soil and climate challenges of Hamilton County.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Westfield's Trusted Plumbers
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              The Professional Choice for
              <span className="text-gradient-copper block">Emergency Faucet Repair.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              A leaking outdoor faucet can cause thousands in water damage and foundation issues. We provide the expertise and speed to resolve it instantly.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">1,200+</span>
                <span className="text-sm text-muted-foreground">Faucets Replaced</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">4.9</span>
                <span className="text-sm text-muted-foreground">Star Local Rating</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">24/7</span>
                <span className="text-sm text-muted-foreground">Emergency Support</span>
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


