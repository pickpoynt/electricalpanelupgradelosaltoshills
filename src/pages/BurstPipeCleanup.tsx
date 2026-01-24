import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { ThermometerSnowflake, Wrench, Droplets, Construction } from "lucide-react";
import { Helmet } from "react-helmet-async";

const BurstPipeCleanup = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Burst Pipe Cleanup Vail CO | Frozen Pipe Repair & Drying</title>
                <meta name="description" content="Emergency cleanup for frozen and burst pipes in Vail. We stop the water, repair damage, and dry structure." />
                <link rel="canonical" href="https://basement-water-removal-vail-co.com/burst-pipe-cleanup" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        Burst Pipe Cleanup <br />
                        <span className="text-blue-300">Vail, Colorado</span>
                    </>
                }
                subtitle="Emergency cleanup for frozen and burst pipes in Vail. We stop the water, repair the damage, and dry your home quickly."
                image="https://images.unsplash.com/photo-1549419137-b45d0ed0064f?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                            Winter Water Damage Specialists
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                                <ThermometerSnowflake className="w-12 h-12 text-blue-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3">Frozen Pipe response</h3>
                                <p className="text-slate-600">
                                    Vail's sub-zero temperatures put immense pressure on plumbing. We safely thaw frozen lines and extract water from bursts immediately.
                                </p>
                            </div>
                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                                <Construction className="w-12 h-12 text-blue-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3">Structural Drying</h3>
                                <p className="text-slate-600">
                                    Water from burst pipes sprays with high pressure, soaking walls and insulation. We open affected cavities to ensure complete structural drying.
                                </p>
                            </div>
                        </div>

                        <div className="prose max-w-none text-slate-600 leading-relaxed mb-12">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Pipes Burst in Vail</h3>
                            <p className="mb-4">
                                Vacation homes with lowered heating, poor insulation in crawl spaces, and sudden temperature drops make Vail properties uniquely vulnerable. A single 1/8-inch crack in a pipe can release up to 250 gallons of water a day.
                            </p>
                            <p>
                                Our team doesn't just clean up the water. We help you identify the cause—whether it's a drafty rim joist or an uninsulated garage wall—to prevent future freezing events.
                            </p>
                        </div>

                        <div className="bg-slate-900 text-white p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-4">Our Burst Pipe Process</h3>
                            <div className="grid sm:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">1</div>
                                    <h4 className="font-semibold">Stop The Water</h4>
                                    <p className="text-sm text-slate-300">Emergency shut-off and containment</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">2</div>
                                    <h4 className="font-semibold">Extract & Open</h4>
                                    <p className="text-sm text-slate-300">Remove water and expose wet wall cavities</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">3</div>
                                    <h4 className="font-semibold">Dry & Restore</h4>
                                    <p className="text-sm text-slate-300">Industrial drying and material replacement</p>
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

export default BurstPipeCleanup;
