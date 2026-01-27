import { Zap, ShieldCheck, Waves, Droplet, HardHat, FileCheck, Search, ZapOff } from "lucide-react";

const HotTubWiringInfo = () => {
    return (
        <section id="hottub-wiring-info" className="py-20 bg-gradient-to-br from-slate-50 via-cyan-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
                            Professional Hot Tub Wiring Electrician in Signal Mountain, TN
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Enjoy your mountain retreat safely. We specialize in code-compliant electrical installations for hot tubs, spas, and swim spas across Signal Mountain. From GFCI protection to dedicated sub-panels, we handle the power so you can handle the relaxation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-cyan-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-cyan-100 p-3 rounded-lg">
                                    <ShieldCheck className="w-8 h-8 text-cyan-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        GFCI Safety Protection
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Water and electricity are a dangerous mix. We install heavy-duty GFCI (Ground Fault Circuit Interrupter) disconnects and breakers to ensure your hot tub is 100% safe for your family.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-slate-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-slate-100 p-3 rounded-lg">
                                    <Zap className="w-8 h-8 text-slate-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Dedicated Sub-Panels
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Most hot tubs require 50-60 amps of power. We install dedicated sub-panels that provide the proper voltage and amperage without overloading your home's main electrical system.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <Waves className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Proper Bonding & Grounding
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Crucial for Signal Mountain's rocky terrain. We ensure precise equipotential bonding of all metal components to prevent stray voltage and ensure user safety.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-emerald-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-emerald-100 p-3 rounded-lg">
                                    <Droplet className="w-8 h-8 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Weatherproof Conduit
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        We use high-grade Liquid-Tight and PVC conduits to protect your wiring from the elements, ensuring a long-lasting and durable outdoor electrical setup.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-cyan-800">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-cyan-50 p-3 rounded-lg">
                                    <FileCheck className="w-8 h-8 text-cyan-800" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Code-Compliant Inspections
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Hot tubs must meet strict NEC (National Electrical Code) standards. We handle the permitting and ensure your installation passes all local Signal Mountain and Walden inspections.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-indigo-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-indigo-100 p-3 rounded-lg">
                                    <HardHat className="w-8 h-8 text-indigo-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Complete Spa Hookups
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Whether it's a new 220V installation or a repair of an existing circuit, our mountain-local team provides turnkey electrical services for all spa brands and models.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HotTubWiringInfo;
