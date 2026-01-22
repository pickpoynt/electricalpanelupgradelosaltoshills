import { AlertOctagon, CheckSquare, Crosshair, Sprout, Hammer, Activity } from "lucide-react";

const infoData = [
    {
        icon: Sprout,
        title: "Root Dangers",
        description: "Tiny roots seek out moisture in clay pipe joints. As they grow, they exert massive pressure, eventually cracking or crushing the pipe.",
    },
    {
        icon: AlertOctagon,
        title: "Off-Set Joints",
        description: "Ground movement often causes clay pipe sections to shift (offset). This creates lips that snag toilet paper and debris, leading to constant clogs.",
    },
    {
        icon: Activity,
        title: "Trenchless Tech",
        description: "We prefer non-invasive methods. Pipe relining creates a new pipe inside the old one, while pipe bursting replaces it entirely—both without digging trenches.",
    },
];

const benefitsData = [
    "Prevents sewage backups",
    "Stops root growth continuously",
    "Improves drainage flow speed",
    "Increases home resale value",
    "Preserves lawns and driveways",
    "50+ year life expectancy",
];

const ClayPipeInfo = () => {
    return (
        <section id="clay-pipe-info" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
                        Underground Knowledge
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                        Why Clay Pipes Fail
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        Vitrified clay is durable, but it's brittle and segmented. Understanding the weaknesses
                        of your Modesto home's plumbing is the first step to a permanent solution.
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
                            <Crosshair className="w-8 h-8 text-copper" />
                            <h3 className="text-2xl font-heading font-bold text-foreground">
                                Surgical Precision
                            </h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            We assume nothing. Every job begins with a fiber-optic camera inspection.
                            We identify if the problem is a simple clog, a few invasive roots, or a
                            collapsed line.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            This diagnosis allows us to prescribe the exact treatment your sewer needs,
                            saving you thousands over unnecessary "guesswork" replacements.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
                            Benefits of Rehabilitation
                        </h3>
                        <ul className="space-y-4">
                            {benefitsData.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckSquare className="w-6 h-6 text-copper flex-shrink-0 mt-0.5" />
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
                        <Hammer className="w-6 h-6 text-copper" />
                        <span className="text-primary-foreground font-medium text-lg">
                            Stop the damage before it gets worse. Call (877) 792-1410.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClayPipeInfo;


