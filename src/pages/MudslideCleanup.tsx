import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Mountain } from "lucide-react";
import { Helmet } from "react-helmet-async";

const MudslideCleanup = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Mudslide Cleanup Tiburon CA | Debris Removal</title>
                <meta name="description" content="Emergency cleanup for mud and debris entering your Tiburon home or garage from mudslides." />
                <link rel="canonical" href="https://flooded-garage-removal-tiburon.com/mudslide-cleanup-tiburon-ca" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        Mudslide Cleanup <br />
                        <span className="text-blue-300">Tiburon, CA</span>
                    </>
                }
                subtitle="Removing mud, silt, and debris from your property after hillside instability events."
                image="https://images.unsplash.com/photo-1518182170546-07fb6ebcf22d?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                            Mud & Debris Emergency Service
                        </h2>
                        <p className="text-center text-slate-600 mb-12">
                            Mud can cause massive damage to surfaces and infrastructure. We clear the mud, wash the area, and dry the structure.
                        </p>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
};

export default MudslideCleanup;
