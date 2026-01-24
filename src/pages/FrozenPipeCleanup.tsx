import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { ThermometerSnowflake, Home, Droplets } from "lucide-react";
import { Helmet } from "react-helmet-async";

const FrozenPipeCleanup = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Frozen Pipe Burst Cleanup Rye Brook NY | Emergency Repair</title>
                <meta name="description" content="Emergency cleanup for frozen pipe bursts in Rye Brook, NY. 24/7 water extraction and pipe repair services." />
                <link rel="canonical" href="https://frozen-pipe-cleanup-rye-brook-ny.com/frozen-pipe-burst-cleanup-rye-brook-ny" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        Frozen Pipe Cleanup <br />
                        <span className="text-blue-300">Rye Brook, NY</span>
                    </>
                }
                subtitle="Immediate response for burst pipes. We shut off the water, thaw frozen lines, and dry your home."
                image="https://images.unsplash.com/photo-1516574187841-693018f33663?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                            Winter Pipe Burst Solutions
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                                <ThermometerSnowflake className="w-12 h-12 text-blue-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3">Safe Thawing</h3>
                                <p className="text-slate-600">
                                    We locate the frozen section and safely thaw it to prevent further bursting.
                                </p>
                            </div>
                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                                <Home className="w-12 h-12 text-blue-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3">Structural Drying</h3>
                                <p className="text-slate-600">
                                    Water from burst pipes sprays into walls and ceilings. We dry the structure to prevent mold.
                                </p>
                            </div>
                        </div>

                        <p className="text-slate-600 text-lg leading-relaxed text-center">
                            In Rye Brook, copper pipes in unheated crawl spaces are most vulnerable. If you suspect a frozen pipe, turn off your main water valve immediately and call us.
                        </p>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
};

export default FrozenPipeCleanup;
