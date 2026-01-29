import { Zap, Shield, Home, Wrench, Settings, CircuitBoard } from "lucide-react";

const ElectricalPanelInfo = () => {
    return (
        <section id="panel-info" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
                            Professional Electrical Panel Upgrades in Los Altos Hills, California
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Los Altos Hills homes and businesses deserve safe, reliable electrical systems that meet modern power demands. Our professional electrical panel upgrade services ensure your property has the capacity and safety features needed for today's electrical requirements while meeting all California electrical codes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <CircuitBoard className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Modern Panel Technology
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Today's electrical panels feature advanced safety mechanisms, higher amperage capacity, and compatibility with smart home systems. We install panels that meet current NEC standards and prepare your home for future electrical needs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-green-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-green-100 p-3 rounded-lg">
                                    <Shield className="w-8 h-8 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Enhanced Safety Features
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Modern panels include arc fault and ground fault protection that older fuse boxes simply cannot provide. These features detect dangerous electrical conditions before they cause fires or electrocution hazards.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-slate-700">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-slate-100 p-3 rounded-lg">
                                    <Home className="w-8 h-8 text-slate-700" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Increased Capacity
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Older panels often max out at 60-100 amps, insufficient for modern homes with central air, electric vehicles, and high-tech appliances. We install panels with 150-200+ amp capacity to meet all your electrical needs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-emerald-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-emerald-100 p-3 rounded-lg">
                                    <Wrench className="w-8 h-8 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Professional Installation
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Panel installation requires precise electrical work and adherence to strict safety codes. Our licensed technicians ensure proper grounding, correct wire sizing, and secure connections for reliable operation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-orange-100 p-3 rounded-lg">
                                    <Settings className="w-8 h-8 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Custom Circuit Planning
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        We design your panel layout to optimize circuit distribution, minimize wire runs, and ensure easy access for future maintenance. Each circuit is properly labeled for safety and convenience.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-purple-100 p-3 rounded-lg">
                                    <Zap className="w-8 h-8 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Code Compliance
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        All panel upgrades meet Nebraska electrical codes and Seward municipal requirements. We coordinate any necessary permits and ensure your installation passes all required inspections.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional unique content */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
                        <h3 className="text-3xl font-bold text-slate-900 mb-6 font-heading text-center">
                            Understanding Electrical Panel Needs in Los Altos Hills
                        </h3>
                        <div className="prose prose-lg max-w-none text-slate-700">
                            <p className="mb-4">
                                Los Altos Hills, California presents unique electrical challenges that make panel upgrades particularly important. The city's diverse housing stock includes many older homes built in the mid-20th century with original electrical systems that predate modern electrical demands. These vintage systems often feature 60-amp fuse boxes that struggle to power basic modern amenities, let alone today's high-demand smart home systems and EV charging stations.
                            </p>
                            <p className="mb-4">
                                <strong>California's regulatory environment</strong> also impacts electrical systems. Strict building codes and safety requirements mandate modern panels with advanced safety features like arc fault and ground fault protection. These requirements ensure your electrical system meets the latest safety standards.
                            </p>
                            <p className="mb-4">
                                <strong>The age factor</strong> is critical in Los Altos Hills' established neighborhoods. Electrical panels and components have life spans, and equipment from the 1960s-1980s may be approaching failure. Failing panels can cause power outages, fire hazards, or inadequate power distribution throughout the home.
                            </p>
                            <p>
                                <strong>Modern lifestyle changes</strong> also drive panel upgrade needs. Homeowners adding electric vehicle charging stations, upgrading to smart home systems, or installing modern kitchen appliances often discover their existing panels cannot safely accommodate these additions. A panel upgrade becomes essential for both safety and functionality.
                            </p>
                        </div>
                    </div>

                    {/* Process section */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
                        <h3 className="text-3xl font-bold mb-8 font-heading text-center">
                            Our Panel Upgrade Process
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">1</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2">Assessment</h4>
                                <p className="text-blue-100 text-sm">We evaluate your current panel, electrical load, and upgrade needs with a comprehensive inspection.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">2</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2">Design</h4>
                                <p className="text-blue-100 text-sm">We design your new panel layout to optimize circuit distribution and meet your specific electrical requirements.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">3</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2">Installation</h4>
                                <p className="text-blue-100 text-sm">Our licensed technicians safely install your new panel with proper connections and safety measures.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">4</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2">Testing</h4>
                                <p className="text-blue-100 text-sm">We test all circuits, verify proper operation, and ensure your new panel meets all safety standards.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ElectricalPanelInfo;
