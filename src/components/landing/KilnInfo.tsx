import { Zap, Construction, AlertTriangle, PlayCircle, CircuitBoard, ThermometerSun } from "lucide-react";

const infoData = [
  {
    icon: Zap,
    title: "Understanding Voltage",
    description: "Most home kilns require 240V, while some smaller ones run on 120V. We identify exactly what your studio has and what it needs to match your specific kiln model.",
  },
  {
    icon: Construction,
    title: "Circuit Breaker Sizing",
    description: "A kiln must run on a circuit breaker rated for 125% of its continuous amperage. We install the correct industrial-grade breakers to prevent nuisance tripping.",
  },
  {
    icon: ThermometerSun,
    title: "Heat Management",
    description: "Kilns get hot! We advise on placement and install active ventilation to keep your control board cool and extend the life of your equipment's electronics.",
  },
];

const benefitsData = [
  "Prevents electrical fires in home studios",
  "Ensures consistent firing results",
  "Protects expensive digital controllers",
  "Complies with manufacturer warranties",
  "Passes home insurance inspections",
  "Supports high-fire (Cone 10) schedules",
];

const KilnInfo = () => {
  return (
    <section id="kiln-info" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
            Technical Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Critical Considerations for Your Studio Wiring
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Plugging a kiln into a dryer outlet isn't always safe. We analyze amperage,
            voltage drop, and wire gauge to create a dedicated system that handles
            long, high-heat firings safely.
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
              <CircuitBoard className="w-8 h-8 text-copper" />
              <h3 className="text-2xl font-heading font-bold text-foreground">
                Our Installation Process
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We start by inspecting your main panel to ensure it has capacity.
              Then, we run hard conduit or NM-B wire to your desired kiln location,
              installing a high-heat receptacle or hardwire junction box.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Serving Asheville, Black Mountain, Weaverville, and Hendersonville,
              we are the go-to electricians for the River Arts District and home potters alike.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
            <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
              Why Professional Install Matters
            </h3>
            <ul className="space-y-4">
              {benefitsData.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <PlayCircle className="w-6 h-6 text-copper flex-shrink-0 mt-0.5" />
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
              Don't DIY high voltage. Call the experts at (844) 901-2684.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KilnInfo;
