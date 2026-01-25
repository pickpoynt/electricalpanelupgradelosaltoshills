import { Clock, Shield, Award, Users, Wind, Mountain } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Same-Day Service",
    description: "We understand smoke damage worsens with time. Our team responds immediately to begin the odor elimination process before particles set permanently."
  },
  {
    icon: Mountain,
    title: "Montana Specialists",
    description: "We understand Flathead Valley's unique challenges—from wildfire smoke infiltration to wood stove accidents. We've seen it all and know how to fix it."
  },
  {
    icon: Wind,
    title: "Advanced Technology",
    description: "Our industrial ozone generators and thermal foggers are commercial-grade equipment that completely eliminates odors at the molecular level."
  },
  {
    icon: Award,
    title: "Certified Technicians",
    description: "Our team is trained in IICRC fire and smoke restoration standards. We follow proven protocols for complete odor removal."
  },
  {
    icon: Shield,
    title: "Insurance Assistance",
    description: "We work directly with your homeowner's insurance to document fire damage and help you get the coverage you deserve."
  },
  {
    icon: Users,
    title: "Whitefish Local",
    description: "We live and work in the Flathead Valley. Your neighbors are our neighbors, and we take pride in restoring our community's homes."
  }
];

const stats = [
  { number: "100+", label: "Homes Restored" },
  { number: "Same-Day", label: "Response Time" },
  { number: "100%", label: "Odor Removal" },
  { number: "24/7", label: "Emergency Service" }
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Why Whitefish Chooses Montana Fresh Restore
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            When smoke damage strikes, you need experts with the right technology and local knowledge to completely eliminate odors from your furniture.
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
