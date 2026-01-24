import { Droplets, Shield, Clock, Power, Wrench, AlertTriangle } from "lucide-react";

const SumpPumpInfo = () => {
    return (
        <section id="sump-pump-info" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Expert Sump Pump Water Cleanup in Cohasset, MA
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Cohasset's high water table and coastal storms put immense pressure on basement sump pumps. When they fail, water rises quickly. We provide immediate extraction to protect your finished basement.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <Power className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Power Failure Response
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Nor'easters often bring power outages along with heavy rain. If your battery backup fails or you don't have one, we arrive with self-powered extraction equipment to remove the water immediately.
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
                                        Rapid Water Extraction
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Seconds matter in a finished basement. We use industrial pumps and truck-mounted vacuums to pull water from carpets and pads before it wicks into drywall and insulation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-green-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-green-100 p-3 rounded-lg">
                                    <Wrench className="w-8 h-8 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Mechanical Failure Cleanup
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Whether it's a stuck float switch or a burnt-out motor, we clean up the mess. We also inspect the area for mold risks if the failure went unnoticed for several hours.
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
                                        Cohasset basements can be damp. After a flood, we deploy commercial dehumidifiers to bring relative humidity down to safe levels, preventing mold growth on organic materials.
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

export default SumpPumpInfo;
