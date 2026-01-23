import { ShieldCheck, Droplets, Thermometer, Wind, Ruler, AlertTriangle } from "lucide-react";

const infoData = [
    {
        icon: Thermometer,
        title: "Moisture Meter Readings",
        description: "We take precise moisture readings at multiple depths to ensure complete drying. Wisconsin's cold winters can trap moisture deep in wall cavities.",
    },
    {
        icon: Wind,
        title: "Air Movement Strategy",
        description: "Strategic placement of air movers creates optimal drying conditions. We adjust for Hudson's humidity levels and seasonal temperature variations.",
    },
    {
        icon: Ruler,
        title: "Precision Cutting & Fitting",
        description: "Our craftsmen cut replacement drywall to exact specifications, ensuring tight seams and professional results that pass any inspection.",
    },
];

const benefitsData = [
    "24/7 Emergency Water Extraction",
    "Thermal Imaging Moisture Detection",
    "Industrial Dehumidification Systems",
    "Certified Drywall Installation",
    "Seamless Texture Matching & Painting",
    "Direct Insurance Billing in Wisconsin",
];

const DrywallInfo = () => {
    return (
        <section id="drywall-info" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
                        Hudson Drywall Restoration Standards
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                        The Science of Drywall Recovery
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        Water-damaged drywall isn't just unsightly—it's a health hazard. Our Hudson team uses advanced moisture detection and controlled drying to ensure complete restoration without hidden mold growth.
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
                            <AlertTriangle className="w-8 h-8 text-copper" />
                            <h3 className="text-2xl font-heading font-bold text-foreground">
                                Why Speed Matters
                            </h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            In Hudson's climate, wet drywall can begin growing mold in as little as 24-48 hours. The longer water sits in your walls, the more extensive (and expensive) the damage becomes.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Our rapid response team arrives with industrial extraction equipment and begins the drying process immediately. We monitor moisture levels daily until readings confirm your walls are completely dry and safe.
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
                        <Droplets className="w-6 h-6 text-copper" />
                        <span className="text-primary-foreground font-medium text-lg">
                            Dry walls, healthy home. Call for Hudson's best drywall restoration: (380) 266-0944.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DrywallInfo;
