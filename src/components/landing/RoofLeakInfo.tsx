import { Droplets, ShieldCheck, Hammer, Construction, Zap, Shield, Wind, CloudRain, ShieldAlert } from "lucide-react";

const infoData = [
    {
        icon: CloudRain,
        title: "Emergency Roof Tarping",
        description: "Don't let the next Florida storm flood your living room. We provide immediate, commercial-grade tarping to seal your roof and stop incoming water within the hour.",
    },
    {
        icon: Wind,
        title: "Ceiling & Attic Drying",
        description: "Water trapped above your drywall is a breeding ground for mold. We use specialized drying systems to pull moisture out of insulation and ceiling joists quickly.",
    },
    {
        icon: ShieldAlert,
        title: "Mold Prevention Cleanup",
        description: "Florida's high humidity means mold can grow in 24 hours. We sanitize all affected areas with EPA-approved antimicrobial agents to protect your family's health.",
    },
];

const benefitsData = [
    "Hurricane Damage Stabilization",
    "High-Volume Water Extraction",
    "Moisture Mapping & Thermal Imaging",
    "Industrial Attic Dehumidification",
    "Drywall & Ceiling Reconstruction",
    "Full Insurance Claim Support",
];

const RoofLeakInfo = () => {
    return (
        <section id="roof-info" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
                        Westlake Storm Damage Pros
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                        Professional Roof Leak Restoration
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        A leaking roof in Westlake is an emergency that requires immediate stabilization to prevent total interior loss. Our team provides the speed and expertise needed to save your home.
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
                                Advanced Storm Recovery
                            </h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Westlake's intense summer rains can exploit even the smallest roof vulnerability. Our process involves rapid tarping to stop the water, followed by deep structural drying to remove moisture from your building's frame.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            We deploy heavy-duty axial fans and LGR dehumidifiers to cycle air through attic spaces, ensuring that hidden moisture doesn't lead to permanent structural Damage or dangerous mold outbreaks.
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
                            Stop the leak. Save your property. Call Westlake's Pros: (380) 266-0944.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoofLeakInfo;
