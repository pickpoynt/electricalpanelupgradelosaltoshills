import { Wind, Flame, Sparkles, Droplets, Zap, Shield, Trash2, Home, Eraser } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Wind,
    title: "Attic Smoke Removal",
    description: "Deep deodorization of attic spaces including trusses and roof decking.",
    link: "/smoke-removal-woodland-park"
  },
  {
    icon: Droplets,
    title: "Insulation Deodorization",
    description: "Specialized treatment to neutralize smoke odors trapped in attic insulation.",
    link: "/insulation-deodorization-woodland-park"
  },
  {
    icon: Zap,
    title: "Thermal Fogging",
    description: "Advanced dry fog technology to penetrate deep into wood pores.",
    link: "/thermal-fogging-woodland-park"
  },
  {
    icon: Eraser,
    title: "Structure Cleaning",
    description: "Professional cleaning of wooden attic structures to remove soot and resins.",
    link: "/wood-cleaning-woodland-park"
  },
  {
    icon: Sparkles,
    title: "Ozone Treatment",
    description: "Powerful oxygen-based deodorization for complete odor elimination.",
    link: "/ozone-treatment-woodland-park"
  },
  {
    icon: Shield,
    title: "Hepa Filtration",
    description: "Continuous air scrubbing to remove microscopic smoke particles from the attic.",
    link: "/hepa-filtration-woodland-park"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Woodland Park Attic Smoke Odor Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Specialized attic restoration services to eliminate persistent smoke smells and restore healthy air to your home.
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
                <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-600 transition-colors">
                  <Icon className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
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
