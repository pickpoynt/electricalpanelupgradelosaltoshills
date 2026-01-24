import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { FolderSearch, Waves } from "lucide-react";
import { Helmet } from "react-helmet-async";

const HardwoodFloorRepair = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Hardwood Floor Water Damage Repair Rye Brook NY | Floor Drying</title>
                <meta name="description" content="Specialized hardwood floor drying in Rye Brook. We save water damaged wood floors from cupping and warping." />
                <link rel="canonical" href="https://frozen-pipe-cleanup-rye-brook-ny.com/hardwood-floor-water-damage-repair-rye-brook-ny" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        Hardwood Floor Repair <br />
                        <span className="text-blue-300">Rye Brook, NY</span>
                    </>
                }
                subtitle="Advanced injection drying to save your hardwood floors from permanent water damage."
                image="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                            Saving Wood Floors
                        </h2>
                        <p className="text-center text-slate-600 mb-12">
                            Replacement isn't always necessary. Our mats pull moisture from deep within the woodgrain, often restoring the floor to original condition.
                        </p>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
};

export default HardwoodFloorRepair;
