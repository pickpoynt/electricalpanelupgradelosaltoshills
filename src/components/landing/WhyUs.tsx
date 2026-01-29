import { Shield, Zap, Clock, Home, HardHat, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Safety First Approach",
    description: "We prioritize safety in every panel upgrade, ensuring all work meets current NEC codes and local regulations. Our experienced technicians follow strict safety protocols to protect your family and property."
  },
  {
    icon: Zap,
    title: "Code Compliant Work",
    description: "All panel upgrades comply with National Electrical Code and local Seward requirements. We stay current with evolving electrical standards to ensure your panel passes inspections and provides reliable service."
  },
  {
    icon: Home,
    title: "Seward Community Focused",
    description: "We understand the unique electrical challenges in Seward, from older neighborhoods with vintage wiring to newer developments with high electrical demands. Our local expertise benefits every project."
  },
  {
    icon: HardHat,
    title: "Licensed Professionals",
    description: "Our electricians hold current Nebraska electrical licenses and maintain ongoing education on the latest panel technologies and safety standards. You get professional-grade workmanship every time."
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "We provide detailed written estimates before work begins with no hidden fees. Our pricing is competitive while maintaining the highest quality standards for your electrical safety."
  },
  {
    icon: Clock,
    title: "Efficient Service",
    description: "We respect your time with punctual appointments and efficient work practices. Most panel upgrades can be completed in a single day with minimal disruption to your daily routine."
  }
];

const stats = [
  { number: "500+", label: "Panels Upgraded" },
  { number: "100%", label: "Licensed & Insured" },
  { number: "Licensed", label: "NE Electricians" },
  { number: "Local", label: "Seward" }
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Why Seward Chooses Our Panel Upgrade Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Combining electrical expertise with local knowledge to deliver safe, code-compliant panel upgrades that protect Seward families and businesses.
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
