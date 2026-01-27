import { Shield, Bell, Clock, Zap, ShieldAlert, HardHat } from "lucide-react";

const reasons = [
  {
    icon: ShieldAlert,
    title: "NFPA Code Experts",
    description: "We are deeply familiar with NFPA 72 and local Signal Mountain fire codes, ensuring your installation is fully compliant and safe."
  },
  {
    icon: Zap,
    title: "Interconnection Pros",
    description: "Hardwiring alarms for synchronization is a technical electrical task. We ensure your entire home is linked for immediate unified response."
  },
  {
    icon: Shield,
    title: "Licensed Electricians",
    description: "Smart safety requires reliable high-voltage wiring. Our licensed pros handle every connection with precision and professional integrity."
  },
  {
    icon: Bell,
    title: "CO & Fire Safety",
    description: "We provide comprehensive protection by integrating carbon monoxide detection with your fire safety system for multi-threat coverage."
  },
  {
    icon: HardHat,
    title: "Clean Installation",
    description: "We take pride in our work, ensuring every detector is perfectly mounted and all wiring is neatly fished through walls with zero damage."
  },
  {
    icon: Clock,
    title: "24/7 Peace of Mind",
    description: "A professional installation means you can sleep soundly knowing your family is protected by a redundant, battery-backed safety system."
  }
];

const stats = [
  { number: "10-Year", label: "Battery Life" },
  { number: "100%", label: "Code-Sync" },
  { number: "Licensed", label: "Insured Pros" },
  { number: "Local", label: "Signal Mtn Team" }
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Why Signal Mountain Trusts Our Fire Safety Experts
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Combining rigorous electrical standards with the latest fire safety technology to provide the most reliable protection for Signal Mountain families.
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
                <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-red-600" />
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
              <div className="text-3xl md:text-4xl font-heading font-bold text-red-600 mb-2">
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
