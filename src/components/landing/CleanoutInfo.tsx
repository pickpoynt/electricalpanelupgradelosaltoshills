import { MapPin, Camera, Wrench, CheckCircle, Home, Shield } from "lucide-react";

const infoData = [
    {
        icon: MapPin,
        title: "Where to Install",
        description: "Cleanouts should be placed at property lines, before the city tap, at direction changes over 45°, and every 100 feet on long runs.",
    },
    {
        icon: Camera,
        title: "Camera Inspection Ready",
        description: "With a cleanout, plumbers can run sewer cameras to pinpoint clogs, root intrusion, and pipe damage without digging.",
    },
    {
        icon: Wrench,
        title: "Easy Maintenance",
        description: "Routine drain cleaning becomes simple. Plumbers can snake your main line in minutes instead of hours of invasive work.",
    },
];

const benefitsData = [
    "Avoid cutting into floors or walls",
    "Enable sewer camera inspections",
    "Reduce drain cleaning costs by 60%+",
    "Meet code requirements for new additions",
    "Increase home resale value",
    "Protect landscaping and hardscaping",
];

const CleanoutInfo = () => {
    return (
        <section id="cleanout-info" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
                        Smart Homeowner Investment
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                        Why Every Home Needs a Cleanout
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        A sewer cleanout is a simple access point that gives plumbers direct entry to your
                        main drain line. It's the difference between a $200 drain cleaning and a $3,000 emergency.
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
                            <Shield className="w-8 h-8 text-copper" />
                            <h3 className="text-2xl font-heading font-bold text-foreground">
                                Code Requirements
                            </h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Plano building codes require cleanouts for new construction and major remodels.
                            Even if your home was built before these requirements, adding one is a smart upgrade.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            We install cleanouts that meet current IPC (International Plumbing Code) standards,
                            including proper sizing, depth, and accessibility requirements.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
                            Cleanout Benefits
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
                            Get a free cleanout quote. Call (877) 792-1410 today.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CleanoutInfo;
