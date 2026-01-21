import { Zap, Wind, RotateCw, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Wind,
    title: "Fan Replacement",
    description: "Got an old, wobbly, or noisy fan? We remove the old unit and install your new choice securely, ensuring it's balanced and whisper-quiet.",
    features: ["Safe removal", "New bracket install", "Blade balancing"],
  },
  {
    icon: Zap,
    title: "New Wiring Install",
    description: "Don't have a fan there yet? No problem. We can fish new wires through your ceiling and install a proper junction box rated for fan weight.",
    features: ["Clean wire fishing", "Code compliant", "Switch installation"],
  },
  {
    icon: RotateCw,
    title: "High Ceilings",
    description: "Vaulted or cathedral ceilings in your Spokane home? We have the ladders and expertise to safely install downrods and fans at any height.",
    features: ["Up to 20ft height", "Extension downrods", "Remote setup"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
            Full Service Cooling
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Expert Fan Installation
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you bought it at a big box store or online, we install it right.
            Enjoy the breeze without the hassle of DIY wiring.
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
