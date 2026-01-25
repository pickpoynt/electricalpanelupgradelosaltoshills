import { Wind, Shield, Zap, Sparkles, Home, Droplets } from "lucide-react";

const AtticSmokeInfo = () => {
    return (
        <section id="attic-smoke-info" className="py-20 bg-gradient-to-br from-slate-50 via-amber-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Woodland Park Specialized Attic Smoke Odor Restoration
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Attics are unique environments where heat and smoke particles rise and become trapped in wood fibers and insulation. In Woodland Park, our high-altitude restoration process ensures that even the most stubborn smoke odors are permanently neutralized.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-amber-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-amber-100 p-3 rounded-lg">
                                    <Zap className="w-8 h-8 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Thermal Fogging Technology
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        We use industrial thermal foggers that create a dry deodorizing fog with particles as small as 0.25 microns. This fog penetrates deep into the pores of attic wood trusses and roof decking, neutralizing smoke molecules that traditional cleaning simply cannot reach.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <Droplets className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Insulation Decontamination
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Attic insulation acts as a giant filter for smoke. We provide specialized HEPA vacuuming and enzymatic deodorization for fiberglass and cellulose insulation. In cases of heavy saturation, we offer high-efficiency insulation removal and replacement to guarantee a clean-smelling home.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-teal-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-teal-100 p-3 rounded-lg">
                                    <Sparkles className="w-8 h-8 text-teal-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Professional Ozone Treatment
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        For comprehensive odor destruction, we deploy industrial ozone generators. Ozone (O3) molecules bond with smoke particles at the molecular level, breaking down the carbon bonds that create the smell. This is the most effective solution for whole-attic smoke neutralization.
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
                                        Wood Sealant Encapsulation
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        In severe fire cases, we apply specialized odor-blocking sealants to the attic structure. These breathable yet impermeable coatings trap any remaining microscopic particles within the wood, preventing 'ghost' odors from returning during Woodland Park's hot summer afternoons.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-red-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-red-100 p-3 rounded-lg">
                                    <Wind className="w-8 h-8 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        HEPA Air Scrubbing
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Airborne soot and ash can migrate from the attic into your living spaces. We deploy multi-stage industrial air scrubbers with HEPA and charcoal filters to continuously clean the air during the restoration process, protecting your family's respiratory health.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-green-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-green-100 p-3 rounded-lg">
                                    <Home className="w-8 h-8 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Whole-Home Air Integration
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Smoke odors often travel through the attic-living space interface (light fixtures, top plates). We identify these leak points and provide air sealing solutions that not only eliminate odors but also improve your Woodland Park home's energy efficiency.
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

export default AtticSmokeInfo;
