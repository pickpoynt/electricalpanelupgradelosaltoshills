import { AlertTriangle, ShieldCheck, Zap, Construction, Bell, Shield } from "lucide-react";

const infoData = [
    {
        icon: AlertTriangle,
        title: "10-Year Replacement Rule",
        description: "Smoke detectors have a finite lifespan. In Evanston, local fire codes and manufacturer standards recommend replacing units every 10 years as sensors lose sensitivity to smoke particles.",
    },
    {
        icon: Bell,
        title: "Why Hardwired Matters",
        description: "Hardwired detectors are interconnected—when one alarms, they all alarm. This critical feature ensures you're alerted to fire in the basement even if you're in an upstairs bedroom.",
    },
    {
        icon: Zap,
        title: "CO/Smoke Combo Units",
        description: "Modern Evanston homes benefit from combination Carbon Monoxide and Smoke detectors. We install units that provide vocal alerts and backup battery protection for total safety.",
    },
];

const benefitsData = [
    "Full Home Interconnection Audit",
    "10-Year Lithium Battery Backups",
    "Carbon Monoxide (CO) Protection",
    "Evanston Building Code Compliance",
    "Photoelectric Sensor Technology",
    "Annual Safety Testing Services",
];

const SmokeDetectorInfo = () => {
    return (
        <section id="smoke-info" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
                        Life Safety Experts
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                        Is Your Home Properly Protected?
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        Functional smoke detectors are your first line of defense against fire.
                        Evanston Smoke Detector Experts ensure your hardwired system is interconnected, code-compliant, and ready when it matters most.
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
                            <Construction className="w-8 h-8 text-copper" />
                            <h3 className="text-2xl font-heading font-bold text-foreground">
                                Professional Calibration & Testing
                            </h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Interconnected hardwired systems require professional installation to ensure the communication wire (the 'traveler') is properly signaling across all floors of your Evanston home.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            We don't just 'swap' units. We perform a full continuity test across your entire network to guarantee that an alert in the kitchen wakes the family in the nursery.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
                            Our Protection Standards
                        </h3>
                        <ul className="space-y-4">
                            {benefitsData.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Bell className="w-6 h-6 text-copper flex-shrink-0 mt-0.5" />
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
                        <Shield className="w-6 h-6 text-copper" />
                        <span className="text-primary-foreground font-medium text-lg">
                            Seconds count in a fire. Get your detectors checked: (877) 792-1410.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SmokeDetectorInfo;


