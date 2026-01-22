import { Zap, ShieldCheck, Box, CheckCircle, ArrowRight, ShieldAlert, Activity, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Search,
    title: "Leak Detection & Repair",
    description: "Specialized diagnostics to find hidden leaks in your exterior plumbing lines before they cause structural water damage.",
    features: ["Acoustic leak detection", "Visual inspections", "Pressure testing"],
  },
  {
    icon: ShieldAlert,
    title: "Hose Bib Replacement",
    description: "Installation of modern, frost-proof outdoor faucets that prevent freezing and bursting during Westfield's harsh winters.",
    features: ["Frost-proof technology", "Anti-siphon valves", "Correct pitch installation"],
  },
  {
    icon: Activity,
    title: "Emergency Late Night Service",
    description: "Rapid response for burst outdoor pipes and major faucet leaks available 24/7, even during the middle of the night.",
    features: ["30-60 min response", "Emergency shut-offs", "Immediate part replacement"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
            Westfield Dispatch
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Outdoor Faucet & Hose Bib Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            Emergency late night plumbing for Westfield homeowners. We specialize in exterior water fixtures and leak prevention.
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


