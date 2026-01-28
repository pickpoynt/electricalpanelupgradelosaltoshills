import { Zap, Home, Shield, Settings, Landmark, AlertTriangle } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Knob & Tube Replacement",
    description: "Safe removal and replacement of dangerous knob-and-tube wiring systems found in pre-1950s Signal Mountain homes with modern, code-compliant circuits.",
    link: "#historic-rewiring-info"
  },
  {
    icon: AlertTriangle,
    title: "Cloth Wire Removal",
    description: "Expert removal of deteriorating cloth-wrapped wiring that poses fire hazards in vintage homes, replaced with safe modern Romex or conduit wiring.",
    link: "#historic-rewiring-info"
  },
  {
    icon: Shield,
    title: "Panel Box Upgrades",
    description: "Upgrading obsolete fuse boxes and small panels to modern 200-amp service panels to safely handle today's electrical demands in your historic home.",
    link: "#historic-rewiring-info"
  },
  {
    icon: Home,
    title: "Hidden Wire Runs",
    description: "Discreet installation of new wiring through walls, ceilings, and floors without damaging original plaster, woodwork, or architectural details.",
    link: "#historic-rewiring-info"
  },
  {
    icon: Landmark,
    title: "Heritage Preservation",
    description: "Specialized techniques to preserve the character and value of your historic Signal Mountain home while bringing electrical systems up to code.",
    link: "#historic-rewiring-info"
  },
  {
    icon: Settings,
    title: "Grounding & Bonding",
    description: "Installing proper grounding systems in older homes that lack modern safety features, protecting your family and vintage electronics from electrical faults.",
    link: "#historic-rewiring-info"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Specialized Historic Home Electrical Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Expert electrical rewiring solutions designed specifically for Signal Mountain's historic and vintage homes. We combine modern safety standards with preservation-minded craftsmanship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block h-full pointer-events-none"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-600 transition-colors">
                  <Icon className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
