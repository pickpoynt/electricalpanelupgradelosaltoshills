import { Zap, ShieldCheck, History, Home, HardHat, FileCheck, Search, AlertTriangle } from "lucide-react";

const KnobTubeInfo = () => {
    return (
        <section id="knob-tube-info" className="py-20 bg-gradient-to-br from-slate-50 via-amber-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
                            Professional Knob and Tube Wiring Replacement in Signal Mountain, TN
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Protect your historic Signal Mountain home from electrical hazards. Knob and tube wiring is outdated, ungrounded, and often overloaded. We specialize in modernizing the electrical systems of mountain homes with safe, code-compliant copper wiring.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-amber-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-amber-100 p-3 rounded-lg">
                                    <Search className="w-8 h-8 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Comprehensive History Audits
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Many Signal Mountain homes have "active" knob and tube hidden behind newer panels. We perform thorough non-invasive inspections to map out exactly where old wiring exists and what circuits are most at risk.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-slate-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-slate-100 p-3 rounded-lg">
                                    <Home className="w-8 h-8 text-slate-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Non-Invasive Rewiring
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        We specialize in "minimal-cut" rewiring. Using advanced fishing techniques, we replace old cables through crawlspaces and attics, preserving your home's historic plaster walls and ornate trim.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-red-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-red-100 p-3 rounded-lg">
                                    <AlertTriangle className="w-8 h-8 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Hazard Mitigation
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Knob and tube wiring cannot be safely covered by modern spray foam or rolled insulation. We remove these fire hazards and install new, heat-resistant AFCI protected circuits throughout your residence.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <Zap className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Modern Panel Upgrades
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Replacing old wiring often requires a main service upgrade. we install modern breaker panels that support today's high-demand appliances, HVAC systems, and EV chargers safely.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-emerald-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-emerald-100 p-3 rounded-lg">
                                    <FileCheck className="w-8 h-8 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Insurance Compliance
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Many insurance carriers will not cover homes with active knob and tube wiring. We provide the documentation and certificates of completion needed to secure your policy and lower your premiums.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-orange-100 p-3 rounded-lg">
                                    <HardHat className="w-8 h-8 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Local Signal Mtn Team
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        We are familiar with the unique architectural styles and electrical permitting requirements of the Town of Signal Mountain and Walden. We guarantee professional, mountain-local service.
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

export default KnobTubeInfo;
