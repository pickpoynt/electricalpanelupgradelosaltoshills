import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { CloudRain } from "lucide-react";
import { Helmet } from "react-helmet-async";

const StormRunoffCleanup = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Storm Runoff Cleanup Tiburon CA | Hillside Drainage</title>
                <meta name="description" content="Expert cleanup for storm runoff in Tiburon. We handle water intrusion from hillsides and heavy rain." />
                <link rel="canonical" href="https://flooded-garage-removal-tiburon.com/storm-runoff-cleanup-tiburon-ca" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        Storm Runoff Cleanup <br />
                        <span className="text-blue-300">Tiburon, CA</span>
                    </>
                }
                subtitle="Managing water intrusion from heavy rains and hillside runoff. We divert water and dry your property."
                image="https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                            Hillside Water Management
                        </h2>
                        <p className="text-center text-slate-600 mb-12">
                            Tiburon's hills concentrate rainwater. If runoff enters your home or garage, we have the specialized equipment to manage the flow and clean up the mess.
                        </p>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
};

export default StormRunoffCleanup;
