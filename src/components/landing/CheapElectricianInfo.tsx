import { Zap, Shield, Home, Wrench, DollarSign, Lightbulb } from "lucide-react";

const CheapElectricianInfo = () => {
    return (
        <section id="electrician-info" className="py-20 bg-gradient-to-br from-slate-50 via-green-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
                            Affordable Electrical Services in Brevard, North Carolina
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Brevard families deserve quality electrical work at prices they can actually afford. Our affordable electrician services prove that you don't need to pay premium rates for professional electrical work. We combine licensed expertise with competitive pricing to serve the Transylvania County community.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-green-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-green-100 p-3 rounded-lg">
                                    <DollarSign className="w-8 h-8 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Honest Pricing Structure
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        We publish our base rates online and provide detailed written quotes before any work begins. No hourly rate surprises, no hidden trip charges, no mysterious "service fees." What we quote is what you pay.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <Shield className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Licensed NC Electricians
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Our electricians hold current North Carolina electrical licenses and maintain all required insurance. You get professional-grade workmanship meeting state codes and safety standards, not amateur shortcuts that cost more in the long run.
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
                                        Brevard Housing Expertise
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        We specialize in Brevard's older homes, historic properties, and mountain construction styles. Our familiarity with local electrical challenges—from knob-and-tube wiring to outdated panels—means faster, more accurate assessments and solutions.
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
                                        Comprehensive Services
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        From simple outlet replacements to complete electrical panel upgrades, we handle all residential electrical needs. Small jobs don't get penalized with minimum charges—we price fairly regardless of job size.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-orange-100 p-3 rounded-lg">
                                    <Lightbulb className="w-8 h-8 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Energy-Efficient Solutions
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        We help you save money long-term through LED conversions, smart home installations, and electrical system optimizations. Sometimes the cheapest option is investing in efficiency that pays dividends for years.
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
                                        Emergency Availability
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Electrical emergencies don't respect business hours. We offer 24/7 emergency service with the same affordable pricing philosophy—even after-hours calls get transparent, reasonable rates.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional unique content */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
                        <h3 className="text-3xl font-bold text-slate-900 mb-6 font-heading text-center">
                            Understanding Electrical Costs in Western North Carolina
                        </h3>
                        <div className="prose prose-lg max-w-none text-slate-700">
                            <p className="mb-4">
                                Brevard and Transylvania County present unique electrical challenges that affect pricing. Many homes in our area were built decades ago with electrical systems designed for much lower power demands. Original knob-and-tube wiring, 60-amp panels, and deteriorated infrastructure are common findings that require specialized knowledge to address safely.
                            </p>
                            <p className="mb-4">
                                <strong>The mountain construction challenge</strong> means longer travel times and more complex access issues. Many Brevard properties sit on steep lots, in dense forests, or require hiking equipment to reach. Despite these logistical challenges, we maintain affordable pricing by operating efficiently and passing savings directly to customers.
                            </p>
                            <p className="mb-4">
                                <strong>Seasonal considerations</strong> also impact electrical needs in Western North Carolina. Harsh winters strain heating systems, while summer humidity increases cooling demands. These seasonal peaks often reveal underlying electrical problems that need professional attention before they become costly failures.
                            </p>
                            <p>
                                <strong>Our commitment to affordability</strong> means we invest in the right tools, training, and local expertise to work efficiently in Brevard's unique environment. We don't charge premium rates for mountain accessibility—we factor realistic costs into our competitive pricing structure so every neighbor can afford quality electrical service.
                            </p>
                        </div>
                    </div>

                    {/* Process section */}
                    <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white">
                        <h3 className="text-3xl font-bold mb-8 font-heading text-center">
                            Our Affordable Service Process
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">1</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2">Free Consultation</h4>
                                <p className="text-green-100 text-sm">We discuss your needs and provide preliminary guidance at no charge.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">2</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2">Detailed Quote</h4>
                                <p className="text-green-100 text-sm">We provide a written estimate with itemized costs before any work begins.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">3</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2">Quality Installation</h4>
                                <p className="text-green-100 text-sm">Licensed electricians complete your project with professional workmanship.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">4</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2">Satisfaction Guarantee</h4>
                                <p className="text-green-100 text-sm">We ensure you're happy with the work and stand behind our service.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheapElectricianInfo;
