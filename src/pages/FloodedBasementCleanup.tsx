import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Waves, ShieldCheck, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";

const FloodedBasementCleanup = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Flooded Basement Cleanup Cost Rye Brook NY | Water Extraction</title>
                <meta name="description" content="Professional flooded basement cleanup in Rye Brook. We handle finished basement water damage and sump pump failures." />
                <link rel="canonical" href="https://frozen-pipe-cleanup-rye-brook-ny.com/flooded-basement-cleanup-cost-rye-brook-ny" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        Flooded Basement Cleanup <br />
                        <span className="text-blue-300">Rye Brook, NY</span>
                    </>
                }
                subtitle="Fast pump-out services for flooded basements. We save your finished basement from water damage."
                image="https://images.unsplash.com/photo-1454789476662-53eb23ba5907?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                            Basement Water Removal Experts
                        </h2>

                        <p className="text-lg text-slate-600 mb-12 text-center">
                            Finished basements in Rye Brook are valuable living spaces. When they flood, quick action is needed to save drywall, carpet, and furniture.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-slate-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-2">Sump Pump Failure?</h3>
                                <p className="text-slate-600">We have portable pumps to remove water even if your power is out or your primary pump failed.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-2">Cost & Insurance</h3>
                                <p className="text-slate-600">We work with your insurance to cover the cleanup costs. Average costs vary by severity, but we provide transparent estimates.</p>
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

export default FloodedBasementCleanup;
