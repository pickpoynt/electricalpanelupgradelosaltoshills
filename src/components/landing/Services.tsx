import { ShieldAlert, Zap, Bell, ShieldCheck, ClipboardCheck, AlertTriangle } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Interconnected Wiring",
    description: "Multi-level hardwiring that links all alarms. When one triggers, every alarm in your home sounds simultaneously.",
    link: "#smoke-detector-info"
  },
  {
    icon: Bell,
    title: "CO Detector Install",
    description: "Critical Carbon Monoxide detection hardwiring for homes with gas heat, fireplaces, or attached garages.",
    link: "#smoke-detector-info"
  },
  {
    icon: ShieldAlert,
    title: "Dual-Sensor Alarms",
    description: "Installation of detectors using both ionization and photoelectric technology to identify all fire types.",
    link: "#smoke-detector-info"
  },
  {
    icon: ClipboardCheck,
    title: "Safety Audits",
    description: "Expert evaluation of your home to ensure detectors are placed in every required location for maximum safety.",
    link: "#smoke-detector-info"
  },
  {
    icon: ShieldCheck,
    title: "Battery Upgrades",
    description: "Replacing outdated units with modern, maintenance-free alarms featuring 10-year sealed lithium backups.",
    link: "#smoke-detector-info"
  },
  {
    icon: AlertTriangle,
    title: "Troubleshooting",
    description: "Expert diagnostics for chirping alarms, false triggers, and faulty hardwired circuits in your safety system.",
    link: "#smoke-detector-info"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Specialized Fire Safety Electrical Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Providing comprehensive life safety solutions for Signal Mountain residents through professional, interconnected smoke and CO alarm installations.
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
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                  <Icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
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
