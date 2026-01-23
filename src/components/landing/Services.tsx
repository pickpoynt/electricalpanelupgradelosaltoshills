import { Droplets, Wind, ShieldAlert, CheckCircle, ArrowRight, Home, CloudRain } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: CloudRain,
    title: "Emergency Tarping",
    description: "Rapid deployment of secondary roof protection to stop incoming rain and prevent catastrophic interior flooding during storm events.",
    features: ["Hurricane-grade tarps", "Safety inspections", "Temporary shoring"],
  },
  {
    icon: Droplets,
    title: "Ceiling Extraction",
    description: "Specialized removal of water trapped in attic spaces and ceiling cavities to prevent structural collapse and heavy moisture Damage.",
    features: ["Attic vacuuming", "Insulation removal", "Ceiling shoring"],
  },
  {
    icon: Wind,
    title: "Humidity Control",
    description: "Industrial strength dehumidification to combat Florida's moisture, ensuring your home is dry and safe for reconstruction.",
    features: ["LGR dehumidifiers", "Axial air movers", "Moisture mapping"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
            Westlake Rapid Response
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Complete Roof Leak Recovery
          </h2>
          <p className="text-muted-foreground text-lg">
            When your roof fails, we step in. Our Westlake team handles everything from stopping the leak to drying the drywall and attic.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-copper" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="ghost" className="group/btn text-copper hover:text-copper p-0">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
