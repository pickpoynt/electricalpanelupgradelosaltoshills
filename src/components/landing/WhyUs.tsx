import { Shield, Smartphone, Clock, Zap, Cpu, HardHat } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Licensed Home Automation",
    description: "We are licensed electricians who specialize in high-voltage smart home integration, ensuring your switches are safe and code-compliant."
  },
  {
    icon: Smartphone,
    title: "Seamless Integration",
    description: "We don't just install switches; we ensure they are perfectly synced with your apps, voice assistants, and existing smart home ecosystem."
  },
  {
    icon: Zap,
    title: "Historic Retrofit Pros",
    description: "Signal Mountain's historic homes are our specialty. We have the expertise to install modern smart tech in older wiring environments."
  },
  {
    icon: Cpu,
    title: "Advanced Logic Setup",
    description: "Our team helps you program advanced lighting scenes and automation routines that make your home respond intelligently to your life."
  },
  {
    icon: HardHat,
    title: "Professional Standards",
    description: "Every installation is performed to the highest professional standards, with meticulous attention to detail and aesthetic finish."
  },
  {
    icon: Clock,
    title: "Prompt Local Service",
    description: "Living on Signal Mountain means we can provide fast, reliable service and support for all your home automation needs right when you need it."
  }
];

const stats = [
  { number: "App", label: "Controlled" },
  { number: "100%", label: "Voice Sync" },
  { number: "Licensed", label: "Insured Pros" },
  { number: "Local", label: "Signal Mtn Team" }
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Why Signal Mountain Trusts Our Automation Experts
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Combining deep electrical expertise with modern technology to create the ultimate intelligent living environment for Signal Mountain residents.
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
                <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-indigo-600" />
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
              <div className="text-3xl md:text-4xl font-heading font-bold text-indigo-600 mb-2">
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
