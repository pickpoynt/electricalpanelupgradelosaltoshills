import { Leaf, Sprout, Sun, DollarSign, Award, Droplets } from "lucide-react";

const reasons = [
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Recycling greywater reduces your reliance on fresh municipal water, preserving Arizona's precious water resources.",
  },
  {
    icon: DollarSign,
    title: "Lower Water Bills",
    description: "By reusing ample laundry and shower water for irrigation, you can significantly cut down your monthly utility costs.",
  },
  {
    icon: Sprout,
    title: "Thriving Landscape",
    description: "Greywater is nutrient-rich and often better for plants than treated tap water, promoting lush, resilient desert growth.",
  },
  {
    icon: Sun,
    title: "Drought Resilience",
    description: "Keep your garden alive even during strict watering restrictions. Greywater gives you a consistent, independent water source.",
  },
  {
    icon: Award,
    title: "Code Experts",
    description: "We navigate Tempe/Arizona greywater regulations (Type 1 General Permit) to ensure your system is legal and safe.",
  },
  {
    icon: Droplets,
    title: "Custom Design",
    description: "Every yard is unique. We calculate your water output and landscape needs to design the perfectly balanced system.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Why Conserve?
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Tempe's Choice for
              <span className="text-gradient-copper block">Smart Water Recycling</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              In the Valley of the Sun, every drop counts. Our greywater systems
              allow you to enjoy a beautiful, green landscape without the guilt
              of excessive water usage.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">1M+</span>
                <span className="text-sm text-muted-foreground">Gallons Saved</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">30%</span>
                <span className="text-sm text-muted-foreground">Avg. Bill Savings</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">500+</span>
                <span className="text-sm text-muted-foreground">Systems Installed</span>
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
