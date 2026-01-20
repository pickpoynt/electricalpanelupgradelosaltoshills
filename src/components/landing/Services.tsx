import { Zap, Plug, Fan, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Zap,
    title: "Kiln Circuit Installation",
    description: "Dedicated 50A or 60A high-voltage circuits installed directly from your panel to your studio space, sized correctly for your specific kiln model.",
    features: ["Heavy-gauge wiring", "Dedicated breakers", "Code compliant"],
  },
  {
    icon: Plug,
    title: "Outlet & Hardwiring",
    description: "Installation of NEMA 6-50, 14-50, or 6-20 receptacles, or direct hardwiring for industrial kilns to prevent overheating and ensure steady power.",
    features: ["Industrial grade plugs", "Secure connections", "Voltage testing"],
  },
  {
    icon: Fan,
    title: "Ventilation Systems",
    description: "Wiring and installation for downdraft vents or overhead hoods to safely remove fumes, heat, and carbon monoxide from your workspace.",
    features: ["Auto-switch controls", "Safe fume removal", "Heat management"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
            Studio Safety First
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Asheville's Kiln Electricians
          </h2>
          <p className="text-muted-foreground text-lg">
            Firing ceramics requires serious power. We provide the expert electrical
            infrastructure you need to run your kiln safely and efficiently at home or in the studio.
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
