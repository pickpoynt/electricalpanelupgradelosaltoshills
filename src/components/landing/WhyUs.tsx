import { Flame, Zap, VolumeX, ShieldCheck, Smartphone, CheckCircle } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "100% Efficient",
    description: "Electric resistance heating is 100% efficient at converting electricity to heat. No duct loss, no wasted energy.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Operations",
    description: "Modern baseboards have thermal cutoffs and lower surface temperatures, making them safer for homes with kids and pets.",
  },
  {
    icon: VolumeX,
    title: "Whisper Quiet",
    description: "Unlike forced air systems, baseboard heaters operate silently. No whooshing vents or rattling ductwork.",
  },
  {
    icon: Smartphone,
    title: "Smart Control",
    description: "We install thermostats that integrate with Alexa, Google Home, and Apple HomeKit for ultimate convenience.",
  },
  {
    icon: Flame,
    title: "Zonal Comfort",
    description: "Keep your bedroom at 68° and your living room at 72°. Stop paying to heat empty rooms.",
  },
  {
    icon: CheckCircle,
    title: "5-Year Warranty",
    description: "We stand behind our installations with a solid labor warranty on top of the manufacturer's product warranty.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Why Choose Electric Heat?
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Modern Comfort for
              <span className="text-gradient-copper block">Seattle Homes</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Seattle's mild climate is perfect for zonal electric heating. It offers precise control,
              lower installation costs than heat pumps, and unbeatable reliability.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">1k+</span>
                <span className="text-sm text-muted-foreground">Heaters Installed</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">10+</span>
                <span className="text-sm text-muted-foreground">Years Exp</span>
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
