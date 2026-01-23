import { AlertTriangle, Droplets, Wind, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const ToiletOverflowInfo = () => {
    return (
        <section id="overflow-info" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                            Understanding Toilet Overflow Damage in Timnath
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Toilet overflows are more than just messy—they're health hazards that require immediate professional intervention. Here's what makes our approach different.
                        </p>
                    </div>

                    {/* Category 3 Water Explanation */}
                    <div className="bg-card border border-border rounded-lg p-8 mb-8">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center flex-shrink-0">
                                <AlertTriangle className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                                    Why Toilet Overflows Require Specialized Treatment
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    Toilet overflow water is classified as <strong>Category 3 "Black Water"</strong>—the most contaminated water category. It contains harmful bacteria, viruses, and pathogens that can cause serious illness. Standard water damage restoration isn't enough.
                                </p>
                                <p className="text-muted-foreground">
                                    Our team is certified in sewage cleanup protocols and uses EPA-approved antimicrobial treatments to ensure your home is not just dry, but <em>safe</em>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* The Timnath Challenge */}
                    <div className="bg-muted/30 border border-border rounded-lg p-8 mb-8">
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                            The Timnath Plumbing Challenge
                        </h3>
                        <p className="text-muted-foreground mb-4">
                            Timnath's rapid growth means many homes have new plumbing systems, but the area's hard water and occasional pressure fluctuations can stress toilet seals and wax rings. Additionally, Colorado's freeze-thaw cycles can cause hidden pipe damage that leads to unexpected backups.
                        </p>
                        <p className="text-muted-foreground">
                            We've responded to over 500 overflow emergencies in Larimer County and understand exactly how local conditions affect your plumbing and the best restoration strategies for Colorado homes.
                        </p>
                    </div>

                    {/* Our 3-Phase Process */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">
                            Our 3-Phase Overflow Restoration Process
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-card border border-border rounded-lg p-6">
                                <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-4">
                                    <Droplets className="w-6 h-6 text-primary-foreground" />
                                </div>
                                <h4 className="text-xl font-heading font-bold text-foreground mb-3">
                                    Phase 1: Emergency Extraction
                                </h4>
                                <p className="text-muted-foreground text-sm mb-3">
                                    Within 30 minutes, we arrive with truck-mounted extractors to remove all contaminated water and sewage. We contain the affected area to prevent cross-contamination.
                                </p>
                                <ul className="space-y-1 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-copper mt-1">•</span>
                                        <span>Industrial water extraction</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-copper mt-1">•</span>
                                        <span>Contaminated material removal</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-copper mt-1">•</span>
                                        <span>Initial sanitization spray</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-card border border-border rounded-lg p-6">
                                <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-4">
                                    <Wind className="w-6 h-6 text-primary-foreground" />
                                </div>
                                <h4 className="text-xl font-heading font-bold text-foreground mb-3">
                                    Phase 2: Structural Drying
                                </h4>
                                <p className="text-muted-foreground text-sm mb-3">
                                    We deploy commercial air movers and dehumidifiers, monitoring moisture levels every 24 hours with thermal imaging and moisture meters until readings are normal.
                                </p>
                                <ul className="space-y-1 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-copper mt-1">•</span>
                                        <span>HEPA air filtration</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-copper mt-1">•</span>
                                        <span>Subfloor cavity drying</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-copper mt-1">•</span>
                                        <span>Daily moisture tracking</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-card border border-border rounded-lg p-6">
                                <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-4">
                                    <Shield className="w-6 h-6 text-primary-foreground" />
                                </div>
                                <h4 className="text-xl font-heading font-bold text-foreground mb-3">
                                    Phase 3: Restoration & Protection
                                </h4>
                                <p className="text-muted-foreground text-sm mb-3">
                                    Once dry, we apply antimicrobial treatments, replace damaged materials, and restore your bathroom to pre-loss condition with odor-free, sanitized results.
                                </p>
                                <ul className="space-y-1 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-copper mt-1">•</span>
                                        <span>EPA-approved disinfection</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-copper mt-1">•</span>
                                        <span>Flooring & drywall replacement</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-copper mt-1">•</span>
                                        <span>Final air quality testing</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Hidden Damage Warning */}
                    <div className="bg-copper/10 border border-copper/30 rounded-lg p-6 mb-8">
                        <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                            ⚠️ The Hidden Danger: Subfloor Contamination
                        </h3>
                        <p className="text-muted-foreground mb-3">
                            Many homeowners attempt DIY cleanup, but toilet overflow water seeps through grout lines and under baseboards into the subfloor within minutes. If not properly extracted and sanitized, this creates a breeding ground for mold and bacteria that can persist for years.
                        </p>
                        <p className="text-muted-foreground">
                            Our thermal imaging cameras detect moisture you can't see, and our truck-mounted extractors pull water from deep within structural cavities—something household wet-vacs simply cannot do.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="text-center bg-gradient-hero rounded-lg p-8">
                        <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4">
                            Don't Wait—Sewage Damage Worsens Every Hour
                        </h3>
                        <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                            Every minute counts when dealing with toilet overflow. Call Timnath Overflow Pros now for immediate emergency response and professional sewage cleanup.
                        </p>
                        <Button size="lg" variant="secondary" asChild>
                            <a href="tel:+13802660944" className="flex items-center gap-2 mx-auto w-fit">
                                <Phone className="w-5 h-5" />
                                Call (380) 266-0944 Now
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToiletOverflowInfo;
