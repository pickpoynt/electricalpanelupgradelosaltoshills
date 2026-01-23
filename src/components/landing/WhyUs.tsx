import { Clock, DollarSign, PenTool, ShieldCheck, Zap, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "60-Min Response",
    description: "Burst pipes are life-critical for your home. We guarantee a rapid arrival in Josephine to begin extraction immediately.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed Technicians",
    description: "Our restoration crew is IICRC-certified and fully insured, ensuring the highest standards of structural recovery.",
  },
  {
    icon: PenTool,
    title: "Modern Equipment",
    description: "We use high-capacity LGR dehumidifiers and axial fans that are significantly faster than standard drying tools.",
  },
  {
    icon: DollarSign,
    title: "Insurance Assistance",
    description: "We help you document the damage for your insurance claim, providing moisture maps and detailed photo evidence.",
  },
  {
    icon: Zap,
    title: "24/7 Availability",
    description: "Disaster doesn't keep business hours. Our Josephine hotline is open 24/7, weekends and holidays included.",
  },
  {
    icon: HeartHandshake,
    title: "Josephine Local",
    description: "Proudly serving Josephine and Collin County. We know the local area and can respond faster than national chains.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Josephine's Trusted Recovery Team
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              The Professional Choice for
              <span className="text-gradient-copper block">Josephine Pipe Damage.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              A single broken pipe can release hundreds of gallons of water per hour. We provide the expertise and hardware to stabilize your home and restore it to its original condition.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">800+</span>
                <span className="text-sm text-muted-foreground">Pipes Repaired</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">4.9</span>
                <span className="text-sm text-muted-foreground">Customer Rating</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">24/7</span>
                <span className="text-sm text-muted-foreground">Expert Support</span>
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
