import { Waves, Mountain, CloudRain, Droplets, Zap, Power, ShieldAlert, Bug } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Power,
    title: "Sump Pump Cleanup",
    description: "Emergency cleanup when your pump fails or power goes out.",
    link: "/sump-pump-failure-cleanup-cohasset-ma"
  },
  {
    icon: Waves,
    title: "Basement Restoration",
    description: "Drying finished basements and removing water damaged materials.",
    link: "/flooded-basement-restoration-cohasset-ma"
  },
  {
    icon: ShieldAlert,
    title: "Sewage Backup",
    description: "Biohazard cleanup for sewer line backups.",
    link: "/sewage-backup-cleanup-cohasset-ma"
  },
  {
    icon: Bug,
    title: "Mold Remediation",
    description: "Preventing mold growth after water damage.",
    link: "/mold-remediation-cohasset-ma"
  },
  {
    icon: Zap,
    title: "Battery Backup Failure",
    description: "Restoration for floods during power outages.",
    link: "/battery-backup-failure-cleanup-cohasset-ma"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Cohasset Water Damage Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Specialized in recovering basements from sump pump failures and coastal storms.
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
