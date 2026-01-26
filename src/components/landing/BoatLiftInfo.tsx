import { Anchor, Shield, Zap, Lightbulb, Tool, Droplets } from "lucide-react";

const BoatLiftInfo = () => {
    return (
        <section id="boat-lift-info" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
                            Fair Haven Professional Boat Lift Electrical Solutions
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Operating a boat lift in Fair Haven's brackish Navesink River environment requires specialized electrical knowledge. Our team provides the expert wiring and maintenance needed to protect your maritime investment from the unique challenges of coastal living.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <Zap className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Marine Motor Wiring & Repair
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        We handle everything from standard single-motor lifts to complex multi-motor grain-elevated systems. Our technicians are experts in capacitor replacement, limit switch calibration, and ensuring your motors receive consistent, clean power even at the end of a long pier.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-cyan-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-cyan-100 p-3 rounded-lg">
                                    <Shield className="w-8 h-8 text-cyan-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Corrosion Protection & Sealing
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Salt air is a silent killer of electrical components. We use marine-grade conduits, stainless steel enclosures, and dielectric grease on all termainals to prevent the oxidation that leads to premature failure in Fair Haven's coastal conditions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-indigo-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-indigo-100 p-3 rounded-lg">
                                    <Droplets className="w-8 h-8 text-indigo-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Marine Grounding & Bonding
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Safety in the water is non-negotiable. Our experts implement rigorous bonding systems to prevent stray current and electrolysis, protecting both your boat's hull and the safety of anyone in the vicinity of your dock.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-500">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-blue-50 p-3 rounded-lg">
                                    <Lightbulb className="w-8 h-8 text-blue-500" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Advanced Remote Control Systems
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Lower your boat from the comfort of the helm. We install and program long-range wireless remote systems with integrated auto-stop features, allowing for effortless one-person launching and docking.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-sky-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-sky-100 p-3 rounded-lg">
                                    <Anchor className="w-8 h-8 text-sky-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Dock Lighting & Power
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Extend your boating season with high-efficiency LED dock lighting. We provide custom solutions for deck lighting, piling-mounted fixtures, and underwater LEDs, all controlled by smart timers or motion sensors.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-slate-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-slate-100 p-3 rounded-lg">
                                    <Shield className="w-8 h-8 text-slate-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Annual Safety Inspections
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Don't let a small issue become a major failure during the height of summer. Our preventive maintenance programs include GFCI testing, terminal tightening, and hoist motor evaluation to ensure your lift is always ready for the water.
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

export default BoatLiftInfo;
