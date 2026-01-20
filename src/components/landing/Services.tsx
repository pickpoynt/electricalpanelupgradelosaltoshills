import { Thermometer, Wifi, Wrench, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Thermometer,
    title: "New Heater Install",
    description: "Installation of high-efficiency Cadet and King electric baseboard heaters, perfectly sized for each room to maximize comfort and minimize bills.",
    features: ["Sizing calc", "Wiring run", "Clean mounting"],
  },
  {
    icon: Wifi,
    title: "Smart Thermostats",
    description: "Upgrade your old dial thermostats to modern digital or smart units (like Mysa) that let you control your baseboard heat from your phone.",
    features: ["App control", "Schedule setting", "Energy savings"],
  },
  {
    icon: Wrench,
    title: "Change-Outs & Removal",
    description: "We safely disconnect and remove old, inefficient, or rusted baseboard units and replace them with sleek, safe, new models.",
    features: ["Disposal included", "Safety check", "Wall repair prep"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
            Zonal Heating Specialists
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Seattle's Heating Pros
          </h2>
          <p className="text-muted-foreground text-lg">
            Say goodbye to cold spots. We specialize in zonal electric heating systems
            that allow you to heat only the rooms you're using, saving energy and money.
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
