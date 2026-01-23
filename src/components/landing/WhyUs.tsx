import { Clock, ShieldCheck, Zap, Sparkles, Smile, MapPin, Droplets } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Certified Specialists",
    description: "Our Josephine team is certified in mold remediation (MRAC) and follows strict EPA and IICRC guidelines.",
  },
  {
    icon: Zap,
    title: "HEPA Filtration",
    description: "We use laboratory-grade air scrubbers to ensure that mold spores are captured and removed, not just recirculated.",
  },
  {
    icon: Clock,
    title: "Rapid Response",
    description: "Mold spreads fast in the Texas heat. We arrive quickly to contain the situation and prevent further contamination.",
  },
  {
    icon: Droplets,
    title: "Source Identification",
    description: "We don't just clean the mold; we find why it started—whether it's a roof leak, AC condensation, or poor ventilation.",
  },
  {
    icon: MapPin,
    title: "Josephine Local",
    description: "We are local to Collin and Hunt Counties and understand the specific humidity challenges facing Josephine homeowners.",
  },
  {
    icon: Smile,
    title: "Family Safe Process",
    description: "We use children and pet-friendly antimicrobial treatments that effectively kill mold without harsh chemical residues.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Josephine's Trusted Mold Experts
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Why Homeowners Trust
              <span className="text-gradient-copper block">Josephine Mold Pros.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Attic mold can lower your property value and threaten your health. We provide the expertise and specialized hardware to permanently eliminate mold and restore your attic's environment.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">800+</span>
                <span className="text-sm text-muted-foreground">Remediations</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">5.0</span>
                <span className="text-sm text-muted-foreground">Star Rating</span>
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
