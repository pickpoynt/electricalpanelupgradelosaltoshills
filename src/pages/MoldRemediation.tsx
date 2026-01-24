import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";

const MoldRemediation = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Mold Remediation Cohasset MA | Prevention & Removal</title>
                <meta name="description" content="Prevent mold growth after basement flooding in Cohasset. We offer thorough drying and mold remediation services." />
                <link rel="canonical" href="https://sump-pump-failure-cohasset-ma.com/mold-remediation-cohasset-ma" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        Mold Remediation <br />
                        <span className="text-blue-300">Cohasset, MA</span>
                    </>
                }
                subtitle="Stopping mold before it starts. Comprehensive drying and antimicrobial treatments for flooded basements."
                image="https://images.unsplash.com/photo-1454789476662-53eb23ba5907?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                            Mold Prevention Experts
                        </h2>
                        <p className="text-center text-slate-600 mb-12">
                            Mold can start growing in 24 hours. Our rapid response ensures your basement is dried quickly to prevent infestation.
                        </p>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
};

export default MoldRemediation;
