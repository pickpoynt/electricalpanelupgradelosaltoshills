import { Flame, TreePine, Shield, Hammer, Wind, Zap } from "lucide-react";

const LogCabinFireInfo = () => {
    return (
        <section id="log-cabin-fire-info" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Expert Fire Damage Cleanup for Log Cabins in Whitefish, MT
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Montana log cabins are treasured family heirlooms and mountain retreats. When fire strikes, specialized restoration is critical. We understand the unique challenges of log construction—from charred timber treatment to chinking repair—and have the expertise to restore your cabin to its original beauty while preserving its structural integrity.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <TreePine className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Charred Log Restoration
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Fire-damaged logs require specialized treatment. We carefully assess each log's structural integrity, remove charred material using controlled sanding and media blasting, treat the wood with fire-retardant sealants, and restore the natural finish. Our techniques preserve the log's strength while eliminating smoke penetration and preventing future decay from fire damage.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-amber-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-amber-100 p-3 rounded-lg">
                                    <Flame className="w-8 h-8 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Smoke & Soot Removal
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Smoke penetrates deep into porous log surfaces. We use industrial HEPA vacuums to remove loose soot, apply specialized wood cleaners formulated for fire damage, and employ thermal fogging to neutralize embedded smoke odors. For severe cases, we use ozone treatment in sealed spaces to destroy odor molecules at the cellular level.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-green-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-green-100 p-3 rounded-lg">
                                    <Hammer className="w-8 h-8 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Structural Assessment & Repair
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Fire compromises log cabin structural integrity. Our certified inspectors assess load-bearing logs, roof beams, and floor joists for fire damage. We replace severely damaged logs with matching timber, reinforce weakened sections with steel brackets, and ensure your cabin meets Montana building codes for continued safe occupancy.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-purple-100 p-3 rounded-lg">
                                    <Shield className="w-8 h-8 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Chinking & Caulking Restoration
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Fire often damages the chinking between logs, creating air leaks and moisture entry points. We remove fire-damaged chinking, clean the log surfaces, and apply new synthetic chinking that matches your cabin's original appearance. This restores energy efficiency and prevents water infiltration that could lead to rot.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-red-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-red-100 p-3 rounded-lg">
                                    <Wind className="w-8 h-8 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Air Quality Restoration
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Post-fire air quality is critical for health and safety. We deploy industrial air scrubbers with HEPA and activated carbon filters to remove particulates and VOCs. Our hydroxyl generators neutralize airborne contaminants without requiring evacuation. We test air quality before and after to ensure safe occupancy levels.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-indigo-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-indigo-100 p-3 rounded-lg">
                                    <Zap className="w-8 h-8 text-indigo-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Emergency Response & Boarding
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        After a fire, your cabin is vulnerable to weather and wildlife. We provide 24/7 emergency response to board up windows, tarp damaged roofs, and secure the structure. In Whitefish's harsh winters, immediate protection prevents secondary damage from snow and ice infiltration that could worsen fire damage exponentially.
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

export default LogCabinFireInfo;
