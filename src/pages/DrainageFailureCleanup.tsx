import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Droplets } from "lucide-react";
import { Helmet } from "react-helmet-async";

const DrainageFailureCleanup = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Hillside Drainage Failure Cleanup Tiburon CA | Flood Repair</title>
                <meta name="description" content="Cleanup for overwhelmed drains and failure of retaining wall drainage in Tiburon, CA." />
                <link rel="canonical" href="https://flooded-garage-removal-tiburon.com/hillside-drainage-failure-cleanup-tiburon-ca" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        Drainage Failure Cleanup <br />
                        <span className="text-blue-300">Tiburon, CA</span>
                    </>
                }
                subtitle="When drains clog or fail, water backs up fast. We assist with emergency water removal."
                image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                            Drainage System Backup Response
                        </h2>
                        <p className="text-center text-slate-600 mb-12">
                            French drains and catch basins can be overwhelmed by debris during storms. We remove the backing up water to protect your property.
                        </p>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
};

export default DrainageFailureCleanup;
