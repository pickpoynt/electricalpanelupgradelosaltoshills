import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Truck, Clock, ShieldAlert, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";

const EmergencyWaterExtraction = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Emergency Water Extraction Eagle CO | 24/7 Water Removal</title>
                <meta name="description" content="24/7 Rapid response water removal for Eagle mountain homes. Truck-mounted extraction for fast drying." />
                <link rel="canonical" href="https://basement-water-removal-eagle-co.com/emergency-water-extraction" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        Emergency Water Extraction <br />
                        <span className="text-blue-300">Eagle, Colorado</span>
                    </>
                }
                subtitle="24/7 Rapid response water removal for Eagle mountain homes. Our truck-mounted extraction units remove standing water fast to prevent structural damage."
                image="https://images.unsplash.com/photo-1604168612704-edf7120be425?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                            Rapid Water Removal When Disaster Strikes
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <Truck className="w-12 h-12 text-blue-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3">Truck-Mounted Power</h3>
                                <p className="text-slate-600">
                                    Our industrial truck-mounted extraction units provide superior suction to remove water from carpets, padding, and subfloors faster than portable units.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <Clock className="w-12 h-12 text-blue-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3">30-Minute Response</h3>
                                <p className="text-slate-600">
                                    We understand Eagle's geography. Our local teams are dispatched immediately to minimize the time water sits in your property.
                                </p>
                            </div>
                        </div>

                        <div className="prose max-w-none text-slate-600 leading-relaxed">
                            <p className="mb-6">
                                In Eagle's high-altitude climate, standing water can quickly freeze or cause rapid mold growth due to indoor heating differentials. Our emergency water extraction service is designed for the specific needs of mountain properties.
                            </p>
                            <p className="mb-6">
                                We handle everything from major flooding events caused by snowmelt and river overflow to internal plumbing failures. Our comprehensive process includes:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-8">
                                <li>Immediate water source identification and isolation</li>
                                <li>Submersible pump-out for deep standing water</li>
                                <li>Weighted extraction for carpet and pad preservation</li>
                                <li>Thermal imaging to verify complete water removal</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
};

export default EmergencyWaterExtraction;
