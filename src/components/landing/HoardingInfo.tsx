import { Box, ShieldCheck, Construction, Shield, Wind, Waves, Heart, Trash2 } from "lucide-react";

const infoData = [
    {
        icon: Box,
        title: "Compassionate Sorting",
        description: "Water damage in hoarding situations is overwhelming. We work closely with you to sort and protect valuable belongings while managing the restoration of your home.",
    },
    {
        icon: Trash2,
        title: "Deep Sanitization",
        description: "Hoarding environments can harbor biohazards that water damage exacerbates. We use specialized sanitizers and air scrubbers to ensure your Bozeman home is healthy.",
    },
    {
        icon: Wind,
        title: "Structural Drying",
        description: "When layers of items are present, water penetrates deep into structural components. We use advanced drying technology to reach hidden moisture and prevent rot.",
    },
];

const benefitsData = [
    "Specialized Hoarding Content Sort",
    "Biohazard Water Cleanup",
    "Odor Deodorization & Removal",
    "IICRC Certified Water Technicians",
    "Safe Disposal of Damaged Items",
    "Full Insurance Documentation Support",
];

const HoardingInfo = () => {
    return (
        <section id="hoarding-info" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
                        Bozeman Hoarding Specialists
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                        Complex Water Recovery Solutions
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        Restoring a home with hoarding challenges after water damage requires a specialized set of skills. We bring empathy, efficiency, and professional-grade recovery to Bozeman.
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
                                Professional Triage & Recovery
                            </h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Bozeman's extreme temperatures can lead to pipe bursts or rapid snowmelt, causing catastrophic flooding. In a hoarding house, this water is trapped, leading to rapid mold growth and structural Damage.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Our team is trained to handle these high-density cleanup projects, providing the necessary biohazard gear and high-output drying equipment to stabilize and restore your property correctly.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
                            Our Service Standards
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
                            Safe. Professional. Discrete. Call for consultation: (380) 266-0944.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HoardingInfo;
