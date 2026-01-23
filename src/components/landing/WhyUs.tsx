import { Clock, Shield, Award, Users, Droplets, Zap } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "30-Minute Response Time",
    description: "We understand toilet overflow emergencies can't wait. Our Timnath team arrives within 30 minutes, ready to contain the damage and begin cleanup immediately."
  },
  {
    icon: Shield,
    title: "Sewage Cleanup Certified",
    description: "Our technicians are certified in Category 3 water (sewage) cleanup with specialized training in biohazard handling and EPA-compliant sanitization protocols."
  },
  {
    icon: Droplets,
    title: "Advanced Moisture Detection",
    description: "We use thermal imaging cameras and professional moisture meters to find hidden water damage in walls, subfloors, and structural cavities that visual inspection misses."
  },
  {
    icon: Award,
    title: "Licensed & Insured in Colorado",
    description: "Fully licensed, bonded, and insured for all restoration work in Larimer County. We work directly with insurance companies to streamline your claim process."
  },
  {
    icon: Users,
    title: "Timnath Local Experts",
    description: "As a locally-owned Timnath business, we understand Colorado's unique challenges—from hard water issues to rapid temperature changes that affect plumbing systems."
  },
  {
    icon: Zap,
    title: "Complete Restoration",
    description: "We don't just extract water—we restore your bathroom completely. From subfloor replacement to final paint and fixtures, we handle everything under one roof."
  }
];

const stats = [
  { number: "500+", label: "Overflow Emergencies Resolved" },
  { number: "30min", label: "Average Response Time" },
  { number: "100%", label: "Sanitization Guarantee" },
  { number: "24/7", label: "Emergency Availability" }
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Why Choose Timnath Overflow Pros?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            When sewage emergencies strike, you need a team that responds fast, works clean, and restores completely. Here's why Timnath homeowners trust us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-card border border-border rounded-lg p-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-gradient-copper mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
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
