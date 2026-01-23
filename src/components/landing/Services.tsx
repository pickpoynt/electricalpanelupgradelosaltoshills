import { Droplets, Wind, Hammer, Sparkles } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Emergency Water Extraction",
    description: "Rapid removal of sewage and contaminated water using industrial-grade extractors and pumps.",
    features: ["Category 3 water certified", "Truck-mounted extraction", "Complete sanitization"]
  },
  {
    icon: Wind,
    title: "Structural Drying & Dehumidification",
    description: "Professional-grade air movers and dehumidifiers to eliminate moisture from floors, walls, and subfloors.",
    features: ["Thermal imaging monitoring", "HEPA air filtration", "Moisture meter tracking"]
  },
  {
    icon: Hammer,
    title: "Bathroom Restoration",
    description: "Complete repair and replacement of damaged flooring, drywall, baseboards, and fixtures.",
    features: ["Tile & grout replacement", "Subfloor reconstruction", "Paint & finish matching"]
  },
  {
    icon: Sparkles,
    title: "Antimicrobial Treatment",
    description: "EPA-approved disinfection to eliminate bacteria, viruses, and prevent mold growth after sewage exposure.",
    features: ["Hospital-grade sanitizers", "Odor neutralization", "Air quality testing"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Complete Toilet Overflow Restoration Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From emergency extraction to final restoration, we handle every aspect of toilet overflow damage in Timnath and Larimer County.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-copper mt-1">✓</span>
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
