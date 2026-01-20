import { Shield, Hammer, Droplets, Target, ThumbsUp, Wrench } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Structural Integrity",
    description: "We don't just fix the leak; we ensure the structural foundation around your toilet is solid and water-resistant.",
  },
  {
    icon: Hammer,
    title: "Subfloor Restoration",
    description: "Our team is skilled in both plumbing and minor subfloor repairs, saving you the hassle of hiring two different contractors.",
  },
  {
    icon: Droplets,
    title: "Leak Prevention",
    description: "Using premium wax rings and modern closet flange systems, we eliminate the risk of future leaks and costly floor damage.",
  },
  {
    icon: Target,
    title: "Precision Leveling",
    description: "A wobbly toilet isn't just annoying; it puts stress on the flange. We ensure a perfectly level and secure installation every time.",
  },
  {
    icon: ThumbsUp,
    title: "Tallahassee Locals",
    description: "As a local team, we understand the common plumbing issues in Florida's Capital City and provide rapid, reliable service.",
  },
  {
    icon: Wrench,
    title: "Modern Solutions",
    description: "We use the latest closet flange repair kits and reinforcement technologies to provide a permanent fix for broken cast iron or PVC.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Local Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Tallahassee's Choice for
              <span className="text-gradient-copper block">Permanent Toilet Repairs</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              In Tallahassee and the surrounding Big Bend area, bathroom humidity
              and aging fixtures can lead to flange failure. We specialize in
              rugged, long-lasting repairs that keep your bathroom dry and safe.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">2k+</span>
                <span className="text-sm text-muted-foreground">Flanges Replaced</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">12+</span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">100%</span>
                <span className="text-sm text-muted-foreground">Success Rate</span>
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
