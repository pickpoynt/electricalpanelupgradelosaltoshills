import { AlertTriangle, Home, FileText, CheckCircle, Flame, Droplet } from "lucide-react";

const infoData = [
    {
        icon: AlertTriangle,
        title: "Identifying Poly-B",
        description: "Look for grey, blue, or black flexible plastic pipes. They are often stamped with 'PB2110'. The fittings are usually grey plastic or copper.",
    },
    {
        icon: Droplet,
        title: "Why They Fail",
        description: "Chlorine and other oxidants in city water react with the polybutylene, causing it to become brittle and crack from the inside out.",
    },
    {
        icon: Flame,
        title: "Better Materials",
        description: "We use PEX-A (Uponor), which expands to freeze without bursting and resists corrosion, or Type L Copper for superior durability.",
    },
];

const benefitsData = [
    "Restore full insurability",
    "Eliminate burst pipe anxiety",
    "Increase resale value",
    "Clean, safe drinking water",
    "Professional drywall patching",
    "25-year transferrable warranty",
];

const PolyBInfo = () => {
    return (
        <section id="polyb-info" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
                        Know The Risks
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                        Understanding the Polybutylene Hazard
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        Dubbed "the ticking time bomb" of plumbing, these pipes were installed in millions of homes.
                        If your Chesapeake home was built between 1978 and 1995, you likely have them.
                    </p>
                </div>

                {/* Info Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {infoData.map((info, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-xl p-8 shadow-lg border border-border hover:border-copper/30 transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                                <info.icon className="w-7 h-7 text-copper" />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                                {info.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {info.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Two Column Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-xl border border-border">
                        <div className="flex items-center gap-3 mb-6">
                            <FileText className="w-8 h-8 text-copper" />
                            <h3 className="text-2xl font-heading font-bold text-foreground">
                                Insurance Implications
                            </h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Many major insurance providers in Virginia (like State Farm, Allstate, and others)
                            add surcharges or completely exclude water damage coverage for homes with known Poly-B plumbing.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Replacing your pipes is often the only way to secure a standard homeowners policy
                            at a competitive rate. We provide the certification letters insurers need.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
                            Benefits of Repiping
                        </h3>
                        <ul className="space-y-4">
                            {benefitsData.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-copper flex-shrink-0 mt-0.5" />
                                    <span className="text-primary-foreground/90 text-lg">
                                        {benefit}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-8 py-4">
                        <Home className="w-6 h-6 text-copper" />
                        <span className="text-primary-foreground font-medium text-lg">
                            Secure your home's future. Call (877) 792-1410 for an inspection.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PolyBInfo;


