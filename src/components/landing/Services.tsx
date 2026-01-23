import { Wind, ShieldCheck, CheckCircle, ArrowRight, Zap, Droplets, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Droplets,
    title: "Leak Detection & Stop",
    description: "The first step is finding where the water is coming from. We use thermal imaging and moisture meters to locate roof and pipe leaks quickly.",
    features: ["Thermal imaging", "Immediate leak stop", "Leak source repair"],
  },
  {
    icon: Zap,
    title: "Structural Drying",
    description: "Wet ceilings can lead to structural rot and mold. Our industrial air movers and dehumidifiers pull moisture out of your ceiling joists and sheetrock.",
    features: ["Industrial air movers", "High-capacity drying", "Mold prevention"],
  },
  {
    icon: Sparkles,
    title: "Sheetrock & Paint",
    description: "We don't just fix the water damage; we make your ceiling look brand new. From drywall replacement to professional texture matching and paint.",
    features: ["Seamless finishing", "Texture matching", "Cleanup & removal"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
            Total Ceiling Restoration
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Eureka Springs' Ceiling Experts
          </h2>
          <p className="text-muted-foreground text-lg">
            From sagging sheetrock to mysterious water stains, we provide full-service ceiling repair that restores the integrity and beauty of your Arkansas home.
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
