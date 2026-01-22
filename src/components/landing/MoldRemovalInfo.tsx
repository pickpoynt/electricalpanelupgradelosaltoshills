import { AlertTriangle, ShieldCheck, Search, Construction, Activity, Shield } from "lucide-react";

const infoData = [
    {
        icon: AlertTriangle,
        title: "Toxicity of Black Mold",
        description: "Stachybotrys chartarum, commonly known as black mold, produces mycotoxins that can lead to chronic health issues. Skykomish homes with high humidity or past water damage are particularly susceptible.",
    },
    {
        icon: Activity,
        title: "Respiratory Health Risks",
        description: "Exposure to mold spores can cause severe allergic reactions, asthma attacks, and long-term respiratory distress. Immediate professional intervention is crucial to protect your family's health.",
    },
    {
        icon: Search,
        title: "Certified Inspections",
        description: "Our Skykomish specialists use advanced thermal imaging and moisture meters to locate hidden mold growth behind walls and under floorboards that the naked eye might miss.",
    },
];

const benefitsData = [
    "Comprehensive Mold Testing & Sampling",
    "HEPA Air Filtration & Scrubbing",
    "Negative Pressure Containment",
    "Non-Toxic Antimicrobial Treatments",
    "Structural Drying & Dehumidification",
    "Final Clearance Air Quality Testing",
];

const MoldRemovalInfo = () => {
    return (
        <section id="mold-info" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
                        Skykomish Remediation Experts
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                        Professional Black Mold Removal
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        Mold isn't just an eyesore—it's a health hazard.
                        Our Skykomish team provides certified remediation services to restore your home to a safe, healthy environment.
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
                                Advanced Remediation Process
                            </h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Skykomish's damp climate can accelerate mold growth. We follow IICRC S520 standards for mold remediation, ensuring every spore is contained and eliminated.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            We don't just cover it up; we identify the moisture source, fix it, and remove all contaminated materials to prevent future regrowth.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
                            Mold Restoration Standards
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
                            Protect your home and health. Call today: +13802660944.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MoldRemovalInfo;
