import { Droplets, Repeat, Wrench, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Repeat,
    title: "Laundry-to-Landscape",
    description: "Simple, code-compliant systems that divert washing machine water directly to mulch basins around trees and shrubs without pumps.",
    features: ["Low maintenance", "No permit needed", "Cost-effective"],
  },
  {
    icon: Droplets,
    title: "Whole-House Recycling",
    description: "Advanced systems that collect water from showers and sinks, filter it, and redistribute it via drip irrigation to your entire yard.",
    features: ["High efficiency", "Drip irrigation compatible", "Automated control"],
  },
  {
    icon: Wrench,
    title: "System Maintenance",
    description: "Regular check-ups for filters, valves, and distribution lines to ensure your greywater system remains sanitary and effective.",
    features: ["Filter changes", "System flushing", "Health inspection"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
            Sustainable Living
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Tempe's Greywater Specialists
          </h2>
          <p className="text-muted-foreground text-lg">
            Maximize every drop in the desert. We provide custom water recycling solutions
            designed specifically for the Arizona climate and local regulations.
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
                {service.title} in Tempe
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
