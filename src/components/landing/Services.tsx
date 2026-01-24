import { Droplets, Wind, Hammer, AlertTriangle } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Water Extraction",
    description: "Industrial-grade submersible pumps and truck-mounted units to remove thousands of gallons of standing water quickly.",
    features: ["Deep extraction mats", "High-capacity pumping", "Subfloor water removal"]
  },
  {
    icon: AlertTriangle,
    title: "Frozen Pipe Burst Repair",
    description: "Immediate response to minimalize water damage from burst frozen pipes. We stop the leak and dry the structure.",
    features: ["Leak isolation", "Plumbing coordination", "Structural drying"]
  },
  {
    icon: Wind,
    title: "Structural Drying",
    description: "Advanced dehumidification systems calibrated for Vail's altitude to dry walls, floors, and insulation efficiently.",
    features: ["Thermal imaging monitoring", "Desiccant dehumidifiers", "Air movement systems"]
  },
  {
    icon: Hammer,
    title: "Complete Restoration",
    description: "From drywall repair to flooring installation, we return your basement to its pre-flood condition.",
    features: ["Drywall replacement", "Flooring installation", "Trim & molding"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Vail Basement Water Removal Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From emergency extraction to final restoration, we handle every aspect of basement water damage in Vail and Eagle County.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-500">
                      <span className="text-blue-500 mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
