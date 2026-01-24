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
                <title>Dishwasher Leak Cleanup Vail | Kitchen Water Damage Repair</title>
                <meta name="description" content="Expert kitchen water damage restoration. We save hardwood floors and cabinets from dishwasher leaks." />
                <link rel="canonical" href="https://basement-water-removal-vail-co.com/dishwasher-leak-cleanup" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        Dishwasher Leak Cleanup <br />
                        <span className="text-blue-300">Vail, Colorado</span>
                    </>
                }
                subtitle="Kitchen water damage restoration. We save your hardwood floors and cabinets from hidden dishwasher leaks and supply line failures."
                image="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                            Saving Vail Kitchens from Water Damage
                        </h2>

                        <div className="mb-12">
                            <p className="text-lg text-slate-600 text-center leading-relaxed">
                                Dishwasher leaks are often slow and silent, rotting subfloors and cabinets before you see a drop of water. Our specialized drying equipment allows us to save your expensive kitchen materials without demolition in many cases.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <Waves className="w-10 h-10 text-blue-600 mb-4" />
                                <h3 className="text-lg font-bold mb-2">Hardwood Floor Rescue</h3>
                                <p className="text-slate-600 text-sm">
                                    We use injection drying mats to pull moisture out of hardwood floors, preventing cupping and warping without removing the planks.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <Search className="w-10 h-10 text-blue-600 mb-4" />
                                <h3 className="text-lg font-bold mb-2">Under-Cabinet Drying</h3>
                                <p className="text-slate-600 text-sm">
                                    Water travels under cabinets affecting the wall behind. We direct warm dry air into toe-kicks and cavities to dry hidden areas.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <Droplets className="w-10 h-10 text-blue-600 mb-4" />
                                <h3 className="text-lg font-bold mb-2">Mold Prevention</h3>
                                <p className="text-slate-600 text-sm">
                                    Kitchens provide food sources for mold. We sanitize the area under and behind your dishwasher to ensure a safe cooking environment.
                                </p>
                            </div>
                        </div>

                        <div className="bg-blue-600 text-white rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-4">Did You Know?</h3>
                            <p className="leading-relaxed">
                                In Vail vacation homes, a dishwasher leak can go unnoticed for weeks between guest stays. If you discover warped floorboards or a musty smell in your kitchen upon arrival, call us immediately. We can assess the extent of the subfloor damage and document everything for your insurance claim.
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

export default DishwasherLeakCleanup;
