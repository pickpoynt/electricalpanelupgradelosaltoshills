import { Droplets, Shield, Clock, Mountain, Wrench, Sprout } from "lucide-react";

const GarageFloodInfo = () => {
    return (
        <section id="garage-flood-info" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Expert Garage Water Removal in Tiburon, CA
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Tiburon's unique topography creates specific drainage challenges. Hillside runoff during atmospheric rivers can overwhelm residential drainage systems, flooding garages and threatening foundations.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <Mountain className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Hillside Runoff Management
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        When drains clog with debris or soil, water cascades down Tiburon's steep properties. We extract the standing water and can help clear debris from drains to prevent immediate recurrence.
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
                                        Rapid Pump-Out Service
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Standing water in a garage can seep into drywall and framing quickly. Our high-capacity submersible pumps remove thousands of gallons per hour, protecting your storage and vehicles.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-green-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-green-100 p-3 rounded-lg">
                                    <Sprout className="w-8 h-8 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Mud & Silt Removal
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Floodwaters in Tiburon often bring mud and silt. We handle the heavy cleanup, power washing floors and sanitizing surfaces to remove contaminants and prevent mold.
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
                                        Structural Protection
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        We monitor moisture levels in garage walls and adjacent living spaces. If water has migrated, we deploy industrial drying equipment to save your home's structure.
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

export default GarageFloodInfo;
