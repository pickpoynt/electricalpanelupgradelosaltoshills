import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Waves, Anchor, Wind } from "lucide-react";
import { Helmet } from "react-helmet-async";

const StormSurgeCleanup = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Storm Surge Water Damage Cleanup Gulf Breeze | Saltwater Extraction</title>
                <meta name="description" content="Expert storm surge cleanup in Gulf Breeze, FL. We remove saltwater, prevent corrosion, and dry structural elements after hurricanes." />
                <link rel="canonical" href="https://storm-surge-cleanup-gulf-breeze-fl.com/storm-surge-water-damage-cleanup" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        Storm Surge Cleanup <br />
                        <span className="text-blue-300">Gulf Breeze, FL</span>
                    </>
                }
                subtitle="Complete salt water extraction and structural drying for homes flooded by hurricane storm surges."
                image="https://images.unsplash.com/photo-1454789476662-53eb23ba5907?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                            Recovery from Coastal Flooding
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                                <Waves className="w-12 h-12 text-blue-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3">Saltwater Extraction</h3>
                                <p className="text-slate-600">
                                    Salt water damages building materials faster than fresh water. We prioritize immediate extraction and freshwater flushing to save your foundation and electrical systems.
                                </p>
                            </div>
                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                                <Anchor className="w-12 h-12 text-blue-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3">Structural Drying</h3>
                                <p className="text-slate-600">
                                    We remove saturated drywall, insulation, and flooring to expose the frame. Our industrial air movers dry the structure before rot can set in.
                                </p>
                            </div>
                        </div>

                        <div className="prose max-w-none text-slate-600 leading-relaxed">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">The Gulf Breeze Surge Risk</h3>
                            <p className="mb-4">
                                Living on the peninsula means exposure to surges from both Pensacola Bay and the Gulf. When water enters your ground floor, it brings contaminants and salt that require specialized cleaning protocols.
                            </p>
                            <p>
                                Our team is experienced in handling Category 3 water damage (black water) which often accompanies storm surges. We sanitize, clean, and dry your property to ensure it is safe for habitation.
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

export default StormSurgeCleanup;
