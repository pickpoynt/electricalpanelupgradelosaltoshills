import { Zap, Home, Wrench, DollarSign, Lightbulb, Plug, Settings, CircuitBoard } from "lucide-react";

const services = [
  {
    icon: DollarSign,
    title: "Affordable Electrician Brevard NC",
    description: "Quality electrical services at budget-friendly prices. We believe everyone deserves reliable electrical work without breaking the bank.",
    link: "#electrician-info"
  },
  {
    icon: Wrench,
    title: "Budget Electrician Brevard NC",
    description: "Cost-effective electrical repairs and installations for residential and commercial properties throughout Brevard and Transylvania County.",
    link: "#electrician-info"
  },
  {
    icon: Lightbulb,
    title: "Low Cost Electrician Brevard NC",
    description: "Competitive pricing on all electrical services including outlet installation, light fixture repairs, and electrical panel upgrades.",
    link: "#electrician-info"
  },
  {
    icon: Plug,
    title: "Cheap Electrical Services Brevard NC",
    description: "Affordable electrical contracting services without compromising safety or workmanship quality. Transparent pricing guaranteed.",
    link: "#electrician-info"
  },
  {
    icon: Home,
    title: "Residential Electrical Services",
    description: "Complete home electrical services including repairs, upgrades, inspections, and emergency electrical work at fair market rates.",
    link: "#electrician-info"
  },
  {
    icon: CircuitBoard,
    title: "Electrical Panel Services",
    description: "Panel upgrades, breaker replacements, and electrical safety inspections to ensure your home's electrical system operates safely.",
    link: "#electrician-info"
  },
  {
    icon: Settings,
    title: "Electrical Maintenance",
    description: "Preventive maintenance services to keep your electrical systems running efficiently and catch problems before they become costly.",
    link: "#electrician-info"
  },
  {
    icon: Zap,
    title: "Emergency Electrical Service",
    description: "24/7 emergency electrical repair services for urgent situations. Fast response times with upfront pricing even for after-hours calls.",
    link: "#electrician-info"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Affordable Electrical Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Budget-friendly electrical work for Brevard homes and businesses. Quality electrical services at prices that won't break your budget.
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
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                  <Icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-green-600 transition-colors">
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
