import { Flame, Zap, ShieldCheck, Thermometer, Sun, Settings } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Dedicated 240V Circuits",
    description: "Installation of heavy-duty dedicated circuits and breakers for safe high-wattage heater operation.",
    link: "#"
  },
  {
    icon: Flame,
    title: "Infrared Heater Mounts",
    description: "Professional recessed or surface mounting of premium infrared heaters with core-drilled wiring.",
    link: "#"
  },
  {
    icon: Settings,
    title: "Variable Heat Controls",
    description: "Installation of analog or digital regulators to precisely control the heat output of your patio heaters.",
    link: "#"
  },
  {
    icon: Thermometer,
    title: "Smart Sync Integration",
    description: "Connect your patio heating system to your home automation for effortless temperature control.",
    link: "#"
  },
  {
    icon: ShieldCheck,
    title: "Safety Clearance Audits",
    description: "Ensuring all heaters are installed with necessary clearances from combustible materials and pergolas.",
    link: "#"
  },
  {
    icon: Sun,
    title: "All-Season Power Hubs",
    description: "Installation of weatherproof outdoor power pedestals for additional patio comfort appliances.",
    link: "#"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Expert Patio Heater Electrical Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Providing the specialized electrical infrastructure needed to turn your Fair Haven patio into a year-round outdoor sanctuary.
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
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
                  <Icon className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
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

