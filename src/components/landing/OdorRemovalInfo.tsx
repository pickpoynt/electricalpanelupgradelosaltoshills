import { Wind, ShieldCheck, Construction, Shield, Sparkles, Zap, Droplets, Thermometer } from "lucide-react";

const infoData = [
    {
        icon: Wind,
        title: "Molecular Destruction",
        description: "Musty smells are caused by volatile organic compounds (VOCs). Our hydroxyl technology destroys these compounds at the molecular level, leaving the air fresh and safe.",
    },
    {
        icon: Thermometer,
        title: "Thermal Fogging",
        description: "Water damage odors can hide in insulation and wall cavities. Thermal fogging allows us to reach these hidden areas with air-purifying agents that neutralize odors instantly.",
    },
    {
        icon: ShieldCheck,
        title: "HEPA Air Scrubbing",
        description: "We use industrial-grade HEPA filters to remove 99.97% of airborne mold spores and particles that contribute to persistent smells and poor indoor air quality.",
    },
];

const benefitsData = [
    "Advanced Hydroxyl Generation",
    "High-Intensity Ozone Treatment",
    "Deep Fabric & Carpet Deodorization",
    "Moisture-Targeted Steam Cleaning",
    "Mold & Mildew Odor Elimination",
    "Documentation for Insurance Claims",
];

const OdorRemovalInfo = () => {
    return (
        <section id="odor-info" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
                        Iowa Colony Purification Experts
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                        The Science of Pure Air
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        Water damage doesn't just damage structures; it compromises the air you breathe. Our Iowa Colony team specializes in deep molecular purification to restore a healthy environment.
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
                                High-Tech Odor Mitigation
                            </h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Texas humidity provides the perfect breeding ground for mold-related odors after a water leak. Standard air fresheners only mask the problem. We use industrial hydroxyl generators that safely work while people are in the home.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            For more severe cases, such as sewage backups or significant mold infestations, we deploy ozone treatment that completely sterilizes the area of all biological odor sources.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
                            Our Standards
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
                            Breathe clean air again. Call for a site evaluation: (380) 266-0944.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OdorRemovalInfo;
