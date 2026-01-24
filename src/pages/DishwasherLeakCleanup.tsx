import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Droplets, Search, Waves } from "lucide-react";
import { Helmet } from "react-helmet-async";

const DishwasherLeakCleanup = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Dishwasher Leak Water Damage Cleanup Gulf Breeze | Kitchen Restoration</title>
                <meta name="description" content="Expert kitchen water damage restoration in Gulf Breeze, FL. We save cabinets and flooring from dishwasher leaks." />
                <link rel="canonical" href="https://storm-surge-cleanup-gulf-breeze-fl.com/dishwasher-leak-water-damage-cleanup" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        Dishwasher Leak Cleanup <br />
                        <span className="text-blue-300">Gulf Breeze, FL</span>
                    </>
                }
                subtitle="Kitchen water damage restoration. We save your floors and cabinets from hidden dishwasher leaks and supply line failures."
                image="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                            Saving Gulf Breeze Kitchens
                        </h2>

                        <div className="mb-12">
                            <p className="text-lg text-slate-600 text-center leading-relaxed">
                                Dishwasher leaks are often slow and silent, causing mold and rot in subfloors and cabinets before you notice. Our specialized drying equipment allows us to distinctively target the moisture under cabinets.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <Waves className="w-10 h-10 text-blue-600 mb-4" />
                                <h3 className="text-lg font-bold mb-2">Cabinet Preservation</h3>
                                <p className="text-slate-600 text-sm">
                                    We use injection drying systems to push warm dry air into cabinet voids, often saving the cabinetry from needing replacement.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <Search className="w-10 h-10 text-blue-600 mb-4" />
                                <h3 className="text-lg font-bold mb-2">Hidden Moisture</h3>
                                <p className="text-slate-600 text-sm">
                                    Water travels under tile and vinyl plank flooring. We use meters to track the water to its furthest extent.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <Droplets className="w-10 h-10 text-blue-600 mb-4" />
                                <h3 className="text-lg font-bold mb-2">Mold Prevention</h3>
                                <p className="text-slate-600 text-sm">
                                    Kitchens are prime for mold growth. We sanitize the affected area to ensure a safe food preparation environment.
                                </p>
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

export default DishwasherLeakCleanup;
