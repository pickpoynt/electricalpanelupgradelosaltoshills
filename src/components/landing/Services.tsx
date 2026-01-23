import { Wind, ShieldCheck, CheckCircle, ArrowRight, Zap, Droplets, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Droplets,
    title: "Emergency Water Extraction",
    description: "The first 48 hours are critical. We use industrial pumps and extractors to remove standing water from your walls and floors before structural damage sets in.",
    features: ["Rapid response", "Industrial equipment", "Flood cleanup"],
  },
  {
    icon: Zap,
    title: "Structural Drying & Dehumidification",
    description: "Our commercial-grade air movers and dehumidifiers pull moisture from deep within your drywall studs and insulation, preventing mold growth.",
    features: ["Thermal imaging", "Moisture monitoring", "Complete drying"],
  },
  {
    icon: Sparkles,
    title: "Sheetrock Replacement & Finishing",
    description: "We don't just patch—we restore. From precision cutting to seamless taping, mudding, sanding, and painting, your walls will look brand new.",
    features: ["Perfect matching", "Professional finish", "Quality materials"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
            Complete Drywall Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Hudson's Drywall Experts
          </h2>
          <p className="text-muted-foreground text-lg">
            From basement floods to burst pipes, we provide comprehensive drywall restoration services tailored to Wisconsin's unique climate challenges.
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
