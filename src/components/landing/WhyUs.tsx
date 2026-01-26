import { Clock, Shield, Award, Users, Anchor, Zap, MapPin } from "lucide-react";

const reasons = [
  {
    icon: Anchor,
    title: "Marine Specialists",
    description: "We specialize exclusively in marine electrical systems, understanding the unique challenges of Fair Haven's saltwater environment."
  },
  {
    icon: MapPin,
    title: "Fair Haven Locals",
    description: "Based right here in Fair Haven, NJ. We know the local docks and community better than anyone else."
  },
  {
    icon: Clock,
    title: "24/7 Response",
    description: "Boat lift failures or electrical issues don't follow business hours. We're ready to help whenever you need us."
  },
  {
    icon: Award,
    title: "Licensed & Insured",
    description: "Our team consists of fully licensed electrical professionals specifically trained in marine safety and code compliance."
  },
  {
    icon: Shield,
    title: "Safety Focused",
    description: "Every installation includes rigorous GFCI testing and marine-grade grounding to prevent electrical hazards in the water."
  },
  {
    icon: Zap,
    title: "Quality Components",
    description: "We only use premium, corrosion-resistant components designed to withstand years of sun, salt, and humidity."
  }
];

const stats = [
  { number: "24/7", label: "Marine Service" },
  { number: "NJ", label: "State Licensed" },
  { number: "100%", label: "Satisfaction" },
  { number: "Local", label: "Fair Haven Team" }
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Why Fair Haven Chooses Our Marine Electricians
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Providing reliable, safe, and professional electrical solutions for boat lifts and docks along the Navesink River.
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

