import { Zap, Home, Wrench, Shield, Settings, CircuitBoard, Clock, DollarSign } from "lucide-react";

const services = [
  {
    icon: CircuitBoard,
    title: "Electrical Panel Upgrade",
    description: "Complete panel replacement with modern, code-compliant equipment designed to meet today's electrical demands safely and efficiently.",
    link: "#panel-info"
  },
  {
    icon: Shield,
    title: "Panel Replacement Services",
    description: "Full-service panel replacement from old, outdated equipment to modern circuit breaker panels with enhanced safety features.",
    link: "#panel-info"
  },
  {
    icon: Settings,
    title: "Service Panel Installation",
    description: "Professional installation of new electrical service panels to accommodate increased electrical loads and modern appliances.",
    link: "#panel-info"
  },
  {
    icon: Wrench,
    title: "Electrical Panel Inspection",
    description: "Comprehensive panel inspections to identify potential hazards, code violations, and upgrade needs for safety and compliance.",
    link: "#panel-info"
  },
  {
    icon: Zap,
    title: "Breaker Panel Upgrade",
    description: "Upgrade from outdated fuse boxes or obsolete breaker panels to modern, high-capacity circuit breaker systems.",
    link: "#panel-info"
  },
  {
    icon: Home,
    title: "Residential Panel Services",
    description: "Specialized panel services for homes including capacity assessments, load calculations, and upgrade recommendations.",
    link: "#panel-info"
  },
  {
    icon: Clock,
    title: "Emergency Panel Service",
    description: "24/7 emergency electrical panel service for urgent situations requiring immediate attention for safety or functionality.",
    link: "#panel-info"
  },
  {
    icon: DollarSign,
    title: "Panel Upgrade Financing",
    description: "Flexible financing options available for major panel upgrades to make essential electrical improvements affordable.",
    link: "#panel-info"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Electrical Panel Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional electrical panel upgrade services for Seward homes and businesses. Safe, code-compliant solutions for modern electrical demands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block h-full pointer-events-none"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
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
