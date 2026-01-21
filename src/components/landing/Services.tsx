import { Plug, Flame, Box, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Plug,
    title: "Pedestal Repair",
    description: "Lost power but your neighbors have it? It's often the park pedestal or your feeder breaker. We diagnose and repair worn lugs and melted breakers fast.",
    features: ["Utility coordination", "Feeder wire replacement", "Breaker swaps"],
  },
  {
    icon: Flame,
    title: "Aluminum Remediation",
    description: "Many older Henderson mobile homes have aluminum wiring, a known fire risk. We secure these connections using AlumiConn connectors to make them safe.",
    features: ["Fire prevention", "Device replacement", "Safety certification"],
  },
  {
    icon: Box,
    title: "Panel Upgrades",
    description: "Still running on a 50-amp fuse box? We upgrade mobile homes to modern 100-amp or 200-amp breaker panels to handle modern appliances.",
    features: ["Increased capacity", "Surge protection", "Code compliance"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
            HUD Code Specialists
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Manufactured Home Electrical
          </h2>
          <p className="text-muted-foreground text-lg">
            Mobile homes require a specialized electrician who understands HUD codes and park regulations.
            We are Henderson's go-to experts.
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
