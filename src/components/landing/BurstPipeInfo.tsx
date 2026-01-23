import { Droplets, ShieldCheck, Hammer, Construction, Zap, Shield, Wind, Waves } from "lucide-react";

const infoData = [
    {
        icon: Waves,
        title: "Immediate Water Removal",
        description: "When a pipe bursts, time is of the essence. Our high-velocity pumps remove standing water from floors and crawlspaces in minutes to prevent structural swelling.",
    },
    {
        icon: Wind,
        title: "Wall & Cavity Drying",
        description: "Water often hides behind drywall. We use specialized injection-dry systems to push warm air into wall cavities, preventing mold growth without major demolition.",
    },
    {
        icon: ShieldCheck,
        title: "Sanitization & Safety",
        description: "Water from pipes can lead to bacterial growth. We sanitize all affected surfaces with EPA-approved antimicrobial agents to ensure your home is safe for occupancy.",
    },
];

const benefitsData = [
    "Main Line Burst Repair",
    "Interior Pipe Leak Mitigation",
    "High-Volume Water Extraction",
    "Moisture Mapping & Thermal Imaging",
    "Drywall & Flooring Restoration",
    "Insurance Claim Documentation",
];

const BurstPipeInfo = () => {
    return (
        <section id="burst-info" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
                        Josephine Recovery Experts
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                        Professional Burst Pipe Restoration
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        Water damage from broken pipes is an emergency that requires immediate action.
                        Our Josephine team provides rapid stabilization and complete property restoration.
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
                                Advanced Recovery Protocol
                            </h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Burst pipes in Collin County homes are often caused by freezing temperatures or material failure. Our process goes beyond just drying; we provide full-scale restoration of your living space.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            We use industrial-grade dehumidifiers and thermal imaging cameras to track moisture through walls and floors, ensuring nothing is left damp to rot or grow mold.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
                            Service Standards
                        </h3>
                        <ul className="space-y-4">
                            {benefitsData.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <ShieldCheck className="w-6 h-6 text-copper flex-shrink-0 mt-0.5" />
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
                            Stop the flood. Protect your home. Call: (380) 266-0944.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BurstPipeInfo;
