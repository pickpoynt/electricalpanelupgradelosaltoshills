import { Zap, Shield, Home, Settings, DollarSign, Wrench, MapPin, CircuitBoard } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Whole House Surge Protector Installation",
    description: "Complete installation of Type 2 surge protection devices at your main electrical panel, providing comprehensive protection for every circuit in your Cave Springs home.",
    link: "#surge-protector-info"
  },
  {
    icon: DollarSign,
    title: "Install Whole House Surge Protector Cost",
    description: "Transparent, competitive pricing for surge protector installation. We provide detailed quotes upfront so you know exactly what your investment in home protection will cost.",
    link: "#surge-protector-info"
  },
  {
    icon: Wrench,
    title: "Electrician for Surge Protector Installation",
    description: "Licensed, certified electricians specializing in surge protection. Our experts ensure proper installation, grounding, and code compliance for maximum protection.",
    link: "#surge-protector-info"
  },
  {
    icon: Home,
    title: "Home Surge Protection System Installer",
    description: "Full-service surge protection system design and installation. We assess your home's electrical needs and install the right protection for your specific situation.",
    link: "#surge-protector-info"
  },
  {
    icon: MapPin,
    title: "Whole Home Surge Protector Near Me",
    description: "Local Cave Springs electricians ready to protect your home. Fast response times and personalized service from your neighborhood surge protection specialists.",
    link: "#surge-protector-info"
  },
  {
    icon: CircuitBoard,
    title: "Electrical Panel Surge Protector Install",
    description: "Expert installation directly at your breaker panel for whole-home coverage. We integrate surge protection seamlessly with your existing electrical system.",
    link: "#surge-protector-info"
  },
  {
    icon: Shield,
    title: "Surge Protection Service for Home",
    description: "Comprehensive surge protection services including installation, inspection, and maintenance. Keep your protection working optimally year after year.",
    link: "#surge-protector-info"
  },
  {
    icon: Settings,
    title: "Main Panel Surge Protector Installation",
    description: "Professional installation at your main service panel—the most effective location for whole-house protection against external surges from the power grid.",
    link: "#surge-protector-info"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Complete Surge Protection Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional whole house surge protector installation and protection services for Cave Springs and Northwest Arkansas. Defend your electronics from damaging power surges.
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
                <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center mb-4 group-hover:bg-yellow-600 transition-colors">
                  <Icon className="w-6 h-6 text-yellow-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-yellow-600 transition-colors">
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
