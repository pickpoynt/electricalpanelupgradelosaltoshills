import { Clock, ShieldCheck, Heart, UserCheck, Zap, Home } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Compassionate Approach",
    description: "We understand the sensitivity of hoarding situations and work with families to ensure a respectful and safe restoration process.",
  },
  {
    icon: ShieldCheck,
    title: "Bio-Safety Certified",
    description: "Our Montana crew is fully certified in biohazard management and the safe handling of contaminated water and surfaces.",
  },
  {
    icon: Clock,
    title: "24/7 Rapid Response",
    description: "Water damage in hoarding homes needs immediate containment. We respond 24/7 throughout Gallatin County.",
  },
  {
    icon: Home,
    title: "Full Property Triage",
    description: "We don't just extract water; we assess the entire property for safety, structural integrity, and bio-contamination.",
  },
  {
    icon: UserCheck,
    title: "Expert Coordination",
    description: "We work directly with case managers, family members, and insurance adjusters to simplify a complicated situation.",
  },
  {
    icon: Zap,
    title: "Deep Sanitization",
    description: "Our industrial-strength cleaning protocols go beyond standard water damage to ensure a truly safe living environment.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Montana's Specialized Recovery Team
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              The Professional Choice for
              <span className="text-gradient-copper block">Complex Bozeman Emergencies.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Bozeman winters and spring runoff can cause unique water damage. When combined with a hoarding situation, you need a team that understands biohazard risks and content management.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">12+</span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">500+</span>
                <span className="text-sm text-muted-foreground">Homes Restored</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">24/7</span>
                <span className="text-sm text-muted-foreground">Expert Dispatch</span>
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
