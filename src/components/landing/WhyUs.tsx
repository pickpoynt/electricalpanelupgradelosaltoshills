import { Home, Shield, AlertTriangle, MapPin, Search, Clock } from "lucide-react";

const reasons = [
  {
    icon: Home,
    title: "Historic Home Experts",
    description: "Signal Mountain's historic homes require a delicate touch. We specialize in rewiring older residences without destroying original plaster and woodwork."
  },
  {
    icon: Shield,
    title: "Insurance Approved",
    description: "Active knob and tube is a major insurance liability. We provide full documentation and certification to help you secure or maintain your home insurance."
  },
  {
    icon: AlertTriangle,
    title: "Safety First Approach",
    description: "Ungrounded knob and tube wiring is a significant fire risk in modern homes. We prioritize safety by installing grounded circuits with AFCI/GFCI protection."
  },
  {
    icon: MapPin,
    title: "Signal Mountain Local",
    description: "Located on the mountain and familiar with the localized building permits and historic preservation standards of Signal Mountain and Walden, TN."
  },
  {
    icon: Search,
    title: "Detailed Property Audits",
    description: "We don't just guess. We use advanced diagnostic tools to locate every run of active knob and tube in your home to ensure no hazards are missed."
  },
  {
    icon: Clock,
    title: "Reliable & Professional",
    description: "We respect your schedule and your home. Our team provides clean, professional service with a focus on communication and timely completion."
  }
];

const stats = [
  { number: "100%", label: "Safe Compliance" },
  { number: "NFPA", label: "Code Experts" },
  { number: "Licensed", label: "Insured Pros" },
  { number: "Local", label: "Signal Mtn Team" }
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Why Signal Mountain Trusts Our Historic Wiring Experts
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Providing safe, specialized, and respectful electrical solutions for Signal Mountain's most treasured historic residences.
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
                <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-amber-600" />
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
              <div className="text-3xl md:text-4xl font-heading font-bold text-amber-600 mb-2">
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
