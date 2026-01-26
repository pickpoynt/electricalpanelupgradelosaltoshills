import { Clock, Shield, Award, Lightbulb, Wrench, Zap, MapPin } from "lucide-react";

const reasons = [
  {
    icon: Wrench,
    title: "Repair Specialists",
    description: "Unlike general landscapers, we focus exclusively on the electrical and technical health of your outdoor lighting system."
  },
  {
    icon: Zap,
    title: "Precision Troubleshooting",
    description: "We use advanced wire locating tools to identify breakages and shorts without digging up your entire property."
  },
  {
    icon: Lightbulb,
    title: "LED Experts",
    description: "We specialize in modernizing old halogen systems, providing better light while saving you money on electricity and maintenance."
  },
  {
    icon: MapPin,
    title: "Fair Haven Locals",
    description: "We are based right here in Fair Haven and understand the local soil conditions and coastal humidity affects on lighting."
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Our team consists of fully licensed electrical professionals, ensuring every repair meets local safety codes and standards."
  },
  {
    icon: Clock,
    title: "Rapid Response",
    description: "A dark garden's a security risk. We prioritize repair calls to get your system back online as quickly as possible."
  }
];

const stats = [
  { number: "24hr", label: "Diagnostic Turn" },
  { number: "LED", label: "Retrofit Pros" },
  { number: "100%", label: "Satisfaction" },
  { number: "Local", label: "Fair Haven Team" }
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Fair Haven's Trusted Landscape Lighting Repair Team
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Providing reliable, safe, and professional repair solutions for garden and outdoor lighting systems in Monmouth County.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-100 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white border border-slate-100 rounded-xl p-8 shadow-sm">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-green-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default WhyUs;

