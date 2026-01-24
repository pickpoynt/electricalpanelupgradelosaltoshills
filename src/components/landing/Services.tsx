import { CloudRain, Waves, Heater, Droplets, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Waves,
    title: "Storm Surge Cleanup",
    description: "Emergency extraction and drying for homes affected by hurricane storm surge.",
    link: "/storm-surge-water-damage-cleanup"
  },
  {
    icon: Droplets,
    title: "Dishwasher Leak Cleanup",
    description: "Repairing water damage from failed kitchen appliances and supply lines.",
    link: "/dishwasher-leak-water-damage-cleanup"
  },
  {
    icon: Heater,
    title: "Water Heater Leak Cleanup",
    description: "Flood cleanup for ruptured water heater tanks and utility rooms.",
    link: "/water-heater-leak-cleanup"
  },
  {
    icon: CloudRain,
    title: "Burst Pipe Cleanup",
    description: "Restoration for pipes burst due to corruption or sudden pressure.",
    link: "/burst-pipe-water-damage-cleanup"
  },
  {
    icon: ArrowUp,
    title: "Ceiling Leak Repair",
    description: "Drying and repair for water damage caused by roof leaks and storms.",
    link: "/ceiling-leak-water-damage-repair"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Gulf Coast Water Damage Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From tropical storms to appliance failures, we protect Gulf Breeze homes from all forms of water damage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                to={service.link}
                className="group bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block h-full"
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
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
