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
                <title>Water Heater Leak Cleanup Vail | Flood Restoration</title>
                <meta name="description" content="Emergency water extraction for water heater failures. We handle large volume floods in basements and utility rooms." />
                <link rel="canonical" href="https://basement-water-removal-vail-co.com/water-heater-leak-cleanup" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        Water Heater Leak Cleanup <br />
                        <span className="text-blue-300">Vail, Colorado</span>
                    </>
                }
                subtitle="Massive water removal for tank failures. When 50+ gallons flood your utility room or basement, we extract it fast."
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
                                    Water heaters in Vail work hard due to cold inlet water temperatures. When they fail, they often release their entire contents at once, flooding utility rooms, finished basements, and mechanical closets.
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
                                        <span className="text-slate-700">Banging or rumbling noises</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-t border-slate-200 pt-12">
                            <h3 className="text-2xl font-bold text-center mb-8">Our Restoration Process</h3>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold text-xl">1</div>
                                    <h4 className="font-bold mb-2">Containment</h4>
                                    <p className="text-sm text-slate-600">We isolate the utility area to prevent water from spreading to furnished rooms.</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold text-xl">2</div>
                                    <h4 className="font-bold mb-2">Extraction</h4>
                                    <p className="text-sm text-slate-600">Rapid removal of standing water using pumps and vacuums.</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold text-xl">3</div>
                                    <h4 className="font-bold mb-2">Drying</h4>
                                    <p className="text-sm text-slate-600">High-temperature drying to dry concrete and framing quickly.</p>
                                </div>
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
