import { AlertTriangle, Droplets, Clock, Shield, CheckCircle2 } from "lucide-react";

const warningSignsData = [
  {
    icon: Droplets,
    title: "Low Hot Water Pressure",
    description: "Minieral scale buildup inside the heat exchanger restricts water flow, leading to a noticeable drop in hot water pressure compared to cold.",
  },
  {
    icon: AlertTriangle,
    title: "Fluctuating Temperatures",
    description: "If your hot water 'cuts out' during a shower, scale may be interfering with the unit's thermal sensors or flow switches.",
  },
  {
    icon: Clock,
    title: "Overworked Burners",
    description: "Scale acts as an insulator. If your heater sounds louder than usual or takes longer to fire up, it's working too hard to penetrate the buildup.",
  },
];

const benefitsData = [
  "Restores original energy efficiency",
  "Ensures consistent hot water temperatures",
  "Prevents expensive heat exchanger failure",
  "Required for manufacturer warranty compliance",
  "Extends system lifespan by up to 10 years",
  "Clears annoying error codes (E5, LC, 12)",
];

const TanklessMaintenanceInfo = () => {
  return (
    <section id="maintenance-info" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
            Protect Your Investment
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Why Annual Tankless Descaling is Mandatory in Bellevue
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Washington's water contains minerals that solidify inside your heater's heat exchanger.
            Without an annual flush, this 'scale' will eventually cause your unit to overheat and fail.
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
                Don't Void Your Warranty
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Most major manufacturers like Navien and Rinnai explicitly state in their
              manuals that damage caused by scale buildup is NOT covered under warranty.
              Annual professional descaling provides the documentation you need to keep your 15-year warranty valid.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In Bellevue, we serve all areas from Enatai and Beaux Arts to Wilburton and
              Bridle Trails. We've seen hundreds of heaters fail prematurely simply because
              the homeowner didn't know maintenance was required.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
            <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
              Benefits of Professional Maintenance
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
              Is your unit displaying an 'LC' or 'E5' code? That's a scale warning. Call us for a priority Bellevue maintenance visit.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TanklessMaintenanceInfo;
