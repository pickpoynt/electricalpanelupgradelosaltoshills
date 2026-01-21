import { Hammer, Microscope, Landmark, PenTool, HardHat, FileCheck } from "lucide-react";

const reasons = [
  {
    icon: Microscope,
    title: "Video Diagnostics",
    description: "We don't guess. We flush your lines and use high-resolution cameras to identify exactly where the breaks, bellies, and corrosion are located.",
  },
  {
    icon: Landmark,
    title: "Foundation Safety",
    description: "Leaking cast iron pipes can cause slab heave and foundation settling. Our repairs stabilize your plumbing and protect your home's structural integrity.",
  },
  {
    icon: Hammer,
    title: "Minimal Disruption",
    description: "Our tunneling and lining methods mean you don't have to move out, and your tile, hardwood, or carpet flooring stays exactly where it belongs.",
  },
  {
    icon: PenTool,
    title: "Precision Descaling",
    description: "Sometimes replacement isn't needed. Our picote descaling tools can return old cast iron to 'like-new' smoothness, extending its life by decades.",
  },
  {
    icon: HardHat,
    title: "Master Plumbers",
    description: "This is complex underground work. Our team consists of licensed master plumbers and excavation specialists who know Louisiana soil conditions.",
  },
  {
    icon: FileCheck,
    title: "Engineer Reports",
    description: "We can work with structural engineers to provide pre- and post-repair hydrostatic test reports, essential for real estate transactions.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Preserve Your Property
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Why Trust Us with Your
              <span className="text-gradient-copper block">Cast Iron Pipes?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Cast iron was the standard until the mid-70s, but it has a lifespan of 50-60 years.
              In Baton Rouge's reactive soil, these pipes fail, leading to slow drains, backups,
              and costly structural damage. We are the experts in fixing them right.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">500+</span>
                <span className="text-sm text-muted-foreground">Slabs Saved</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">98%</span>
                <span className="text-sm text-muted-foreground">No-Dig Success</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">50yr</span>
                <span className="text-sm text-muted-foreground">Pipe Warranty</span>
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
