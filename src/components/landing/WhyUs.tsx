import { Clock, Shield, Flame, Zap, Thermometer, MapPin } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Electrical Specialists",
    description: "High-wattage patio heaters require specialized electrical knowledge that general handymen don't have. We are expert electricians."
  },
  {
    icon: Flame,
    title: "Brand Relationships",
    description: "We work directly with premium heater brands like Infratech, Bromic, and Solaira to ensure every installation follows factory specs."
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Outdoor electrical safety is critical. We use heavy-duty weatherproof components and strictly adhere to NJ fire and electrical codes."
  },
  {
    icon: MapPin,
    title: "Fair Haven Local",
    description: "Based in Fair Haven, NJ. We know the local building department requirements and the unique electrical needs of our neighbors."
  },
  {
    icon: Thermometer,
    title: "Comfort Design",
    description: "We don't just wire; we consult on optimal heater placement to ensure even heat distribution across your entire outdoor space."
  },
  {
    icon: Clock,
    title: "Reliable Service",
    description: "Don't let a chilly evening ruin your party. We offer prompt installation and repair services to keep your patio warm year-round."
  }
];

const stats = [
  { number: "240V", label: "Certification" },
  { number: "UL", label: "Rated Parts" },
  { number: "100%", label: "Satisfaction" },
  { number: "Local", label: "Fair Haven Team" }
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Why Fair Haven Trusts Our Patio Heating Experts
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Providing high-performance, safe, and professional electrical solutions for luxury outdoor heating systems in Fair Haven and Monmouth County.
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
                <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-orange-600" />
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
              <div className="text-3xl md:text-4xl font-heading font-bold text-orange-600 mb-2">
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

