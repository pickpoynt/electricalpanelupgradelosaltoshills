import { Waves, Mountain, CloudRain, Droplets, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Waves,
    title: "Flooded Garage Cleanup",
    description: "Rapid water extraction for garages flooded by rain or plumbing.",
    link: "/flooded-garage-water-removal-tiburon-ca"
  },
  {
    icon: CloudRain,
    title: "Storm Runoff Cleanup",
    description: "Diverting and cleaning up water from hillside runoff.",
    link: "/storm-runoff-cleanup-tiburon-ca"
  },
  {
    icon: Droplets,
    title: "Drainage Failure",
    description: "Solutions for overwhelmed drains and sump pumps.",
    link: "/hillside-drainage-failure-cleanup-tiburon-ca"
  },
  {
    icon: Mountain,
    title: "Mudslide Cleanup",
    description: "Removing mud and debris from garages and driveways.",
    link: "/mudslide-cleanup-tiburon-ca"
  },
  {
    icon: Zap,
    title: "Emergency Pump Out",
    description: "24/7 high-capacity pumping for severe flooding.",
    link: "/emergency-pump-out-service-tiburon-ca"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Tiburon Flood Restoration Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From hillside runoff to garage floods, we protect Tiburon properties from water damage.
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
