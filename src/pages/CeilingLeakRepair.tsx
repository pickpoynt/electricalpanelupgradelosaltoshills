import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { ArrowUp, CloudRain, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";

const CeilingLeakRepair = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Ceiling Leak Water Damage Repair Gulf Breeze | Roof Leak Restoration</title>
                <meta name="description" content="Emergency ceiling leak repair and drying in Gulf Breeze. We fix water damage from roof leaks and prevent mold in your attic and ceiling." />
                <link rel="canonical" href="https://storm-surge-cleanup-gulf-breeze-fl.com/ceiling-leak-water-damage-repair" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        Ceiling Leak Repair <br />
                        <span className="text-blue-300">Gulf Breeze, FL</span>
                    </>
                }
                subtitle="Fast drying for water damaged ceilings and attics caused by roof leaks and wind-driven rain."
                image="https://images.unsplash.com/photo-1540320436-b6d36e2f69dc?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                            Water Damaged Ceiling Restoration
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <ArrowUp className="w-12 h-12 text-blue-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3">Fall Hazard Safety</h3>
                                <p className="text-slate-600">
                                    Water-saturated drywall is heavy and can collapse. We safely remove damaged ceiling materials and extract water from the insulation above.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <CloudRain className="w-12 h-12 text-blue-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3">Attic Drying</h3>
                                <p className="text-slate-600">
                                    Moisture in the attic leads to mold spreading through your HVAC system. We use specialized equipment to dry attic spaces completely.
                                </p>
                            </div>
                        </div>

                        <div className="prose max-w-none text-slate-600 leading-relaxed">
                            <p>
                                Wind-driven rain during tropical storms often pushes water under shingles and into your attic. If you see a stain on your ceiling, the damage above is often much worse. Call us immediately to assess the extent of the saturation and prevent a ceiling collapse.
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

export default CeilingLeakRepair;
