import { Smartphone, Lightbulb, ShieldCheck, Settings, Cpu, Layers } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Full App Integration",
    description: "Connect your entire lighting system to your smartphone for remote access and real-time control from anywhere.",
    link: "#smart-switch-info"
  },
  {
    icon: Lightbulb,
    title: "Custom Dimmer Setup",
    description: "Installation of high-quality smart dimmers for perfect ambiance and significant energy savings.",
    link: "#smart-switch-info"
  },
  {
    icon: ShieldCheck,
    title: "Historic Retrofits",
    description: "Expert installation of smart switches in historic Signal Mountain homes without standard neutral wiring.",
    link: "#smart-switch-info"
  },
  {
    icon: Settings,
    title: "Automated Scheduling",
    description: "Program logic-based schedules so your lights turn on at sunset or mimic occupancy for home security.",
    link: "#smart-switch-info"
  },
  {
    icon: Layers,
    title: "Multi-Way Automation",
    description: "Sophisticated 3-way and 4-way switch automation for hallways, staircases, and large living spaces.",
    link: "#smart-switch-info"
  },
  {
    icon: Cpu,
    title: "Hub & Voice Setup",
    description: "Seamless pairing with Alexa, Google Home, or Apple HomeKit for effortless voice-activated lighting.",
    link: "#smart-switch-info"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Specialized Smart Lighting Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Bringing the latest in intelligent home control to Signal Mountain with professional, code-compliant, and seamless smart switch installations.
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
                <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
                  <Icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
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
