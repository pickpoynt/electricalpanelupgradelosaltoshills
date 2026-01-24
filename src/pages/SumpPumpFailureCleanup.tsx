import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Power, Waves } from "lucide-react";
import { Helmet } from "react-helmet-async";

const SumpPumpFailureCleanup = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Sump Pump Failure Cleanup Cohasset MA | Emergency Service</title>
                <meta name="description" content="Emergency water removal for sump pump failures in Cohasset, MA. We pump out basements fast." />
                <link rel="canonical" href="https://sump-pump-failure-cohasset-ma.com/sump-pump-failure-cleanup-cohasset-ma" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        Sump Pump Failure Cleanup <br />
                        <span className="text-blue-300">Cohasset, MA</span>
                    </>
                }
                subtitle="When your pump fails, we extract the water. Emergency basement cleanup 24/7."
                image="https://images.unsplash.com/photo-1565514020121-6655e82b7596?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                            Pump Failure Response
                        </h2>

                        <p className="text-center text-slate-600 mb-12">
                            A failed sump pump can flood a finished basement in hours. Our team arrives with powerful pumps to takeover where yours left off.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-slate-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-2">Mechanical Failure</h3>
                                <p className="text-slate-600">We extract the water and dry the area. We can also recommend plumbers for pump replacement.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-2">Power Outage</h3>
                                <p className="text-slate-600">Our gas-powered pumps work even when the grid is down during a Nor'easter.</p>
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

export default SumpPumpFailureCleanup;
