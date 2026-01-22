import { Zap, ShieldCheck, Box, CheckCircle, ArrowRight, ShieldAlert, Power } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: ShieldCheck,
    title: "Interlock Kit Install",
    description: "The mechanical interlock plate makes it impossible to turn on your generator breaker while the main is on, ensuring total safety.",
    features: ["Panel brand specific", "UL-listed hardware", "Mechanical safeguards"],
  },
  {
    icon: Power,
    title: "Power Inlet Boxes",
    description: "We install professional 30A or 50A power inlet boxes on the exterior of your home for a clean, weather-protected connection point.",
    features: ["Recessed or surface", "NEMA 3R rated", "Flush mount options"],
  },
  {
    icon: Zap,
    title: "Whole-Home Backup",
    description: "Turn on your AC, well pump, or kitchen appliances as needed. An interlock kit lets you power any circuit in your entire panel.",
    features: ["Load management", "Well pump support", "AC unit compatibility"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
            Cypress Energy Experts
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Safe Interlocked Generator Hookups
          </h2>
          <p className="text-muted-foreground text-lg">
            Stop struggling with extension cords. We provides professional electrical connections for your portable generator in Cypress and surrounding areas.
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
