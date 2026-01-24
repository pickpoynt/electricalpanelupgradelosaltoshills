import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Home } from "lucide-react";
import { Helmet } from "react-helmet-async";

const FloodedBasementRestoration = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Flooded Basement Restoration Cohasset MA | Water Damage</title>
                <meta name="description" content="Professional flooded basement restoration in Cohasset. We save finished basements from water damage." />
                <link rel="canonical" href="https://sump-pump-failure-cohasset-ma.com/flooded-basement-restoration-cohasset-ma" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        Flooded Basement Restoration <br />
                        <span className="text-blue-300">Cohasset, MA</span>
                    </>
                }
                subtitle="Restoring finished basements after flooding. We save carpets, drywall, and furniture."
                image="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                            Basement Recovery Experts
                        </h2>
                        <p className="text-center text-slate-600 mb-12">
                            Cohasset homes often have high-value finished basements. We prioritize speed to minimize the permanent damage to your property.
                        </p>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
};

export default FloodedBasementRestoration;
