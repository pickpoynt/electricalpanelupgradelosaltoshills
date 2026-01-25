import { Clock, Shield, Award, Users, Wind, Eraser, Mountain } from "lucide-react";

const reasons = [
  {
    icon: Wind,
    title: "Specialized Attic Tech",
    description: "Attics require distinct techniques. We use thermal foggers and ozone generators specifically calibrated for enclosed roofing environments."
  },
  {
    icon: Mountain,
    title: "Woodland Park Locals",
    description: "We are based in Woodland Park and understand Teller County's unique climate and construction styles, from modern homes to mountain cabins."
  },
  {
    icon: Clock,
    title: "Rapid 24/7 Response",
    description: "Smoke particles settle and bond quickly. Our local team is ready to respond immediately to stabilize your home's air quality."
  },
  {
    icon: Award,
    title: "IICRC Certified",
    description: "Our restoration specialists are fully IICRC certified in fire & smoke restoration, ensuring industry-leading protocols in your attic."
  },
  {
    icon: Shield,
    title: "Insurance Specialists",
    description: "We work directly with all major insurance carriers in Colorado, providing detailed documentation and thermal imaging to support your claim."
  },
  {
    icon: Users,
    title: "Trusted Reputation",
    description: "With hundreds of successful home restorations in Woodland Park and Cascade, we've built a reputation for excellence and integrity."
  }
];

const stats = [
  { number: "24/7", label: "Emergency Help" },
  { number: "15yr+", label: "Local Expertise" },
  { number: "100%", label: "Satisfaction" },
  { number: "Teller", label: "County Focus" }
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Why Woodland Park Trusts Our Attic Experts
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Removing smoke odor from an attic isn't just about cleaning—it's about neutralizing microscopic particles trapped in the home's most challenging spaces.
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
