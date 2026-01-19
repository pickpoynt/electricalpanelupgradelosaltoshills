import { AlertTriangle, Clock, Shield, CheckCircle2, ZapOff } from "lucide-react";

const warningSignsData = [
  {
    icon: ZapOff,
    title: "Old Porcelain Knobs",
    description: "Visible porcelain knobs and tubes in your attic or basement indicate an outdated system that was never designed for modern electrical loads.",
  },
  {
    icon: AlertTriangle,
    title: "Brittle Cloth Insulation",
    description: "Cloth insulation on old wiring becomes extremely brittle over time, often crumbling when touched and exposing live wires.",
  },
  {
    icon: Clock,
    title: "Flickering Lights",
    description: "Flickering lights or warm outlets are early warning signs that your historic wiring is struggling to keep up with current demands.",
  },
];

const benefitsData = [
  "Ensures full home insurance eligibility",
  "Eliminates fire hazards from brittle wiring",
  "Adds modern grounded outlets (3-prong)",
  "Increases electrical capacity for appliances",
  "Protects sensitive modern electronics",
  "Preserves Savannah's historic architecture",
];

const WiringInfo = () => {
  return (
    <section id="wiring-info" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
            Safety & Heritage
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Expert Electrical Modernization for Savannah's Historic Homes
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Knob and tube wiring was state-of-the-art in 1920, but today it represents a
            significant fire risk. We provide expert, minimally invasive replacement services.
          </p>
        </div>

        {/* Warning Signs */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {warningSignsData.map((sign, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-lg border border-border hover:border-copper/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                <sign.icon className="w-7 h-7 text-copper" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {sign.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {sign.description}
              </p>
            </div>
          ))}
        </div>

        {/* Two Column Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-xl border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-copper" />
              <h3 className="text-2xl font-heading font-bold text-foreground">
                Preserving Plaster & Woodwork
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We understand that the beauty of a Savannah home lies in its original details.
              Our electricians use specialized tools to 'fish' new wires through existing
              wall cavities, avoiding the need to tear down historic lath and plaster.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From the Landmark Historic District to Ardsley Park and Isle of Hope, we have
              centuries of combined experience working specifically with Savannah's unique
              architectural challenges.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
            <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
              Why Replace Your Wiring?
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
            <AlertTriangle className="w-6 h-6 text-copper" />
            <span className="text-primary-foreground font-medium text-lg">
              Planning home renovations or buying a historic property? Call us at +18449012684 for a safety inspection.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WiringInfo;
