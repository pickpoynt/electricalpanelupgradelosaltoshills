import { Shield, MapPin, Clock, Zap, Waves, HardHat } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Dedicated Power Support",
    description: "Hot tubs require significant electrical capacity. We specialized in installing dedicated ranges and sub-panels that prevent your breakers from tripping."
  },
  {
    icon: Shield,
    title: "Safety GFCI Experts",
    description: "Protection is our priority. We use heavy-duty GFCI disconnects that are specifically rated for outdoor wet environments and high-amperage spa systems."
  },
  {
    icon: Waves,
    title: "All Spa Brands",
    description: "From luxury Bullfrog and Hot Spring spas to local swim spas, we are familiar with the specific electrical requirements of all major manufacturer brands."
  },
  {
    icon: MapPin,
    title: "Signal Mountain Local",
    description: "We live and work on the mountain. We are intimately familiar with the unique electrical challenges and permitting requirements of Signal Mountain and Walden, TN."
  },
  {
    icon: HardHat,
    title: "Code-Compliant Bonding",
    description: "Properly bonding all conductive metal around your spa is critical for preventing electrical shocks. Our installations exceed all NEC safety standards."
  },
  {
    icon: Clock,
    title: "Fast, Reliable Service",
    description: "Don't let your new hot tub sit cold. We offer prompt scheduling to get your electrical hookup completed so you can start enjoying your investment immediately."
  }
];

const stats = [
  { number: "220V", label: "Power Experts" },
  { number: "100%", label: "Safe Bonding" },
  { number: "Licensed", label: "Insured Pros" },
  { number: "Local", label: "Signal Mtn Team" }
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Why Signal Mountain Trusts Our Hot Tub Electricians
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Providing high-performance, safe, and professional electrical hookups for hot tubs and spas across Signal Mountain and the Tennessee valley.
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
                <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-cyan-600" />
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
              <div className="text-3xl md:text-4xl font-heading font-bold text-cyan-600 mb-2">
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
