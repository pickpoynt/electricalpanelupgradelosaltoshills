import { ShieldAlert, Zap, Bell, ShieldCheck, Home, Settings, Clock, AlertTriangle } from "lucide-react";

const SmokeDetectorInfo = () => {
    return (
        <section id="smoke-detector-info" className="py-20 bg-gradient-to-br from-slate-50 via-red-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
                            Professional Smoke Detector Hardwiring in Signal Mountain, TN
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Protect your family with interconnected life safety systems. We specialize in hardwiring smoke and carbon monoxide detectors, ensuring every level of your Signal Mountain home is monitored and synchronized for maximum response time.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-red-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-red-100 p-3 rounded-lg">
                                    <Zap className="w-8 h-8 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Interconnected Hardwiring
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        When one alarm sounds, they all sound. We provide professional hardwiring services that interconnect every detector in your home, providing critical extra seconds for evacuation in the event of a fire.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-orange-100 p-3 rounded-lg">
                                    <Bell className="w-8 h-8 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Dual-Sensor Installation
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        We install advanced dual-sensor detectors (ionization and photoelectric) to detect both fast-flaming fires and slow-smoldering fires, providing the comprehensive coverage required for Signal Mountain residents.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-slate-700">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-slate-100 p-3 rounded-lg">
                                    <ShieldCheck className="w-8 h-8 text-slate-700" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        10-Year Battery Backup
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Even a hardwired system needs backup power. We install units with 10-year sealed lithium battery backups, ensuring your safety doesn't fail during mountain power outages or storms.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-amber-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-amber-100 p-3 rounded-lg">
                                    <AlertTriangle className="w-8 h-8 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        CO Detection Integration
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Signal Mountain homes with gas appliances or fireplaces are at risk of Carbon Monoxide leaks. We hardwire combination SM/CO units that provide multi-hazard protection in a single installation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <Home className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Proper Placement Audit
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Where you place your detectors matters. Our certified electricians perform a full audit to ensure detectors are installed in every bedroom, outside sleeping areas, and on every level according to Signal Mountain fire codes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-emerald-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-emerald-100 p-3 rounded-lg">
                                    <ShieldAlert className="w-8 h-8 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        NFPA Code Compliance
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        We ensure every aspect of your installation meets or exceeds NFPA 72 (National Fire Alarm and Signaling Code) requirements, providing peace of mind and potential multi-line insurance discounts.
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

export default SmokeDetectorInfo;
