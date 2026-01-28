import { DollarSign, Shield, Clock, Home, HardHat, Zap } from "lucide-react";

const reasons = [
  {
    icon: DollarSign,
    title: "Genuinely Affordable Pricing",
    description: "We offer honest, competitive pricing without hidden fees. Our rates are significantly lower than typical electrical contractors while maintaining the same quality standards and licensing requirements."
  },
  {
    icon: Shield,
    title: "Licensed & Insured Professionals",
    description: "All our electricians are fully licensed North Carolina journeymen and masters with proper insurance coverage. You get affordable prices with professional-grade workmanship and legal protection."
  },
  {
    icon: Home,
    title: "Local Brevard Expertise",
    description: "We understand Brevard's older housing stock, unique electrical challenges, and local building codes. Our familiarity with the area means faster, more efficient service at lower overhead costs passed on to you."
  },
  {
    icon: HardHat,
    title: "Quality Work Guarantee",
    description: "Affordable doesn't mean substandard. We stand behind our work with warranties and guarantees. If something isn't right, we'll fix it—because our reputation in Brevard matters more than a quick profit."
  },
  {
    icon: Zap,
    title: "Transparent Upfront Quotes",
    description: "No surprise charges or hourly rate guessing games. We provide detailed written estimates before any work begins, so you know exactly what you're paying for with no hidden costs."
  },
  {
    icon: Clock,
    title: "Fast Response Times",
    description: "Being local and lean allows us to respond quickly to your electrical needs. Less overhead means we can be more agile and available when you need electrical work done promptly."
  }
];

const stats = [
  { number: "500+", label: "Jobs Completed" },
  { number: "100%", label: "Licensed & Insured" },
  { number: "Licensed", label: "NC Electricians" },
  { number: "Local", label: "Brevard" }
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Why Brevard Chooses Our Affordable Electrical Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Combining genuine affordability with professional electrical expertise to deliver quality work at prices Brevard families can actually afford.
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
                <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-green-600" />
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
              <div className="text-3xl md:text-4xl font-heading font-bold text-green-600 mb-2">
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
