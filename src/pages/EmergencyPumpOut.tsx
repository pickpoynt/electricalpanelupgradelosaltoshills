import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";

const EmergencyPumpOut = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Emergency Pump Out Service Tiburon CA | 24/7 Water Removal</title>
                <meta name="description" content="High capacity emergency pump out for flooded basements and garages in Tiburon." />
                <link rel="canonical" href="https://flooded-garage-removal-tiburon.com/emergency-pump-out-service-tiburon-ca" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        Emergency Pump Out <br />
                        <span className="text-blue-300">Tiburon, CA</span>
                    </>
                }
                subtitle="Industrial strength pumps to remove standing water quickly from your property."
                image="https://images.unsplash.com/photo-1454789476662-53eb23ba5907?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                            Rapid Water Displacement
                        </h2>
                        <p className="text-center text-slate-600 mb-12">
                            When every minute counts, our truck-mounted and portable pumps move thousands of gallons per hour.
                        </p>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
};

export default EmergencyPumpOut;
