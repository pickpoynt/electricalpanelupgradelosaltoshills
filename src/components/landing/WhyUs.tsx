import { Clock, ShieldCheck, Zap, Sparkles, Smile, MapPin } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Our Eureka Springs team is fully licensed and insured for major structural ceiling repairs and restoration.",
  },
  {
    icon: Sparkles,
    title: "Perfect Match Finish",
    description: "We guarantee a seamless finish. You won't be able to tell where the water damage was once we are done.",
  },
  {
    icon: Clock,
    title: "Rapid Stabilization",
    description: "Sagging ceilings are dangerous. We arrive fast to stabilize the structure and prevent ceiling collapse.",
  },
  {
    icon: Zap,
    title: "Hidden Leak Detection",
    description: "We find the source of the leak, whether it's a roof issue or a hidden pipe, ensuring the damage doesn't return.",
  },
  {
    icon: MapPin,
    title: "Eureka Springs Local",
    description: "We are local to Carroll County and understand the unique structural needs of historic Arkansas properties.",
  },
  {
    icon: Smile,
    title: "Insurance Assistance",
    description: "We work directly with your insurance provider in Arkansas to make the claims process as smooth as possible.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Eureka Springs' Trusted Specialists
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Why Homeowners Choose
              <span className="text-gradient-copper block">Eureka Springs Ceiling Pros.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ceiling damage is more than just an eyesore; it's a structural risk. We bring years of experience in Arkansas restoration to every project, ensuring your home is safe, dry, and beautiful.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">500+</span>
                <span className="text-sm text-muted-foreground">Ceilings Restored</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">A+</span>
                <span className="text-sm text-muted-foreground">Local Rating</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">24/7</span>
                <span className="text-sm text-muted-foreground">Expert Support</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-copper/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-copper/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-copper" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
