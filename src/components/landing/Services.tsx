import { Wind, Flame, Sparkles, Droplets, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Wind,
    title: "Smoke Odor Removal",
    description: "Complete odor elimination using industrial ozone generators.",
    link: "/smoke-odor-removal-whitefish-mt"
  },
  {
    icon: Flame,
    title: "Fire Damage Restoration",
    description: "Comprehensive cleaning and restoration of fire-damaged upholstery.",
    link: "/fire-damage-restoration-whitefish-mt"
  },
  {
    icon: Sparkles,
    title: "Deep Upholstery Cleaning",
    description: "Hot water extraction to remove soot, ash, and smoke residue.",
    link: "/upholstery-deep-cleaning-whitefish-mt"
  },
  {
    icon: Zap,
    title: "Thermal Fogging",
    description: "Advanced fogging technology for deep fiber penetration.",
    link: "/thermal-fogging-whitefish-mt"
  },
  {
    icon: Droplets,
    title: "Wildfire Smoke Cleanup",
    description: "Specialized treatment for wildfire smoke infiltration.",
    link: "/wildfire-smoke-cleanup-whitefish-mt"
  },
  {
    icon: Shield,
    title: "Fabric Protection",
    description: "Post-cleaning protectant application for lasting freshness.",
    link: "/fabric-protection-whitefish-mt"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Whitefish Smoke Odor Removal Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Specialized in eliminating smoke odors from upholstered furniture using advanced restoration technology.
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
