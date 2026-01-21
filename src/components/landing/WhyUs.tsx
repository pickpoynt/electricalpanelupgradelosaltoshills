import { Flame, Sun, ShieldCheck, Thermometer, Zap, Award } from "lucide-react";

const reasons = [
  {
    icon: Flame,
    title: "Beat the Heat",
    description: "Attic temperatures in Tempe can reach 160°F. A working fan brings this down significantly, taking the load off your AC unit.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed Pros",
    description: "We are licensed, bonded, and insured Arizona electricians. We don't cut corners with wiring or roof penetrations.",
  },
  {
    icon: Sun,
    title: "Solar Experts",
    description: "We specialize in modern solar gable and roof-mounted fans. Reduce your carbon footprint while cooling your home.",
  },
  {
    icon: Thermometer,
    title: "Thermostat Tuning",
    description: "We calibrate your fan's thermostat to ensure it only runs when necessary, saving you money on electricity and wear-and-tear.",
  },
  {
    icon: Zap,
    title: "Wiring Safety",
    description: "Old attic wiring can be a fire hazard. We inspect all connections and replace brittle wire nuts or frayed insulation during our visit.",
  },
  {
    icon: Award,
    title: "Top Rated",
    description: "Servicing the East Valley for over 15 years with hundreds of 5-star reviews from satisfied homeowners.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Local Arizona Experts
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Why Trust Us with Your
              <span className="text-gradient-copper block">Attic Ventilation?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Your attic is the hottest part of your home. If your fan fails,
              that heat radiates down into your living space. We provide fast,
              reliable repairs to keep your home comfortable.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">15+</span>
                <span className="text-sm text-muted-foreground">Years Exp</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">2k+</span>
                <span className="text-sm text-muted-foreground">Fans Fixed</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">100%</span>
                <span className="text-sm text-muted-foreground">Guarantee</span>
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
