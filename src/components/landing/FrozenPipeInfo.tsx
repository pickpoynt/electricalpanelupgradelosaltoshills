import { Droplets, Shield, Clock, Snowflake, Wrench, AlertTriangle } from "lucide-react";

const FrozenPipeInfo = () => {
    return (
        <section id="frozen-pipe-info" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Expert Frozen Pipe Cleanup in Rye Brook, NY
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Rye Brook winters can be unforgiving. When temperatures drop and pipes burst, our local restoration team responds 24/7 to extract water, dry your home, and prevent mold.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <Snowflake className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Why Pipes Burst in Rye Brook
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Many Rye Brook homes have older copper plumbing running through uninsulated crawl spaces or exterior walls. When the temperature drops below freezing, the water inside expands, causing high-pressure ruptures that flood finished basements and living areas.
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
                                        Emergency Water Extraction
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        A burst pipe can release 250+ gallons of water in a single day. Our rapid response team arrives within minutes to shut off the water main and begin extraction using truck-mounted units to save your hardwood floors and carpets.
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
                                        Structural Drying
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Water wicks into drywall, insulation, and studs. We open wet wall cavities and use industrial hot-air dryers to remove moisture from the structure, ensuring the integrity of your home remains intact.
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
                                        Insurance Claims Support
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        We work directly with all major insurance carriers in Westchester County. We document the frozen pipe damage extensively to ensure your claim is processed smoothly and you receive full coverage for repairs.
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

export default FrozenPipeInfo;
