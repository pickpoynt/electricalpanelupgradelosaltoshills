import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Waves, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const FloodedGarageCleanup = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Flooded Garage Water Removal Tiburon CA | Cleanup Service</title>
                <meta name="description" content="Emergency flooded garage cleanup in Tiburon, CA. We remove water, sanitize concrete, and prevent mold." />
                <link rel="canonical" href="https://flooded-garage-removal-tiburon.com/flooded-garage-water-removal-tiburon-ca" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        Flooded Garage Cleanup <br />
                        <span className="text-blue-300">Tiburon, CA</span>
                    </>
                }
                subtitle="Rapid water extraction for flooded garages. We protect your vehicles and storage from water damage."
                image="https://images.unsplash.com/photo-1519643381481-224422e11e86?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                            Garage Flood Response
                        </h2>

                        <p className="text-center text-slate-600 mb-12">
                            Garages in Tiburon are often the first line of defense against hillside runoff. If yours is flooded, we pump it out and clean it up fast.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-slate-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-2">Sanitization</h3>
                                <p className="text-slate-600">Runoff water can carry pesticides and fertilizers. We power wash and sanitize your garage floor.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-2">Drying</h3>
                                <p className="text-slate-600">We ensure drywall and framing in the garage are dry to prevent mold affecting the rest of the house.</p>
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

export default FloodedGarageCleanup;
