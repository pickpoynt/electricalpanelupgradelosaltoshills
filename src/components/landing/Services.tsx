import { Wind, Flame, Sparkles, Droplets, Zap, Shield, TreePine, Hammer, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: TreePine,
    title: "Charred Log Restoration",
    description: "Removing fire damage and restoring the structural integrity of cabin logs.",
    link: "/charred-log-restoration-whitefish-mt"
  },
  {
    icon: Flame,
    title: "Fire Damage Cleanup",
    description: "Complete soot and ash removal from all cabin surfaces and interiors.",
    link: "/fire-damage-cleanup-whitefish-mt"
  },
  {
    icon: Hammer,
    title: "Structural Timber Repair",
    description: "Expert assessment and repair of load-bearing log home components.",
    link: "/structural-log-repair-whitefish-mt"
  },
  {
    icon: Wind,
    title: "Smoke Odor Elimination",
    description: "Advanced thermal fogging and ozone treatment for deep timber odors.",
    link: "/odor-elimination-whitefish-mt"
  },
  {
    icon: Shield,
    title: "Chinking & Sealing",
    description: "Repairing fire-damaged seals between logs to ensure energy efficiency.",
    link: "/chinking-sealing-whitefish-mt"
  },
  {
    icon: Trash2,
    title: "Debris Removal",
    description: "Safe disposal of fire-damaged materials and hazardous ash residue.",
    link: "/debris-removal-whitefish-mt"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Log Cabin Fire Restoration Experts
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Specialized services tailored to the unique construction and material needs of Montana log homes after a fire.
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
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4 group-hover:bg-orange-700 transition-colors">
                  <Icon className="w-6 h-6 text-orange-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-2 group-hover:text-orange-700 transition-colors">
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
