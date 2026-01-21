import { FileWarning, ShieldCheck, Home, Gauge, Users, Briefcase } from "lucide-react";

const reasons = [
  {
    icon: FileWarning,
    title: "Avoid Insurance Drops",
    description: "Many insurance carriers in Chesapeake are refusing to renew policies for homes with Poly-B plumbing due to high rupture risk.",
  },
  {
    icon: ShieldCheck,
    title: "25-Year Warranty",
    description: "Our Upgrade to PEX-A pipes comes with a transferable 25-year manufacturer warranty, adding tangible value to your property.",
  },
  {
    icon: Home,
    title: "Market Value Boost",
    description: "Replacing Poly-B pipes eliminates a major red flag during pre-purchase inspections, helping you sell your home faster and for more money.",
  },
  {
    icon: Gauge,
    title: "Better Water Pressure",
    description: "Old Quest pipes often have smaller internal diameters than modern PEX. A repipe often results in noticeably better flow and pressure.",
  },
  {
    icon: Briefcase,
    title: "Turnkey Service",
    description: "We handle everything: permits, plumbing, drywall repair, and painting. You deal with one contractor, not three.",
  },
  {
    icon: Users,
    title: "Local Experience",
    description: "We understand Chesapeake homes from Greenbrier to Deep Creek. We know where the pipes run and how to replace them efficiently.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Real Estate Protection
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Why Replace Your
              <span className="text-gradient-copper block">Polybutylene Pipes?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Installed between 1978 and 1995, Polybutylene pipes fail due to chlorine degradation
              from municipal water. It's not a matter of "if", but "when" they will burst, potentially
              causing tens of thousands in water damage.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">1k+</span>
                <span className="text-sm text-muted-foreground">Homes Repiped</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">100%</span>
                <span className="text-sm text-muted-foreground">Success Rate</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">A+</span>
                <span className="text-sm text-muted-foreground">BBB Rating</span>
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
