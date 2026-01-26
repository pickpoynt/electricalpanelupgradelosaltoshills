import { Flame, Zap, ShieldCheck, Thermometer, Sun, Users } from "lucide-react";

const PatioHeaterInfo = () => {
    return (
        <section id="patio-heater-info" className="py-20 bg-gradient-to-br from-slate-50 via-orange-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
                            Fair Haven's Premier Outdoor Patio Heater Wiring & Installation
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Extend your outdoor living season in Fair Haven with professionally wired electric patio heaters. We provide the heavy-duty electrical infrastructure needed to safely power high-wattage infrared heating systems on luxury decks and patios.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-orange-100 p-3 rounded-lg">
                                    <Zap className="w-8 h-8 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Dedicated Circuit Installation
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Electric patio heaters are high-draw appliances that often require 240V dedicated circuits to operate safely. We run specialized wiring from your main panel to your patio, ensuring your heaters have the power they need without tripping breakers or overloading existing circuits.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-red-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-red-100 p-3 rounded-lg">
                                    <Thermometer className="w-8 h-8 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Infrared Heater Mounting & Wiring
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        We specialize in the recessed and surface-mounting of premium infrared heaters like Infratech and Bromic. Our mounting solutions ensure proper clearance from combustibles while maintaining the aesthetic integrity of your outdoor architecture.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-amber-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-amber-100 p-3 rounded-lg">
                                    <ShieldCheck className="w-8 h-8 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Weatherproof Control Systems
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        From simple on/off switches to sophisticated variable heat regulators and smart home integration, we install weatherproof control boxes that allow you to fine-tune your comfort level even in Fair Haven's coastal air.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-500">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-orange-50 p-3 rounded-lg">
                                    <Flame className="w-8 h-8 text-orange-500" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Fire Safety Compliance
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Safety is our top priority. We ensure all wiring meets the National Electrical Code (NEC) for outdoor installations and verify that heater placements comply with manufacturer safety clearances to protect your home and family.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-yellow-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-yellow-100 p-3 rounded-lg">
                                    <Sun className="w-8 h-8 text-yellow-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Energy Efficient Solutions
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Infrared heating is more efficient than propane because it heats objects, not the air. We can help you select the most efficient electric units and install timing systems that prevent heaters from being left on unnecessarily.
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
                                        Fair Haven Local Expertise
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        We've worked on some of the finest homes in Fair Haven, NJ. We understand the local permitting process and the specific challenges of coastal installations, including salt air corrosion protection for switches and conduit.
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

export default PatioHeaterInfo;
