import { MapPin, Camera, Wrench, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: MapPin,
    title: "Exterior Cleanouts",
    description: "Install accessible cleanout points in your yard near the property line, making future drain service easy without entering your home.",
    features: ["Grade-level access", "Weatherproof caps", "Landscaping restoration"],
  },
  {
    icon: Camera,
    title: "Camera-Ready Access",
    description: "Cleanouts allow plumbers to run sewer cameras to diagnose clogs, root intrusion, and pipe damage without invasive digging.",
    features: ["Inspection port", "4-inch openings", "Two-way cleanout"],
  },
  {
    icon: Wrench,
    title: "Cleanout Replacement",
    description: "Replace broken, corroded, or buried cleanout caps and risers. We upgrade old terra cotta cleanouts to modern PVC or ABS.",
    features: ["Cap replacement", "Riser extension", "Code upgrades"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
            Licensed Plumbing Experts
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Plano's Cleanout Specialists
          </h2>
          <p className="text-muted-foreground text-lg">
            A properly installed sewer cleanout is your best defense against expensive
            drain emergencies. We install code-compliant access points that save you money.
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
