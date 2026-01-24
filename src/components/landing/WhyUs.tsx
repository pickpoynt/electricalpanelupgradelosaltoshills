import { Clock, Shield, Award, Users, Anchor, CloudLightning } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "30-Minute Response",
    description: "We are locally stationed in Gulf Breeze, ensuring we reach your property fast to mitigate salt water damage."
  },
  {
    icon: Anchor,
    title: "Coastal Experts",
    description: "We understand the specific challenges of salt water flooding and coastal construction codes."
  },
  {
    icon: CloudLightning,
    title: "Storm Ready",
    description: "Our fleet is staged and ready before the hurricane makes landfall, ensuring immediate support."
  },
  {
    icon: Award,
    title: "Licensed & Insured",
    description: "Fully licensed for Florida water restoration. We carry comprehensive liability insurance."
  },
  {
    icon: Shield,
    title: "Insurance Accepted",
    description: "We work with all major flood insurance carriers to handle your claim documentation."
  },
  {
    icon: Users,
    title: "Local Community",
    description: "We live here. We care about restoring our neighbors' homes after the storm."
  }
];

const stats = [
  { number: "20+", label: "Hurricanes Handled" },
  { number: "30min", label: "Avg Response" },
  { number: "100%", label: "Satisfaction" },
  { number: "24/7", label: "Storm Support" }
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Why Gulf Breeze Trusts Us
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            When the water rises, you need a team that knows the coast and has the right equipment to save your home.
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
