import { Droplets, Shield, Clock, Wind, Wrench, AlertTriangle } from "lucide-react";

const StormSurgeInfo = () => {
    return (
        <section id="storm-surge-info" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Expert Storm Surge Cleanup in Gulf Breeze, FL
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            When hurricanes push the Gulf waters into your home, you need immediate professional help. Our team specializes in extracting saltwater and preventing corrosion and mold in Gulf Breeze properties.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <Droplets className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Saltwater Corrosion Control
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Storm surge water is highly corrosive. It attacks electrical wiring, appliances, and structural fasteners immediately. We use specialized freshwater flushing and corrosion inhibitors to protect your property's infrastructure after a flood.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-amber-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-amber-100 p-3 rounded-lg">
                                    <Clock className="w-8 h-8 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Rapid Hurricane Response
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        We monitor tropical systems closely and stage our equipment before the storm hits. Once authorities deem it safe, our teams deploy immediately to Gulf Breeze and Pensacola Beach to begin extraction before mold sets in.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-green-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-green-100 p-3 rounded-lg">
                                    <Wind className="w-8 h-8 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Coastal Humidity Control
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Florida's high humidity makes natural drying impossible. We utilize industrial desiccants and LGR dehumidifiers to pull moisture from drywall, studs, and concrete slabs, preventing secondary water damage.
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
                                        Mold Prevention
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        In Gulf Breeze's warm climate, mold can grow in 24 hours. We apply hospital-grade antimicrobials to all flooded surfaces, targeting dangerous black mold and ensuring your home is safe for your family's return.
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

export default StormSurgeInfo;
