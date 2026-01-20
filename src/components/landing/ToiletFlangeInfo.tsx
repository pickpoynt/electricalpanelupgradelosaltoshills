import { Wrench, Layers, Droplets, Shield, CheckCircle2, Ruler } from "lucide-react";

const infoData = [
  {
    icon: Wrench,
    title: "Broken Flange Fix",
    description: "Whether it's cracked PVC or rusted cast iron, we use heavy-duty repair rings to restore the connection without always needing to cut into the main pipe.",
  },
  {
    icon: Layers,
    title: "Height Adjustment",
    description: "If you've recently added new tile, your flange might be too low. We install precision spacers to ensure a perfect seal with your new floor height.",
  },
  {
    icon: Droplets,
    title: "Seal Replacement",
    description: "Standard wax rings often fail over time. We use reinforced, non-leak rubber seals that maintain their integrity even if the toilet slightly shifts.",
  },
];

const benefitsData = [
  "Prevents hidden leaks that rot subfloors",
  "Eliminates embarrassing sewage odors",
  "Secures wobbly toilets to prevent flange stress",
  "Protects your bathroom ceiling from water damage",
  "Stainless steel components prevent future rust",
  "Professional leveling for maximum user comfort",
];

const ToiletFlangeInfo = () => {
  return (
    <section id="toilet-info" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
            Bathroom Protection
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Why Tallahassee Homeowners Choose Our Flange Repairs
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            A small leak under your toilet can go unnoticed for months, causing
            thousands in structural damage. We specialize in proactive repairs
            that secure your fixture and protect your home's foundation.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {infoData.map((info, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-lg border border-border hover:border-copper/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                <info.icon className="w-7 h-7 text-copper" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {info.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {info.description}
              </p>
            </div>
          ))}
        </div>

        {/* Two Column Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-xl border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Ruler className="w-8 h-8 text-copper" />
              <h3 className="text-2xl font-heading font-bold text-foreground">
                Precision Floor Integration
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our Tallahassee plumbing experts don't just 'bolt it down'. We analyze
              the relationship between your toilet, the flange, and the floor level.
              We ensure your flange is set at the ideal height for a permanent,
              air-tight seal.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Serving all of Tallahassee, from Killearn to Southwood and Midtown,
              we bring expert-level craftsmanship to every bathroom repair.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
            <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
              The Repair Advantage
            </h3>
            <ul className="space-y-4">
              {benefitsData.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-copper flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/90 text-lg">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-8 py-4">
            <Shield className="w-6 h-6 text-copper" />
            <span className="text-primary-foreground font-medium text-lg">
              Stop the wobble before it becomes a flood. Call (877) 792-1410 for a professional inspection.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToiletFlangeInfo;
