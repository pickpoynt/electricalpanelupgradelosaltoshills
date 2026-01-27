import { Search, Zap, ShieldCheck, Settings, AlertTriangle, Home } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Wiring Inspections",
    description: "In-depth identification and mapping of active knob and tube wiring throughout your historic property.",
    link: "#knob-tube-info"
  },
  {
    icon: Zap,
    title: "Full House Rewiring",
    description: "Complete replacement of old cloth-wrapped wires with modern, grounded copper electrical systems.",
    link: "#knob-tube-info"
  },
  {
    icon: ShieldCheck,
    title: "Insurance Certification",
    description: "Detailed safety reports that help satisfy insurance requirements and secure your home coverage.",
    link: "#knob-tube-info"
  },
  {
    icon: Settings,
    title: "Panel Modernization",
    description: "Upgrading outdated fuse boxes and small panels to high-capacity breaker systems for modern safety.",
    link: "#knob-tube-info"
  },
  {
    icon: AlertTriangle,
    title: "Circuit Protection",
    description: "Installation of Arc-Fault (AFCI) and Ground-Fault (GFCI) protection to prevent electrical fires.",
    link: "#knob-tube-info"
  },
  {
    icon: Home,
    title: "Historic Preservation",
    description: "Specialized fishing techniques to rewire through walls with zero or minimal damage to plaster.",
    link: "#knob-tube-info"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Specialized Historic Electrical Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Providing the technical expertise needed to safely modernize the electrical systems of Signal Mountain's most treasured historic homes.
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

