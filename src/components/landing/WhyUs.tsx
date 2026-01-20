import { ShieldCheck, Flame, Zap, FileCheck, BrainCircuit, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Safety Certified",
    description: "We are licensed NC electricians specializing in high-load circuits. We ensure your home's panel can handle the draw without fire risks.",
  },
  {
    icon: Flame,
    title: "Pottery Knowledge",
    description: "We understand the unique demands of firing schedules. We wire for peak load sustainability, avoiding tripped breakers during critical ramps.",
  },
  {
    icon: Zap,
    title: "Voltage Drop Prevention",
    description: "We calculate precisely for voltage drop, using appropriate wire gauges to ensure your kiln reaches top temperature (Cone 6-10) reliably.",
  },
  {
    icon: FileCheck,
    title: "Permit Handling",
    description: "We handle all Asheville and Buncombe County electrical permits and inspections, so you can focus on creating art.",
  },
  {
    icon: BrainCircuit,
    title: "Smart Controller Setup",
    description: "Need help connecting your Bartlett or touchscreen controller? We assist with the initial electrical setup and testing.",
  },
  {
    icon: HeartHandshake,
    title: "Artist Focused",
    description: "We love Asheville's art scene. We offer transparent pricing and flexible scheduling for home studios and maker spaces.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Why Choose Us?
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Asheville's Choice for
              <span className="text-gradient-copper block">Reliable Studio Power</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Don't risk your home or your ware with amateur wiring. We provide the
              peace of mind that comes with professional, code-compliant kiln installation
              tailored to your specific equipment tailored to your specific equipment.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">500+</span>
                <span className="text-sm text-muted-foreground">Kilns Connected</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">100%</span>
                <span className="text-sm text-muted-foreground">Code Compliant</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">15yr</span>
                <span className="text-sm text-muted-foreground">Avg. Lifespan</span>
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
