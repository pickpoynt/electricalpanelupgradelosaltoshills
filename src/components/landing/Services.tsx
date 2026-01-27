import { Flame, Zap, ShieldCheck, Thermometer, Sun, Settings } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Thermostat Repair",
    description: "Expert troubleshooting and replacement of manual and digital thermostats for all floor heating brands.",
    link: "#heated-floor-info"
  },
  {
    icon: Zap,
    title: "Cable Fault Locating",
    description: "Precise identification of underground cable breaks using advanced resistance testing and thermal imaging.",
    link: "#heated-floor-info"
  },
  {
    icon: ShieldCheck,
    title: "GFCI & Safety Repair",
    description: "Resolving nuisance tripping issues and ensuring your heated floor meets all electrical safety codes.",
    link: "#heated-floor-info"
  },
  {
    icon: Thermometer,
    title: "Smart Sync Integration",
    description: "Upgrading your floor heating controls to Wi-Fi enabled smart systems for mobile app control.",
    link: "#heated-floor-info"
  },
  {
    icon: ShieldCheck, // Using ShieldCheck for sensor as well
    title: "Floor Sensor Service",
    description: "Testing and replacing embedded floor temperature sensors to restore accurate climate control.",
    link: "#heated-floor-info"
  },
  {
    icon: Sun,
    title: "Energy Optimization",
    description: "Calibrating systems for maximum efficiency to reduce electricity costs without sacrificing comfort.",
    link: "#heated-floor-info"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Expert Heated Floor Electrical Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Providing specialized electrical diagnostics and repairs to keep your Fair Haven home's radiant heating system running perfectly.
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

