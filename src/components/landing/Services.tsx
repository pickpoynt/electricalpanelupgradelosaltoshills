import { Fan, Droplets, Wind, Settings, ThermometerSun, Wrench } from "lucide-react";

const services = [
  {
    icon: Fan,
    title: "Exhaust Fan Installation",
    description: "Professional installation of bathroom exhaust fans with proper venting to the exterior, eliminating moisture buildup and preventing mold growth in your Cave Springs home.",
    link: "#exhaust-fan-info"
  },
  {
    icon: Droplets,
    title: "Humidity-Sensing Fans",
    description: "Smart exhaust fans that automatically activate when humidity rises above set levels, providing hands-free moisture control perfect for Arkansas's humid climate.",
    link: "#exhaust-fan-info"
  },
  {
    icon: Wind,
    title: "Ductwork Installation",
    description: "Proper duct routing and installation to ensure your exhaust fan efficiently moves moist air outside, not into your attic where it can cause damage.",
    link: "#exhaust-fan-info"
  },
  {
    icon: Settings,
    title: "Fan Replacement & Upgrade",
    description: "Upgrading old, noisy, or inefficient bathroom fans to modern whisper-quiet models with better CFM ratings and energy-efficient motors.",
    link: "#exhaust-fan-info"
  },
  {
    icon: ThermometerSun,
    title: "Fan/Light Combos",
    description: "Installation of combination units featuring exhaust fans with integrated LED lighting, heaters, or nightlights for maximum bathroom functionality.",
    link: "#exhaust-fan-info"
  },
  {
    icon: Wrench,
    title: "Ventilation Repairs",
    description: "Diagnosing and fixing exhaust fan issues including motor problems, backdraft dampers, electrical connections, and improper venting that reduces efficiency.",
    link: "#exhaust-fan-info"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Complete Bathroom Ventilation Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional exhaust fan installation and ventilation solutions for Cave Springs and Northwest Arkansas homeowners. We help you breathe easier and protect your home from moisture damage.
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
                <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-4 group-hover:bg-cyan-600 transition-colors">
                  <Icon className="w-6 h-6 text-cyan-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
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
