import { Shield, Users, ThumbsUp, Clock, DollarSign, Hammer } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Bellevue Neighborhood Pros",
    description: "Serving West Bellevue, Somerset, and Crossroads with local, expert care.",
  },
  {
    icon: Shield,
    title: "Warranty Protection",
    description: "Regular descaling is required by most manufacturers to keep your warranty valid.",
  },
  {
    icon: DollarSign,
    title: "Protect Your Investment",
    description: "Annual maintenance can double the lifespan of your expensive tankless unit.",
  },
  {
    icon: Clock,
    title: "Fast 1-Hour Service",
    description: "Most descaling and maintenance visits are completed in under 60 minutes.",
  },
  {
    icon: ThumbsUp,
    title: "All Brands Serviced",
    description: "Certified expertise with Navien, Rinnai, Noritz, and Rheem systems.",
  },
  {
    icon: Hammer,
    title: "Professional Chemicals",
    description: "We use eco-friendly, food-grade descaling solutions that are safe for your pipes.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Bellevue's Most Reliable
              <span className="text-gradient-copper block">Tankless Maintenance Team</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We specialize exclusively in tankless technology. While general plumbers might say
              they 'do it all,' we focus on the complex electronics and heat exchangers of
              modern high-efficiency heaters.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">2,000+</span>
                <span className="text-sm text-muted-foreground">Units Served</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">15+</span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
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
