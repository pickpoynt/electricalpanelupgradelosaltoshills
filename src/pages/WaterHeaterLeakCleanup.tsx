import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Heater, Flame, Waves } from "lucide-react";
import { Helmet } from "react-helmet-async";

const WaterHeaterLeakCleanup = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Water Heater Leak Cleanup Gulf Breeze | Utility Room Flood</title>
                <meta name="description" content="Emergency water extraction for water heater failures in Gulf Breeze. We handle floods in utility rooms and garages." />
                <link rel="canonical" href="https://storm-surge-cleanup-gulf-breeze-fl.com/water-heater-leak-cleanup" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        Water Heater Leak Cleanup <br />
                        <span className="text-blue-300">Gulf Breeze, FL</span>
                    </>
                }
                subtitle="Massive water removal for tank failures. When your water heater floods your garage or utility room, we extract it fast."
                image="https://images.unsplash.com/photo-1585704058356-d7e11f185c7c?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                            Water Heater Failure Restoration
                        </h2>

                        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                            <div>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    Water heaters in Gulf Breeze are often located in garages or interior closets. When they fail, they can release 40-80 gallons of water, damaging nearby drywall, flooring, and stored items.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Our team extracts the water, removes moisture from drywall wicking, and dries the concrete or subfloor to prepare the area for your plumber to install a new unit.
                                </p>
                            </div>
                            <div className="bg-slate-100 p-8 rounded-2xl">
                                <h3 className="text-xl font-bold mb-4">Common Failure Signs</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <Flame className="w-5 h-5 text-orange-500" />
                                        <span className="text-slate-700">Rust colored water</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Waves className="w-5 h-5 text-blue-500" />
                                        <span className="text-slate-700">Moisture around base</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Heater className="w-5 h-5 text-red-500" />
                                        <span className="text-slate-700">Leaking pressure relief valve</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
};

export default WaterHeaterLeakCleanup;
