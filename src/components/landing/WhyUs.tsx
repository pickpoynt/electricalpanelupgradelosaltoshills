import { Shield, Landmark, Clock, Zap, Home, HardHat } from "lucide-react";

const reasons = [
  {
    icon: Landmark,
    title: "Historic Home Specialists",
    description: "We understand the unique challenges of Signal Mountain's vintage homes. Our electricians are trained in preservation-minded techniques that protect original features."
  },
  {
    icon: Zap,
    title: "Full System Expertise",
    description: "From knob-and-tube to cloth-wrapped wiring, we've seen it all. Our team expertly identifies and safely removes all types of outdated electrical systems."
  },
  {
    icon: Shield,
    title: "Licensed Master Electricians",
    description: "Our master electricians hold all required Tennessee licenses and maintain ongoing education in both modern code requirements and historic preservation methods."
  },
  {
    icon: Home,
    title: "Hidden Installation Methods",
    description: "We use specialized fishing techniques and strategic access points to run new wiring without damaging original plaster, trim, or architectural details."
  },
  {
    icon: HardHat,
    title: "Clean & Respectful Work",
    description: "We treat your historic home with the care it deserves. Our crews protect your floors, clean up thoroughly, and leave your home better than we found it."
  },
  {
    icon: Clock,
    title: "Insurance Compliance",
    description: "Many insurers require updated wiring in older homes. Our work comes with full documentation to satisfy your insurance company's safety requirements."
  }
];

const stats = [
  { number: "50+ Years", label: "Combined Exp." },
  { number: "100%", label: "Code Compliant" },
  { number: "Licensed", label: "Master Electricians" },
  { number: "Local", label: "Signal Mtn Team" }
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Why Signal Mountain Trusts Our Historic Home Experts
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Combining decades of electrical experience with specialized knowledge of historic construction methods to safely modernize your Signal Mountain heritage home.
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
                <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-amber-600" />
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
              <div className="text-3xl md:text-4xl font-heading font-bold text-amber-600 mb-2">
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
