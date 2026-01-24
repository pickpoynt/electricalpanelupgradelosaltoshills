import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Waves } from "lucide-react";
import { Helmet } from "react-helmet-async";

const WetCarpetDrying = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Wet Carpet Drying Service Rye Brook NY | Water Extraction</title>
                <meta name="description" content="Professional wet carpet drying in Rye Brook. We extract water and clean carpets after flooding." />
                <link rel="canonical" href="https://frozen-pipe-cleanup-rye-brook-ny.com/wet-carpet-drying-service-rye-brook-ny" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        Wet Carpet Drying <br />
                        <span className="text-blue-300">Rye Brook, NY</span>
                    </>
                }
                subtitle="Powerful extraction to remove water from carpets and padding. We prevent odors and mold."
                image="https://images.unsplash.com/photo-1549419137-b45d0ed0064f?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                            Rapid Carpet Restoration
                        </h2>
                        <p className="text-center text-slate-600 mb-12">
                            Don't let wet carpet sit. Mold develops in 24-48 hours. We extract, sanitize, and dry.
                        </p>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
};

export default WetCarpetDrying;
