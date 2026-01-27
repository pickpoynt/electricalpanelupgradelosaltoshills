import { Clock, Shield, Flame, Zap, Thermometer, MapPin, Settings } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Radiant Heat Experts",
    description: "Heated floor systems require specialized electrical knowledge that general electricians often lack. We are experts in radiant floor diagnostics."
  },
  {
    icon: Thermometer,
    title: "Precision Diagnostics",
    description: "We use thermal imaging and resistance testing to pinpoint the exact location of faults under your floor, minimizing the need for tile removal."
  },
  {
    icon: Shield,
    title: "Safety Compliance",
    description: "Bathroom electrical safety is critical. We use heavy-duty components and strictly adhere to NJ building codes for wet-area heating."
  },
  {
    icon: MapPin,
    title: "Fair Haven Local",
    description: "Based in Fair Haven, NJ. We know the local building department requirements and the specific electrical standards of our neighborhood."
  },
  {
    icon: Settings,
    title: "Control Specialists",
    description: "We work with all major brands of floor heating controls, from simple dial thermostats to advanced Wi-Fi and smart home systems."
  },
  {
    icon: Clock,
    title: "Reliable Service",
    description: "Don't suffer through a cold Fair Haven winter. We offer prompt repair services to restore your floor's warmth as quickly as possible."
  }
];

const stats = [
  { number: "100%", label: "Diagnostic Rate" },
  { number: "NEC", label: "Safety Rated" },
  { number: "24/7", label: "Availability" },
  { number: "Local", label: "Fair Haven Team" }
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Why Fair Haven Trusts Our Heated Floor Experts
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Providing high-performance, safe, and professional electrical solutions for luxury radiant floor heating systems in Fair Haven and Monmouth County.
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
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
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
              <div className="text-3xl md:text-4xl font-heading font-bold text-blue-600 mb-2">
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

