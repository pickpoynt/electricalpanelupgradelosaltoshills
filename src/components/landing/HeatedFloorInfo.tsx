import { Zap, ShieldCheck, Thermometer, Sun, Users, Flame, Search, Settings } from "lucide-react";

const HeatedFloorInfo = () => {
    return (
        <section id="heated-floor-info" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
                            Professional Heated Floor Electrical Repair in Fair Haven, NJ
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Don't let a cold floor ruin your comfort. We specialize in diagnosing and repairing electrical failures in radiant floor heating systems across Fair Haven. From faulty thermostats to broken heating cables, our licensed electricians restore the warmth you deserve.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <Search className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Advanced Fault Locating
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Using specialized resistance testing and thermal imaging, we can pinpoint the exact location of a break in your heating cable without tearing up your entire floor. This precision allows for localized repairs, saving you time and money.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-cyan-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-cyan-100 p-3 rounded-lg">
                                    <Settings className="w-8 h-8 text-cyan-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Thermostat Diagnosis
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Often, the issue isn't the floor but the control system. We repair and replace all brands of floor heating thermostats, including smart, Wi-Fi enabled models, ensuring your system communicates perfectly with the heating elements.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-amber-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-amber-100 p-3 rounded-lg">
                                    <Zap className="w-8 h-8 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        GFCI & Circuit Repair
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Heated floors require dedicated circuits and sensitive GFCI protection. We fix nuisance tripping issues and ensure your system's electrical supply meets current NEC safety standards for wet environments like bathrooms.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-emerald-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-emerald-100 p-3 rounded-lg">
                                    <ShieldCheck className="w-8 h-8 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        System Commissioning
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Installing a new floor? We provide professional wiring and pre-tile testing to ensure your warranty remains valid and your system is 100% operational before the final floor covering is laid down.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-orange-100 p-3 rounded-lg">
                                    <Thermometer className="w-8 h-8 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Sensor Replacement
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        A faulty floor sensor can cause overheating or prevent the system from turning on. We specialize in testing and replacing embedded floor sensors to restore accurate temperature control and safety.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-slate-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-slate-100 p-3 rounded-lg">
                                    <Users className="w-8 h-8 text-slate-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Fair Haven Local Support
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        As local electricians serving Fair Haven, NJ, we understand the high standards of our community. We provide clean, professional service with a focus on restoring your home's luxury features quickly and efficiently.
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

export default HeatedFloorInfo;
