import { Wind, Flame, Sparkles, Droplets, Zap, Shield, Trash2, Home, Eraser } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Eraser,
    title: "Soot Removal",
    description: "Deep removal of soot from walls and ceilings using specialized sponges.",
    link: "/soot-removal-sparta-wi"
  },
  {
    icon: Home,
    title: "Wall Cleaning",
    description: "Multi-stage wall cleaning to remove smoke stains and residues.",
    link: "/wall-cleaning-sparta-wi"
  },
  {
    icon: Sparkles,
    title: "Ceiling Restoration",
    description: "Soot removal and restoration for all types of ceiling surfaces.",
    link: "/ceiling-restoration-sparta-wi"
  },
  {
    icon: Wind,
    title: "Odour Neutralization",
    description: "Professional deodorization to eliminate persistent smoke smells.",
    link: "/odor-neutralization-sparta-wi"
  },
  {
    icon: Zap,
    title: "Furnace Puff Cleanup",
    description: "Specialized cleanup for soot spread by furnace malfunctions.",
    link: "/furnace-puff-cleanup-sparta-wi"
  },
  {
    icon: Shield,
    title: "Structural Cleaning",
    description: "Comprehensive cleaning of structural elements after a fire.",
    link: "/structural-cleaning-sparta-wi"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Sparta Soot Removal Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Providing professional wall and surface restoration for homeowners in Sparta and Monroe County.
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
                <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center mb-4 group-hover:bg-teal-600 transition-colors">
                  <Icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
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
