import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";

const BatteryBackupFailure = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Battery Backup Failure Cleanup Cohasset MA | Power Outage</title>
                <meta name="description" content="Cleanup for sump pump failures during power outages in Cohasset. We handle battery backup failures." />
                <link rel="canonical" href="https://sump-pump-failure-cohasset-ma.com/battery-backup-failure-cleanup-cohasset-ma" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        Battery Backup Failure Cleanup <br />
                        <span className="text-blue-300">Cohasset, MA</span>
                    </>
                }
                subtitle="When the power goes out and the backup fails, we are your safety net. Emergency water removal."
                image="https://images.unsplash.com/photo-1518182170546-07fb6ebcf22d?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                            Power Outage Flood Response
                        </h2>
                        <p className="text-center text-slate-600 mb-12">
                            We use gas-powered extraction equipment to remove water even when your home has no electricity.
                        </p>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
};

export default BatteryBackupFailure;
