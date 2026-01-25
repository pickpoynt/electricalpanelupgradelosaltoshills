import { Wind, Flame, Sparkles, Shield, Droplets, Zap } from "lucide-react";

const SmokeOdorInfo = () => {
    return (
        <section id="smoke-odor-info" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Professional Smoke Odor Removal from Upholstery in Whitefish, MT
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Montana's dry climate and wood-burning culture mean smoke damage is a common issue. Whether from a house fire, fireplace malfunction, or wildfire smoke infiltration, we use advanced ozone treatment and thermal fogging to completely eliminate smoke particles embedded deep in upholstery fibers.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <Wind className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Ozone Treatment Technology
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Our industrial-grade ozone generators produce O₃ molecules that chemically bond with smoke particles at the molecular level. This doesn't just mask odors—it destroys them permanently. We seal the treatment area and run cycles until all smoke smell is eliminated from your furniture.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-amber-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-amber-100 p-3 rounded-lg">
                                    <Flame className="w-8 h-8 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Thermal Fogging Process
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Thermal foggers heat specialized deodorizing solutions into a fine mist that penetrates every fiber, seam, and cushion layer. This reaches smoke particles that standard cleaning can't touch, neutralizing odors in areas traditional methods miss completely.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-green-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-green-100 p-3 rounded-lg">
                                    <Sparkles className="w-8 h-8 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Deep Upholstery Cleaning
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Before odor treatment, we perform hot water extraction on all upholstered surfaces. This removes soot, ash, and smoke residue from fabric fibers. We use pH-balanced cleaning agents specifically formulated for smoke damage that won't harm delicate upholstery materials.
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
                                        Fabric Protection Treatment
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        After odor removal and cleaning, we apply fabric protectant to help your upholstery resist future stains and odors. This creates a barrier that makes it easier to clean spills and prevents new odors from penetrating as deeply into the fibers.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-red-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-red-100 p-3 rounded-lg">
                                    <Droplets className="w-8 h-8 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Wildfire Smoke Restoration
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Flathead Valley residents know wildfire smoke can infiltrate homes during fire season. We specialize in removing that acrid smell from couches, chairs, and cushions that absorbed smoke over days or weeks of exposure. Our multi-step process ensures complete odor elimination.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-indigo-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-indigo-100 p-3 rounded-lg">
                                    <Zap className="w-8 h-8 text-indigo-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Same-Day Emergency Service
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        After a fire, every hour counts. Smoke particles continue to penetrate deeper into upholstery fibers over time. We offer same-day response in Whitefish and throughout Flathead County to begin the restoration process immediately and prevent permanent damage.
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

export default SmokeOdorInfo;
