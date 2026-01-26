import { Lightbulb, Wrench, Zap, Eye, ShieldCheck, Shovel } from "lucide-react";

const LandscapeLightingInfo = () => {
    return (
        <section id="landscape-repair-info" className="py-20 bg-gradient-to-br from-slate-50 via-green-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
                            Fair Haven Expert Landscape Lighting Repair & Restoration
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Don't let a dark garden dim your property's appeal. Our specialized repair services in Fair Haven breathe new life into existing landscape lighting systems, fixing everything from cut direct-burial cables to corroded sockets and failing transformers.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-green-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-green-100 p-3 rounded-lg">
                                    <Zap className="w-8 h-8 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Underground Wire Location & Repair
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Using precision cable locator technology, we find the exact point of failure in your underground low-voltage lines without digging up your entire lawn. Whether a line was cut during gardening or simply degraded over time, we provide permanent, moisture-proof splices that last.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-lime-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-lime-100 p-3 rounded-lg">
                                    <Lightbulb className="w-8 h-8 text-lime-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        LED Retrofitting & Upgrades
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        If your old halogen system is constantly burning out bulbs, it's time for an upgrade. We specialize in retrofitting existing high-quality fixtures with energy-efficient LEDs, reducing your power consumption by up to 80% while significantly improving light quality and longevity.
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
                                        Transformer Troubleshooting
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        The transformer is the heart of your system. If your lights are flickering or won't turn on, we test the core voltage, secondary taps, and internal fuses. We repair or replace faulty transformers and upgrade old manual timers to digital astronomical clocks or smart controllers.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-green-500">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-green-50 p-3 rounded-lg">
                                    <Eye className="w-8 h-8 text-green-500" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        System Design Adjustments
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Landscapes grow and change. What looked good five years ago might now be hidden by overgrown shrubs. We relocate existing fixtures to reveal your current landscape's best features, ensuring the light hits the right foliage and architectural details.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-teal-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-teal-100 p-3 rounded-lg">
                                    <ShieldCheck className="w-8 h-8 text-teal-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Corrosion Removal & Sealing
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Fair Haven's coastal air accelerates oxidation. We clean sockets, apply dielectric grease to terminals, and replace brittle o-rings to keep moisture out. This preventative maintenance prevents short circuits and extends the life of your expensive brass or copper fixtures.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-slate-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-slate-100 p-3 rounded-lg">
                                    <Shovel className="w-8 h-8 text-slate-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Re-burying Exposed Lines
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Frost heave and erosion can expose direct-burial wires, creating trip hazards and leaving them vulnerable to lawn mowers. We carefully trench and re-bury lines to the proper depth, securing them against future movement and damage.
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

export default LandscapeLightingInfo;
