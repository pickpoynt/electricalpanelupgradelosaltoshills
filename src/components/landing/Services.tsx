import { Zap, ShieldCheck, Waves, Settings, Droplet, HardHat } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "New Spa Hookups",
    description: "Complete electrical installation for new hot tubs and spas, including dedicated 220V circuits and weatherproof conduit.",
    link: "#hottub-wiring-info"
  },
  {
    icon: ShieldCheck,
    title: "GFCI Protection",
    description: "Installation and testing of Ground Fault Circuit Interrupter disconnects to ensure maximum user safety and code compliance.",
    link: "#hottub-wiring-info"
  },
  {
    icon: Waves,
    title: "Swim Spa Wiring",
    description: "Heavy-duty electrical support for large swim spas requiring high-amperage dedicated power supplies and specialized bonding.",
    link: "#hottub-wiring-info"
  },
  {
    icon: Settings,
    title: "Troubleshooting",
    description: "Expert diagnostics for tripping breakers, power failures, and faulty controls in existing hot tub and spa electrical systems.",
    link: "#hottub-wiring-info"
  },
  {
    icon: Droplet,
    title: "Outdoor Conduit",
    description: "Weather-resistant wiring solutions designed to withstand Signal Mountain's varying mountain climate and rugged terrain.",
    link: "#hottub-wiring-info"
  },
  {
    icon: HardHat,
    title: "Compliance Audits",
    description: "Detailed safety inspections to ensure your spa's electrical system meets all current NEC standards and local mountain codes.",
    link: "#hottub-wiring-info"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Specialized Hot Tub Electrical Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Providing the technical expertise needed to safely and reliably power your backyard oasis on Signal Mountain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block h-full pointer-events-none"
              >
                <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-4 group-hover:bg-cyan-600 transition-colors">
                  <Icon className="w-6 h-6 text-cyan-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
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
