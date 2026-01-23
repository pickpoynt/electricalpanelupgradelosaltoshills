import { Clock, ShieldCheck, Zap, Sparkles, Smile, MapPin, Droplets } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "IICRC Certified",
    description: "Our Hudson team holds professional certifications in water damage restoration and follows strict industry standards for drywall repair.",
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description: "Water damage gets worse by the hour. We arrive fast to extract water and begin the drying process before mold takes hold.",
  },
  {
    icon: Droplets,
    title: "Moisture Detection",
    description: "We use thermal imaging cameras to find hidden moisture pockets behind walls that standard inspections miss.",
  },
  {
    icon: Clock,
    title: "Insurance Experts",
    description: "We work directly with Wisconsin insurance adjusters and provide detailed documentation to streamline your claim process.",
  },
  {
    icon: MapPin,
    title: "Hudson Local",
    description: "We're local to St. Croix County and understand the specific water damage challenges facing Hudson and River Falls homeowners.",
  },
  {
    icon: Smile,
    title: "Seamless Finish",
    description: "Our craftsmen ensure perfect texture matching and professional painting so you can't tell where the repair was made.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Hudson's Trusted Restoration Team
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Why Homeowners Choose
              <span className="text-gradient-copper block">Hudson Drywall Pros.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Water-damaged drywall can lead to mold, structural issues, and decreased home value. We provide the expertise and equipment to restore your walls completely and prevent future problems.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">1,200+</span>
                <span className="text-sm text-muted-foreground">Walls Restored</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">A+</span>
                <span className="text-sm text-muted-foreground">BBB Rating</span>
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
