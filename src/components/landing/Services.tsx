import { Zap, Anchor, Lightbulb, ShieldAlert, Settings, Ruler } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Motor Wiring & Repair",
    description: "Professional wiring for lift motors, gear units, and limit switches to ensure smooth operation.",
    link: "#"
  },
  {
    icon: Zap,
    title: "Remote Control Systems",
    description: "Installation and programming of wireless remote systems for convenient lift operation from your boat.",
    link: "#"
  },
  {
    icon: Lightbulb,
    title: "Dock & Pier Lighting",
    description: "Custom marine-grade lighting solutions for safety and ambiance on your dock and walkways.",
    link: "#"
  },
  {
    icon: ShieldAlert,
    title: "GFCI & Safety Protection",
    description: "Essential marine circuit protection to prevent electrical hazards in wet environments.",
    link: "#"
  },
  {
    icon: Anchor,
    title: "Panel & Breaker Upgrades",
    description: "Marine-rated electrical panel installations designed to withstand the salt air and humidity.",
    link: "#"
  },
  {
    icon: Ruler,
    title: "Maintenance Inspections",
    description: "Comprehensive electrical safety audits for boat lifts and dock wiring systems.",
    link: "#"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Boat Lift Electrical Services in Fair Haven
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Specialized marine electrical solutions to keep your boat lift operating safely and reliably in Fair Haven's coastal environment.
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
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
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

