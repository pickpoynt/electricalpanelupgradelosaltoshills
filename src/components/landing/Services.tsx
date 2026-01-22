import { Plug, CloudLightning, Box, CheckCircle, ArrowRight, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: CloudLightning,
    title: "Weatherhead Repair",
    description: "Has your service head been pulled away from the house? We specialize in securing and replacing damaged weatherheads to ensure a safe utility connection.",
    features: ["Mast straightening", "Water entry sealing", "Utility coordination"],
  },
  {
    icon: ShieldAlert,
    title: "Storm Damage Recovery",
    description: "After Oklahoma storms, many homes suffer from bent service masts. We provide 24/7 emergency response to restore your electrical entrance and power.",
    features: ["24/7 Response", "Insurance documentation", "Safety inspections"],
  },
  {
    icon: Box,
    title: "Service Mast Upgrades",
    description: "Old rust-prone masts can fail during wind events. We upgrade service entrances to heavy-duty, code-compliant steel masts for ultimate storm protection.",
    features: ["Rigid conduits", "Capacity upgrades", "Corrosion protection"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
            Tulsa's Storm Specialists
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Emergency Electrical Entrance Repair
          </h2>
          <p className="text-muted-foreground text-lg">
            When the overhead power entry to your home is damaged, it requires immediate professional attention.
            We are Tulsa's experts in weatherhead and service mast restoration.
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
