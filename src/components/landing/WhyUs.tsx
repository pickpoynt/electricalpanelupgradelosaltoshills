import { Clock, DollarSign, PenTool, ShieldCheck, Zap, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Fast Response",
    description: "Flood emergencies require immediate action. We prioritize Iowa Colony calls to begin water extraction within 60 minutes.",
  },
  {
    icon: PenTool,
    title: "Advanced Drying",
    description: "We use industrial-grade air movers and dehumidifiers to ensure every corner of your property is thoroughly dried.",
  },
  {
    icon: DollarSign,
    title: "Insurance Direct",
    description: "We work directly with your insurance provider to streamline the claims process and document all damages for you.",
  },
  {
    icon: ShieldCheck,
    title: "IICRC Certified",
    description: "Our restoration specialists are IICRC certified, ensuring your home is restored to the highest industry standards.",
  },
  {
    icon: Zap,
    title: "Thermal Imaging",
    description: "We use infrared cameras to detect hidden moisture behind walls and under floors that traditional methods miss.",
  },
  {
    icon: HeartHandshake,
    title: "Iowa Colony Local",
    description: "We are proud to serve the Iowa Colony community. We understand the specific flooding risks in Brazoria County.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Iowa Colony's Restoration Pros
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              The Expert Choice for
              <span className="text-gradient-copper block">Emergency Flood Recovery.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Flood damage can escalate quickly, leading to structural rot and mold growth. Our team provides the speed and specialized equipment needed to save your home.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">500+</span>
                <span className="text-sm text-muted-foreground">Homes Restored</span>
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
