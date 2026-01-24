import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { ArrowUp, CloudRain } from "lucide-react";
import { Helmet } from "react-helmet-async";

const CeilingWaterDamage = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Ceiling Water Damage Repair Rye Brook NY | Leak Fix</title>
                <meta name="description" content="Expert ceiling water damage repair in Rye Brook. We dry, repair, and restore water stained ceilings." />
                <link rel="canonical" href="https://frozen-pipe-cleanup-rye-brook-ny.com/ceiling-water-damage-repair-rye-brook-ny" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        Ceiling Water Damage Repair <br />
                        <span className="text-blue-300">Rye Brook, NY</span>
                    </>
                }
                subtitle="Fixing water stains and sagging ceilings caused by roof leaks or plumbing failures."
                image="https://images.unsplash.com/photo-1540320436-b6d36e2f69dc?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                            Ceiling Restoration Services
                        </h2>
                        <p className="text-center text-slate-600 text-lg mb-12">
                            A leaking ceiling is a safety hazard. We drain the water, remove damaged drywall, and dry the structure above to prevent mold.
                        </p>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
};

export default CeilingWaterDamage;
