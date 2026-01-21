import { DollarSign, Award, Clock, ShieldCheck, ThumbsUp, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: DollarSign,
    title: "Affordable Rates",
    description: "We believe cooling shouldn't cost a fortune. Our flat-rate pricing for standard installations beats the big electrical companies every time.",
  },
  {
    icon: Award,
    title: "Licensed Pros",
    description: "Don't trust handy-apps with your home's wiring. Our installers are fully licensed, bonded, and insured electricians in Washington State.",
  },
  {
    icon: Clock,
    title: "Fast Turnover",
    description: "We carry most standard brackets and switches in our trucks, allowing us to complete most installations in a single visit, often in under 2 hours.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    description: "Ceiling fans are heavy. We ensure your electrical box is rated for the dynamic load, preventing dangerous wobbling or falling hazards.",
  },
  {
    icon: Sparkles,
    title: "Clean Work",
    description: "We treat your home with respect. We use drop cloths, wear booties, and vacuum up any drywall dust before we leave.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guarantee",
    description: "If the fan wobbles or ticks after we leave, we'll come back and fix it for free. Your comfort is our priority.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              The Smart Choice
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Why Hire Us for Your
              <span className="text-gradient-copper block">Ceiling Fan Project?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Installing a fan seems simple until you're on a ladder trying to hold a 20lb motor overhead while connecting wires.
              We take the risk and stress out of the equation for Spokane homeowners.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">1000+</span>
                <span className="text-sm text-muted-foreground">Fans Installed</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">1Yr</span>
                <span className="text-sm text-muted-foreground">Labor Warranty</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">A+</span>
                <span className="text-sm text-muted-foreground">Rating</span>
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
