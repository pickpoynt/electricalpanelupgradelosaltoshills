import { Construction, ShieldCheck, Paintbrush, Shield, Sparkles, Zap, Droplets, Ruler } from "lucide-react";

const infoData = [
    {
        icon: Droplets,
        title: "Moisture Assessment",
        description: "We use infrared cameras to see behind your ceiling and walls, identifying the exact extent of water migration and checking for hidden mold growth.",
    },
    {
        icon: Construction,
        title: "Structural Bracing",
        description: "If a ceiling is sagging or saturated, we provide immediate emergency bracing to protect your belongings and prevent a dangerous collapse.",
    },
    {
        icon: Ruler,
        title: "Expert Finishing",
        description: "Matching popcorn texture or smooth finishes requires a master's touch. Our craftsmen ensure the repair is invisible once the paint dries.",
    },
];

const benefitsData = [
    "Comprehensive Ceiling Leak Locating",
    "Furniture & Flooring Protection",
    "High-Grade Antimicrobial Treatment",
    "Industrial Dehumidification",
    "Seamless Drywall & Plaster Repair",
    "Direct Billing to Arkansas Insurance",
];

const CeilingRepairInfo = () => {
    return (
        <section id="ceiling-info" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
                        Eureka Springs Restoration Standards
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                        Total Ceiling Recovery Experts
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        A water-damaged ceiling is a clock ticking toward structural failure. Our Eureka Springs team provides the specialized care needed to stabilize, dry, and restore your home's most vital surfaces.
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
                            <Paintbrush className="w-8 h-8 text-copper" />
                            <h3 className="text-2xl font-heading font-bold text-foreground">
                                Professional Restoration
                            </h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Ceilings in historic Eureka Springs homes often feature unique heights and finishes. Our team is trained in both modern drywall techniques and traditional plaster restoration, ensuring every repair respects the architectural integrity of your property.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            We don't just patch holes; we restore peace of mind. By addressing the root cause of the moisture and using commercial-grade drying equipment, we ensure that mold never has a chance to take root in your ceiling cavity.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
                            Our Service Guarantee
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
                            Safe and secure ceilings. Call for a structural assessment: (380) 266-0944.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CeilingRepairInfo;
