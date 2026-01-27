import { Zap, Smartphone, Lightbulb, ShieldCheck, Home, Settings, Clock, Layers } from "lucide-react";

const SmartSwitchInfo = () => {
    return (
        <section id="smart-switch-info" className="py-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
                            Professional Smart Switch Installation in Signal Mountain, TN
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Modernize your Signal Mountain home with seamless smart lighting control. We specialize in installing Lutron, Leviton, and TP-Link smart switches, ensuring your historic or modern residence is fully automated and voice-controlled.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-indigo-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-indigo-100 p-3 rounded-lg">
                                    <Layers className="w-8 h-8 text-indigo-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Neutral Wire Retrofitting
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Signal Mountain's historic homes often lack neutral wires required for many smart switches. We provide expert retrofitting or "no-neutral" solutions like Lutron Caséta to ensure compatibility with your existing wiring.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-slate-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-slate-100 p-3 rounded-lg">
                                    <Smartphone className="w-8 h-8 text-slate-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        App & Hub Integration
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        We don't just swap the hardware; we ensure your switches are perfectly synced with your Wi-Fi or Bridge home automation hub, allowing for remote control from anywhere in the world.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <Settings className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Custom Scheduling
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Set your lights to follow the Tennessee sunset or create "Away" modes that mimic occupancy when you're traveling. We'll help you program sophisticated automations that enhance both security and convenience.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-emerald-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-emerald-100 p-3 rounded-lg">
                                    <Lightbulb className="w-8 h-8 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Dimmer & Fan Control
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Upgrade your standard toggles to smart dimmers and fan speed controllers. We ensure your LED bulbs are flicker-free and your ceiling fans are whisper-quiet and voice-activated.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-indigo-800">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-indigo-50 p-3 rounded-lg">
                                    <ShieldCheck className="w-8 h-8 text-indigo-800" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Licensed Installation
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Don't risk DIY with complex 3-way or 4-way circuits. Our licensed Signal Mountain electricians handle the high-voltage wiring safely, ensuring every switch is code-compliant and secure.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-purple-100 p-3 rounded-lg">
                                    <Clock className="w-8 h-8 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Energy Monitoring
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Track your power consumption in real-time. We install smart switches that provide energy usage data, helping you identify opportunities to save on your utility bills.
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

export default SmartSwitchInfo;
