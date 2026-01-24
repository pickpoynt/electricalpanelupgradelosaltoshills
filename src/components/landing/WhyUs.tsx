import { Clock, Shield, Award, Users, Mountain, Snowflake } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "45-Minute Response",
    description: "Vail weather can be unpredictable. Our local team is ready 24/7 with 4WD vehicles to reach your flooded basement fast."
  },
  {
    icon: Mountain,
    title: "Mountain Home Experts",
    description: "We understand mountain construction, from heated driveways to stone foundations, ensuring safe and effective water removal."
  },
  {
    icon: Snowflake,
    title: "Winter Specialists",
    description: "From frozen pipe bursts to ice dam leaks, we have the specialized equipment to handle water damage in freezing temperatures."
  },
  {
    icon: Award,
    title: "Licensed & Insured",
    description: "Fully licensed for water restoration in Colorado. We carry comprehensive liability and workers' compensation insurance."
  },
  {
    icon: Shield,
    title: "Insurance Approved",
    description: "We work with all major carriers (State Farm, Allstate, etc.) and handle the documentation so you can focus on recovery."
  },
  {
    icon: Users,
    title: "Local Vail Team",
    description: "Living and working in Eagle County means we treat every customer like a neighbor. We're here for you before, during, and after the storm."
  }
];

const stats = [
  { number: "15+", label: "Years in Vail" },
  { number: "45min", label: "Avg Response" },
  { number: "100%", label: "Satisfaction" },
  { number: "24/7", label: "Emergency Support" }
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Why Vail Homeowners Trust Us
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            When your basement floods, you need a team that understands the unique challenges of properties in the Colorado Rockies.
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
