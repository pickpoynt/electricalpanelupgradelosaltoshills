import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Activity } from "lucide-react";
import { Helmet } from "react-helmet-async";

const EmergencyBasementWaterRemoval = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Emergency Basement Water Removal Rye Brook NY | 24/7 Flood Service</title>
                <meta name="description" content="24/7 Emergency water removal for flooded basements in Rye Brook, NY. Immediate dispatch." />
                <link rel="canonical" href="https://frozen-pipe-cleanup-rye-brook-ny.com/emergency-basement-water-removal-rye-brook-ny" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        Emergency Water Removal <br />
                        <span className="text-blue-300">Rye Brook, NY</span>
                    </>
                }
                subtitle="24/7 Rapid response for flooding emergencies. We arrive within 30 minutes to start extraction."
                image="https://images.unsplash.com/photo-1604168612704-edf7120be425?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                            Day or Night Response
                        </h2>
                        <p className="text-center text-slate-600 mb-12">
                            Water damage spreads fast. Our emergency teams are on standby in Rye Brook to mitigate the damage immediately.
                        </p>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
};

export default EmergencyBasementWaterRemoval;
