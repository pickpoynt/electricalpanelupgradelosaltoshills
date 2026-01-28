import { Zap, Home, Shield, Settings, Landmark, AlertTriangle, Clock, Wrench } from "lucide-react";

const HistoricHomeRewiringInfo = () => {
    return (
        <section id="historic-rewiring-info" className="py-20 bg-gradient-to-br from-slate-50 via-amber-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
                            Expert Historic Home Rewiring in Signal Mountain, TN
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Signal Mountain is home to many beautiful vintage and historic properties built in the early-to-mid 1900s. While these homes possess irreplaceable architectural character, their original electrical systems—often featuring knob-and-tube or cloth-wrapped wiring—pose serious fire hazards and insurance concerns. Our team specializes in safely modernizing these treasured homes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-amber-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-amber-100 p-3 rounded-lg">
                                    <Zap className="w-8 h-8 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Knob-and-Tube Replacement
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        The porcelain knobs and tubes that once safely carried electricity through Signal Mountain homes are now fire hazards. Insulation touching these old wires, brittle rubber insulation, and lack of grounding make replacement essential. We carefully remove every inch of knob-and-tube wiring and replace it with modern, grounded circuits.
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
                                        Cloth-Wrapped Wire Removal
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Many Signal Mountain homes from the 1920s-1960s contain cloth-wrapped wiring with rubber insulation that has become brittle and cracked over decades. This deteriorating insulation exposes bare copper conductors, creating serious fire and shock risks. We systematically locate and replace all cloth-wrapped circuits.
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
                                        Service Panel Upgrades
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Vintage fuse boxes and small breaker panels simply cannot handle modern electrical loads—computers, HVAC systems, appliances, and EV chargers. We upgrade to modern 200-amp panels with proper arc-fault and ground-fault protection, bringing your historic home safely into the 21st century.
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
                                        Preservation-First Approach
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        What sets us apart is our commitment to preserving your home's character. We use strategic access points, fish wires through existing cavities, and repair any necessary openings to match original materials. Your crown molding, plaster walls, and hardwood floors are treated with the utmost respect.
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
                                        Grounding & Safety Upgrades
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Older homes often lack proper grounding, putting you at risk of electrical shock and damaging sensitive electronics. We install complete grounding systems, update two-prong outlets to three-prong grounded receptacles, and add GFCI protection in kitchens, bathrooms, and exterior locations.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-purple-100 p-3 rounded-lg">
                                    <Landmark className="w-8 h-8 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Insurance & Code Compliance
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Many insurance companies either refuse to cover or charge premium rates for homes with knob-and-tube wiring. Our complete rewiring services include all required permits, inspections, and documentation to satisfy insurers and bring your home into full Tennessee electrical code compliance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional unique content */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
                        <h3 className="text-3xl font-bold text-slate-900 mb-6 font-heading text-center">
                            Understanding Signal Mountain's Historic Electrical Heritage
                        </h3>
                        <div className="prose prose-lg max-w-none text-slate-700">
                            <p className="mb-4">
                                Signal Mountain's residential development accelerated significantly during the early 20th century, with many of the area's most charming homes constructed between 1900 and 1960. These properties showcase exceptional craftsmanship—hand-carved woodwork, original plaster medallions, heart pine flooring, and architectural details that simply cannot be replicated today. However, the electrical systems installed during this era present unique challenges for modern homeowners.
                            </p>
                            <p className="mb-4">
                                <strong>Knob-and-tube wiring</strong>, standard from roughly 1880 to 1940, uses ceramic knobs to support individual hot and neutral wires run through open air spaces in walls and attics. While revolutionary in its day, this system lacks the ground wire essential for modern electrical safety and was never designed for today's electrical demands. The addition of insulation over these wires (a common energy-saving upgrade) creates dangerous heat buildup and fire risk.
                            </p>
                            <p className="mb-4">
                                <strong>Cloth-wrapped wiring</strong>, common in homes built between 1920 and 1960, features rubber insulation covered by a fabric sheath. Over decades, this rubber degrades, cracks, and crumbles, exposing bare conductors. Combined with the dust and debris accumulated in older walls, these deteriorating wires become significant fire hazards.
                            </p>
                            <p>
                                Our Signal Mountain team has extensive experience with both wiring types, as well as early plastic-insulated wiring, aluminum branch circuits, and outdated panel technologies like Federal Pacific and Zinsco. We provide comprehensive electrical assessments and develop tailored rewiring plans that address your specific home's needs while respecting its architectural significance.
                            </p>
                        </div>
                    </div>

                    {/* Process section */}
                    <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 md:p-12 text-white">
                        <h3 className="text-3xl font-bold mb-8 font-heading text-center">
                            Our Historic Home Rewiring Process
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">1</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2">Comprehensive Assessment</h4>
                                <p className="text-amber-100 text-sm">Complete inspection of existing wiring, panel, and service entrance to understand the full scope of work.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">2</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2">Custom Planning</h4>
                                <p className="text-amber-100 text-sm">Develop a strategic wiring plan that minimizes invasive work while maximizing safety and convenience.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">3</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2">Careful Execution</h4>
                                <p className="text-amber-100 text-sm">Skilled installation using specialized tools and techniques designed for historic construction methods.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">4</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2">Final Inspection</h4>
                                <p className="text-amber-100 text-sm">Complete testing, city inspection, and documentation for your records and insurance company.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HistoricHomeRewiringInfo;
