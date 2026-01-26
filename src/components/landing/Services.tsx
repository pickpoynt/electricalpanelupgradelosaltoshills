import { Wrench, Zap, Lightbulb, ShieldCheck, Sun, Search } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Wire Locating & Repair",
    description: "Finding and fixing underground cable breaks or shorts without disruptive digging.",
    link: "#"
  },
  {
    icon: Zap,
    title: "Transformer Troubleshooting",
    description: "Repairing or replacing faulty transformers and upgrading to smart timers.",
    link: "#"
  },
  {
    icon: Lightbulb,
    title: "LED Conversion Kits",
    description: "Updating your old halogen fixtures to energy-efficient, long-lasting LED technology.",
    link: "#"
  },
  {
    icon: Wrench,
    title: "Fixture Restoration",
    description: "Cleaning and repairing high-quality brass or copper fixtures to look and work like new.",
    link: "#"
  },
  {
    icon: ShieldCheck,
    title: "Annual Maintenance",
    description: "Proactive cleaning, lens polishing, and ground-fault safety inspections.",
    link: "#"
  },
  {
    icon: Sun,
    title: "System Expansion",
    description: "Adding new lights or relocating existing ones to better illuminate your growing landscape.",
    link: "#"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Specialized Landscape Lighting Repairs in Fair Haven
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional troubleshooting and restoration services to keep your garden illuminated and your property secure.
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
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                  <Icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-2 group-hover:text-green-600 transition-colors">
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

