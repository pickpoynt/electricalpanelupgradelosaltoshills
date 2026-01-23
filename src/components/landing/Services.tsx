import { Droplets, Wind, ShieldAlert, CheckCircle, ArrowRight, Box, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Box,
    title: "Content Management",
    description: "Professional sorting and categorization of all items in the home to identify what is salvageable after water exposure.",
    features: ["Inventory tracking", "Cleaning & Storage", "Document recovery"],
  },
  {
    icon: Trash2,
    title: "Biohazard Sanitization",
    description: "Deep decontamination of areas affected by stagnant water, waste, and bacteria common in complex hoarding environments.",
    features: ["EPA-approved agents", "Odor removal", "Sharps disposal"],
  },
  {
    icon: Droplets,
    title: "Structural Restoration",
    description: "Deep water extraction and dehumidification using industrial hardware to save flooring and framing under extreme conditions.",
    features: ["Heavy-duty pumps", "Wall cavity drying", "Subfloor recovery"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
            Bozeman Specialist Recovery
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Specialized Hoarding Restoration
          </h2>
          <p className="text-muted-foreground text-lg">
            Complex water emergencies require more than just drying. Our Bozeman experts manage the intersection of biohazard cleanup and water damage.
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
