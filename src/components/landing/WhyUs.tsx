import { Clock, Shield, Award, Users, Wind, TreePine } from "lucide-react";

const reasons = [
  {
    icon: TreePine,
    title: "Log Specialists",
    description: "We aren't general contractors. We are specialized log home restoration experts who understand the structural nuances of cabin construction."
  },
  {
    icon: Wind,
    title: "Deep Timber Odor Removal",
    description: "Smoke penetrates deep into wood pores. Our advanced thermal fogging technology ensures your cabin smells fresh, not like a campfire."
  },
  {
    icon: Clock,
    title: "Rapid Response",
    description: "In Whitefish, time is of the essence after a fire. We respond 24/7 to secure your structure and begin the stabilization process immediately."
  },
  {
    icon: Award,
    title: "Certified Restorers",
    description: "Our technicians are IICRC certified in fire & smoke restoration, with additional specialized training in log home remediation."
  },
  {
    icon: Shield,
    title: "Insurance Assistance",
    description: "We work directly with your insurance company, providing the detailed documentation needed for complex log cabin fire claims."
  },
  {
    icon: Users,
    title: "Local Community",
    description: "Being based in Whitefish, we know the local climate and mountain conditions that affect cabin restoration and longevity."
  }
];

const stats = [
  { number: "250+", label: "Cabins Restored" },
  { number: "24/7", label: "Emergency Support" },
  { number: "15yr", label: "Local Experience" },
  { number: "100%", label: "Satisfaction" }
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Why Whitefish Trusts Our Log Experts
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Restoring a fire-damaged log cabin requires a different skill set than traditional framing. We bring the specialized expertise your mountain home deserves.
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
