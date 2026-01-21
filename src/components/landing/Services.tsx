import { Hammer, Scissors, Activity, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Hammer,
    title: "Tunneling Under Slab",
    description: "The gold standard for cast iron replacement. We dig tunnels under your foundation to replace pipes, meaning no holes in your expensive flooring.",
    features: ["Floors stay intact", "Full pipe replacement", "Engineered support"],
  },
  {
    icon: Scissors,
    title: "Trenchless Pipe Lining",
    description: "For pipes with structural integrity remaining, we insert an epoxy-coated liner that cures into a new, rock-hard pipe inside the old one.",
    features: ["No digging required", "Faster completion", "50-year lifespan"],
  },
  {
    icon: Activity,
    title: "Hydro-Jet Descaling",
    description: "We use high-pressure water and sanding chains to strip away years of scale and rust buildup, restoring flow to older cast iron lines.",
    features: ["Restores diameter", "Removes jagged edges", "Preps for lining"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
            Advanced Restoration Methods
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Custom Solutions for Old Drains
          </h2>
          <p className="text-muted-foreground text-lg">
            Every Baton Rouge home is unique. We offer a range of solutions from
            cleaning to full replacement, tailored to your pipe conditions and budget.
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
