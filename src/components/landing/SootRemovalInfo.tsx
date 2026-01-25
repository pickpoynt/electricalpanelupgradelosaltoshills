import { Eraser, Wind, Shield, Zap, Sparkles, Home } from "lucide-react";

const SootRemovalInfo = () => {
    return (
        <section id="soot-removal-info" className="py-20 bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Professional Soot Removal from Walls in Sparta, Wisconsin
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Soot is more than just a visible stain; it's a complex mixture of carbon and oils that can bond permanently to your walls if handled incorrectly. In Sparta, we provide scientific soot removal services that prioritize surface preservation and complete contaminant extraction.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-teal-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-teal-100 p-3 rounded-lg">
                                    <Eraser className="w-8 h-8 text-teal-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Dry Chemical Sponge Extraction
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Our first line of defense is the use of professional-grade dry chemical sponges. These are designed to lift soot particles directly off wall surfaces without the use of water, which prevents smearing. This technique is essential for painted drywall and wallpaper, often saving homeowners the cost of repainting entire rooms.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <Zap className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Furnace Puff Back Cleanup
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        When a heating system misfires, it can distribute a fine layer of oily soot through every room via the ductwork. We provide comprehensive puff back restoration, cleaning not only the walls but also the interior of your vents, ensuring that soot isn't redistributed after we leave.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-amber-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-amber-100 p-3 rounded-lg">
                                    <Wind className="w-8 h-8 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Hydroxyl Odor Neutralization
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Removing the soot is only half the battle. The smell of smoke can linger for months. We use hydroxyl generators—technology that's safe for people and pets—to neutralize smoke odors at the molecular level, ensuring your Sparta home feels and smells clean again.
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
                                        HEPA Air Scrubber Deployment
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        During the cleaning process, soot particles can become airborne. We protect your family's health by deploying industrial air scrubbers with HEPA filtration. These units continuously clean the air, capturing 99.97% of particles as small as 0.3 microns.
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
                                        Ceiling & Texture Specialist
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Textured 'popcorn' ceilings are notorious for trapping soot. Our team uses specialized vacuum attachments and ultra-gentle cleaning methods to restore ceilings without causing the texture to flake or peel. This attention to detail is what sets us apart in Sparta.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-indigo-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-indigo-100 p-3 rounded-lg">
                                    <Home className="w-8 h-8 text-indigo-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Local Restoration Knowledge
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Sparta homes range from historic structures to modern constructions. We understand the different paint types and wall materials common in our area and tailor our cleaning chemistry to match, ensuring effectively soot removal without surface damage.
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

export default SootRemovalInfo;
