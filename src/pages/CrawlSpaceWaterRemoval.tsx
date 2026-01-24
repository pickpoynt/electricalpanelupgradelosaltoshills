import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Flashlight, Shield, Bug, Wind } from "lucide-react";
import { Helmet } from "react-helmet-async";

const CrawlSpaceWaterRemoval = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Crawl Space Water Removal Eagle | Wet Crawl Space Cleanup</title>
                <meta name="description" content="Expert crawl space water removal and encapsulation in Eagle, CO. Prevent mold and protect your foundation." />
                <link rel="canonical" href="https://basement-water-removal-eagle-co.com/crawl-space-water-removal" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        Crawl Space Water Removal <br />
                        <span className="text-blue-300">Eagle, CO</span>
                    </>
                }
                subtitle="Protect your mountain home's foundation. We remove water, dry out crawl spaces, and install vapor barriers to prevent mold and structural rot."
                image="https://images.unsplash.com/photo-1596707328604-20a221f7362a?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                            Specialized Crawl Space Solutions
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-white p-8 rounded-2xl shadow-sm">
                                <Flashlight className="w-12 h-12 text-blue-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3">Limited Access Removal</h3>
                                <p className="text-slate-600">
                                    Crawl spaces in Eagle homes are often tight and difficult to access. We use specialized low-profile equipment to extract water from even the hardest-to-reach areas.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm">
                                <Bug className="w-12 h-12 text-blue-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3">Mold & Pest Prevention</h3>
                                <p className="text-slate-600">
                                    Damp crawl spaces attract pests and breed mold that affects your home's air quality. Our drying process creates an environment where pests can't thrive.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm mb-12">
                            <h3 className="text-2xl font-bold mb-4">Why Eagle Crawl Spaces Flood</h3>
                            <ul className="space-y-4 text-slate-600">
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-500 font-bold">•</span>
                                    <span><strong>Negative Grading:</strong> Snowmelt accumulating against the foundation seeps through vents and cracks.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-500 font-bold">•</span>
                                    <span><strong>High Water Table:</strong> During spring runoff, groundwater pressure can force water up through the earth floor effectively.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-500 font-bold">•</span>
                                    <span><strong>Plumbing Leaks:</strong> Unnoticed pipe leaks in the crawl space can release water for weeks before detection.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center">
                            <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                Our team cleans, sanitizes, and encapsulates crawl spaces to ensure they stay dry permanently. We install heavy-duty vapor barriers suitable for Colorado's freeze-thaw cycles.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
};

export default CrawlSpaceWaterRemoval;
