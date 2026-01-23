import { Clock, ShieldCheck, Zap, Sparkles, Smile, MapPin } from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "No Masking Agents",
    description: "We don't use scents to hide odors. We use science to destroy the molecules causing the smell, ensuring a truly clean home.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Odor Techs",
    description: "Our Iowa Colony crew is IICRC-certified in Odor Control (OCT), specifically for water and mold-related issues.",
  },
  {
    icon: Clock,
    title: "24/7 Rapid Response",
    description: "The longer water damage sits, the worse the smell gets. We respond immediately to start the purification process.",
  },
  {
    icon: Zap,
    title: "High-Output Hardware",
    description: "We use the latest high-intensity ozone and hydroxyl equipment, which is significantly more effective than consumer-grade machines.",
  },
  {
    icon: Smile,
    title: "100% Satisfaction",
    description: "If the smell returns within 30 days, we return for free. We are committed to making your home fresh and healthy again.",
  },
  {
    icon: MapPin,
    title: "Iowa Colony Local",
    description: "Proudly serving Iowa Colony and Brazoria County. We understand how Texas humidity impacts water damage odors.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Iowa Colony's Air Quality Experts
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              The Scientific Choice for
              <span className="text-gradient-copper block">Iowa Colony Odor Control.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Brazoria County's humidity can lock musty smells into your home's structure. We provide the expertise and specialized hardware to purge your indoor air and surfaces of all water damage contaminants.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">1,200+</span>
                <span className="text-sm text-muted-foreground">Odor Projects</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">4.9</span>
                <span className="text-sm text-muted-foreground">Star Local Rating</span>
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
