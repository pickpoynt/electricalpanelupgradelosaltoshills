import { Droplets, ShieldCheck, Hammer, Construction, Zap, Shield, Wind } from "lucide-react";

const infoData = [
    {
        icon: Droplets,
        title: "Immediate Water Extraction",
        description: "Standing water is your property's worst enemy. Our powerful extraction units remove water from carpets and subfloors instantly to prevent long-term saturation.",
    },
    {
        icon: Wind,
        title: "Structural Drying Specialists",
        description: "Iowa Colony's humidity can slow down natural drying. We use industrial-grade dehumidifiers to pull moisture from the air and walls, preventing mold growth.",
    },
    {
        icon: Hammer,
        title: "Complete Structural Repair",
        description: "From drywall replacement to flooring repair, our team handles the entire restoration process from start to finish, ensuring your home is better than before.",
    },
];

const benefitsData = [
    "24/7 Emergency Water Extraction",
    "Professional Mold Remediation",
    "Structural Drying & Dehumidification",
    "Insurance Claim Documentation",
    "Sewage Cleanup & Sanitization",
    "Carpet & Upholstery Cleaning",
];

const FloodDamageInfo = () => {
    return (
        <section id="flood-info" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
                        Iowa Colony Restoration Experts
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                        Professional Flood Damage Restoration
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        Water damage doesn't wait, and neither do we.
                        Our Iowa Colony team provides specialized restoration services to protect your home's structural integrity.
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
                                Advanced Restoration Process
                            </h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Brazoria County's storm seasons can be devastating to homes. We don't just dry out the water; we provide comprehensive solutions that sanitize and restore your property.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            From precision moisture mapping to high-output air movers, we ensure every inch of your property is dry and safe for your family to return to.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
                            Restoration Standards
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
                            Protect your property and health. Call today: (380) 266-0944.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FloodDamageInfo;
