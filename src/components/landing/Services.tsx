import { Sun, Fan, Gauge, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Fan,
    title: "Motor Replacement",
    description: "Squealing bearings or a fan that just hums? We stock universal motors and OEM replacements for most major attic fan brands found in Tempe homes.",
    features: ["Quiet operation", "Bearing lubrication", "Vibration damping"],
  },
  {
    icon: Sun,
    title: "Solar Fan Installation",
    description: "Go off-grid with your ventilation. We install high-efficiency solar attic fans that run specifically when the sun is blazing—exactly when you need them.",
    features: ["Zero electricity cost", "Federal tax credits", "No wiring needed"],
  },
  {
    icon: Gauge,
    title: "Thermostat Repair",
    description: "If your fan runs all night or never turns on, it's likely a bad thermostat. We install adjustable, wide-range temperature switches for precise control.",
    features: ["Adjustable setpoints", "Humidistat options", "Safety disconnects"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
            Cooling Efficiency
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Ventilation Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Tempe summers are brutal. Ensure your attic breathes properly to
            extend the life of your roof and air conditioner.
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
