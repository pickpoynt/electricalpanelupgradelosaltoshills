import { Shield, Fan, Clock, Droplets, Home, HardHat } from "lucide-react";

const reasons = [
  {
    icon: Fan,
    title: "Ventilation Specialists",
    description: "We focus exclusively on bathroom ventilation, giving us deep expertise in exhaust fan sizing, placement, and ductwork that general contractors simply don't have."
  },
  {
    icon: Droplets,
    title: "Humidity Experts",
    description: "We understand Northwest Arkansas's humid climate and install ventilation solutions specifically designed to combat the moisture challenges unique to this region."
  },
  {
    icon: Shield,
    title: "Licensed Electricians",
    description: "Our licensed electricians handle all wiring safely and to code, ensuring your exhaust fan installation meets Arkansas electrical requirements."
  },
  {
    icon: Home,
    title: "Proper Venting",
    description: "We always vent exhaust fans to the exterior—never into attics or soffits—preventing the hidden moisture damage that plagues many Arkansas homes."
  },
  {
    icon: HardHat,
    title: "Clean Installation",
    description: "We take pride in neat, professional work. No exposed wires, no messy ductwork, and we always clean up thoroughly when we're done."
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    description: "Moisture problems don't wait, and neither should you. We offer fast scheduling and often same-day installation for Cave Springs homeowners."
  }
];

const stats = [
  { number: "500+", label: "Fans Installed" },
  { number: "100%", label: "Vented Outside" },
  { number: "Licensed", label: "Electricians" },
  { number: "Local", label: "Cave Springs" }
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Why Cave Springs Trusts Our Ventilation Experts
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Combining electrical expertise with specialized ventilation knowledge to deliver bathroom exhaust fan installations that actually solve moisture problems.
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
