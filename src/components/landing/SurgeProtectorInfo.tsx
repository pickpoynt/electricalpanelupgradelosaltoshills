import { Zap, Shield, Home, AlertTriangle, DollarSign, Settings } from "lucide-react";

const SurgeProtectorInfo = () => {
    return (
        <section id="surge-protector-info" className="py-20 bg-gradient-to-br from-slate-50 via-yellow-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
                            Professional Whole House Surge Protector Installation in Cave Springs, Arkansas
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Northwest Arkansas experiences frequent thunderstorms, and Cave Springs homes are vulnerable to damaging power surges from lightning strikes and utility grid fluctuations. A single surge can destroy thousands of dollars worth of electronics in an instant. Our whole house surge protector installation provides comprehensive protection for everything you own.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-yellow-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-yellow-100 p-3 rounded-lg">
                                    <Zap className="w-8 h-8 text-yellow-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Type 2 SPD Installation
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        We install Type 2 Surge Protective Devices (SPDs) directly at your main electrical panel. These devices intercept and divert damaging voltage spikes before they can reach your home's circuits, protecting everything from your refrigerator to your home theater system.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-orange-100 p-3 rounded-lg">
                                    <AlertTriangle className="w-8 h-8 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Lightning & Grid Protection
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Arkansas ranks among the top states for lightning strikes. Our surge protectors guard against both direct lightning-induced surges and the more common utility grid fluctuations caused by transformer switching, downed power lines, and grid load changes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-slate-700">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-slate-100 p-3 rounded-lg">
                                    <Shield className="w-8 h-8 text-slate-700" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Complete Circuit Coverage
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Unlike plug-in surge strips that only protect devices plugged into them, whole-house protection covers every circuit in your home simultaneously—including hardwired appliances like your HVAC system, water heater, and garage door opener.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-emerald-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-emerald-100 p-3 rounded-lg">
                                    <Home className="w-8 h-8 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Smart Home Protection
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Modern homes are filled with sensitive electronics—smart thermostats, security systems, networked devices, and expensive appliances. These devices are particularly vulnerable to even small voltage fluctuations that whole-house protection prevents.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <DollarSign className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Cost-Effective Protection
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        For a one-time investment of a few hundred dollars, you protect tens of thousands in electronics and appliances. Many homeowners recoup the cost after preventing just one surge event—and that peace of mind is priceless.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-purple-100 p-3 rounded-lg">
                                    <Settings className="w-8 h-8 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Professional Installation
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Proper installation is critical for surge protection effectiveness. Our licensed electricians ensure correct sizing, secure mounting, proper grounding, and code-compliant wiring for maximum protection.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional unique content */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
                        <h3 className="text-3xl font-bold text-slate-900 mb-6 font-heading text-center">
                            Understanding Power Surges in Northwest Arkansas
                        </h3>
                        <div className="prose prose-lg max-w-none text-slate-700">
                            <p className="mb-4">
                                Cave Springs and the greater Northwest Arkansas region experience over 50 thunderstorm days per year on average. Each storm brings the potential for lightning-induced power surges that can travel through utility lines and into your home. But lightning isn't the only threat—in fact, most damaging surges come from other sources.
                            </p>
                            <p className="mb-4">
                                <strong>Utility grid switching</strong> is a leading cause of power surges. When the power company switches transformers, reroutes power, or brings sections of the grid online after outages, voltage spikes can propagate through the system. These "switching surges" happen regularly and often go unnoticed—until they damage sensitive electronics.
                            </p>
                            <p className="mb-4">
                                <strong>Internal surges</strong> from your own home's appliances are another common culprit. When large motors in HVAC systems, refrigerators, or power tools cycle on and off, they can create small voltage spikes that gradually degrade electronics over time. These repetitive small surges shorten the lifespan of everything from LED bulbs to computers.
                            </p>
                            <p>
                                <strong>A whole-house surge protector</strong> installed at your main panel addresses all these threats simultaneously. By clamping voltage spikes at the point of entry, these devices prevent damaging surges from ever reaching your home's circuits—protecting both today's electronics and tomorrow's investments.
                            </p>
                        </div>
                    </div>

                    {/* Process section */}
                    <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-2xl p-8 md:p-12 text-white">
                        <h3 className="text-3xl font-bold mb-8 font-heading text-center">
                            Our Surge Protector Installation Process
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">1</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2">Panel Assessment</h4>
                                <p className="text-yellow-100 text-sm">We inspect your electrical panel to determine the best SPD type and verify adequate space for installation.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">2</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2">Device Selection</h4>
                                <p className="text-yellow-100 text-sm">We recommend the right surge protector based on your panel type, home size, and protection needs.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">3</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2">Professional Install</h4>
                                <p className="text-yellow-100 text-sm">Our licensed electricians mount and wire your SPD with proper grounding and code-compliant connections.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">4</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2">Testing & Verification</h4>
                                <p className="text-yellow-100 text-sm">We test the installation, verify protection status, and show you how to monitor your SPD.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SurgeProtectorInfo;
