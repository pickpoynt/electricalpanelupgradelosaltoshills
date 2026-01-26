import { Lightbulb, Shield, Zap, Sun, Anchor, Droplets } from "lucide-react";

const DockLightingInfo = () => {
    return (
        <section id="dock-lighting-info" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
                            Fair Haven Premier Dock Lighting & Marine Illumination
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Transform your waterfront property in Fair Haven into a stunning twilight retreat. Our marine-grade lighting solutions combine safety, security, and aesthetics, designed specifically to withstand the harsh Navesink River environment.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <Lightbulb className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        LED Dock & Piling Lighting
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        We install high-efficiency LED piling lights that provide 360-degree illumination for safe docking and a beautiful nighttime silhouette. Our fixtures are IP68 rated, meaning they are completely dust-tight and can survive temporary immersion in salt water.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-cyan-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-cyan-100 p-3 rounded-lg">
                                    <Sun className="w-8 h-8 text-cyan-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Atmospheric Pier Lighting
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Custom pathway and deck lighting creates a warm, inviting glow for evening walks and dockside entertaining. We use low-voltage systems that are energy-efficient and safer for wet marine environments compared to traditional high-voltage wiring.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-indigo-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-indigo-100 p-3 rounded-lg">
                                    <Anchor className="w-8 h-8 text-indigo-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Underwater Fishing Lights
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Attract marine life and create a mesmerizing aquarium-like effect beneath your dock. Our high-intensity underwater LEDs are designed to resist barnacle growth and provide a vibrant burst of color in the river water.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-500">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-blue-50 p-3 rounded-lg">
                                    <Shield className="w-8 h-8 text-blue-500" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Smart Automation & Security
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Control your entire dock lighting system from your smartphone. We integrate smart timers, motion sensors, and dimmers, allowing you to automate your lighting for security and energy savings without lifting a finger.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-sky-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-sky-100 p-3 rounded-lg">
                                    <Zap className="w-8 h-8 text-sky-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Marine Power Pedestals
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Integrated lighting and power solutions for your boat. We install and service marine pedestals that provide reliable shore power, fresh water hookups, and integrated area lighting in one sleek package.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-slate-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-slate-100 p-3 rounded-lg">
                                    <Droplets className="w-8 h-8 text-slate-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Corrosion-Resistant Cabling
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Wiring in Fair Haven is subject to extreme humidity and salt. We use double-jacketed tinned copper marine wire and moisture-proof heat-shrink connectors to ensure your lights stay on even in the worst storms.
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

export default DockLightingInfo;
