import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { CloudRain, Wrench, Droplets } from "lucide-react";
import { Helmet } from "react-helmet-async";

const BurstPipeCleanup = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Burst Pipe Water Damage Cleanup Gulf Breeze | Emergency Repair</title>
                <meta name="description" content="Emergency cleanup for burst pipes in Gulf Breeze. We handle water damage from corrosion, pressure failures, and rare freeze events." />
                <link rel="canonical" href="https://storm-surge-cleanup-gulf-breeze-fl.com/burst-pipe-water-damage-cleanup" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        Burst Pipe Cleanup <br />
                        <span className="text-blue-300">Gulf Breeze, FL</span>
                    </>
                }
                subtitle="Immediate cleanup for burst pipes. We stop the water, repair the damage, and dry your home to prevent mold."
                image="https://images.unsplash.com/photo-1549419137-b45d0ed0064f?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                            Pipe Failure Restoration
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                                <CloudRain className="w-12 h-12 text-blue-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3">Sudden Pipe Failure</h3>
                                <p className="text-slate-600">
                                    Whether it's from age, corrosion, or a sudden pressure spike, a burst pipe can flood your home in minutes. We extract the water immediately.
                                </p>
                            </div>
                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                                <Wrench className="w-12 h-12 text-blue-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3">Minimizing Damage</h3>
                                <p className="text-slate-600">
                                    Fast extraction is key to saving your floors and drywall. Our team arrives with the right equipment to stop the spread of water.
                                </p>
                            </div>
                        </div>

                        <div className="prose max-w-none text-slate-600 leading-relaxed">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Pipes Burst in Gulf Breeze</h3>
                            <p>
                                While deep freezes are rare, they do happen. More commonly, the salt air environment in Gulf Breeze can accelerate corrosion in older copper pipes, leading to pinhole leaks and eventual bursts. PVC joints can also fail over time.
                            </p>
                            <p>
                                We handle the clean up no matter the cause, ensuring your property is dry and safe.
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

export default BurstPipeCleanup;
