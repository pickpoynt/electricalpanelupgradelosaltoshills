import { Shield, Zap, Clock, Home, HardHat, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Surge Protection Specialists",
    description: "We focus specifically on surge protection, giving us deep expertise in SPD selection, installation techniques, and grounding requirements that general electricians may lack."
  },
  {
    icon: Shield,
    title: "Premium Protection Devices",
    description: "We install only top-rated surge protection devices from trusted manufacturers like Eaton, Siemens, and Square D—brands proven to protect when it matters most."
  },
  {
    icon: Home,
    title: "Whole Home Coverage",
    description: "Our installations protect every circuit in your home from a single panel-mounted device, safeguarding everything from your HVAC system to your smartphone chargers."
  },
  {
    icon: HardHat,
    title: "Licensed Master Electricians",
    description: "Our electricians hold Arkansas master electrician licenses and specialize in surge protection installation, ensuring code-compliant work every time."
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No surprises—we provide detailed written quotes before work begins. You'll know exactly what your surge protection investment costs upfront."
  },
  {
    icon: Clock,
    title: "Fast Installation",
    description: "Most whole-house surge protector installations are completed in just 1-2 hours. Protect your home today without major disruption to your schedule."
  }
];

const stats = [
  { number: "1000+", label: "Homes Protected" },
  { number: "100%", label: "Code Compliant" },
  { number: "Licensed", label: "Master Electricians" },
  { number: "Local", label: "Cave Springs" }
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Why Cave Springs Trusts Our Surge Protection Experts
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Combining electrical expertise with specialized surge protection knowledge to deliver installations that truly protect your home and electronics.
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
                <div className="w-12 h-12 rounded-lg bg-yellow-50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-yellow-600" />
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
              <div className="text-3xl md:text-4xl font-heading font-bold text-yellow-600 mb-2">
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
