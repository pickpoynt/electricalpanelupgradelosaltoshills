import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { ScanSearch, Waves, Activity } from "lucide-react";
import { Helmet } from "react-helmet-async";

const LeakDetectionServices = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Water Leak Detection Eagle CO | Thermal Imaging Services</title>
                <meta name="description" content="Non-invasive leak detection in Eagle using thermal imaging and acoustic tech. Find hidden leaks behind walls." />
                <link rel="canonical" href="https://basement-water-removal-eagle-co.com/leak-detection-water-damage-services" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        Leak Detection Services <br />
                        <span className="text-blue-300">Eagle, Colorado</span>
                    </>
                }
                subtitle="Find the leak before it causes more damage. Advanced thermal imaging and acoustic detection for hidden water issues."
                image="https://images.unsplash.com/photo-1581092921461-eab62e97a783?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                            Non-Invasive Nondestructive Leak Detection
                        </h2>

                        <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                            Water travels, making the source of a leak difficult to find. We use state-of-the-art technology to locate leaks behind walls, under slabs, and in ceilings without destroying your home.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-500">
                                <ScanSearch className="w-12 h-12 text-blue-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3">Thermal Imaging</h3>
                                <p className="text-slate-600">
                                    Infrared cameras detect temperature differences caused by evaporating moisture, allowing us to "see" water patterns behind drywall and insulation without making a single cut.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-500">
                                <Activity className="w-12 h-12 text-blue-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3">Acoustic Listening</h3>
                                <p className="text-slate-600">
                                    Sensitive acoustic equipment amplifies the sound of dripping or spraying water, helping us pinpoint leaks within concrete slabs or main water lines.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-900 text-white p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-6">Why Early Detection Matters in Eagle</h3>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold">Prevent Mold Growth</h4>
                                        <p className="text-slate-300 text-sm">Eagle's dry air doesn't stop mold inside damp walls. Slow leaks create perfect mold conditions.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold">Save Water Bills</h4>
                                        <p className="text-slate-300 text-sm">A running toilet or slab leak can waste thousands of gallons, spiking your utility bill.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0">3</div>
                                    <div>
                                        <h4 className="font-bold">Protect Structure</h4>
                                        <p className="text-slate-300 text-sm">Long-term leaks rot wood framing and erode concrete foundations, leading to expensive structural repairs.</p>
                                    </div>
                                </div>
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

export default LeakDetectionServices;
