import { Clock, DollarSign, PenTool, ShieldCheck, Zap, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Instant Tarping",
    description: "During Westlake's storm season, speed is critical. We prioritize immediate roof protection to stop secondary water Damage.",
  },
  {
    icon: ShieldCheck,
    title: "IICRC Certified",
    description: "Our restoration specialists hold the highest industry certifications for water removal and structural drying.",
  },
  {
    icon: PenTool,
    title: "Precision Recovery",
    description: "We use thermal cameras to map water spread through ceilings and walls that isn't visible to the naked eye.",
  },
  {
    icon: DollarSign,
    title: "Direct Bill Insurance",
    description: "We document the entire restoration process for your insurance company to help you get the maximum claim payout.",
  },
  {
    icon: Zap,
    title: "24/7 Availability",
    description: "Roof leaks don't wait for business hours. Our Westlake dispatch is available 24/7 for emergency storm response.",
  },
  {
    icon: HeartHandshake,
    title: "Westlake Local",
    description: "We are proud members of the Westlake community. We understand Palm Beach County's unique climate and building codes.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Westlake's Roof Damage Experts
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              The Specialized Choice for
              <span className="text-gradient-copper block">Florida Storm Recovery.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Florida's tropical weather can turn a minor leak into a total property loss. Our team provides the specialized equipment and rapid response needed to save your home.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">1,500+</span>
                <span className="text-sm text-muted-foreground">Roof Leaks Mitigated</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">4.9</span>
                <span className="text-sm text-muted-foreground">Local Star Rating</span>
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
