import { Clock, Shield, Award, Users, Wind, Eraser } from "lucide-react";

const reasons = [
  {
    icon: Eraser,
    title: "Soot Specialists",
    description: "Cleaning soot requires specific knowledge and tools. We use dry chemical sponges and specialized vacuums to ensure a streak-free clean."
  },
  {
    icon: Wind,
    title: "Odor Control",
    description: "Soot often comes with stubborn smoke smells. We use hydroxyl generators to neutralize odors deep within your home's surfaces."
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "Soot becomes harder to remove the longer it sits. Our Sparta-based team is ready to respond 24/7 to begin the cleaning process."
  },
  {
    icon: Award,
    title: "IICRC Certified",
    description: "Our technicians are fully trained and certified in fire and smoke restoration, ensuring the highest standard of care for your home."
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "We are a locally owned, fully licensed and insured restoration company. Peace of mind comes standard with our service."
  },
  {
    icon: Users,
    title: "Local to Sparta",
    description: "We live and work right here in Sparta. We're committed to helping our neighbors restore their homes after fire or furnace issues."
  }
];

const stats = [
  { number: "24/7", label: "Emergency Help" },
  { number: "10yr+", label: "Experience" },
  { number: "100%", label: "Satisfaction" },
  { number: "Local", label: "Sparta Crew" }
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Why Sparta Trusts Our Soot Experts
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Soot removal is a delicate process. Smearing it can cause permanent damage. Trust our local experts to do the job right the first time.
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
