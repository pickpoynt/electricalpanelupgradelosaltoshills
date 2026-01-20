import { Recycle, Droplets, TreeDeciduous, Shield, CheckCircle2, Waves } from "lucide-react";

const infoData = [
  {
    icon: Recycle,
    title: "How It Works",
    description: "Greywater is gently used water from bathroom sinks, showers, tubs, and washing machines. Instead of sending it to the sewer, we divert it to your landscape.",
  },
  {
    icon: TreeDeciduous,
    title: "Landscape Benefits",
    description: "Your fruit trees, shrubs, and ornamental plants thrive on greywater. It's often free of the salts found in tap water and contains trace nutrients.",
  },
  {
    icon: Shield,
    title: "Safe & Compliant",
    description: "Our systems are fully enclosed and follow Arizona Department of Environmental Quality (ADEQ) guidelines to ensure safety for your family and pets.",
  },
];

const benefitsData = [
  "Reduces potable water use by up to 40%",
  "Extends the life of your septic system",
  "Connects your home to the natural water cycle",
  "Low energy consumption (often gravity-fed)",
  "Increases property value with green tech",
  "Supported by local conservation rebates",
];

const GreywaterInfo = () => {
  return (
    <section id="greywater-info" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
            Water Wisdom
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Why Tempe Homeowners Are Switching to Greywater
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            In our arid climate, wasting water is not an option. Greywater recycling
            is the most effective way to maintain a lush, cooling landscape without
            draining our reservoirs or your bank account.
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
              <Waves className="w-8 h-8 text-copper" />
              <h3 className="text-2xl font-heading font-bold text-foreground">
                The Installation Process
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We start with a site audit to identify your greywater sources and
              irrigation zones. Then, we install a diverter valve, a dedicated
              pipe network, and specialized mulch basins or emitters.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Serving Tempe, Scottsdale, Mesa, and the East Valley, we ensure
              every installation meets the highest standards of efficiency and aesthetics.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
            <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
              System Advantages
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
            <Droplets className="w-6 h-6 text-copper" />
            <span className="text-primary-foreground font-medium text-lg">
              Authorized installer for Tempe water rebates. Call (877) 792-1410 today.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreywaterInfo;
