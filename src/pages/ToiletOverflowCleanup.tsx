import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Biohazard, Sparkles, AlertTriangle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const ToiletOverflowCleanup = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Toilet Overflow Cleanup Eagle | Sewage Backup Cleaning</title>
                <meta name="description" content="Professional sewage cleanup and toilet overflow restoration in Eagle, CO. Safe biohazard removal and sanitization." />
                <link rel="canonical" href="https://basement-water-removal-eagle-co.com/toilet-overflow-cleanup" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        Toilet Overflow Cleanup <br />
                        <span className="text-blue-300">Eagle, Colorado</span>
                    </>
                }
                subtitle="Safe, discreet, and professional sewage backup cleanup. We handle hazardous waste removal and sanitize your bathroom to hospital-grade standards."
                image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-12 rounded-r-xl">
                            <div className="flex items-start gap-4">
                                <AlertTriangle className="w-8 h-8 text-red-600 shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-red-900 mb-2">Emergency Health Warning</h3>
                                    <p className="text-red-800">
                                        Toilet overflows often involve black water (Category 3). This water contains pathogens and bacteria. Do not attempt to clean it with household products. Professional Sanitization is required.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                            Professional Sewage Cleanup
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="p-6 border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
                                <Biohazard className="w-10 h-10 text-blue-600 mb-4" />
                                <h3 className="text-lg font-bold mb-2">Hazardous Waste Removal</h3>
                                <p className="text-slate-600">
                                    We safely extract sewage and remove contaminated porous materials like carpet, pad, and drywall that cannot be fully sanitized.
                                </p>
                            </div>
                            <div className="p-6 border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
                                <Sparkles className="w-10 h-10 text-blue-600 mb-4" />
                                <h3 className="text-lg font-bold mb-2">EPA-Approved Sanitization</h3>
                                <p className="text-slate-600">
                                    After cleaning, we apply industrial-grade antimicrobials to kill 99.9% of bacteria, viruses, and parasites, ensuring your home is safe.
                                </p>
                            </div>
                        </div>

                        <div className="prose max-w-none text-slate-600 leading-relaxed">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Handling Eagle's Septic & Sewer Issues</h3>
                            <p className="mb-4">
                                Many Eagle mountain homes operate on septic systems that can be overwhelmed by sudden occupancy spikes or heavy snowmelt saturating the leach field. We are experienced in diagnosing and cleaning up backups caused by these specific mountain infrastructure issues.
                            </p>
                            <p>
                                From simple clogs to complex main line backups, our team arrives in unmarked vehicles to provide discreet and effective restoration, protecting your property value and your family's health.
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

export default ToiletOverflowCleanup;
