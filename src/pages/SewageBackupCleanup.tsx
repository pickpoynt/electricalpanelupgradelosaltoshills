import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Biohazard } from "lucide-react";
import { Helmet } from "react-helmet-async";

const SewageBackupCleanup = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Sewage Backup Cleanup Cost Rye Brook NY | Hazmat Cleaning</title>
                <meta name="description" content="Safe and discreet sewage backup cleanup in Rye Brook. We handle biohazard removal and sanitization." />
                <link rel="canonical" href="https://frozen-pipe-cleanup-rye-brook-ny.com/sewage-backup-cleanup-cost-rye-brook-ny" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        Sewage Backup Cleanup <br />
                        <span className="text-blue-300">Rye Brook, NY</span>
                    </>
                }
                subtitle="Professional biohazard cleanup for sewer backups. We ensure your home is safe and sanitary."
                image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                            Hazardous Waste Removal
                        </h2>
                        <p className="text-center text-slate-600 mb-12">
                            Sewage contains harmful bacteria. Do not attempt to clean this yourself. We have the protective gear and chemicals to disinfect your basement or bathroom properly.
                        </p>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
};

export default SewageBackupCleanup;
