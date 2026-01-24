import { ThermometerSnowflake, Droplets, Waves, ArrowUp, Biohazard, Activity, FolderSearch } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: ThermometerSnowflake,
    title: "Frozen Pipe Cleanup",
    description: "Emergency thaw and extraction for frozen pipe bursts in winter.",
    link: "/frozen-pipe-burst-cleanup-rye-brook-ny"
  },
  {
    icon: Droplets,
    title: "Flooded Basement Cleanup",
    description: "Rapid pump out and drying for finished basements.",
    link: "/flooded-basement-cleanup-cost-rye-brook-ny"
  },
  {
    icon: FolderSearch,
    title: "Hardwood Floor Repair",
    description: "Specialized drying for water-damaged hardwood floors.",
    link: "/hardwood-floor-water-damage-repair-rye-brook-ny"
  },
  {
    icon: ArrowUp,
    title: "Ceiling Water Damage",
    description: "Repair for leaks from upstairs bathrooms or roofs.",
    link: "/ceiling-water-damage-repair-rye-brook-ny"
  },
  {
    icon: Waves,
    title: "Wet Carpet Drying",
    description: "Industrial extraction to save carpets and pads.",
    link: "/wet-carpet-drying-service-rye-brook-ny"
  },
  {
    icon: Biohazard,
    title: "Sewage Backup Cleanup",
    description: "Safe removal and sanitization of sewer backups.",
    link: "/sewage-backup-cleanup-cost-rye-brook-ny"
  },
  {
    icon: Activity,
    title: "Emergency Water Removal",
    description: "24/7 rapid response for any water emergency.",
    link: "/emergency-basement-water-removal-rye-brook-ny"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Rye Brook Water Restoration Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From frozen pipe bursts to sewage backups, we handle every type of water damage in Westchester County.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
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
