import { Shield, Zap, DollarSign, Clock, ThumbsUp, Hammer } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Insurance Compliance",
    description: "Most insurance companies will not cover homes with active knob and tube wiring. We provide the certification you need.",
  },
  {
    icon: Zap,
    title: "Fire Hazard Prevention",
    description: "Old cotton insulation becomes brittle and flammable over time. Modern copper wiring eliminates this major fire risk.",
  },
  {
    icon: DollarSign,
    title: "Home Value Boost",
    description: "Full electrical modernization significantly increases the resale value and marketability of your historic Savannah home.",
  },
  {
    icon: Clock,
    title: "Fast Project Completion",
    description: "We use specialized techniques to rewire historic homes with minimal wall damage and rapid turnaround times.",
  },
  {
    icon: ThumbsUp,
    title: "Licensed & Master Electricians",
    description: "Our team consists of Master Electricians who specialize specifically in historic preservation and modern electrical codes.",
  },
  {
    icon: Hammer,
    title: "Minimal Invasive Methods",
    description: "We take pride in our 'fishing' techniques that allow us to run new wires through existing cavities without tearing down plaster.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Preserving History
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Savannah's Premier
              <span className="text-gradient-copper block">Historic Rewiring Team</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Savannah's historic charm shouldn't come with electrical risks. We specialize
              in the delicate art of modernizing electrical systems in 100+ year old homes,
              ensuring safety while respecting the architectural integrity of your property.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">2,000+</span>
                <span className="text-sm text-muted-foreground">Homes Rewired</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">15+</span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">100%</span>
                <span className="text-sm text-muted-foreground">Inspection Pass Rate</span>
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
