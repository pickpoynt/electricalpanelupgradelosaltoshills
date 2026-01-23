import { ShieldCheck, Wind, AlertCircle, Thermometer, Droplets, Info } from "lucide-react";

const infoData = [
    {
        icon: Thermometer,
        title: "Thermal Mapping",
        description: "We use infrared thermography to identify cold spots and moisture traps in your attic that are invisible to the naked eye but perfect for mold growth.",
    },
    {
        icon: Wind,
        title: "Pressure Management",
        description: "During remediation, we maintain negative air pressure to ensure that mold spores cannot drift from your attic into your living spaces.",
    },
    {
        icon: Info,
        title: "Post-Removal Testing",
        description: "Once the mold is removed, we provide professional air quality testing to verify that spore counts have returned to safe, natural levels.",
    },
];

const benefitsData = [
    "Certified Black Mold Remediation",
    "HEPA Air Scrubbing & Filtration",
    "Antimicrobial Surface Treatment",
    "Ventilation & Humidity Balancing",
    "Josephine Local Expert Teams",
    "Eco-Safe & Non-Toxic Solutions",
];

const AtticMoldInfo = () => {
    return (
        <section id="attic-info" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
                        Josephine Attic Health Standards
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                        The Science of Attic Remediation
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        Attic mold is often a symptom of underlying insulation or ventilation failures. Our Josephine team doesn't just clean the mold; we correct the ecosystem of your attic to ensure it never returns.
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
                            <AlertCircle className="w-8 h-8 text-copper" />
                            <h3 className="text-2xl font-heading font-bold text-foreground">
                                Why Attic Mold Matters
                            </h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Mold in your Josephine attic isn't just a structural issue; due to the "stack effect," air from your attic can be pulled down into your living areas. If you have attic mold, you are likely breathing it in every day.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Our remediation process involves full containment and the use of eco-friendly biocides that bond to wood fibers, creating a long-term barrier against future mold colonies even in high-humidity Texas summers.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
                            Our Quality Commitment
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
                        <Droplets className="w-6 h-6 text-copper" />
                        <span className="text-primary-foreground font-medium text-lg">
                            Breathe easier. Call for a certified Josephine mold assessment: (380) 266-0944.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AtticMoldInfo;
